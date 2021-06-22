#!/bin/env python3
# -*- coding: utf-8 -*
'''
项目名称: JD-Script / jd_getFollowGift 
Author: Curtin
功能：
Date: 2021/6/6 上午7:57
'''
##################################
#cookie填写，注意：ck优先读取ENV > JDCookies.txt > 再到此值
cookies = ''
#TG 推送
# tg机器人token
TG_BOT_TOKEN = ''
#tg用户id
TG_USER_ID = ''
TG_PROXY_IP = ''
TG_PROXY_PORT = ''
TG_API_HOST = ''
#微信推送加
PUSH_PLUS_TOKEN = ''
#Bark 推送
BARK = ''

#######################################
version = 'v1.0.0 Beta'
readmes = """
# JD 关注有礼

##  目录结构
    JD-Script/                  #主仓库
    |-- getFollowGifts                # 主目录
    |   |-- jd_getFollowGift.py       # 主代码 （必要）
    |   |-- JDCookies.txt             # 存放JD cookie，一行一个ck
    |   |-- Readme.md                 # 说明书
    |   `-- start.sh                  # shell脚本（非必要）
    `-- README.md


### `【兼容环境】`
    1.Python3.6+ 环境
    2.兼容ios设备软件：Pythonista 3、Pyto(已测试正常跑，其他软件自行测试)   
    3.Windows exe 

    安装依赖模块 :
    pip3 install requests
    执行：
    python3 jd_getFollowGift.py


## `【更新记录】`
    2021.6.6：（v1.0.0 Beta）
        * Test


###### [GitHub仓库 https://github.com/curtinlv/JD-Script](https://github.com/curtinlv/JD-Script) 
###### [TG频道 https://t.me/TopStyle2021](https://t.me/TopStyle2021)
###### [TG群 https://t.me/topStyle996](https://t.me/topStyle996)
###### 关注公众号【TopStyle】
![TopStyle](https://gitee.com/curtinlv/img/raw/master/gzhcode.jpg)
# 
    @Last Version: %s

    @Last Time: 2021-06-06 07:57

    @Author: Curtin
#### **仅以学习交流为主，请勿商业用途、禁止违反国家法律 ，转载请留个名字，谢谢!** 

# End.
[回到顶部](#readme)
""" % version

################################ 【Main】################################
import time, os, sys, datetime
import requests
import re, json, base64
from urllib.parse import unquote, quote_plus

# 定义一些要用到参数
requests.packages.urllib3.disable_warnings()
scriptHeader = """

════════════════════════════════════════
║                                      ║
║      JD   关   注   有   礼           ║
║                                      ║
════════════════════════════════════════
@Version: {}""".format(version)
remarks = 'WELCOME'
######JD Cookie (多账号&分隔)




#######
notify_mode = []
message_info = ''''''
usergetGiftinfo = {}

def getCookie():
    global cookies
    ckfile = '/ql/config/cookie.sh'
    try:
        if os.path.exists(ckfile):
            cookies = ''
            with open(ckfile, "r", encoding="utf-8") as f:
                cks = f.read()
                f.close()
            if 'pt_key=' in cks and 'pt_pin=' in cks:
                r = re.compile(r"pt_key=.*?pt_pin=.*?;", re.M | re.S | re.I)
                cks = r.findall(cks)
                if len(cks) > 0:
                    for i in cks:
                        cookies += i
        else:
            with open(ckfile, "w", encoding="utf-8") as f:
                cks = "#多账号换行，以下示例：\npt_key=xxx;pt_pin=jd_xxx;\npt_key=yyy;pt_pin=jd_yyy;"
                f.write(cks)
                f.close()
            pass
    except Exception as e:
        print(f"【getCookie Error】{e}")
getCookie()
#  取ENV环境Ck 设置方法：export JD_COOKIE="你的ck"（多账号&分隔）
if "JD_COOKIE" in os.environ:
    if len(os.environ["JD_COOKIE"]) > 10:
        cookies = os.environ["JD_COOKIE"]
        print("已获取并使用Env环境 Cookie")

if "TG_BOT_TOKEN" in os.environ:
        TG_BOT_TOKEN = os.environ["TG_BOT_TOKEN"]
        TG_USER_ID = os.environ["TG_USER_ID"]
        print("已获取并使用Env环境tgbot")
        
