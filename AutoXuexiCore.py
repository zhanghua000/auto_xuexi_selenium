import re
import os
import sys
import requests
import logging
import base64
import sqlite3
import qrcode
import time
import pprint
import random
import ipfshttpclient
from PIL import Image
from fuzzywuzzy import fuzz
from Crypto.Cipher import AES
from pyzbar.pyzbar import decode
from requests.sessions import Session
from selenium.webdriver import Chrome
from selenium.webdriver import Firefox
from selenium.webdriver.common.by import By
from selenium.webdriver import ChromeOptions
from selenium.webdriver import FirefoxOptions
from msedge.selenium_tools import Edge, EdgeOptions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.common.exceptions import NoSuchElementException, TimeoutException
os.chdir(os.path.split(os.path.realpath(__file__))[0])
class XuexiItem:
    def __init__(self,data_dic:dict,is_debug:bool):
        try:
            try:
                self.editors=list(data_dic["editor"])
            except KeyError:
                self.editors=list(data_dic["source"])
            self.publish_time=data_dic["publishTime"]
            self.title=data_dic["title"]
            self.url=data_dic["url"]
            self.id=data_dic["itemId"]
            if data_dic["itemType"]=="kPureVideo":
                self.type="video"
            elif data_dic["itemType"]=="kNews":
                self.type="news"
            elif data_dic["itemType"]=="kReading":
                self.type="multimedia"
        except KeyError:
            if is_debug==True:
                pprint.pprint(data_dic)
            raise ValueError("无法创建XuexiItem对象，传入字典格式有误")
class XuexiQueryState:
    def __init__(self,data_dic:dict,is_debug:bool):
        try:
            data=data_dic["data"]
            self.user_id=data["userId"]
            self.is_in_black_list=data["inBlackList"]
            self.black_list_tip=data["blackListTip"]
            score_details=data["dayScoreDtos"]
            self.states=list()
            for score_detail in score_details:
                self.states.append(XuexiStateDetail(data_dic=score_detail,is_debug=is_debug))
        except KeyError:
            if is_debug==True:
                pprint.pprint(data_dic)
            raise ValueError("无法创建XuexiQueryState对象，传入字典格式有误")
class XuexiStateDetail:
    def __init__(self,data_dic:dict,is_debug:bool):
        try:
            self.rule_id=data_dic["ruleId"]
            self.name=data_dic["name"]
            self.desc=data_dic["desc"]
            self.current_score=data_dic["currentScore"]
            self.max_score=data_dic["dayMaxScore"]

        except KeyError:
            if is_debug==True:
                pprint.pprint(data_dic)
            raise ValueError("无法创建XuexiStateDetail对象，传入字典格式有误")
        else:
            if self.current_score>=self.max_score:
                self.is_finished=True
            else:
                self.is_finished=False
    def update_self_finish_status(self,session:Session):
        # 必须把来自selenium的cookie更新到session上
        state=session.get("https://pc-api.xuexi.cn/open/api/score/today/queryrate").json()
        for dto in state["data"]["dayScoreDtos"]:
            if dto["name"]==self.name:
                if dto["currentScore"]==dto["dayMaxScore"]:
                    self.is_finished=True
                else:
                    self.is_finished=False
