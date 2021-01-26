# auto_xuexi_selenium

## 这是嘛玩意

使用selenium自动学习一些人生的经验  

## 依赖

- Edge Chromium/ Edge Legacy/ Chrome /Chromium /FireFox
- `pip install -r requirements-${system}.txt`

## 用法

执行，扫码，等结果  

## TODO

- 含有影视剧片段的视频在没有答案，需要手动处理的时候的下载问题  
- ~~独立核心逻辑，实现多系统兼容~~

## 配置文件介绍

- "allow_upload":是否允许上传数据库，默认打开  
- "browser_exec":浏览器执行文件位置，默认为""，使用系统默认位置  
- "browser_type":浏览器类型，可取范围：edge_legacy,edge_chromium,chrome,firefox，除Edge以外，其余浏览器请自行配置驱动和浏览器执行文件，Chrome和Chromium使用同一个配置，但Chromium需要手动指定浏览器执行文件为Chromium的可执行文件  
- "driver_exec":驱动执行文件位置，Edge为msedgedriver，其余浏览器自行配置
- "edge_version":Edge Chromium浏览器的版本号，不使用Edge Chromium则可以忽略  
- "enable_daily_test":启用每日测验  
- "enable_special_test":启用专项测验  
- "enable_weekly_test":启用每周测验  
- "is_debug":调试模式，打开后日志等级变为DEBUG  
- "qr_login":二维码登陆  
- "record_days":记录在数据库中的已读列表保存时间  
- "timeout":判断为“学习后无法加分”状态的超时。这个状态大概率是由于以前读过却没有被记录  

## LICENCE

![LICENCE.WTFPL]("https://www.wtfpl.net/wp-content/uploads/2012/12/logo-220x1601.png")
