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
        "at_top": True,
        "auto_start": False,
        "close_button_style": "QPushButton{background:#FFE3ED;border-radius:5px;border:none;}QPushButton:hover{background:#EC524B;}",
        "conf_button_color": "darkgreen",
        "conf_button_icon": "mdi.cog-outline",
        "conf_button_style": "QPushButton{background:#9BE3DE;border:none;border-radius:5px;font-size:20px;font-family:DengXian;}QPushButton:hover{background:#9AD3BC;}",
        "icon": "mdi.notebook-edit-outline",
        "log_panel_style": "QPlainTextEdit{font-family:Microsoft YaHei;background:#F3EAC2;border:none;border-radius:5px;}QScrollBar:vertical,QScrollBar::handle:vertical{background:#F3EAC2;border:none;border-radius:8px;width:16px;}QScrollBar::handle:vertical:hover{background:#F5B461;}QScrollBar::add-page:vertical,QScrollBar::sub-page:vertical{background:#FFFDF9;border:none;border-radius:8px;width:16px;}QScrollBar::down-arrow:vertical,QScrollBar::up-arrow:vertical{background:#F5B461;border:none;border-radius:8px;width:16px;height:16px;}QScrollBar::sub-line:vertical,QScrollBar::add-line:vertical{background:transparent;border:none;}",
        "maximum_button_style": "QPushButton{background:#FFFDF9;border-radius:5px;border:none;}QPushButton:hover{background:#F5B461;}",
        "merge_db_color": "darkgreen",
        "merge_db_icon": "mdi.merge",
        "merge_db_style": "QPushButton{background:#9BE3DE;border:none;border-radius:5px;font-size:20px;font-family:DengXian;}QPushButton:hover{background:#9AD3BC;}",
        "minimum_button_style": "QPushButton{background:#BEEBE9;border-radius:5px;border:none;}QPushButton:hover{background:#F3EAC2;}",
        "opacity": 0.9,
        "qr_style": "QLabel{color:#F3EAC2;font-size:20px;font-family:DengXian;border:none;border-radius:5px;}",
        "qr_title_style": "QLabel{color:#F3EAC2;font-size:20px;font-family:DengXian;border:none;border-radius:5px;}",
        "settings": {
            "button": "QPushButton{background:#FFFDF9;border-radius:5px;border:none;}QPushButton:hover{background:#F5B461;}",
            "check_box": "QCheckBox::indicator{width:10px;height:10px;border:none;border-radius:5px;background:#9BE3DE;}QCheckBox::indicator:unchecked{background:#BEEBE9;}QCheckBox::indicator:unchecked:hover{background:#9AD3BC;}QCheckBox::indicator:checked{background:#9AD3BC;}",
            "label": "QLabel{background:transparent;border:none;}",
            "list": "QListWidget{border:none;border-radius:5px;background:transparent;}QPushButton{background:#FFFDF9;border-radius:5px;border:none;}QPushButton:hover{background:#F5B461;}QLineEdit{border:none;background:transparent;border-radius:5px;}QScrollBar:vertical,QScrollBar::handle:vertical{background:#F3EAC2;border:none;border-radius:8px;width:16px;}QScrollBar::handle:vertical:hover{background:#F5B461;}QScrollBar::add-page:vertical,QScrollBar::sub-page:vertical{background:#FFFDF9;border:none;border-radius:8px;width:16px;}QScrollBar::down-arrow:vertical,QScrollBar::up-arrow:vertical{background:#F5B461;border:none;border-radius:8px;width:16px;height:16px;}QScrollBar::sub-line:vertical,QScrollBar::add-line:vertical{background:transparent;border:none;}",
            "slider": "QSlider{border:none;border-radius:5px;}QSlider::add-page:horizontal{background:#FFFDF9;}QSlider::sub-page:horizontal{background:qlineargradient(spread:pad,x1:0,y1:0,x2:1,y2:0,stop:0 #BEEBE9,stop:1 #9BE3DE);border:none;border-radius:5px;}QSlider::handle:horizontal{width:10px;height:10px;border:none;border-radius:5px;background:#FFFDF9;}QSlider::handle:horizontal:hover{background:#9AD3BC;}",
            "tab": "QTabWidget:pane{border-top: 2px solid #F5B461;border-radius:5px;}QTabWidget::tab-bar{left:15px;border:none;border-radius:5px;}QTabBar::tab{background:#FFFDF9;border-radius:5px;border:none;height:20px;}QTabBar::tab:hover{background:#F5B461;}QTabBar::tab:selected{background:#F3EAC2;}",
            "text_edit": "QLineEdit{border-radius:5px;background:transparent;}"
        },
        "title_colors":[
            "#9BE3DE",
            "#BEEBE9",
            "#FFFDF9",
            "#FFE3ED",
            "#9AD3BC",
            "#F3EAC2",
            "#F5B461",
            "#Ec524B"
        ],
        "title_style":"QLabel{color:${color};background:transparent;border:none;border-radius:5px;font-size:75px;font-family:DengXian;}",
        "ui":"QWidget{background:#F3EAC2;border:none;border-radius:5px;}",
        "working_button":"mdi.stop-circle-outline",
        "start_button":"mdi.arrow-right-drop-circle-outline",
        "start_button_color":"#F5B461",
        "start_button_style":"QPushButton{background:#9BE3DE;border:none;border-radius:5px;font-size:20px;font-family:DengXian;}QPushButton:hover{background:#9AD3BC;}"
    }
    default_conf={
        "enable_daily_test":True,
        "enable_gui":False,
        "enable_weekly_test":True,
        "enable_special_test":True,
        "qr_login":True,
        "is_debug":False,
        "timeout":600,
        "record_days":3,
        "browser_type":"firefox",
        "allow_upload":False,
        "browser_exec":"",
        "driver_exec":"",
        "lang":"zh-cn",
        "proxy_bat":"",
        "ui":default_ui_conf}
    if os.path.exists(conf_name)==True:
        with open(file=conf_name,mode="r",encoding="utf-8") as conf_reader:
            conf=json.loads(conf_reader.read())
        for key in ["enable_daily_test","enable_special_test","enable_weekly_test",
                    "qr_login","is_debug","timeout","record_days","browser_type","allow_upload",
                    "browser_exec","driver_exec","enable_gui","lang"]:
            if key in conf.keys() ==False:
                with open(file=conf_name,mode="w",encoding="utf-8") as conf_creater:
                    conf_creater.write(json.dumps(obj=default_conf,sort_keys=True,indent=4))
                logger.error("加载配置文件失败，已恢复至默认设置")
                return default_conf
        logger.info("加载配置文件成功")
        return conf
    else:
        with open(file=conf_name,mode="w",encoding="utf-8") as conf_creater:
            conf_creater.write(json.dumps(obj=default_conf,sort_keys=True,indent=4))
        logger.error("配置文件不存在，已创建默认配置")
        return default_conf
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
    proxy_bat=str(conf["proxy_bat"])
    if enable_gui==False:
        logger.debug("已禁用图形界面")
        logger.info("正在开始处理项目")
        start_time=time.time()
        processor=XuexiProcessor(is_debug=is_debug,
                                timeout=timeout,record_days=record_days,browser_type=browser_type,
                                qr_login=qr_login,enable_special_test=enable_special_test,
                                enable_weekly_test=enable_weekly_test,enable_daily_test=enable_daily_test,
                                browser_exec=browser_exec,driver_exec=driver_exec,enable_gui=enable_gui,
                                proxy_bat=proxy_bat)
        processor.start_process()
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
            "driver_exec":driver_exec,
            "proxy_bat":proxy_bat}
        if current_conf["browser_type"]=="edge_chromium":
            current_conf["edge_version"]=edge_version
        if current_conf!=conf:
            logger.debug("当前配置已更改，正在更新配置到文件")
            with open(file="config.json",mode="w",encoding="utf-8") as conf_updater:
                conf_updater.write(json.dumps(obj=current_conf,indent=4,sort_keys=True))
        if processor.is_answer_in_db_updated==True and allow_upload==True:
            logger.info("正在更新答案数据库到网络")
            processor.upload_database()
        sys.exit(0)

    else:
        logger.debug("已启用图形界面")
        app=QApplication(sys.argv)
        gui=UI(ui_conf=ui_conf)
        gui.show()
        sys.exit(app.exec())