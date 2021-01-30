import os
import time
import json
import sqlite3
import random
import logging
import qtawesome
from PyQt6 import QtGui
from PyQt6.QtGui import QIntValidator, QMouseEvent, QPixmap
from PyQt6.QtCore import QObject, QThread, Qt, pyqtSignal
from PyQt6.QtWidgets import QCheckBox, QDialog, QFileDialog, QHBoxLayout, QListWidget, QTabWidget, QWidget, QGridLayout, QVBoxLayout, QPushButton, QLabel, QPlainTextEdit, QLineEdit, QSlider
os.chdir(os.path.split(os.path.realpath(__file__))[0])
class CustomListWidget(QListWidget):
    def __init__(self):
        super(CustomListWidget,self).__init__()
        self.save_item=None
        self.is_buttons_shown=False
        self.add_button=QPushButton("添加")
        self.add_button.setParent(self)
        self.add_button.setVisible(False)
        self.remove_button=QPushButton("删除")
        self.remove_button.setParent(self)
        self.remove_button.setVisible(False)
        self.input_edit=QLineEdit()
        self.input_edit.setParent(self)
        self.input_edit.setVisible(False)
        self.input_edit.setFixedSize(75,25)
        self.ok_button=QPushButton("确定")
        self.ok_button.setParent(self)
        self.ok_button.setVisible(False)
        self.add_button.clicked.connect(self.show_add_interface)
        self.remove_button.clicked.connect(self.remove_current_item)
        self.ok_button.clicked.connect(self.add_item_to_list)       
        self.itemClicked.connect(self.show_menu_buttons) 

    def show_menu_buttons(self,item):
        if self.is_buttons_shown==False:
            self.is_buttons_shown=True
            self.add_button.setVisible(True)
            self.add_button.move(0,0)
            self.remove_button.setVisible(True)
            self.remove_button.move(75,0)
        elif self.save_item==item:
            self.is_buttons_shown=False
            self.add_button.setVisible(False)
            self.remove_button.setVisible(False)
            if self.input_edit.isVisible()==True:
                self.input_edit.setVisible(False)
            if self.ok_button.isVisible()==True:
                self.ok_button.setVisible(False)
        self.save_item=item
    def show_add_interface(self):
        if self.input_edit.isVisible()==False:
            self.input_edit.setVisible(True)
        if self.ok_button.isVisible()==False:
            self.ok_button.setVisible(True)
        self.input_edit.move(0,25)
        self.ok_button.move(75,25)
    def remove_current_item(self):
        if self.currentItem()!=None and self.count()>1:
            self.takeItem(self.row(self.currentItem()))
    def add_item_to_list(self):
        if self.input_edit.displayText()!="" and self.findItems(self.input_edit.displayText(),Qt.MatchFlags.MatchExactly)==[]:
            self.addItem(self.input_edit.displayText())
        self.input_edit.setVisible(False)
        self.ok_button.setVisible(False)
        self.add_button.setVisible(False)
        self.remove_button.setVisible(False)
        self.is_buttons_shown=False
class FixedSlider(QSlider):
    def __init__(self):
        super(FixedSlider,self).__init__()
        self.setTickInterval(1)
        self.value_label=QLabel(self)    
        self.value_label.setFixedSize(40,20) 
        self.value_label.setAutoFillBackground(True)
        self.value_label.setStyleSheet("QLabel{background:transparent;font:8px}")
        self.value_label.setAlignment(Qt.Alignment.AlignCenter)
        self.value_label.setVisible(False)
        self.value_label.move(0,-5)
    def mousePressEvent(self,event:QMouseEvent):
        super(FixedSlider,self).mousePressEvent(event)
        if self.value_label.isVisible()==False:
            self.value_label.setVisible(True)
            self.value_label.setText(str(self.value()/10))
    def mouseMoveEvent(self,event:QMouseEvent):
        super(FixedSlider,self).mouseMoveEvent(event)
        self.value_label.setText(str(self.value()/10))
        self.value_label.move(int((self.width()-self.value_label.width())*self.value()/(self.maximum()-self.minimum())),-5)
    def mouseReleaseEvent(self,event:QMouseEvent):
        super(FixedSlider,self).mouseReleaseEvent(event)
        if self.value_label.isVisible()==True:
            self.value_label.setVisible(False)
        
class ErrorMsgBox(QDialog):
    def __init__(self,msg:str="",parent=None):
        super(QDialog,self).__init__()
        self.setWindowTitle("错误")
        self.setWindowFlag(Qt.WindowFlags.WindowStaysOnTopHint)
        self.setWindowModality(Qt.WindowModality.WindowModal)
        layout=QGridLayout()
        msg_label=QLabel(msg)
        button=QPushButton("关闭(&C)")
        button.clicked.connect(self.close)
        #layout.addWidget(qtawesome.IconWidget("mdi.close-circle",color="red"),0,0)
        layout.addWidget(msg_label,0,1)
        layout.addWidget(button,1,2)
        self.setLayout(layout)
class NormalMsgBox(QDialog):
    def __init__(self,msg:str="",parent=None):
        super(QDialog,self).__init__()
        self.setWindowTitle("信息")
        self.setWindowFlag(Qt.WindowFlags.WindowStaysOnTopHint)
        self.setWindowModality(Qt.WindowModality.WindowModal)
        layout=QGridLayout()
        msg_label=QLabel(msg)
        button=QPushButton("关闭(&C)")
        button.clicked.connect(self.close)
        #layout.addWidget(qtawesome.IconWidget("mdi.information",color="green"),0,0)
        layout.addWidget(msg_label,0,1)
        layout.addWidget(button,1,2)
        self.setLayout(layout)
