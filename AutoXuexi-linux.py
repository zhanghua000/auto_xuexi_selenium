#!/bin/env python3
import os
import sys
import json
import time
import logging
from GUI import UI
from PyQt6.QtWidgets import QApplication
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
    default_ui_conf={
        "auto_start": False,
        "close_button_style": "QPushButton{background:#68B0AB;border-radius:5px;border:none;}QPushButton:hover{background:#726A95;}",
        "icon": "mdi.notebook-edit-outline",
        "log_panel_style": "QPlainTextEdit{font-family:Microsoft YaHei}",
        "log_scroll_bar_style": "QScrollBar:vertical{color:#BBBBBB;border:none;border-radius:5px;width:10px;}QScrollBar::handle:vertical{color:#BCBCBC;border:none;border-radius:5px;width:15px;}QScrollBar::handle:vertical:hover{color:#BDBDBD;}QScrollBar::add-page:vertical{color:white;border:none;border-radius:5px;width:10px;}QScrollBar::sub-page:vertical{color:white;border:none;border-radius:5px;width:10px;}QScrollBar::down-arrow:vertical{color:#BABABA;border:none;border-radius:5px;width:10px;height:10px;}QScrollBar::up-arrow:vertical{color:#BABABA;border:none;border-radius:10px;width:5px;height:10px;}QScrollBar::sub-line:vertical{color:gray;border:none;border-radius:10px;width:10px;}QScrollBar::add-line:vertical{color:gray;border:none;border-radius:5px;width:10px;}",
        "maximum_button_style": "QPushButton{background:#8FC0A9;border-radius:5px;border:none;}QPushButton:hover{background:#709FB0;}",
        "minimum_button_style": "QPushButton{background:#C8D5B9;border-radius:5px;border:none;}QPushButton:hover{background:#A0C1B8;}",
        "opacity": 0.9,
        "qr_style": "QLabel{color:while;font-size:20px;font-family:DengXian;border:none;border-radius:5px;}",
        "qr_title_style": "QLabel{color:while;font-size:20px;font-family:DengXian;border:none;border-radius:5px;}",
        "start_button": "mdi.send-circle-outline",
        "start_button_color": "darkgreen",
        "start_button_style": "QPushButton{background:#FAF3DD;border:none;border-radius:5px;font-size:20px;font-family:DengXian;}QPushButton:hover{background:#F4EBC1;}",
        "title_color": "red",
        "title_style": "QLabel{color:white;font-size:40px;font-family:DengXian;border:none;border-radius:5px;background:transparent;}",
        "ui": "QWidget{background:white;}",
        "working_button": "mdi.record-circle-outline"
    }
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
        "driver_exec":"",
        "enable_gui":False,
        "ui":default_ui_conf}
    if os.path.exists(conf_name)==True:
        with open(file=conf_name,mode="r",encoding="utf-8") as conf_reader:
            conf=json.loads(conf_reader.read())
        for key in ["enable_daily_test","enable_special_test","enable_weekly_test",
                    "qr_login","is_debug","timeout","record_days","browser_type","allow_upload",
                    "browser_exec","driver_exec","enable_gui","lang"]:
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
def init_function(enable_gui=False,signal = None,scan_signal = None):
    logger.info("正在开始处理项目")
    start_time=time.time()
    processor=XuexiProcessor(is_debug=is_debug,
                            timeout=timeout,record_days=record_days,browser_type=browser_type,
                            qr_login=qr_login,enable_special_test=enable_special_test,
                            enable_weekly_test=enable_weekly_test,enable_daily_test=enable_daily_test,
                            browser_exec=browser_exec,driver_exec=driver_exec,enable_gui=enable_gui,
                            gui_show_pic_signal=signal,scan_signal=scan_signal)
    processor.start_process()
    processor.close_driver()
    mins,secs=divmod(int(time.time()-start_time),60)
    hours,mins=divmod(mins,60)
    logger.info("执行完成，共计用时 {:0>2d}:{:0>2d}:{:0>2d}".format(hours,mins,secs))
    current_conf={
        "enable_daily_test":enable_daily_test,
        "enable_special_test":enable_special_test,
        "enable_weekly_test":enable_weekly_test,
        "enable_gui":enable_gui,
        "is_debug":is_debug,
        "lang":lang,
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
    enable_gui=bool(conf["enable_gui"])
    ui_conf=dict(conf["ui"])
    lang=str(conf["lang"])
    if enable_gui==False:
        logger.debug("已禁用图形界面")
        init_function()
    else:
        logger.debug("已启用图形界面")
        app=QApplication(sys.argv)
        gui=UI(ui_conf=ui_conf,init_func=init_function)
        gui.show()
        sys.exit(app.exec())