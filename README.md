# auto_xuexi_selenium

## LICENCE

![LICENCE.WTFPL](https://img.shields.io/github/license/zhanghua000/auto_xuexi_selenium?logoColor=9cf&style=flat-square "WTFPL LICENCE")  

## 这是嘛玩意

使用selenium自动学习一些人生的经验  

## 依赖

- Edge Chromium/ Edge Legacy/ Chrome /Chromium /Firefox
- `pip install -r requirements-${system}.txt`

## 用法

执行，扫码，等结果  

## TODO

- 含有影视剧片段的视频在没有答案，需要手动处理的时候的下载问题  
- ~~独立核心逻辑，实现多系统兼容~~
- GUI极度不稳定，难以启动核心
- 多语言系统现在是一个空壳，等主要问题解决了再来搞
- 答案数据库共享方案待定

## 配置文件介绍

- "allow_upload":是否允许上传数据库，默认打开  
- "browser_exec":浏览器执行文件位置，默认为""，使用系统默认位置  
- "browser_type":浏览器类型，可取范围：edge_legacy,edge_chromium,chrome,firefox，除Edge Chromium以外，其余浏览器请自行配置驱动和浏览器执行文件，Chrome和Chromium使用同一个配置，但Chromium需要手动指定浏览器执行文件为Chromium的可执行文件  
- "driver_exec":驱动执行文件位置，各个浏览器请自行配置，为空可使用默认值
- "edge_version":Edge Chromium浏览器的版本号，不使用Edge Chromium则可以忽略且自动生成的配置文件将不存在此项  
- "enable_daily_test":启用每日测验  
- "enable_gui":启用GUI
- "enable_special_test":启用专项测验  
- "enable_weekly_test":启用每周测验  
- "is_debug":调试模式，打开后日志等级变为DEBUG且控制的浏览器将正常显示 
- "lang":语言字符串
- "qr_login":二维码登陆  
- "record_days":记录在数据库中的已读列表保存时间  
- "timeout":判断为“学习后无法加分”状态的超时。这个状态大概率是由于以前读过却没有被记录  
- "ui":GUI的一些外观和运行参数配置

## 参与

1. 任何修改请基于devel分支，只有在出现重要修复或成功解决问题后才能将devel分支的更改合并到main  