class SettingWindow(QDialog):
    def __init__(self,parent:QWidget):
        super(QDialog,self).__init__()
        with open(file="config.json",mode="r",encoding="utf-8") as conf_reader:
            conf=json.loads(conf_reader.read())
        self.setParent(parent)
        self.setWindowTitle("设置")
        self.setWindowOpacity(conf["ui"]["opacity"])
        self.setAttribute(Qt.WidgetAttribute.WA_TranslucentBackground)
        self.setWindowFlag(Qt.WindowFlags.FramelessWindowHint)
        self.setWindowModality(Qt.WindowModality.WindowModal)
        self.resize(parent.size().width(),parent.size().height()-80)
        self.move(0,80)
        dialog_layout=QGridLayout()
        self.setLayout(dialog_layout)
        settings=conf["ui"]["settings"]
        tab_main=QWidget()
        tab_theme=QWidget()
        tab=QTabWidget()
        self.sure_layout=QHBoxLayout()
        ok_button=QPushButton("确认(&O)")
        ok_button.setStyleSheet(settings["button"])
        cancel_button=QPushButton("取消(&C)")
        cancel_button.setStyleSheet(settings["button"])
        self.sure_layout.addWidget(ok_button)
        self.sure_layout.addWidget(cancel_button)
        tab.addTab(tab_main,"主要设置")
        tab.addTab(tab_theme,"外观")
        tab.setStyleSheet(settings["tab"])
        tab_main_layout=QGridLayout()
        tab_theme_layout=QGridLayout()
        self.allow_upload=QCheckBox("自动上传数据库")
        self.allow_upload.setChecked(conf["allow_upload"])
        self.allow_upload.setStyleSheet(settings["check_box"])
        tab_main_layout.addWidget(self.allow_upload,0,0)
        browser_exec=QHBoxLayout()
        browser_exec_label=QLabel("浏览器可执行程序路径：")
        browser_exec_label.setStyleSheet(settings["label"])
        self.browser_exec_edit=QLineEdit()
        self.browser_exec_edit.setText(conf["browser_exec"])
        self.browser_exec_edit.setStyleSheet(settings["text_edit"])
        browser_exec.addWidget(browser_exec_label)
        browser_exec.addWidget(self.browser_exec_edit)
        tab_main_layout.addLayout(browser_exec,1,0)
        browser_type=QHBoxLayout()
        browser_type_label=QLabel("浏览器类型：")
        browser_type_label.setStyleSheet(settings["label"])
        self.browser_type_edit=QLineEdit()
        self.browser_type_edit.setText(conf["browser_type"])
        self.browser_type_edit.setStyleSheet(settings["text_edit"])
        browser_type.addWidget(browser_type_label)
        browser_type.addWidget(self.browser_type_edit)
        tab_main_layout.addLayout(browser_type,2,0)
        driver_exec=QHBoxLayout()
        driver_exec_label=QLabel("浏览器驱动执行位置：")
        driver_exec_label.setStyleSheet(settings["label"])
        self.driver_exec_edit=QLineEdit()
        self.driver_exec_edit.setText(conf["driver_exec"])
        self.driver_exec_edit.setStyleSheet(settings["text_edit"])
        driver_exec.addWidget(driver_exec_label)
        driver_exec.addWidget(self.driver_exec_edit)
        tab_main_layout.addLayout(driver_exec,3,0)
        if conf["browser_type"]=="edge_chromium":
            edge_version=QHBoxLayout()
            edge_version_label=QLabel("Edge浏览器版本：")
            edge_version_label.setStyleSheet(settings["label"])
            self.edge_version_edit=QLineEdit()
            self.edge_version_edit.setText(conf["edge_version"])
            self.edge_version_edit.setStyleSheet(settings["text_edit"])
            edge_version.addWidget(edge_version_label)
            edge_version.addWidget(self.edge_version_edit)
            tab_main_layout.addLayout(edge_version,4,0)
        self.enable_daily_test=QCheckBox("启用每日测验")
        self.enable_daily_test.setChecked(conf["enable_daily_test"])
        self.enable_daily_test.setStyleSheet(settings["check_box"])
        tab_main_layout.addWidget(self.enable_daily_test,0,1)
        self.enable_gui=QCheckBox("启用图形界面")
        self.enable_gui.setChecked(conf["enable_gui"])
        self.enable_gui.setStyleSheet(settings["check_box"])
        tab_main_layout.addWidget(self.enable_gui,1,1)
        self.enable_special_test=QCheckBox("启用专项测验")
        self.enable_special_test.setChecked(conf["enable_special_test"])
        self.enable_special_test.setStyleSheet(settings["check_box"])
        tab_main_layout.addWidget(self.enable_special_test,2,1)
        self.enable_weekly_test=QCheckBox("启用每周测验")
        self.enable_weekly_test.setChecked(conf["enable_weekly_test"])
        self.enable_weekly_test.setStyleSheet(settings["check_box"])
        tab_main_layout.addWidget(self.enable_weekly_test,3,1)
        self.is_debug=QCheckBox("启用调试模式")
        self.is_debug.setChecked(conf["is_debug"])
        self.is_debug.setStyleSheet(settings["check_box"])
        tab_main_layout.addWidget(self.is_debug,4,1)
        lang=QHBoxLayout()
        # 有翻译系统后把文本框换成下拉框
        lang_label=QLabel("语言：")
        lang_label.setStyleSheet(settings["label"])
        self.lang_edit=QLineEdit()
        self.lang_edit.setText(conf["lang"])
        self.lang_edit.setStyleSheet(settings["text_edit"])
        lang.addWidget(lang_label)
        lang.addWidget(self.lang_edit)
        tab_main_layout.addLayout(lang,0,2)
        self.qr_login=QCheckBox("使用二维码登陆")
        self.qr_login.setChecked(conf["qr_login"])
        self.qr_login.setStyleSheet(settings["check_box"])
        tab_main_layout.addWidget(self.qr_login,1,2)
        record_days=QHBoxLayout()
        record_days_label=QLabel("阅读记录保存天数：")
        record_days_label.setStyleSheet(settings["label"])
        self.record_days_edit=QLineEdit()
        self.record_days_edit.setText(str(conf["record_days"]))
        self.record_days_edit.setValidator(QIntValidator())
        self.record_days_edit.setStyleSheet(settings["text_edit"])
        record_days.addWidget(record_days_label)
        record_days.addWidget(self.record_days_edit)
        tab_main_layout.addLayout(record_days,2,2)
        timeout=QHBoxLayout()
        timeout_label=QLabel("刷分超时（秒）：")
        timeout_label.setStyleSheet(settings["label"])
        self.timeout_edit=QLineEdit()
        self.timeout_edit.setText(str(conf["timeout"]))
        self.timeout_edit.setValidator(QIntValidator())
        self.timeout_edit.setStyleSheet(settings["text_edit"])
        timeout.addWidget(timeout_label)
        timeout.addWidget(self.timeout_edit)
        tab_main_layout.addLayout(timeout,3,2)
        self.ui_at_top=QCheckBox("窗口置顶")
        self.ui_at_top.setChecked(conf["ui"]["at_top"])
        self.ui_at_top.setStyleSheet(settings["check_box"])
        tab_main_layout.addWidget(self.ui_at_top,4,2)
        self.ui_auto_start=QCheckBox("自动开始")
        self.ui_auto_start.setChecked(conf["ui"]["auto_start"])
        self.ui_auto_start.setStyleSheet(settings["check_box"])
        tab_main_layout.addWidget(self.ui_auto_start,1,3)
        theme_opacity=QHBoxLayout()
        theme_opacity_label=QLabel("窗口透明度：")
        theme_opacity_label.setStyleSheet(settings["label"])
        self.theme_opacity_slider=FixedSlider()
        self.theme_opacity_slider.setOrientation(Qt.Orientations.Horizontal)
        self.theme_opacity_slider.setMinimum(0)
        self.theme_opacity_slider.setMaximum(10)
        self.theme_opacity_slider.setValue(int(conf["ui"]["opacity"]*10))
        self.theme_opacity_slider.setStyleSheet(settings["slider"])
        theme_opacity.addWidget(theme_opacity_label)
        theme_opacity.addWidget(self.theme_opacity_slider)
        tab_theme_layout.addLayout(theme_opacity,0,0)
        theme_close_button_style=QHBoxLayout()
        theme_close_button_style_label=QLabel("关闭按钮的QSS样式：")
        theme_close_button_style_label.setStyleSheet(settings["label"])
        self.theme_close_button_style_edit=QLineEdit()
        self.theme_close_button_style_edit.setText(conf["ui"]["close_button_style"])
        self.theme_close_button_style_edit.setStyleSheet(settings["text_edit"])
        theme_close_button_style.addWidget(theme_close_button_style_label)
        theme_close_button_style.addWidget(self.theme_close_button_style_edit)
        tab_theme_layout.addLayout(theme_close_button_style,1,0)
        theme_conf_button=QGridLayout()
        theme_conf_button_icon_label=QLabel("设置按钮的QtAwesome图标名：")
        theme_conf_button_icon_label.setStyleSheet(settings["label"])
        self.theme_conf_button_icon_edit=QLineEdit()
        self.theme_conf_button_icon_edit.setText(conf["ui"]["conf_button_icon"])
        self.theme_conf_button_icon_edit.setStyleSheet(settings["text_edit"])
        theme_conf_button_color_label=QLabel("设置按钮的颜色：")
        theme_conf_button_color_label.setStyleSheet(settings["label"])
        self.theme_conf_button_color_edit=QLineEdit()
        self.theme_conf_button_color_edit.setText(conf["ui"]["conf_button_color"])
        self.theme_conf_button_color_edit.setStyleSheet(settings["text_edit"])
        theme_conf_button_style_label=QLabel("设置按钮的QSS样式：")
        theme_conf_button_style_label.setStyleSheet(settings["label"])
        self.theme_conf_button_style_edit=QLineEdit()
        self.theme_conf_button_style_edit.setText(conf["ui"]["conf_button_style"])
        self.theme_conf_button_style_edit.setStyleSheet(settings["text_edit"])
        theme_conf_button.addWidget(theme_conf_button_icon_label,0,0)
        theme_conf_button.addWidget(self.theme_conf_button_icon_edit,0,1)
        theme_conf_button.addWidget(theme_conf_button_color_label,1,0)
        theme_conf_button.addWidget(self.theme_conf_button_color_edit,1,1)
        theme_conf_button.addWidget(theme_conf_button_style_label,2,0)
        theme_conf_button.addWidget(self.theme_conf_button_style_edit,2,1)
        tab_theme_layout.addLayout(theme_conf_button,2,0)
        theme_icon=QHBoxLayout()
        theme_icon_label=QLabel("程序图标的QtAwesome名称：")
        theme_icon_label.setStyleSheet(settings["label"])
        self.theme_icon_edit=QLineEdit()
        self.theme_icon_edit.setText(conf["ui"]["icon"])
        self.theme_icon_edit.setStyleSheet(settings["text_edit"])
        theme_icon.addWidget(theme_icon_label)
        theme_icon.addWidget(self.theme_icon_edit)
        tab_theme_layout.addLayout(theme_icon,3,0)
        theme_log_panel_style=QGridLayout()
        theme_log_panel_style_label=QLabel("日志框的QSS样式：")
        theme_log_panel_style_label.setStyleSheet(settings["label"])
        self.theme_log_panel_style_edit=QLineEdit()
        self.theme_log_panel_style_edit.setText(conf["ui"]["log_panel_style"])
        self.theme_log_panel_style_edit.setStyleSheet(settings["text_edit"])
        theme_log_scroll_bar_style_label=QLabel("日志框滚动条的QSS样式：")
        theme_log_scroll_bar_style_label.setStyleSheet(conf["ui"]["log_scroll_bar_style"])
        self.theme_log_scroll_bar_style_edit=QLineEdit()
        self.theme_log_scroll_bar_style_edit.setText(conf["ui"]["log_scroll_bar_style"])
        self.theme_log_scroll_bar_style_edit.setStyleSheet(settings["text_edit"])
        theme_log_panel_style.addWidget(theme_log_panel_style_label,0,0)
        theme_log_panel_style.addWidget(self.theme_log_panel_style_edit,0,1)
        theme_log_panel_style.addWidget(theme_log_scroll_bar_style_label,1,0)
        theme_log_panel_style.addWidget(self.theme_log_scroll_bar_style_edit,1,1)
        tab_theme_layout.addLayout(theme_log_panel_style,4,0)
        theme_maximum_button_style=QHBoxLayout()
        theme_maximum_button_style_label=QLabel("最大化/还原按钮的QSS样式：")
        theme_maximum_button_style_label.setStyleSheet(settings["label"])
        self.theme_maximum_button_style_edit=QLineEdit()
        self.theme_maximum_button_style_edit.setText(conf["ui"]["maximum_button_style"])
        self.theme_maximum_button_style_edit.setStyleSheet(settings["text_edit"])
        theme_maximum_button_style.addWidget(theme_maximum_button_style_label)
        theme_maximum_button_style.addWidget(self.theme_maximum_button_style_edit)
        tab_theme_layout.addLayout(theme_maximum_button_style,0,1)
        theme_minimum_button_style=QHBoxLayout()
        theme_minimum_button_style_label=QLabel("最小化按钮的QSS样式：")
        theme_minimum_button_style_label.setStyleSheet(settings["label"])
        self.theme_minimum_button_style_edit=QLineEdit()
        self.theme_minimum_button_style_edit.setText(conf["ui"]["minimum_button_style"])
        self.theme_minimum_button_style_edit.setStyleSheet(settings["label"])
        theme_minimum_button_style.addWidget(theme_minimum_button_style_label)
        theme_minimum_button_style.addWidget(self.theme_minimum_button_style_edit)
        tab_theme_layout.addLayout(theme_minimum_button_style,1,1)
        theme_qr_style=QGridLayout()
        theme_qr_style_label=QLabel("登陆界面内容的QSS样式：")
        theme_qr_style_label.setStyleSheet(settings["label"])
        self.theme_qr_style_edit=QLineEdit()
        self.theme_qr_style_edit.setText(conf["ui"]["qr_style"])
        self.theme_qr_style_edit.setStyleSheet(settings["text_edit"])
        theme_qr_title_style_label=QLabel("登陆界面标题的QSS样式：")
        theme_qr_title_style_label.setStyleSheet(settings["label"])
        self.theme_qr_title_style_edit=QLineEdit()
        self.theme_qr_title_style_edit.setText(conf["ui"]["qr_title_style"])
        self.theme_qr_title_style_edit.setStyleSheet(settings["text_edit"])
        theme_qr_style.addWidget(theme_qr_style_label,0,0)
        theme_qr_style.addWidget(self.theme_qr_style_edit,0,1)
        theme_qr_style.addWidget(theme_qr_title_style_label,1,0)
        theme_qr_style.addWidget(self.theme_qr_title_style_edit,1,1)
        tab_theme_layout.addLayout(theme_qr_style,2,1)
        theme_start_button=QGridLayout()
        theme_start_button_label=QLabel("开始按钮的QtAwesome名称：")
        theme_start_button_label.setStyleSheet(settings["label"])
        self.theme_start_button_edit=QLineEdit()
        self.theme_start_button_edit.setText(conf["ui"]["start_button"])
        self.theme_start_button_edit.setStyleSheet(settings["text_edit"])
        theme_start_button_color_label=QLabel("开始按钮的颜色：")
        theme_start_button_color_label.setStyleSheet(settings["label"])
        self.theme_start_button_color_edit=QLineEdit()
        self.theme_start_button_color_edit.setText(conf["ui"]["start_button_color"])
        self.theme_start_button_color_edit.setStyleSheet(settings["text_edit"])
        theme_start_button_style_label=QLabel("开始按钮的QSS样式：")
        theme_start_button_style_label.setStyleSheet(settings["label"])
        self.theme_start_button_style_edit=QLineEdit()
        self.theme_start_button_style_edit.setText(conf["ui"]["start_button_style"])
        self.theme_start_button_style_edit.setStyleSheet(settings["text_edit"])
        theme_start_button.addWidget(theme_start_button_label,0,0)
        theme_start_button.addWidget(self.theme_start_button_edit,0,1)
        theme_start_button.addWidget(theme_start_button_color_label,1,0)
        theme_start_button.addWidget(self.theme_start_button_color_edit,1,1)
        theme_start_button.addWidget(theme_start_button_style_label,2,0)
        theme_start_button.addWidget(self.theme_start_button_style_edit,2,1)
        tab_theme_layout.addLayout(theme_start_button,3,1)
        theme_title=QGridLayout()
        theme_title_colors_label=QLabel("标题可选的颜色：")
        theme_title_colors_label.setStyleSheet(settings["label"])
        self.theme_title_colors_table=CustomListWidget()
        self.theme_title_colors_table.addItems(conf["ui"]["title_colors"])
        self.theme_title_colors_table.setStyleSheet(settings["list"])
        theme_title_style_label=QLabel("标题的QSS样式：")
        theme_title_style_label.setStyleSheet(settings["label"])
        self.theme_title_style_edit=QLineEdit()
        self.theme_title_style_edit.setText(conf["ui"]["title_style"])
        self.theme_title_style_edit.setStyleSheet(settings["text_edit"])
        theme_title.addWidget(theme_title_colors_label,0,0)
        theme_title.addWidget(self.theme_title_colors_table,0,1)
        theme_title.addWidget(theme_title_style_label,1,0)
        theme_title.addWidget(self.theme_title_style_edit,1,1)
        tab_theme_layout.addLayout(theme_title,4,1)
        theme_ui=QHBoxLayout()
        theme_ui_label=QLabel("主界面的QSS样式：")
        theme_ui_label.setStyleSheet(settings["label"])
        self.theme_ui_edit=QLineEdit()
        self.theme_ui_edit.setText(conf["ui"]["ui"])
        self.theme_ui_edit.setStyleSheet(settings["text_edit"])
        theme_ui.addWidget(theme_ui_label)
        theme_ui.addWidget(self.theme_ui_edit)
        tab_theme_layout.addLayout(theme_ui,0,2)
        theme_working_button=QHBoxLayout()
        theme_working_button_label=QLabel("工作状态的按钮图标的QtAwesome名称：")
        theme_working_button_label.setStyleSheet(settings["label"])
        self.theme_working_button_edit=QLineEdit()
        self.theme_working_button_edit.setText(conf["ui"]["working_button"])
        self.theme_working_button_edit.setStyleSheet(settings["text_edit"])
        theme_working_button.addWidget(theme_working_button_label)
        theme_working_button.addWidget(self.theme_working_button_edit)
        tab_theme_layout.addLayout(theme_working_button,1,2)
        theme_merge_db=QGridLayout()
        theme_merge_db_icon_label=QLabel("导入数据库按钮图标的QtAwesome名称：")
        theme_merge_db_icon_label.setStyleSheet(settings["label"])
        self.theme_merge_db_icon_edit=QLineEdit()
        self.theme_merge_db_icon_edit.setText(conf["ui"]["merge_db_icon"])
        self.theme_merge_db_icon_edit.setStyleSheet(settings["text_edit"])
        theme_merge_db_color_label=QLabel("导入数据库按钮图标的颜色：")
        theme_merge_db_color_label.setStyleSheet(settings["label"])
        self.theme_merge_db_color_edit=QLineEdit()
        self.theme_merge_db_color_edit.setText(conf["ui"]["merge_db_color"])
        self.theme_merge_db_color_edit.setStyleSheet(settings["text_edit"])
        theme_merge_db_style_label=QLabel("导入数据库按钮的QSS样式：")
        theme_merge_db_style_label.setStyleSheet(settings["label"])
        self.theme_merge_db_style_edit=QLineEdit()
        self.theme_merge_db_style_edit.setText(conf["ui"]["merge_db_style"])
        self.theme_merge_db_style_edit.setStyleSheet(settings["text_edit"])
        theme_merge_db.addWidget(theme_merge_db_icon_label,0,0)
        theme_merge_db.addWidget(self.theme_merge_db_icon_edit,0,1)
        theme_merge_db.addWidget(theme_merge_db_color_label,1,0)
        theme_merge_db.addWidget(self.theme_merge_db_color_edit,1,1)
        theme_merge_db.addWidget(theme_merge_db_style_label,2,0)
        theme_merge_db.addWidget(self.theme_merge_db_style_edit,2,1)
        tab_theme_layout.addLayout(theme_merge_db,2,2)
        theme_settings=QGridLayout()
        theme_settings_check_box_label=QLabel("设置界面单选框的QSS样式：")
        theme_settings_check_box_label.setStyleSheet(settings["label"])
        self.theme_settings_check_box_edit=QLineEdit()
        self.theme_settings_check_box_edit.setText(conf["ui"]["settings"]["check_box"])
        self.theme_settings_check_box_edit.setStyleSheet(settings["text_edit"])
        theme_settings_label_label=QLabel("设置界面标签的QSS样式：")
        theme_settings_label_label.setStyleSheet(settings["label"])
        self.theme_settings_label_edit=QLineEdit()
        self.theme_settings_label_edit.setText(conf["ui"]["settings"]["label"])
        self.theme_settings_label_edit.setStyleSheet(settings["text_edit"])
        theme_settings_text_edit_label=QLabel("设置界面文本框的QSS样式：")
        theme_settings_text_edit_label.setStyleSheet(settings["label"])
        self.theme_settings_text_edit_edit=QLineEdit()
        self.theme_settings_text_edit_edit.setText(conf["ui"]["settings"]["text_edit"])
        self.theme_settings_text_edit_edit.setStyleSheet(settings["text_edit"])
        theme_settings_tab_label=QLabel("设置界面标签页的QSS样式：")
        theme_settings_tab_label.setStyleSheet(settings["label"])
        self.theme_settings_tab_edit=QLineEdit()
        self.theme_settings_tab_edit.setText(conf["ui"]["settings"]["tab"])
        self.theme_settings_tab_edit.setStyleSheet(settings["text_edit"])
        theme_settings_slider_label=QLabel("设置界面滑块条的QSS样式：")
        theme_settings_slider_label.setStyleSheet(settings["label"])
        self.theme_settings_slider_edit=QLineEdit()
        self.theme_settings_slider_edit.setText(conf["ui"]["settings"]["slider"])
        self.theme_settings_slider_edit.setStyleSheet(settings["text_edit"])
        theme_settings_list_label=QLabel("设置界面列表的QSS样式：")
        theme_settings_list_label.setStyleSheet(settings["label"])
        self.theme_settings_list_edit=QLineEdit()
        self.theme_settings_list_edit.setText(conf["ui"]["settings"]["list"])
        self.theme_settings_list_edit.setStyleSheet(settings["text_edit"])
        theme_settings_button_label=QLabel("设置界面按钮的QSS样式：")
        theme_settings_button_label.setStyleSheet(settings["label"])
        self.theme_settings_button_edit=QLineEdit()
        self.theme_settings_button_edit.setText(conf["ui"]["settings"]["button"])
        self.theme_settings_button_edit.setStyleSheet(settings["text_edit"])
        theme_settings.addWidget(theme_settings_check_box_label,0,0)
        theme_settings.addWidget(self.theme_settings_check_box_edit,0,1)
        theme_settings.addWidget(theme_settings_label_label,1,0)
        theme_settings.addWidget(self.theme_settings_label_edit,1,1)
        theme_settings.addWidget(theme_settings_text_edit_label,2,0)
        theme_settings.addWidget(self.theme_settings_text_edit_edit,2,1)
        theme_settings.addWidget(theme_settings_tab_label,3,0)
        theme_settings.addWidget(self.theme_settings_tab_edit,3,1)
        theme_settings.addWidget(theme_settings_slider_label,4,0)
        theme_settings.addWidget(self.theme_settings_slider_edit,4,1)
        theme_settings.addWidget(theme_settings_list_label,0,2)
        theme_settings.addWidget(self.theme_settings_list_edit,0,3)
        theme_settings.addWidget(theme_settings_button_label,1,2)
        theme_settings.addWidget(self.theme_settings_button_edit,1,3)
        tab_theme_layout.addLayout(theme_settings,3,2)
        tab_main.setLayout(tab_main_layout)
        tab_theme.setLayout(tab_theme_layout)
        dialog_layout.addWidget(tab,0,0,1,2)
        dialog_layout.addLayout(self.sure_layout,1,1)
        cancel_button.clicked.connect(self.close)
        ok_button.clicked.connect(self.save_settings)
    def save_settings(self):
        conf={
            "allow_upload":self.allow_upload.isChecked(),
            "browser_exec":self.browser_exec_edit.displayText(),
            "browser_type":self.browser_type_edit.displayText(),
            "driver_exec":self.driver_exec_edit.displayText(),
            "enable_daily_test":self.enable_daily_test.isChecked(),
            "enable_gui":self.enable_gui.isChecked(),
            "enable_special_test":self.enable_special_test.isChecked(),
            "enable_weekly_test":self.enable_weekly_test.isChecked(),
            "is_debug":self.is_debug.isChecked(),
            "lang":self.lang_edit.displayText(),
            "qr_login":self.qr_login.isChecked(),
            "record_days":int(self.record_days_edit.displayText()),
            "timeout":int(self.timeout_edit.displayText()),
            "ui":{
                "at_top":self.ui_at_top.isChecked(),
                "auto_start":self.ui_auto_start.isChecked(),
                "close_button_style":self.theme_close_button_style_edit.displayText(),
                "conf_button_icon":self.theme_conf_button_icon_edit.displayText(),
                "conf_button_color":self.theme_conf_button_color_edit.displayText(),
                "conf_button_style":self.theme_conf_button_style_edit.displayText(),
                "icon":self.theme_icon_edit.displayText(),
                "log_panel_style":self.theme_log_panel_style_edit.displayText(),
                "log_scrollbar_style":self.theme_log_scroll_bar_style_edit.displayText(),
                "maximum_button_style":self.theme_maximum_button_style_edit.displayText(),
                "minimum_button_style":self.theme_minimum_button_style_edit.displayText(),
                "opacity":float(self.theme_opacity_slider.value()/10),
                "qr_style":self.theme_qr_style_edit.displayText(),
                "qr_title_style":self.theme_qr_title_style_edit.displayText(),
                "settings":{
                    "check_box":self.theme_settings_check_box_edit.displayText(),
                    "label":self.theme_settings_label_edit.displayText(),
                    "text_edit":self.theme_settings_text_edit_edit.displayText(),
                    "tab":self.theme_settings_tab_edit.displayText(),
                    "slider":self.theme_settings_slider_edit.displayText(),
                    "list":self.theme_settings_list_edit.displayText(),
                    "buttom":self.theme_settings_button_edit.displayText()
                },
                "start_button":self.theme_start_button_edit.displayText(),
                "start_button_color":self.theme_start_button_color_edit.displayText(),
                "start_button_style":self.theme_start_button_style_edit.displayText(),
                "title_colors":self.get_table_contents(),
                "title_style":self.theme_title_style_edit.displayText(),
                "ui":self.theme_ui_edit.displayText(),
                "working_button":self.theme_working_button_edit.displayText(),
                "merge_db_icon":self.theme_merge_db_icon_edit.displayText(),
                "merge_db_color":self.theme_merge_db_color_edit.displayText(),
                "merge_db_style":self.theme_merge_db_style_edit.displayText()
            }
        }
        if conf["browser_type"]=="edge_chromium":
            conf["edge_version"]=self.edge_version_edit.displayText()
        with open(file="config.json",mode="w",encoding="utf-8") as conf_writer:
            conf_writer.write(json.dumps(conf,indent=4,sort_keys=True))
        msgbox=NormalMsgBox(msg="设置保存完成，重启后生效。",parent=self)
        msgbox.exec()
    def get_table_contents(self):
        widgets=list()
        for i in range(self.theme_title_colors_table.count()):
            widgets.append(self.theme_title_colors_table.item(i).text())
        return widgets