class XuexiProcessor:
    def __init__(self,is_debug:bool = True,timeout:int = 600,record_days:int = 3,
                 browser_type:str = "edge_chromium",qr_login:bool = True,
                 enable_special_test:bool = True,enable_weekly_test:bool = True,
                 enable_daily_test:bool = True,browser_exec:str = None,
                 driver_exec:str = None,enable_gui:bool = False,gui_show_pic_signal = None,
                 scan_signal = None):
        self.is_debug=is_debug
        self.is_answer_in_db_updated=False
        self.timeout=timeout
        self.record_days=record_days
        self.qr_login=qr_login
        self.enable_special_test=enable_special_test
        self.enable_weekly_test=enable_weekly_test
        self.enable_daily_test=enable_daily_test
        self.enable_gui=enable_gui
        self.gui_show_pic_signal=gui_show_pic_signal
        self.scan_signal=scan_signal
        self.thread_logger=logging.getLogger("thread")
        if is_debug==True:
            self.thread_logger.setLevel(logging.DEBUG)
        else:
            self.thread_logger.setLevel(logging.INFO)
        formatter=logging.Formatter(fmt="%(asctime)s-%(levelname)s-%(message)s",datefmt="%Y-%m-%d %H:%M:%S")
        file_handler=logging.FileHandler(filename="thread.log",mode="w",encoding="utf-8")
        file_handler.setFormatter(formatter)
        self.thread_logger.addHandler(file_handler)
        if self.enable_gui==False:
            stream_handler=logging.StreamHandler(stream=sys.stdout)
            stream_handler.setFormatter(formatter)
            self.thread_logger.addHandler(stream_handler)
        if self.is_debug==True:
            self.thread_logger.debug("当前处于调试模式")
        else:
            self.thread_logger.debug("当前处于正常模式")
        if os.path.exists("database.db")==False:
            self.thread_logger.info("正在创建数据库")
            conn=sqlite3.connect("database.db")
            cur=conn.cursor()
            cur.execute("CREATE TABLE answers (type TEXT,question TEXT UNIQUE,answer TEXT UNIQUE)")
            cur.execute("CREATE TABLE records (url TEXT,time REAL)")
            conn.commit()
            conn.close()
            self.thread_logger.info("创建数据库完成")
        else:
            self.thread_logger.info("正在清理数据库")
            conn=sqlite3.connect("database.db")
            cur=conn.cursor()
            for rec_time in cur.execute("SELECT time FROM records").fetchall():
                if int(time.time()-float(rec_time[0]))>=record_days*24*3600:
                    del_list=cur.execute("SELECT url FROM records WHERE time='%s'" %rec_time).fetchall()
                    cur.execute("DELETE FROM records WHERE time='%s'" %rec_time)
                    self.thread_logger.debug("已删除时间为 %s 的数据库条目 %s" %(rec_time,del_list))
            conn.commit()
            conn.close()
            self.thread_logger.info("数据库清理完成")
        if "edge" in browser_type:
            edge_options=EdgeOptions()
            if browser_exec!="":
                edge_options.binary_location=browser_exec
            if driver_exec=="":
                driver_exec="msedgedriver"
            if is_debug==False:
                edge_options.add_argument("headless")
            if browser_type=="edge_chromium":
                edge_options.use_chromium = True
            self.browser_driver=Edge(executable_path=driver_exec,options=edge_options)
        elif browser_type=="chrome":
            chrome_options=ChromeOptions()
            if browser_exec!="":
                chrome_options.binary_location=browser_exec
            if driver_exec=="":
                driver_exec="chromedriver"
            if is_debug==False:
                chrome_options.add_argument("headless")
            self.browser_driver=Chrome(executable_path=driver_exec,options=chrome_options)
        elif browser_type=="firefox":
            firefox_options=FirefoxOptions()
            if driver_exec=="":
                driver_exec="geckodriver"
            if is_debug==False:
                firefox_options.add_argument("-headless")
            self.browser_driver=Firefox(firefox_binary=browser_exec,executable_path=driver_exec,options=firefox_options)
        else:
            self.thread_logger.error("设置中使用了不支持的浏览器 %s" %browser_type)
            raise RuntimeError("设置中使用了不支持的浏览器")
        self.browser_driver.maximize_window()
        self.request_session=requests.session()
        self.update_requests_cookies_with_selenium()
        if self.qr_login==True:
            self.get_qr_code()
        else:
            self.user_name_handler()
        self.get_query_state()
        self.thread_logger.info("当前用户ID：%d" %self.query_states.user_id)
        self.thread_logger.debug("已初始化类")
    def get_qr_code(self):
        self.browser_driver.get("https://pc.xuexi.cn/points/login.html?ref=https%3A%2F%2Fwww.xuexi.cn%2F")
        qglogin=WebDriverWait(driver=self.browser_driver,timeout=30).until(expected_conditions.visibility_of_element_located((By.ID,"qglogin")))
        self.browser_driver.execute_script("arguments[0].scrollIntoView()",qglogin)
        target_iframe=qglogin.find_element_by_tag_name("iframe")
        self.browser_driver.execute_script("arguments[0].scrollIntoView()",target_iframe)
        self.browser_driver.switch_to.frame(target_iframe)
        img=WebDriverWait(driver=self.browser_driver,timeout=5).until(expected_conditions.visibility_of_element_located((By.CLASS_NAME,"login_qrcode_content"))).find_element_by_tag_name("img")
        img=base64.b64decode(img.get_attribute("src").replace("data:image/png;base64,",""))
        if self.enable_gui==True:
            self.gui_show_pic_signal.emit(img)
        else:
            with open(file="qr.png",mode="wb") as img_writer:
                img_writer.write(img)
            self.thread_logger.info("请使用APP扫描下方的二维码完成登陆，如果无法扫描，可以手动打开程序文件夹内的 qr.png 文件扫描")
            qr=qrcode.QRCode()
            qr_data=""
            for data in decode(Image.open("qr.png")):
                qr_data=qr_data+data.data.decode("utf-8")
            qr.add_data(qr_data)
            qr.print_ascii(invert=True)
        self.browser_driver.switch_to.default_content()
        if WebDriverWait(driver=self.browser_driver,timeout=300).until(expected_conditions.title_is("学习强国"))==False:
            self.thread_logger.error("二维码过期，正在重新生成可以扫描的二维码")
            self.get_qr_code()
        if self.scan_signal!=None:
            self.scan_signal.emit(True)
            self.thread_logger.debug("已提交关闭登陆界面的信号")
        return 0
    def user_name_handler(self):
        self.thread_logger.error("现已不支持用户名登陆，正在切换至二维码登陆")
        self.get_qr_code()
        self.qr_login=True
    def close_driver(self):
        self.thread_logger.info("正在关闭浏览器驱动")
        if os.path.exists("qr.png")==True:
            os.remove("qr.png")
        if os.path.exists("video.mp4")==True:
            os.remove("video.mp4")
        self.browser_driver.close()
    def update_requests_cookies_with_selenium(self):
        cookies=self.browser_driver.get_cookies()
        for cookie in cookies:
            self.request_session.cookies.set(cookie["name"],cookie["value"])
        self.request_session.headers.update({"User-Agent":self.browser_driver.execute_script("return navigator.userAgent")})
    def get_today_score(self):
        # 今日得分
        self.update_requests_cookies_with_selenium()
        query_re=self.request_session.get("https://pc-api.xuexi.cn/open/api/score/today/query")
        return query_re.json()["data"]["score"]
    def get_total_score(self):
        # 总分
        self.update_requests_cookies_with_selenium()
        score=self.request_session.get("https://pc-api.xuexi.cn/open/api/score/get")
        return score.json()["data"]["score"]
    def get_query_state(self):
        # 得分详细列表+XuexiQueryState对象
        # 返回数据格式：{"项目名":"已得分数/全部分数"}
        self.update_requests_cookies_with_selenium()
        state=self.request_session.get("https://pc-api.xuexi.cn/open/api/score/today/queryrate")
        state_dtos=state.json()["data"]["dayScoreDtos"]
        self.query_states=XuexiQueryState(data_dic=state.json(),is_debug=self.is_debug)
        data=dict()
        for state_dto in state_dtos:
            data[str(state_dto["name"])]=str(state_dto["currentScore"])+"/"+str(state_dto["dayMaxScore"])
        return data
    def update_scores(self):
        try:
            self.total_score=self.get_total_score() 
            self.today_score=self.get_today_score()
            self.query_state=self.get_query_state()
        except:
            self.thread_logger.error("获取分数数据出错")
            if self.is_debug==True:
                pprint.pprint(self.query_state)
        else:
            detail=""
            for name in self.query_state:
                detail=detail+name+":"+self.query_state[name]+"分\n"
            self.thread_logger.info("总分：%d 分\t今日已获得分数：%d分" %(self.total_score,self.today_score))
            string=detail.replace("\n","\t")
            self.thread_logger.debug("详细信息：%s" %string.replace(string[-1],""))
    def get_items(self,url:str):
        self.update_requests_cookies_with_selenium()
        items_list=self.request_session.get(url).json()
        results=list()
        for item in items_list:
            results.append(XuexiItem(data_dic=item,is_debug=self.is_debug))
        return results
    def get_news(self):
        return self.get_items(url="https://www.xuexi.cn/lgdata/1crqb964p71.json")
    def get_videos(self):
        return self.get_items(url="https://www.xuexi.cn/lgdata/1novbsbi47k.json")
    def is_news_read(self):
        self.update_scores()   
        first_finished=False
        second_finished=False 
        for state in self.query_states.states:
            if state.rule_id==1:
                first_finished=state.is_finished
            if state.rule_id==1002:
                second_finished=state.is_finished
        result=first_finished and second_finished
        self.thread_logger.debug("文章完成状态：%s" %result)
        return result

    def is_videos_watched(self):
        self.update_scores()
        first_finished=False
        second_finished=False
        for state in self.query_states.states:
            if state.rule_id==2:
                first_finished=state.is_finished
            if state.rule_id==1003:
                second_finished=state.is_finished
        result=first_finished and second_finished
        self.thread_logger.debug("视频完成状态：%s" %result)
        return result
    def process_news(self):
        while True:
            if self.is_news_read()==True:
                if self.browser_driver.current_window_handle!=self.browser_driver.window_handles[0]:
                    self.browser_driver.close()
                    self.browser_driver.switch_to.window(self.browser_driver.window_handles[0])
                self.thread_logger.debug("已完成处理全部文章")
                break
            news=self.get_news()
            for each_news in news:
                if self.is_item_read(url=each_news.url,days=self.record_days)==True:
                    self.thread_logger.info("文章 %s 在 %d 天阅读过，正在跳过" %(each_news.title,self.record_days))
                    continue
                self.thread_logger.info("正在处理文章 %s" %each_news.title)
                news_start_time=time.time()
                orig_score=self.get_today_score()
                self.browser_driver.execute_script(script="window.open('%s')" %each_news.url)
                self.thread_logger.debug("以 %s 打开新标签页" %each_news.url)
                self.browser_driver.switch_to.window(self.browser_driver.window_handles[1])
                try:
                    title_element=WebDriverWait(driver=self.browser_driver,timeout=10).until(expected_conditions.visibility_of_element_located((By.CLASS_NAME,"render-detail-title")))
                except TimeoutException:
                    title_element=WebDriverWait(driver=self.browser_driver,timeout=10).until(expected_conditions.visibility_of_element_located((By.CLASS_NAME,"video-article-title")))
                finally:
                    self.thread_logger.debug("实际标题：%s" %title_element.text.replace("\n",""))
                    self.thread_logger.debug("目标标题：%s" %each_news.title)
                if self.is_partial_match(string1=each_news.title,string2=title_element.text):
                    while True:
                        height=self.browser_driver.execute_script(script="return action=document.body.scrollHeight")
                        self.browser_driver.execute_script(script="window.scrollTo(0,%d)" %self.gen_scroll_to_pos(height=height,current_pos=int(self.browser_driver.execute_script(script="return window.pageYOffset"))))
                        if self.is_news_read()==True or self.is_score_added(orig_score=orig_score)==True or time.time()-news_start_time>=self.timeout:
                            self.browser_driver.close()
                            self.browser_driver.switch_to.window(self.browser_driver.window_handles[0])
                            self.thread_logger.debug("已结束刷文章 %s" %each_news.title)
                            self.update_read_database(url=each_news.url,read_time=time.time())
                            break                      
                        time.sleep(random.uniform(3.0,7.0))
                else:
                    self.thread_logger.error("加载文章页面出错")  
                    raise RuntimeError("文章页面加载出错")
    def process_videos(self):
        while True:
            if self.is_videos_watched()==True:
                self.thread_logger.debug("已结束处理视频")
                break
            videos=self.get_videos()
            for video in videos:
                self.thread_logger.info("正在处理视频 %s" %video.title)
                if self.is_item_read(url=video.url,days=self.record_days)==True:
                    self.thread_logger.info("视频 %s 在 %d 天内阅读过，正在跳过" %(video.title,self.record_days))
                    continue
                if self.is_videos_watched()==True:
                    if self.browser_driver.current_window_handle!=self.browser_driver.window_handles[0]:
                        self.browser_driver.close()
                        self.browser_driver.switch_to.window(self.browser_driver.window_handles[0])
                    self.thread_logger.info("视频得分已达到目标，无需处理")
                    break
                video_start_time=time.time()
                orig_score=self.get_today_score()
                self.browser_driver.execute_script(script="window.open('%s')" %video.url)
                self.browser_driver.switch_to.window(self.browser_driver.window_handles[1])
                try:
                    status=WebDriverWait(driver=self.browser_driver,timeout=10).until(expected_conditions.title_is(title=video.title.replace("\n","").replace(" ","")+" | 学习强国"))==True
                except TimeoutException:
                    try:
                        title_element=WebDriverWait(driver=self.browser_driver,timeout=10).until(expected_conditions.visibility_of_element_located((By.CLASS_NAME,"video-article-title")))
                    except TimeoutException:
                        self.thread_logger.error("网页加载失败")
                        status=False
                        raise RuntimeError("网页加载失败")
                    else:
                        status=self.is_partial_match(string1=video.title,string2=title_element.text)
                        self.thread_logger.debug("目标标题：%s" %video.title)
                        self.thread_logger.debug("实际标题：%s" %title_element.text)
                        self.thread_logger.debug("近似匹配结果：%s" %status)
                finally:
                    if status==True:
                        video_element=self.browser_driver.find_element_by_class_name("prism-player").find_element_by_tag_name("video")
                        self.browser_driver.execute_script("arguments[0].scrollIntoView()",video_element)
                        while True:
                            video_element=self.browser_driver.find_element_by_class_name("prism-player").find_element_by_tag_name("video")
                            height=self.browser_driver.execute_script(script="return action=document.body.scrollHeight")
                            play_video=random.sample([True,False],1)[0]
                            if play_video==False:
                                time.sleep(random.uniform(0.0,5.0))
                                self.browser_driver.execute_script("arguments[0].pause()",video_element)
                                self.thread_logger.debug("已暂停视频播放")
                            else:
                                time.sleep(random.uniform(0.0,5.0))
                                self.browser_driver.execute_script("arguments[0].play()",video_element)
                                self.thread_logger.debug("已恢复视频播放")
                            self.browser_driver.execute_script(script="window.scrollTo(0,%d)" %self.gen_scroll_to_pos(height=height,current_pos=int(self.browser_driver.execute_script(script="return window.pageYOffset"))))
                            if self.is_videos_watched()==True or self.is_score_added(orig_score=orig_score)==True or time.time()-video_start_time>=self.timeout:
                                self.browser_driver.close()
                                self.browser_driver.switch_to.window(self.browser_driver.window_handles[0])
                                self.thread_logger.debug("已完成视频 %s 的播放" %video.title)
                                self.update_read_database(url=video.url,read_time=time.time())
                                break
                            time.sleep(random.uniform(3.0,7.0))
                    else:
                        self.thread_logger.error("加载视频页面出错")
                        raise RuntimeError("加载视频页面出错")
    def process_daily_test(self):
        self.thread_logger.info("正在处理每日答题")
        self.process_test(url="https://pc.xuexi.cn/points/exam-practice.html")
    def process_weekly_test(self):
        is_any_undone=True
        self.thread_logger.info("正在处理每周答题列表")
        while True:
            if self.is_test_finished(rule_id=5)==True:
                self.thread_logger.info("今日的周测试已完成")
                break
            self.browser_driver.get("https://pc.xuexi.cn/points/exam-weekly-list.html")
            months_container=WebDriverWait(driver=self.browser_driver,timeout=20).until(expected_conditions.presence_of_element_located((By.CLASS_NAME,"ant-spin-container")))
            months=months_container.find_elements_by_class_name("month")
            if is_any_undone==False:
                self.thread_logger.info("无可用题目")
                break
            for month in months:
                self.thread_logger.info("正在处理 %s 月的每周答题" %month.find_element_by_class_name("month-title").text)
                weeks=month.find_element_by_class_name("weeks").find_elements_by_class_name("week")
                for week in weeks:
                    week_title=week.find_element_by_class_name("week-title").text
                    self.thread_logger.info("正在处理 %s 周的答题" %week_title)
                    if "done" in week.find_element_by_class_name("stat").find_element_by_tag_name("div").get_attribute("class"):
                        self.thread_logger.info("%s 周的答题已完成，跳过处理" %week_title)
                        continue
                    elif "button-disabled" in week.find_element_by_tag_name("button").get_attribute("class"):
                        self.thread_logger.info("%s 周的题目已过期，正在跳过" %week_title)
                        continue
                    else:
                        week.find_element_by_tag_name("button").click()
                        test_url=self.browser_driver.current_url                   
                        self.process_test(url=test_url,current_page=True)
                        self.thread_logger.debug("正在终止循环以获取新的周信息")
                        break
                is_any_undone=False
                self.thread_logger.debug("正在终止循环以获取新的月信息")
                break
    def process_special_test(self):
        self.thread_logger.info("正在处理专项答题列表")
        while True:
            if self.is_test_finished(rule_id=4)==True:
                self.thread_logger.info("今日专项答题已完成")
                break
            self.browser_driver.get("https://pc.xuexi.cn/points/exam-paper-list.html")
            items=WebDriverWait(driver=self.browser_driver,timeout=20).until(expected_conditions.visibility_of_element_located((By.CLASS_NAME,"items"))).find_elements_by_class_name("item")
            for each_item in items:
                title=each_item.find_element_by_class_name("item-title").text
                self.thread_logger.info("正在处理 %s 的专项答题" %title)
                try:
                    each_item.find_element_by_class_name("points")
                except NoSuchElementException:
                    self.thread_logger.info("%s 的专项答题有效，开始处理" %title)
                    try:
                        each_item.find_element_by_class_name("label")
                    except NoSuchElementException:
                        orig_url=self.browser_driver.current_url
                        each_item.find_element_by_class_name("button").click()
                        self.thread_logger.debug("已点击按钮")
                        self.process_test(url=self.browser_driver.current_url,current_page=True,orig_url=orig_url)
                        self.thread_logger.debug("正在终止循环以获取新页面")
                        break
                    else:
                        self.thread_logger.info("%s 的专项答题已过期，将跳过" %title)
                else:
                    self.thread_logger.info("%s 的专项答题已完成，将跳过" %title)
                    continue
    def process_test(self,url:str,orig_url:str = "",current_page=False):
        main_window=self.browser_driver.current_window_handle
        if current_page==False:
            self.browser_driver.execute_script("window.open('%s')" %url)
            self.browser_driver.switch_to.window(self.browser_driver.window_handles[1])
        else:
            self.browser_driver.get(url)
        while True:
            question_element=WebDriverWait(driver=self.browser_driver,timeout=20).until(expected_conditions.presence_of_element_located((By.CLASS_NAME,"question")))
            self.browser_driver.execute_script("arguments[0].scrollIntoView()", question_element)
            try:
                tips=WebDriverWait(driver=self.browser_driver,timeout=5).until(expected_conditions.element_to_be_clickable((By.CLASS_NAME,"tips")))
            except TimeoutException:
                self.thread_logger.debug("页面无答题内容，结束答题")
                break
            else:
                try:
                    tips.find_element_by_tag_name("svg")
                except NoSuchElementException:
                    self.thread_logger.debug("找到无关tips")
                    break
            tips.click()
            line_feed=WebDriverWait(driver=self.browser_driver,timeout=5).until(expected_conditions.presence_of_element_located((By.CLASS_NAME,"line-feed")))
            answer_tips=line_feed.find_elements_by_tag_name("font")
            self.thread_logger.debug("找到 %d 个答案" %(len(answer_tips)))
            answers_=list()
            for answer_tip in answer_tips:
                time.sleep(1.0)
                self.thread_logger.debug("当前答案：%s" %answer_tip.text)
                if answer_tip.text not in ["","“"]:
                    if "”" in answer_tip.text:
                        tip_text=answer_tip.text.split("”")[0]
                    else:
                        tip_text=answer_tip.text
                    answers_.append(tip_text)
            self.thread_logger.debug("已找到全部答案如下：%s" %answers_)
            tips.click()
            try:
                answers=question_element.find_element_by_class_name("q-answers")
            except NoSuchElementException:
                self.thread_logger.info("当前题目类型：填空")
                # 填空处理
                input_elements=question_element.find_elements_by_class_name("blank")
                for input_element in input_elements:
                    if len(answer_tips)==0:
                        # 视频问题，无tips，需要查询数据库或手动介入
                        spans=question_element.find_element_by_class_name("q-body").find_elements_by_tag_name("span")
                        question_title=""
                        for span in spans:
                            question_title=question_title+span.text
                            if span.text!=spans[-1].text:
                                question_title=question_title+"_"
                        self.thread_logger.error("问题 %s 在网页上未提供答案" %question_title)
                        input_element.clear()
                        self.thread_logger.info("正在从数据库中搜索答案")
                        answers_in_db=self.get_answer(question=question_title,type_of_question="fill_the_blank")
                        if len(answers_in_db)==1 and len(answers_in_db[0])==1:
                            answer_in_db=answers_in_db[0][0]
                            self.thread_logger.debug("找到问题 %s 的答案 %s" %(question_title,str(answer_in_db)))
                            input_element.send_keys(str(answer_in_db))
                        elif len(answers_in_db)==0:
                            self.thread_logger.error("在数据库中搜索答案失败")
                            video=WebDriverWait(driver=self.browser_driver,timeout=5).until(expected_conditions.visibility_of_element_located((By.ID,"video")))
                            self.update_requests_cookies_with_selenium()
                            video_url=video.get_attribute("src")
                            if video_url.startswith("http")==False:
                                self.process_encrypted_video()
                            else:
                                with open(file="video.mp4",mode="wb") as video_downloader:
                                    video_downloader.write(self.request_session.get(video_url,headers={"Referer":"https://pc.xuexi.cn"}).content)
                            answer_overwrite=input("视频已用 video.mp4 的文件名下载到程序文件夹，答案需要手动输入：")
                            input_element.send_keys(answer_overwrite)
                            self.thread_logger.info("正在更新答案数据库")
                            self.update_answer_database(type_of_question="fill_the_blank",question=question_title,answer=answer_overwrite)
                            self.is_answer_in_db_updated=True
                        else:
                            self.thread_logger.error("数据库中有重复项目，无法寻找到有效答案")
                            self.thread_logger.debug("找到的答案 %s" %answers_in_db)
                            answer_overwrite=input("答案需要手动输入：")
                            input_element.send_keys(answer_overwrite)
                    else:
                        answer_tip=answer_tips[input_elements.index(input_element)]
                        input_element.clear()
                        input_element.send_keys(answer_tip.text)
            else:
                self.thread_logger.info("当前题目类型：选择")
                answer_inputs=answers.find_elements_by_class_name("q-answer")
                # 选择处理
                if len(answers_)==0:
                    # 视频问题，无tips，需要查询数据库或手动介入
                    spans=self.browser_driver.find_element_by_class_name("q-body").find_elements_by_tag_name("div")
                    question_title=""
                    for span in spans:
                        if span!=spans[-1]:
                            question_title=question_title+span.text+"_"
                        else:
                            question_title=question_title+span.text
                    self.thread_logger.error("问题 %s 在网页上未找到答案")
                    answers_in_db=self.get_answer(question=question_title,type_of_question="choose")
                    if len(answers_in_db)==0:
                        self.thread_logger.error("数据库中无答案，需要手动查询输入")
                        video=WebDriverWait(driver=self.browser_driver,timeout=5).until(expected_conditions.visibility_of_element_located((By.ID,"video")))
                        self.update_requests_cookies_with_selenium()
                        video_url=video.get_attributes("src")
                        if video_url.startswith("http")==False:
                            self.process_encrypted_video()
                        else:
                            with open(file="video.mp4",mode="wb") as video_writer:
                                video_writer.write(self.request_session.get(video_url,headers={"Referer":"https://pc.xuexi.cn"}).content)
                        answer_overwrite=input("视频已用 video.mp4 的文件名下载到程序文件夹，答案需要手动输入，多选答案请用#分割：")
                        answers_=answer_overwrite.split("#")
                        self.thread_logger.info("正在更新答案数据库")
                        self.update_answer_database(type_of_question="choose",question=question_title,answer=answer_overwrite)
                        self.is_answer_in_db_updated=True
                    elif len(answers_in_db)==1:
                        self.thread_logger.info("数据库中已找到答案")
                        answer_in_db=answers_in_db[0]
                        answers_=str(answer_in_db).split("#")
                    else:
                        self.thread_logger.error("数据库中有重复项目，无法寻找到有效答案")
                        answer_overwrite=input("答案需要手动输入，多选答案请用#分割：")
                        answers_=answer_overwrite.split("#")
                for answer in answers_:
                    self.thread_logger.debug("当前tip的内容：%s" %answer)
                    for answer_input in answer_inputs:
                        self.thread_logger.debug("当前按钮标题：%s" %answer_input.text)
                        if ((answer in answer_input.text) or ("正确" in answer_input.text and "可以" in answer)) and ("chosen" not in answer_input.get_attribute("class")):
                            answer_input.click()
                            self.thread_logger.debug("按钮标题与tip匹配完成，已点击按钮")
                        else:
                            self.thread_logger.debug("按钮标题与tip不匹配，不点击按钮")
            try:
                button=WebDriverWait(driver=self.browser_driver,timeout=10).until(expected_conditions.element_to_be_clickable((By.CLASS_NAME,"next-btn")))
            except TimeoutException:
                button=WebDriverWait(driver=self.browser_driver,timeout=10).until(expected_conditions.element_to_be_clickable((By.CLASS_NAME,"submit-btn")))
                self.thread_logger.debug("已找到提交按钮")
            else:
                self.thread_logger.debug("已找到下一步按钮")
            self.browser_driver.execute_script("arguments[0].scrollIntoView()", button)
            button.click()
            self.thread_logger.debug("已点击按钮")
        if current_page==False:
            self.browser_driver.close()
            self.thread_logger.debug("已关闭标签页")
            self.browser_driver.switch_to.window(main_window)
            self.thread_logger.debug("已切换回第一个标签页")
        else:
            try:
                WebDriverWait(driver=self.browser_driver,timeout=5).until(expected_conditions.element_to_be_clickable((By.CLASS_NAME,"action")))
            except NoSuchElementException:
                pass
            else:
                self.thread_logger.debug("正在打开网页")
                if orig_url!="":
                    self.browser_driver.get(orig_url)
                else:
                    self.browser_driver.back()
    def gen_scroll_to_pos(self,height:int,current_pos:int): 
        if current_pos+50>height:
            return current_pos-random.randint(0,50)
        else:
            return current_pos+random.randint(0,50)
    def is_score_added(self,orig_score:int):
        if self.get_today_score()>orig_score:
            return True
        else:
            return False
    def is_test_finished(self,rule_id:int):
        for state in self.query_states.states:
            self.update_requests_cookies_with_selenium()
            state.update_self_finish_status(session=self.request_session)
            if state.rule_id==rule_id:
                return state.is_finished
    def process_encrypted_video(self):
        self.update_requests_cookies_with_selenium()
        header_bak=self.request_session.headers["Referer"]
        self.request_session.headers.update({"Referer":"https://pc.xuexi.cn"})
        # get .m3u8 list
        # TODO make sure how to get these strings
        string0="1005"
        string1="60028359967172198502011005"
        string2="8d5626d1106640a884ea1a75b84d25f2-2"
        list_text=self.request_session.get("https://boot-video.xuexi.cn/video/%s/p/%s/%s.m3u8" %(string0,string1,string2)).text
        # get key
        try:
            keys=re.findall(pattern='URI="(.*)"',string=re.findall(pattern='#EXT-X-KEY:(.*)\n',string=list_text)[0])[0]
        except IndexError:
            keys=""
            key_content=""
            cryptor=None
        else:
            key_content=self.request_session.get("https://boot-video.xuexi.cn/video/%s/p/%s/%s" %(string0,string1,keys)).content
            cryptor=AES.new(key=key_content,mode=AES.MODE_CBC,iv=key_content)
        # get .ts and combine
        tslist=re.findall(pattern='EXTINF:(.*),\n(.*)\n#',string=list_text)
        tss=list()
        for ts in tslist:
            tss.append(ts[1])
        for ts in tss:
            with open(file="video.mp4",mode="ab") as video_part_downloader:
                if key_content!="":
                    content=cryptor.decrypt(self.request_session.get("https://boot-video.xuexi.cn/video/%s/p/%s/%s" %(string0,string1,ts)).content)
                else:
                    content=self.request_session.get("https://boot-video.xuexi.cn/video/%s/p/%s/%s" %(string0,string1,ts)).content
                video_part_downloader.write(content)
        self.request_session.headers.update({"Referer":header_bak})
    def update_read_database(self,url:str,read_time:float):
        self.thread_logger.debug("正在更新已读数据库")
        conn=sqlite3.connect("database.db")
        cur=conn.cursor()
        cur.execute("INSERT INTO records (url,time) VALUES ('%s',%f)" %(url,read_time))
        conn.commit()
        conn.close()
    def is_item_read(self,url:str,days=3):
        # url 在指定天数内是否阅读过
        conn=sqlite3.connect("database.db")
        cur=conn.cursor()
        datas=cur.execute("SELECT time FROM records WHERE url='%s'" %url)
        try:
            times=datas.fetchall()[0]
            conn.close()
            if int(time.time()-float(times[0]))>=days*24*3600:
                return False
            else:
                return True
        except IndexError:
            return False
    def is_partial_match(self,string1:str,string2:str,target_score:int = 50) -> bool:
        process_strings=list()
        for string in [string1,string2]:
            if "\n" in string:
                oldstring=string
                string=string.replace("\n"," ")
                self.thread_logger.debug("字符串 %s 去换行符结果：%s" %(oldstring,string))
            process_strings.append(string)
        self.thread_logger.debug("参与匹配数据：%s" %process_strings)
        similarity=fuzz.partial_ratio(process_strings[0],process_strings[1])
        self.thread_logger.debug("字符串相似度：%d" %similarity)
        if similarity>=target_score:
            return True
        return False
    def get_answer(self,question:str,type_of_question:str):
        conn=sqlite3.connect("database.db")
        cur=conn.cursor()
        data=cur.execute("SELECT answer FROM answers WHERE question = '%s' AND type = '%s'" %(question,type_of_question))
        datas=data.fetchall()
        conn.close()
        return datas
    def update_answer_database(self,question:str,answer:str,type_of_question:str):
        conn=sqlite3.connect("database.db")
        cur=conn.cursor()
        cur.execute("INSERT INTO answers (type,question,answer) VALUES (%s,%s,%s)" %(type_of_question,question,answer))
        conn.commit()
        conn.close()
    def start_process(self):
        self.get_query_state()
        for state in self.query_states.states:
            self.thread_logger.info("正在处理 %s 的内容" %state.name)
            if state.is_finished==True:
                self.thread_logger.info("%s 已完成，正在跳过处理" %state.name)
            else:
                """              
                 1:阅读文章            2:视听学习              4:专项答题
                 5:每周答题            6:每日答题              7:分享
                 8:收藏                9:登录               1002:文章时长
                 10:订阅            1003:视听学习时长         11:发表观点
                 1004:连续学习达标    12:挑战答题             13:参加调查问卷活动
                 14:本地频道          15:强国运动           2001:系统补发
                 10001:争上游答题   2002:积分优化           2003:违规扣减
                 10004:双人对战
                """
                if state.rule_id==1 or state.rule_id==1002:
                    self.process_news()
                elif state.rule_id==2 or state.rule_id==1003:
                    self.process_videos()
                elif state.rule_id==4:
                    if self.enable_special_test==True:
                        self.process_special_test()
                elif state.rule_id==5:
                    if self.enable_weekly_test==True:
                        self.process_weekly_test()
                elif state.rule_id==6:
                    if self.enable_daily_test==True:
                        self.process_daily_test()
                elif state.rule_id in [7,8,9,10,11,1004,13,14,15,2001,2002,2003]:
                    self.thread_logger.info("%s 无需处理" %state.name)
                else:
                    self.thread_logger.error("暂不支持 %s 的处理" %state.name)
            self.update_requests_cookies_with_selenium()
            state.update_self_finish_status(session=self.request_session)
    def upload_database(self):
        # 找到或制造一个API
        #client=ipfshttpclient.connect("/ip4/127.0.0.1/tcp/25001")
        pass
    def exec_command(self,cmd:str):
        pass