def message(str_msg):
    global message_info
    print(str_msg)
    message_info = "{}\n{}".format(message_info,str_msg)
    sys.stdout.flush()

def exitCodeFun(code):
    try:
        # exitCode = input()
        if sys.platform != 'linux':
            print("进程睡眠10分钟后自动退出。")
            time.sleep(600)
        exit(code)
    except:
        time.sleep(3)
        exit(code)

def nowtime():
    return datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')

#获取通知，
if PUSH_PLUS_TOKEN:
    notify_mode.append('pushplus')
if TG_BOT_TOKEN and TG_USER_ID:
    notify_mode.append('telegram_bot')
if BARK:
    notify_mode.append('bark')

#tg通知
def telegram_bot(title, content):
    try:
        print("\n")
        bot_token = TG_BOT_TOKEN
        user_id = TG_USER_ID
        if not bot_token or not user_id:
            print("tg服务的bot_token或者user_id未设置!!\n取消推送")
            return
        print("tg服务启动")
        if TG_API_HOST:
            url = f"{TG_API_HOST}/bot{TG_BOT_TOKEN}/sendMessage"
        else:
            url = f"https://api.telegram.org/bot{TG_BOT_TOKEN}/sendMessage"

        headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        payload = {'chat_id': str(TG_USER_ID), 'text': f'{title}\n\n{content}', 'disable_web_page_preview': 'true'}
        proxies = None
        if TG_PROXY_IP and TG_PROXY_PORT:
            proxyStr = "http://{}:{}".format(TG_PROXY_IP, TG_PROXY_PORT)
            proxies = {"http": proxyStr, "https": proxyStr}
        try:
            response = requests.post(url=url, headers=headers, params=payload, proxies=proxies).json()
        except:
            print('推送失败！')
        if response['ok']:
            print('推送成功！')
        else:
            print('推送失败！')
    except Exception as e:
        print(e)

#push推送
def pushplus_bot(title, content):
    try:
        print("\n")
        if not PUSH_PLUS_TOKEN:
            print("PUSHPLUS服务的token未设置!!\n取消推送")
            return
        print("PUSHPLUS服务启动")
        url = 'http://www.pushplus.plus/send'
        data = {
            "token": PUSH_PLUS_TOKEN,
            "title": title,
            "content": content
        }
        body = json.dumps(data).encode(encoding='utf-8')
        headers = {'Content-Type':'application/json'}
        response = requests.post(url=url, data=body, headers=headers).json()
        if response['code'] == 200:
            print('推送成功！')
        else:
            print('推送失败！')
    except Exception as e:
        print(e)
# BARK
def bark_push(title, content):
    print("\n")
    if not BARK:
        print("bark服务的bark_token未设置!!\n取消推送")
        return
    print("bark服务启动")
    try:
        response = requests.get('''https://api.day.app/{0}/{1}/{2}'''.format(BARK,title,quote_plus(content))).json()
        if response['code'] == 200:
            print('推送成功！')
        else:
            print('推送失败！')
    except Exception as e:
        print(e)
        print('Bark推送失败！')

def send(title, content):
    """
    使用 bark, telegram bot, dingding bot, serverJ 发送手机推送
    :param title:
    :param content:
    :return:
    """
    content = content + "\n\n" + footer
    for i in notify_mode:

        if i == 'telegram_bot':
            if TG_BOT_TOKEN and TG_USER_ID:
                telegram_bot(title=title, content=content)
            else:
                print('未启用 telegram机器人')
            continue
        elif i == 'pushplus':
            if PUSH_PLUS_TOKEN:
                pushplus_bot(title=title, content=content)
            else:
                print('未启用 PUSHPLUS机器人')
            continue
        elif i == 'bark':
            if BARK:
                bark_push(title=title, content=content)
            else:
                print('未启用Bark APP应用消息推送')
            continue
        else:
            print('此类推送方式不存在')


