import re
import os
import sys
import json
import time
import tqdm
import zipfile
import logging
import requests
import win32api
from AutoXuexiCore import XuexiProcessor
os.chdir(os.path.split(os.path.realpath(__file__))[0])
logger=logging.getLogger("main")
logger.setLevel(logging.INFO)
formatter=logging.Formatter(fmt="%(asctime)s-%(levelname)s-%(message)s",datefmt="%Y-%m-%d %H:%M:%S")
file_handler=logging.FileHandler(filename="main.log",mode="w",encoding="utf-8")
file_handler.setFormatter(formatter)
stream_handler=logging.StreamHandler(stream=sys.stdout)
stream_handler.setFormatter(formatter)
logger.addHandler(file_handler)
logger.addHandler(stream_handler)
def load_config(conf_name:str = "config.json"):
    default_conf={
        "enable_daily_test":True,
        "enable_weekly_test":True,
        "enable_special_test":True,
        "qr_login":True,
        "is_debug":False,
        "edge_version":"88.0.705.50",
        "timeout":600,
        "record_days":3,
        "browser_type":"edge_chromium",
        "allow_upload":True,
        "browser_exec":"",
        "driver_exec":""}
    if os.path.exists(conf_name)==True:
        with open(file=conf_name,mode="r",encoding="utf-8") as conf_reader:
            conf=json.loads(conf_reader.read())
        for key in ["enable_daily_test","enable_special_test","enable_weekly_test",
                    "qr_login","is_debug","timeout","record_days","browser_type","allow_upload"]:
            if key in conf.keys()==False:
                with open(file=conf_name,mode="w",encoding="utf-8") as conf_creater:
                    conf_creater.write(json.dumps(obj=default_conf,sort_keys=True,indent=4))
                logger.error("加载配置文件失败，已恢复至默认设置")
                load_config()
        else:
            logger.info("加载配置文件成功")
            return conf
    else:
        with open(file=conf_name,mode="w",encoding="utf-8") as conf_creater:
            conf_creater.write(json.dumps(obj=default_conf,sort_keys=True,indent=4))
        logger.error("配置文件不存在，已创建默认配置")
        load_config()
def get_edge_driver(version="87.0.664.52"):
    if os.path.exists("edge_driver.zip")==False:
        logger.debug("正在从网络获取文件")
        down_url="https://msedgedriver.azureedge.net/"+version+"/edgedriver_win64.zip"
        with open(file="edge_driver.zip",mode="wb") as zip_writer:
            try:
                down_re=requests.get(down_url,stream=True)
            except requests.exceptions.ConnectionError:
                logger.error("下载失败，你可以手动打开 %s 来下载文件并以 edge_driver.zip 的名字保存至程序文件夹下，重启程序后将自动获取压缩文件内的驱动程序" %down_url)
            else:
                size=float(down_re.headers["Content-Length"])/1024 #KB
                for data in tqdm.tqdm(down_re.iter_content(1024),total=size,unit="KiB",desc="下载进度",unit_scale=True):
                    zip_writer.write(data)
    else:
        logger.info("找到已下载的文件，正在尝试解压缩")
    with zipfile.ZipFile(file="edge_driver.zip",mode="r") as zip_reader:
        zip_reader.extract("msedgedriver.exe")
    os.remove("edge_driver.zip")
    logger.info("正在验证文件版本")
    info=win32api.GetFileVersionInfo("msedgedriver.exe",os.sep)
    ms=info["FileVersionMS"]
    ls=info["FileVersionLS"]
    version_current = '%d.%d.%d.%d' % (win32api.HIWORD(ms), win32api.LOWORD(ms), win32api.HIWORD(ls),win32api.LOWORD(ls))
    if version_current !=version:
        logger.error("驱动版本不符合要求，正在重新下载")
        get_edge_driver(version=version)
    else:
        logger.info("驱动版本符合要求")
def get_edge_version():
    for dir in os.listdir("C:\\Program Files (x86)\\Microsoft\\Edge\\Application"):
        re_res=re.search(r"^\d*.\d*.\d*.\d*$",dir)
        if re_res!=None:
            return re_res.group()
if __name__=="__main__":
    conf=load_config()
    enable_daily_test=bool(conf["enable_daily_test"])
    enable_special_test=bool(conf["enable_special_test"])
    enable_weekly_test=bool(conf["enable_weekly_test"])
    qr_login=bool(conf["qr_login"])
    is_debug=bool(conf["is_debug"])
    edge_version=str(conf["edge_version"])
    timeout=int(conf["timeout"])
    record_days=int(conf["record_days"])
    browser_type=str(conf["browser_type"])
    browser_exec=str(conf["browser_exec"])
    driver_exec=str(conf["driver_exec"])
    allow_upload=bool(conf["allow_upload"])
    if browser_type=="edge_chromium":
        if os.path.exists("msedgedriver.exe")==False:
            logger.info("未发现Edge浏览器驱动，正在下载浏览器驱动")
            logger.debug("正在下载版本为 %s 的驱动" %edge_version)
            get_edge_driver(version=edge_version)
            logger.info("Edge浏览器驱动下载完成")
        elif get_edge_version()!=edge_version:
            logger.info("正在更新Edge浏览器驱动")
            logger.debug("正在下载版本为 %s 的驱动" %edge_version)
            get_edge_driver(version=edge_version)
            logger.info("Edge浏览器驱动下载完成")
        else:
            logger.info("Edge驱动版本正常")
    logger.info("正在开始处理项目")
    start_time=time.time()
    processor=XuexiProcessor(is_debug=is_debug,
                            timeout=timeout,record_days=record_days,browser_type=browser_type,
                            qr_login=qr_login,enable_special_test=enable_special_test,
                            enable_weekly_test=enable_weekly_test,enable_daily_test=enable_daily_test,
                            browser_exec=browser_exec,driver_exec=driver_exec)
    processor.start_process()
    processor.close_driver()
    mins,secs=divmod(int(time.time()-start_time),60)
    hours,mins=divmod(mins,60)
    logger.info("执行完成，共计用时 {:0>2d}:{:0>2d}:{:0>2d}".format(hours,mins,secs))
    current_conf={
        "enable_daily_test":enable_daily_test,
        "enable_special_test":enable_special_test,
        "enable_weekly_test":enable_weekly_test,
        "is_debug":is_debug,
        "qr_login":qr_login,
        "timeout":timeout,
        "record_days":record_days,
        "browser_type":browser_type,
        "allow_upload":allow_upload,
        "browser_exec":browser_exec,
        "driver_exec":driver_exec}
    if current_conf["browser_type"]=="edge_chromium":
        current_conf["edge_version"]=edge_version
    if current_conf!=conf:
        logger.debug("当前配置已更改，正在更新配置到文件")
        with open(file="config.json",mode="w",encoding="utf-8") as conf_updater:
            conf_updater.write(json.dumps(obj=current_conf,indent=4,sort_keys=True))
    if processor.is_answer_in_db_updated==True and allow_upload==True:
        logger.info("正在更新答案数据库到网络")
        processor.upload_database()
    