class QLogger(logging.Handler):
    def __init__(self,parent):
        super().__init__()
        self.widget=QPlainTextEdit(parent)
        self.widget.setReadOnly(True)
    def emit(self,record):
        msg=self.format(record)
        self.widget.appendPlainText(msg)
    def scroll_widget_to_bottom(self):
        bar=self.widget.verticalScrollBar()
        bar.setSliderPosition(bar.maximum())
class Work(QObject):
    signal=pyqtSignal(bytes)
    scan_signal=pyqtSignal(bool)
    def __init__(self,func = None,enable_gui:bool = True):
        super().__init__()
        self.func=func
        self.enable_gui=enable_gui
    def start_process(self):
        self.func(enable_gui=self.enable_gui,signal=self.signal,scan_signal=self.scan_signal)
class UI(QWidget):
    def __init__(self,ui_conf:dict,parent=None,init_func=None):
        super().__init__(parent)
        self.ui_conf=ui_conf
        self.init_func=init_func
        icon_color=random.sample(ui_conf["title_colors"],1)[0]
        if ui_conf["at_top"]==True:
            self.setWindowFlags(Qt.WindowFlags.WindowStaysOnTopHint)
        self.setWindowTitle("自动学习")
        self.resize(1024,768)
        #self.setWindowIcon(qtawesome.icon(ui_conf["icon"],color=icon_color))
        self.setWindowOpacity(self.ui_conf["opacity"])
        self.setAttribute(Qt.WidgetAttribute.WA_TranslucentBackground)
        self.setWindowFlag(Qt.WindowFlags.FramelessWindowHint)
        self.setAutoFillBackground(True)
        self.ui_layout=QGridLayout()
        control_buttons_layout=QVBoxLayout()
        self.maximum_button=QPushButton("")
        self.close_button=QPushButton("")
        self.minimum_button=QPushButton("")
        self.close_button.clicked.connect(self.close)
        self.minimum_button.clicked.connect(self.showMinimized)
        self.maximum_button.clicked.connect(self.maximized_handler)
        title=QLabel("自动学习")
        title.setAlignment(Qt.Alignment.AlignCenter)
        title.setStyleSheet(ui_conf["title_style"].replace(r"${color}",icon_color))
        title_layout=QHBoxLayout()
        control_buttons_layout.addWidget(self.minimum_button)
        control_buttons_layout.addWidget(self.maximum_button)
        control_buttons_layout.addWidget(self.close_button)
        self.ui_layout.addLayout(control_buttons_layout,0,0)
        self.ui_layout.addLayout(title_layout,0,1)
        self.setLayout(self.ui_layout)
        self.close_button.setStyleSheet(ui_conf["close_button_style"])
        self.close_button.setToolTip("关闭")
        self.close_button.setFixedSize(30,15)
        self.maximum_button.setStyleSheet(ui_conf["maximum_button_style"])
        self.maximum_button.setToolTip("最大化")
        self.maximum_button.setFixedSize(30,15)
        self.minimum_button.setStyleSheet(ui_conf["minimum_button_style"])
        self.minimum_button.setToolTip("最小化")
        self.minimum_button.setFixedSize(30,15)
        self.qlogger=QLogger(self)
        self.qlogger.setFormatter(logging.Formatter(fmt="%(asctime)s-%(levelname)s-%(message)s",datefmt="%Y-%m-%d %H:%M:%S"))
        self.logger=logging.getLogger("thread")
        self.logger.addHandler(self.qlogger)
        self.qlogger.widget.setStyleSheet(ui_conf["log_panel_style"])
        self.qlogger.widget.textChanged.connect(self.qlogger.scroll_widget_to_bottom)
        bar=self.qlogger.widget.verticalScrollBar()
        bar.setStyleSheet(ui_conf["log_scroll_bar_style"])
        self.ui_layout.addWidget(self.qlogger.widget,1,1)
        self.setStyleSheet(ui_conf["ui"])
        self.working_thread=QThread()
        self.work=Work(func=self.init_func,enable_gui=True)
        self.work.signal.connect(self.show_qr)
        self.work.scan_signal.connect(self.close_qr)
        self.work.moveToThread(self.working_thread)
        self.working_thread.started.connect(self.work.start_process)
        self.working_thread.finished.connect(self.finish_process)
        self.start_button=QPushButton("开始(&S)")
        #self.start_button.setIcon(qtawesome.icon(ui_conf["start_button"],color=ui_conf["start_button_color"]))
        self.start_button.setStyleSheet(ui_conf["start_button_style"])
        self.start_button.setToolTip("开始")
        self.start_button.setFixedHeight(60)
        self.start_button.setDefault(True)
        self.start_button.clicked.connect(self.start_process)
        conf_button=QPushButton("设置(&C)")
        conf_button.setFixedHeight(30)
        conf_button.setToolTip("设置")
        #conf_button.setIcon(qtawesome.icon(ui_conf["conf_button_icon"],color=ui_conf["conf_button_color"]))
        conf_button.setStyleSheet(ui_conf["conf_button_style"])
        conf_button.clicked.connect(self.show_setting)
        merge_db_button=QPushButton("导入题库(&M)")
        merge_db_button.setFixedHeight(30)
        merge_db_button.setToolTip("导入题库")
        #merge_db_button.setIcon(qtawesome.icon(ui_conf["merge_db_icon"],color=ui_conf["merge_db_color"]))
        merge_db_button.setStyleSheet(ui_conf["merge_db_style"])
        merge_db_button.clicked.connect(self.show_merge_db_window)
        tool_layout=QVBoxLayout()
        tool_layout.addWidget(merge_db_button)
        tool_layout.addWidget(conf_button)
        title_layout.addLayout(tool_layout,1)
        title_layout.addWidget(title,8)
        title_layout.addWidget(self.start_button,1)
        if ui_conf["auto_start"]==True:
            self.start_process()
    def mousePressEvent(self, event:QMouseEvent):
        self.logger.debug("触发鼠标按压事件")
        super(UI,self).mousePressEvent(event)
        self.setFocus()
        self.m_flag=True
        if event.button()==Qt.MouseButtons.LeftButton and self.isMaximized()==False:
            self.old_pos=event.globalPosition() #获取鼠标相对窗口的位置
            self.logger.debug("已获取鼠标位置")
            self.setCursor(QtGui.QCursor(Qt.CursorShape.SizeAllCursor))  #更改鼠标图标
    def mouseMoveEvent(self, event:QMouseEvent):
        self.logger.debug("触发鼠标移动事件")
        super(UI,self).mouseMoveEvent(event)
        if self.m_flag==True:
            delta_x=int(event.globalPosition().x()-self.old_pos.x())
            delta_y=int(event.globalPosition().y()-self.old_pos.y())
            self.move(self.x()+delta_x,self.y()+delta_y)#更改窗口位置
            self.logger.debug("已更改窗口位置")
            self.old_pos=event.globalPosition()
    def mouseReleaseEvent(self, event:QMouseEvent):
        self.logger.debug("触发鼠标释放事件")
        super(UI,self).mouseReleaseEvent(event)
        self.m_flag=False
        self.setCursor(QtGui.QCursor(Qt.CursorShape.ArrowCursor))
    def maximized_handler(self):
        if self.isMaximized()==True:
            self.showNormal()
            self.maximum_button.setToolTip("最大化")
        else:
            self.showMaximized()
            self.maximum_button.setToolTip("还原")
    def show_qr(self,img:bytes):
        image=QPixmap()
        image.loadFromData(img)
        img_label=QLabel()
        img_label.setPixmap(image)
        img_label.setAlignment(Qt.Alignment.AlignCenter)
        img_label.setStyleSheet(self.ui_conf["qr_style"])
        title_label=QLabel("扫描下方二维码完成登陆")
        title_label.setAlignment(Qt.Alignment.AlignCenter)
        title_label.setStyleSheet(self.ui_conf["qr_title_style"])
        self.login_layout=QVBoxLayout()
        self.login_layout.addWidget(title_label)
        self.login_layout.addWidget(img_label)
        self.ui_layout.addLayout(self.login_layout,1,1)
    def close_qr(self,command:bool):
        def deleteItemsOfLayout(layout):
            if layout is not None:
                while layout.count():
                    item = layout.takeAt(0)
                    widget = item.widget()
                    if widget is not None:
                        widget.setParent(None)
                    else:
                        deleteItemsOfLayout(item.layout())
        def deleteBox(box):
            for item_id in range(box.count()):
                item=box.itemAt(item_id)
                if item.layout()==box:
                    box.removeItem(item)
        if command==True:
            self.logger.debug("开始关闭登陆界面")
            deleteItemsOfLayout(self.login_layout)
            deleteBox(self.login_layout)
    def start_process(self):
        if self.start_button.isEnabled()==True:
            self.start_button.setEnabled(False)
        #self.start_button.setIcon(qtawesome.icon(self.ui_conf["working_button"],color=self.ui_conf["start_button_color"]))
        self.start_button.setText("执行中...")
        self.start_time=time.time()
        self.working_thread.start()
        self.logger.debug("正在退出线程")
        self.working_thread.quit()
    def finish_process(self):
        if self.start_button.isEnabled()==False:
            self.start_button.setEnabled(True)
        #self.start_button.setIcon(qtawesome.icon(self.ui_conf["start_button"],color=self.ui_conf["start_button_color"]))
        self.start_button.setText("开始(&S)")
        mins,secs=divmod(int(time.time()-self.start_time),60)
        hrs,mins=divmod(mins,60)
        self.logger.info("执行完成，共计用时 {:0>2d}:{:0>2d}:{:0>2d}".format(hrs,mins,secs))
    def show_setting(self):
        setting_window=SettingWindow(parent=self)
        setting_window.exec()
    def show_merge_db_window(self):
        file,file_type=QFileDialog.getOpenFileName(self,"选择包含题库的数据库","./","数据库 (*.db);;")
        self.logger.debug("获取数据：%s,%s"%(file,file_type))
        if file!="":
            try:
                conn=sqlite3.connect(database="database.db")
                cur=conn.cursor()
                cur.execute("ATTACH %s AS extra_db" %file)
                cur.execute("INSERT OR IGNORE INTO answers SELECT * FROM extra_db.answers")
                conn.commit()
                cur.execute("DETACH DATABASE extra_db")
                conn.close()
            except:
                error_msg_box=ErrorMsgBox(msg="数据库内容有误，合并失败")
                error_msg_box.exec()
            else:
                success_msg_box=NormalMsgBox(msg="导入数据库成功",parent=self)
                success_msg_box.exec()
        else:
            error_msg_box=ErrorMsgBox(msg="未选择文件",parent=self)
            error_msg_box.exec()