def iscookie():
    """
    :return: cookiesList,userNameList,pinNameList
    """
    isUpdate()
    cookiesList = []
    userNameList = []
    pinNameList = []
    if 'pt_key=' in cookies and 'pt_pin=' in cookies:
        r = re.compile(r"pt_key=.*?pt_pin=.*?;", re.M | re.S | re.I)
        result = r.findall(cookies)
        if len(result) >= 1:
            message("您已配置{}个账号".format(len(result)))
            u = 1
            for i in result:
                r = re.compile(r"pt_pin=(.*?);")
                pinName = r.findall(i)
                pinName = unquote(pinName[0])
                # 获取账号名
                ck, nickname = getUserInfo(i, pinName,u)
                if nickname != False:
                    cookiesList.append(ck)
                    userNameList.append(nickname)
                    pinNameList.append(pinName)
                else:
                    u += 1
                    continue
                u += 1
            if len(cookiesList) > 0 and len(userNameList) > 0:
                return cookiesList, userNameList, pinNameList
            else:
                message("没有可用Cookie，已退出")
                exitCodeFun(3)
        else:
            message("cookie 格式错误！...本次操作已退出")
            exitCodeFun(4)
    else:
        message("cookie 格式错误！...本次操作已退出")
        exitCodeFun(4)


# 检查是否有更新版本

def gettext(url):
    try:
        resp = requests.get(url, timeout=60).text
        if '该内容无法显示' in resp or '违规' in resp:
            return gettext(url)
        return resp
    except Exception as e:
        print(e)


def isUpdate():
    global footer,readme,uPversion,scriptName
    url = base64.decodebytes(
        b"aHR0cHM6Ly9naXRlZS5jb20vY3VydGlubHYvUHVibGljL3Jhdy9tYXN0ZXIvRm9sbG93R2lmdHMvdXBkYXRlLmpzb24=")
    try:
        result = gettext(url)
        result = json.loads(result)
        scriptName = result['name']
        isEnable = result['isEnable']
        uPversion = result['version']
        info = result['info']
        readme = result['readme']
        pError = result['m']
        footer = result['footer']
        getWait = result['s']
        if isEnable > 50 and isEnable < 150:
            if version != uPversion:
                print(f"\n当前最新版本：【{uPversion}】\n\n{info}\n")
                message(f"{readme}")
                exitCodeFun(888)
            else:
                message(f"{readme}")
                time.sleep(getWait)
        else:
            print(pError)
            exitCodeFun(888)

    except:
        message("请检查您的环境/版本是否正常！")
        exitCodeFun(888)

def outfile(filename, context):
    with open(filename, "w+", encoding="utf-8") as f1:
        f1.write(context)
        f1.close()


def getUserInfo(ck, pinName,userNum):
    url = 'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion?orgFlag=JD_PinGou_New&callSource=mainorder&channel=4&isHomewhite=0&sceneval=2&sceneval=2&callback=GetJDUserInfoUnion'
    headers = {
        'Cookie': ck,
        'Accept': '*/*',
        'Connection': 'close',
        'Referer': 'https://home.m.jd.com/myJd/home.action',
        'Accept-Encoding': 'gzip, deflate, br',
        'Host': 'me-api.jd.com',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1',
        'Accept-Language': 'zh-cn'
    }
    try:
        resp = requests.get(url=url, verify=False, headers=headers, timeout=60).text
        r = re.compile(r'GetJDUserInfoUnion.*?\((.*?)\)')
        result = r.findall(resp)
        userInfo = json.loads(result[0])
        nickname = userInfo['data']['userInfo']['baseInfo']['nickname']
        return ck, nickname
    except Exception:
        context = f"账号{userNum}【{pinName}】Cookie 已失效！请重新获取。"
        send(f"【{scriptName}】Cookie 已失效！", context)
        message(context)
        return ck, False
def getRemoteShopid():
    url = base64.decodebytes(
        b"aHR0cHM6Ly9naXRlZS5jb20vY3VydGlubHYvUHVibGljL3Jhdy9tYXN0ZXIvRm9sbG93R2lmdHMvc2hvcGlkLnR4dA==")
    try:
        rShopid = gettext(url)
        rShopid = rShopid.split("\n")
        return rShopid
    except:
        print("无法从远程获取shopid")
        exitCodeFun(999)
def createShopidList():
    global shopidNum ,shopidList
    shopidList = []
    shopids = getRemoteShopid()
    shopidNum = len(shopids) - 1
    for i in range(shopidNum):
        shopid = shopids[i]
        shopid = eval(shopid)
        shopidList.append(shopid)
