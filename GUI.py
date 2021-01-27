import time
import logging
import qtawesome
from PyQt5 import QtCore, QtGui
from PyQt5.QtGui import QPixmap
from PyQt5.QtCore import QObject, QThread, Qt, pyqtSignal
from PyQt5.QtWidgets import QHBoxLayout, QWidget, QGridLayout, QVBoxLayout, QPushButton, QLabel, QPlainTextEdit
class QLogger(logging.Handler):
    def __init__(self,parent):
        super().__init__()
        self.widget=QPlainTextEdit(parent)
        self.widget.setReadOnly(True)
        self.widget.textChanged.connect(self.scroll_widget_to_bottom)
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
        self.setWindowTitle("自动学习")
        self.resize(800,600)
        self.setWindowIcon(qtawesome.icon(ui_conf["icon"],color=ui_conf["title_color"]))
        self.setWindowOpacity(self.ui_conf["opacity"])
        self.setAttribute(QtCore.Qt.WA_TranslucentBackground)
        self.setWindowFlag(QtCore.Qt.FramelessWindowHint)
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
        title.setAlignment(Qt.AlignCenter)
        title.setStyleSheet(ui_conf["title_style"])
        title_layout=QHBoxLayout()
        title_layout.addWidget(title,9)
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
        self.start_button.setIcon(qtawesome.icon(ui_conf["start_button"],color=ui_conf["start_button_color"]))
        self.start_button.setStyleSheet(ui_conf["start_button_style"])
        self.start_button.setFixedHeight(60)
        self.start_button.setDefault(True)
        self.start_button.clicked.connect(self.start_process)
        title_layout.addWidget(self.start_button,1)
        if ui_conf["auto_start"]==True:
            self.start_process()
    def mousePressEvent(self, event):
        self.logger.debug("触发鼠标按压事件")
        super(UI,self).mousePressEvent(event)
        self.setFocus()
        self.m_flag=True
        if event.button()==QtCore.Qt.LeftButton and self.isMaximized()==False:
            self.old_pos=event.globalPos() #获取鼠标相对窗口的位置
            self.logger.debug("已获取鼠标位置")
            self.setCursor(QtGui.QCursor(QtCore.Qt.SizeAllCursor))  #更改鼠标图标
    def mouseMoveEvent(self, event):
        self.logger.debug("触发鼠标移动事件")
        super(UI,self).mouseMoveEvent(event)
        if self.m_flag==True:
            delta=event.globalPos()-self.old_pos
            self.move(self.x()+delta.x(),self.y()+delta.y())#更改窗口位置
            self.logger.debug("已更改窗口位置")
            self.old_pos=event.globalPos()
    def mouseReleaseEvent(self, event):
        self.logger.debug("触发鼠标释放事件")
        super(UI,self).mouseReleaseEvent(event)
        self.m_flag=False
        self.setCursor(QtGui.QCursor(QtCore.Qt.ArrowCursor))
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
        img_label.setAlignment(Qt.AlignCenter)
        img_label.setStyleSheet(self.ui_conf["qr_style"])
        title_label=QLabel("扫描下方二维码完成登陆")
        title_label.setAlignment(Qt.AlignCenter)
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
        self.start_button.setIcon(qtawesome.icon(self.ui_conf["working_button"],color=self.ui_conf["start_button_color"]))
        self.start_button.setText("执行中...")
        self.start_time=time.time()
        self.working_thread.start()
        self.logger.debug("正在退出线程")
        self.working_thread.quit()
    def finish_process(self):
        if self.start_button.isEnabled()==False:
            self.start_button.setEnabled(True)
        self.start_button.setIcon(qtawesome.icon(self.ui_conf["start_button"],color=self.ui_conf["start_button_color"]))
        self.start_button.setText("开始(&S)")
        mins,secs=divmod(int(time.time()-self.start_time),60)
        hrs,mins=divmod(mins,60)
        self.logger.info("执行完成，共计用时 {:0>2d}:{:0>2d}:{:0>2d}".format(hrs,mins,secs))