def memoryFun(pinName,bean):
    global usergetGiftinfo
    try:
        try:

            usergetGiftinfo['{}'.format(pinName)]
            usergetGiftinfo['{}'.format(pinName)] += bean
        except:
            usergetGiftinfo['{}'.format(pinName)] = bean
    except Exception as e:
        print(e)

def buildBody(data):
    shopid = data['shopid']
    venderId = data['venderId']
    activityId = data['activityId']
    signbody = data['signbody']
    body = f'body=%7B%22follow%22%3A0%2C%22shopId%22%3A%22{shopid}%22%2C%22activityId%22%3A%22{activityId}%22%2C%22sourceRpc%22%3A%22shop_app_home_window%22%2C%22venderId%22%3A%22{venderId}%22%7D&client=apple&clientVersion=10.0.1&openudid=809409cbd5bb8a0fa8fff41378c1afe91b8075ad&{signbody}'
    return body

def drawShopGift(cookie, data):
    try:
        url = 'https://api.m.jd.com/client.action?functionId=drawShopGift'
        body = data
        headers = {
            'Accept-Encoding': 'gzip, deflate, br',
            'Cookie': cookie,
            'Connection': 'close',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*',
            'Host': 'api.m.jd.com',
            'User-Agent': 'JD4iPhone/167685 (iPhone; iOS 14.3; Scale/3.00)',
            'Referer': '',
            'Accept-Language': 'zh-Hans-CN;q=1'
        }
        response = requests.post(url, headers=headers, verify=False, data=body, timeout=60)
        if 'isSuccess' in response.text:
            return response.json()
        else:
            return 9
    except Exception as e:
        print(e)
        return 9
def getGiftresult(result, nickname, pinName, uNum):
    try:
        if result['isSuccess']:
            if result['result']:
                followDesc = result['result']['followDesc']
                giftDesc = result['result']['giftDesc']
                print(f"\t└账号{uNum}【{nickname}】{followDesc}>{giftDesc}")
                if result['result']['giftCode'] == '200':
                    try:
                        alreadyReceivedGifts = result['result']['alreadyReceivedGifts']
                        for g in alreadyReceivedGifts:
                            if g['prizeType'] == 4:
                                bean = g['redWord']
                                memoryFun(pinName, int(bean))
                            print(f"\t\t└获得{g['rearWord']}:{g['redWord']}")
                    except:
                        pass
    except Exception as e:
        print(f"getGiftresult Error {e}")


def start():
    print(scriptHeader)
    outfile("Readme.md", readmes)
    cookiesList, userNameList, pinNameList = iscookie()
    userNum = len(cookiesList)
    message(f"有效账号{userNum}个")
    message(f"开始：{scriptName}")
    createShopidList()
    message(f"获取到店铺：{shopidNum}")
    # print(shopidList)
    starttime = time.perf_counter()  # 记录时间开始
    for i in shopidList:
        body = buildBody(i)
        print(f"关注店铺【{i['shopid']}】")
        uNum = 1
        for ck, nickname, pinName in zip(cookiesList, userNameList, pinNameList):
           result = drawShopGift(ck, body)
           if result != 9:
               getGiftresult(result, nickname, pinName, uNum)
           else:
               uNum += 1
               break
           uNum += 1
    endtime = time.perf_counter()  # 记录时间结束
    message("\n###【本次统计 {}】###\n".format(nowtime()))
    all_get_bean = 0
    n = 1
    for name, pinname in zip(userNameList, pinNameList):
        try:
            userCountBean = usergetGiftinfo['{}'.format(pinname)]
            message(f"账号{n}:【{name}】\n\t└收获【{userCountBean}】京豆")
            all_get_bean += userCountBean
        except Exception as e:
            message(f"账号{n}:【{name}】\n\t└收获【0】京豆")
        n += 1
    message(f"\n本次总累计获得：{all_get_bean} 京豆")
    message("\n------- 总耗时 : %.03f 秒 seconds -------" % (endtime - starttime))
    print("{0}\n{1}\n{2}".format("*" * 30, scriptHeader, remarks))
    send(f"【{scriptName}】", message_info)
    exitCodeFun(0)

if __name__ == '__main__':
    start()
