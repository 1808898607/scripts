/*
百变大咖秀
活动入口：首页搜索-‘百变大咖秀’-底部最右侧按钮
请手动进入一次活动页面已确保能够自动抽奖
活动地址：https://lzdz-isv.isvjcloud.com/dingzhi/change/able/activity/3508994?activityId=dz2102100001340207

新手写脚本，难免有bug，能用且用。
多谢 whyour 大佬 指导

脚本内置了一个给作者任务助力的网络请求，默认开启，如介意请自行关闭。
助力活动链接： https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html
参数 helpAuthor = false

更新地址：https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_entertainment.js
============Quantumultx===============
[task_local]
#百变大咖秀
10 10,11 * * 2-5 https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_entertainment.js, tag=百变大咖秀,  enabled=true
================Loon==============
[Script]
cron "10 10,11 * * 2-5" script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_entertainment.js,tag=百变大咖秀
===============Surge=================
百变大咖秀 = type=cron,cronexp="10 10,11 * * 2-5",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_entertainment.js
============小火箭=========
百变大咖秀 = type=cron,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_entertainment.js, cronexpr="10 10,11 * * 2-5", timeout=3600, enable=true
*/

const $ = new Env('百变大咖秀');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '', originCookie = '', message = '';
let helpAuthor = false; //为作者助力的开关
const ACT_ID = 'dz2102100001340207';
const questionList = [
  { q: '0c32c1c0e2284331beec6910dc07a948', a: 'A:杨钰莹' },
  { q: '3576e8750b0b4322977420622aff18a0', a: 'C:王勉' },
  { q: '43669f0fcf074342934e1422a26d164a', a: 'B:杜海涛' },
  { q: '7ef574a3f282466ea36cbd4d0b6e1685', a: 'A:王晨艺' },
  { q: 'ade513a501ce48df9a4816566f24904e', a: 'B:沈凌' },
  { q: 'a8e35c93ad79460d871f42a10bce68d4', a: 'A:沈梦辰' },
  { q: 'afd88ed596324ba9a84129112d2fb8b6', a: 'C:锤娜丽莎' },
  { q: 'c6bacb5e9aac49f0bc4beae144decf80', a: 'B:玲花' },
  { q: 'e5421dda894e4b43863aad4fd524fd9f', a: 'C:杨迪' }
]
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
  let cookiesData = $.getdata('CookiesJD') || "[]";
  cookiesData = JSON.parse(cookiesData);
  cookiesArr = cookiesData.map(item => item.cookie);
  cookiesArr.reverse();
  cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
  cookiesArr.reverse();
  cookiesArr = cookiesArr.filter(item => !!item);
}
$.log('脚本版本 v0.4\n更新时间:2021-03-19 06:59\n仓库：https://www.github.com/i-chenzhe/qx');
   var _0xod3='jsjiami.com.v6',_0x516b=[_0xod3,'wqvCnsOadUg=','OsOZwr8=','DcOHwqHChi0=','wqtgw7N4w6U=','ZCvCqMKDKw==','w5ZqABlTwopyHQbCscOcZ8OwwrHCgyIqwo0Nwr7CpcOx','w7NXLMKNw4Q=','XMOLRMKewrZ5w50cwp9Wwrwcw6ALIcOIRg==','IVQFwqlnw4gyw4TDq8Oiw4bClcKhw67CjzA4EcOqQ2vCu8KYOsOTWcKnV3fDkcKQwrYI','b1fDmjHClMOwwpXCt8OvGQ50wqrCoMOsecOgYWI0wppuwqwlw7YhIW5yYw==','L8OywovCmDXCqcOwDMKsw4bCocKywpvCusOGZlDCtcKkbcOUwo8/wp4+esOsXmfDiVwoQsOIwrbDqcOYczAQFiJaw77CtXkIwp3DkyjCqj/CtT7CkDfCnMOEDxsowp7CoMOCw57DnMKtwqRww4nCmW12TMKSwoXDiW3Ct0ZRwrTDgXptwo3ClsK6AQrCjibCvjXDjsKDU1QLNsKKZsKJYcKuwrjDun/Cj8O6w6jCizjDt1/DuRPDvMKTwprCvUbCssOLw6cJCMOfGD3Cr8KuV8K+XyPCgsK8SsOmMA0KGsKXwqcww5XDqsOEwqE8wqhMwot8wrrCqg8JCcKhGBPChcKyS8ObGyEMAMOCHDvDo8KwQWxRPj3CiMKbSShQw656HyzCpMKIwoIiacOOw7tIT8KZCsORw6AMfcO7w7jDpMKVOsKqTMOkHT90HVEvRiXDvcKOFUnDh8KEC8OLLWdOQcKRw4LDsT4nM8O2wqRwNS3DlUHDgsODK0XDn8KVG8Kxw5HDklQ3F37DjsKbehTCuF0UdFXDmcKIwrrCsVBuwrp1w5cbwpAmw4UdaXjCtQ3DiFfCiMOJQMK0w4NPwqTDrcOUSnZ2wrIVccO8woDClnoqDMKhe8OEUsKaD8OFw7XCoiJQA8OVM8K3wrhnUsKrwrl8B8OTLWt0w4TDhVlTAQXCqsOJw7DCmzzCicK4ASI5D3jCnXbClcKBw6kmw7J7wqhGwqwUw484wqrDijkoOxXCh8KMSlJNYFVaw5LDiSPCkkAkfsKfwqIcM0VOJE4UVRHDi8OIwqY5wqTCqHHDkRAQw6tRQsOBH8KaSsOB','bcO4w4Jqw7vDpMOqwpjDuXtte8OecEzCq8Kzw7MVb8Kbw54ywoHDm8KEFcKqwqkjYw==','w7t3bMKow5g=','HcObwqbCoDHDpsOpDsKhw5jCusKyw5PDtw==','wqHDjcO5HSM=','XMOOw7N/w4A=','w5/CqsOLJz0=','wq/DgMO7CT/DuxMqw6DCiMOGZMOhw4jCn8KPw4Fww6oKw7PCigZswr54wpB+wo/Co8OnK2xpwqhXw4HDosO8wqfCg1nCuEvCrUrDj01WeMKfYcOWF8O/cDVCwpBMwokAwpjCnkQIYcKWw6duw4c=','w5xwb8KXw6E=','HcKpF24n','wppdSHk7','wo/ClsO+fGE=','KGIlwpRv','w5NuGTjDsQ==','wqPCqMOYw4zDlA==','HcK7wpvChQU=','wqUiwpg=','JsKzZFnCsFbDpsKfw6NmQ2bDvMKFwofDjcKxRBvDjsKUJ1NLwqPDr2IHT8OHWMKcw4TDlxp8w4LDg8OCwpnClh/Dph4=','wp/DoiBISQ==','wr7CnMOvw7PDnQ==','VMO6wr4/w48=','w7bDt8OXFMK+wqwyB8Op','w6ZHwooow5Q=','wqFIQsOiTRQ=','FWsXf8OvaA==','w6wXEcOyNTgCOQ==','McODRA==','ezjDlcKWw4/DtsOfB8Og','QsOqw5BOw4k=','w6HChB0Jw5w=','w7ZyEcKRVQ==','EMKUZGY+','wq/Cj8O8w7w=','BsKOwpfCncOKTQ==','w6bCi8OADTdfw6nCuUfDhMODfhI=','dEvDjzPCgsKVw5nDt8OnBg==','w7RhKTkv','AMKxX2TCqw==','P8KswpQ=','acOjw5Ffw7rCrA==','bSsvL8KX','EsKMeEEp','wrhaw45ww44=','wrvCj8O6w67DkA==','woHDtk3CncKS','w7IXHsOyNTg4','w6DCrsOHGhE=','w5/CjCkSw4g=','w4DCnMOTA8OZ','KsK9woTCiysyw63DlsKLwo1KbcORfMK5wrM=','w6FLdcKew5nDgSDDlF1GHsKBw7YvIRg6F8KYMcOXGcKHwp8zMcKfwqBwBsKldMKhwq/Dk31oXm0sYsOuw50HSw==','I8KqwrDCnwg=','w7pLc8KHw4TCnGbCnUU=','wqPDr1PCnsKV','w7vCtsOTCQs=','wrXCvhPDjMKL','JXx7wp7Cjw==','wpFHwpMXCQ==','w75TS8KEw4A=','FmwLew==','SMOnT8KLw68=','w6xXDAE=','PsKmYlrCpg==','NcONBsKsAA==','ezjDuMKKcgFhwoHDng==','McK1eQ==','w5JaSGHorq3mspvlpKvotoHvvbPoroXmoKrmnZHnvbvotKfphLLorrM=','w6oTDcOlNQ==','w6RMZg==','wrzCiMORdUw=','ZCPDgA==','L8OpYQBT','dMOpQsKqw5Q=','w5PDu8KZA8OE','w68BGsOkGSQtMg==','bMOlw6JUw7A=','wppvbFgpw6M1wosSF8OHw5VawqHDkQzCmsOfSMOkw5XDksKRe3N8BBxvI8OwPMOHwpNww6VbHyDCgsKNw43CsEbCk8OVwqrCg3kcw6ZgXMOO','w7kCGw==','w57Cl8OfFghbw6nDpBfCqcKcOl8hVMOLEcOLOMKtw5PCj8OKwo81aglkaMKPwp9Rw6rCh8Ktw4rCoFRWw5piKMKGwqwswpvDrcKjw414wr/Ch3DCoWLChcKYNcKNwqECenQkISgAw75LSw4DwrjCmzzCtAnDv8OkwrY0HMOLN8KmwpcRwoBtGis/OsOCX8O4wrZTZQzCtEotwp7CkXkLwqEMI8Kyd1nDrD7CsMKXw5zDusKJa8KKwqHDsMKewrrDusOFWlDDjsK7w4nDjCkjcw==','dcO1woA1worCqE8tFz5ASydcw6/CilA=','TMOnw6JYw40=','w7cXUsO3ICNlN8OnNUrCt8K2','LnzDtMOCST40eydvBU/DtcOMAGvDjMO1XV/DqMKbWBE7a8KaOD7Cp8O7woUfwocwwr5FH8KGSDjCpMKFwo7DqsKfw5wZw7zDm8Ofe8OKw4rCi8Kbwo3Djw==','wr5nw55xw7s=','wpvDnR8=','w5Z/AyYMwpE=','wpotwr0Cw7k=','OcKowoDChC01w6k=','I8KQwrDDnMOW','TifDpsKbw4I=','w6gXC8O1Py4u','bC3Dk8Ke','w4LCg8O8G8O6w5QXw4A=','wpB6a00Twrd8w4s=','w5R5BwgQwoJsDg==','NMOowoLCq8Ot','wqfCgcOvw5jDh28=','fsKHw4kWwqk=','wpFKU1gK','Sh/DoMKlw4w=','5Lmz5Li/6L2f5Zuo5LiS56u/5pW55o2y','w7RMCwXDhDnCi0FPT8Onw5ZAHsKdQk3CrQnDrwtIEXRRSsK/H3bDmDxHwq8zwrZqGMKgw6zDrX3Cgyc=','w7jClwkvw6U=','LsKewqnCl8Os','LVcS','wqLCshfDmg==','w7IGC8OmI3BkcsOhfkjCtsO1w5DCvXvDl8KgwoVqaMK8WMKHw5cAGMKsw4xfw5plw4jDh8KnEQ9bOkrDscK7Lw==','w71/PSXDpA==','w7BdERLDg2s=','JMK6wr/CsjE=','wpLDh8OqCwLCoFFg','wovDvARzVA==','wrrDul7CrcKq','X8KRw5YMwq8=','bMO/w7p1w6/Ct8Kr','wqh3wqISMQhAXQ==','w44XOMOYFQ==','w6DCmkQMEsOxYeW8nuWnjOOBjeS7luS7lei1qeWMmg==','wq7DmsOrHDQ=','wpxye0MUwrh3w4E=','wr/DtnFrwq4Iw64tVU8=','X8KDw4U=','wrFCw6ZT','44G25o+T56WC44Cew4Vjw4EXWwXltqLlpL3mlIA=','5Li65Li66Lee5Y6s','eQbCtMKoIg==','PcKqwpDDvcOUFcOUNA==','XT/Dr8KRUgdlwoI=','w5Xor5TphYbmlobnm6/lv5Dojr7lj4o6wo5ePcKdw4ZiQ8O0RMKUwrdtV2lzHMK1w5TDj8KlV25vw7PClsKeS00Gw4DCmMOzTsOUwpfDinIewp0ZEsKsOQ==','woLDhBpWS8OhZDFlOBvCp2HCgMOoAwIiKSvCpcOpRA7Ci8O2XlNPFVnCmMOcLMO8woXCv8OZw4vDrcKpwpID','BsOSEcKlPsOY','LsK/cGghOHgeAxI=','fgnCvcKo','ccOgwoYuw4/DreW3meWlueaUuXIMHw==','woLDqE/CvMKMFXE3','5Lqp5LqQ6LaQ5Y+t','w7zCsj8kw7w=','w7EJZMOMw6c=','w7nCk8OAA8O/','L3vDjsOdXmE=','GMKPwrjCkQc=','KmfDpw==','NW3DrsOWdGtvPSl5','6Lys6KO05a+n5omc','wrrDqE0=','6L2F6KKQ5a+X5omR','5aSU5YO75pyC54Gf5Ye15LqX6KSG6L6m6LS35LuP','IsKodw==','UgLDqMKNw7E=','wprCrsOMeUI=','w60BSg==','w6o+5aew6LWcXknljrLlm5jDk1w=','dMOmwockw4rDpFI=','woFqS1w8','KcO8wpnCuz0=','w4QNK3d3wrLDoyp7XA==','eQwKSsKNwr49KMKDcMOsWg==','ZlPDni3CjsKpw5vDrMOqDAQhw7/DpMOoeMK5JXctwoJgw60/w7EpamN+YcOWwpAs','WsKEw5YfwrTDqzEKwpxUG8O5asKSw70DD8K7w7Y=','wqbDhMO/FSXCol1xw6XCncOMMcKmw5LCg8KXw4M5w60Zw6HCnUVzwqd9w5dzw4zDrsOiYC8=','wpbDnAo8wqfCosOCw5vDrjLCi8Kawo45IGfCt8OPw7DDsFctKVPCqMKiw57DnMK+wqfCjcO3w5N+GsKwAi5HecOaVMKtQMK4w4LDmTMjwqvDrQh2w6HDgsKTMEHDgT7CvTHCgW46f8K4wog4w4Ffw4J4w7gVwrvDhcKmwqoLwo9Pwr9iBMOTOsOVasODcnx7NsKjw57Cvj4OwoTDqiTDiMKrwocFQMK8w6sbD8KMw7zDq2AeexgRAVkGw6vDj8OULC8hOcOiR8OQw7/CshHDohvDt2xuw4LCtcOvwqg7w5MCIhfCnUotKcOewpDCv8OQw65rw4fDt2HDs8OAag9zHsKiZi/CjMO7eMKfYHNEw6NswqPCmsOJwpvCm8K1w6PCmG4RKsKiDcKAw7NMH8KawqnDi8KGwr3Ch8O1w67Ck8K4NxMBwqAcwr9/w7nDjDsgw47DsTHDucKUNHXDtMK+w63DumZMZnbCh8KWHhzCgsOlw5DCiyXDgmUOW8OBw7bDqWrDvQrCjsOXdmbDiid8M8Omw5nCs8ONJsKTw6zDiGFEw4/Dky9NVMK5Y3RjwoUpwrQGwpsiwrUlw7XDsUY=','b8OWw6zCs8K6woTCiEXCnQHCssKSVgNLw5PCsQ==','w7jCqxcHw40=','w792KATDmA==','NcKPwrHDsMOo','SMKBw5YfwqY=','wqPDv8O9Nig=','wrFIUMO5','wrzCj8Ohw6k=','N0UcwrE=','w69twpkfw6Q=','GMOANsK+','RMKyw648wrM=','wrDDlcOmDQ==','HMKpwrXCqcOK','wrvCshPDiw==','TsOCSMKcw4kxw5gLwpx5wrIMw6A=','AmoWaMOcZMOHU0YBI2cpwqhCw6rCgzQYY8Khw616HxMmd8KnbcKLCG/DuRg=','c8Oswp0sw5DDoV8xODYc','w7zClBkrw7U=','JMOPwrvCvcOswozDqFDDhg==','T8OFdcKCw7M=','w4QYMzNg','5aW45Y2H5Yif5YqB56KJ44OOw6U=','KUPDucOocA==','wrF/wqgN','w7fCl8OvEAY=','O8ObHMOq','IsO9KMKjU1tFYsOr','OsOSOsK4FMOcw4kN','GMKBwpLCk8Or','ZwnCucK5','wqs0wqInw6XCug==','B8OdwqLCvws=','w6VDwpY/w79ow4rClFrDrQ==','w7JZEhA=','5Lqk5LmQ6LaB5YyI','w4lLGgfDuWLDiQs=','wr3ku4TkuYPorq7igIzmn7Hmtrfli6nkuJzkvZnml6vnvpnvvarorLnlha3ms53lhL/kupvmtoDliqnjgI/igoc=','wo3DocOkFyc=','w5AnFMO4Ow==','w7IaX8O9w4XDp8KdZX0=','I8K0dw==','5Liq5LiP6K6X4oO65pyc5reC5Yqo5Lmm5LyV5pa257+1776B6K2G5YaE5rG95YW15Lmt5rW75YmM44GW4oKU','w6fDpsOEEw==','FnIMTcO0','wqrDpsOOOz4=','C2Yawqx/','GuS7hOS7jOi3q+WOrQ==','wp/DvHthwqTilLbojbPlvpA=','ainDhsKR','eQbCtsKsCA==','BcO7dAtb','DsOAJMOTw7M=','w4AUTMOlw6w=','KmLDs8OhQg==','wonDiw4+woTDscOKw7nDox7CisKbw5A=','w6JyF8KD','w6bCtDozw6F9wqdoGyA=','Ti3DpMKoVw==','wolJUsOORQ==','KcO5wo0=','w5B1FxbDmQ==','wp/DpcO2DBQ=','woJ6als/','w7hZCxQ=','w6nDrMOC','55eu5oip44OR','w7vCtTgqw6pDwqli','wpjDmR8t','LcOFTQdsFA==','YcOtw4J7','JcKkwpfCjAwww6HDhw==','M8OLwqzCrg==','Cmwf','PMKcwoDCsCA=','AsKfwpvCnsO7','WsKEw4ALwoI=','PEzDocOGWw==','wonCrsOKaU8=','wohJfVs=','w4pxFhAb','fAfCtw==','FMOcbhl0','LsO6wrXCmsOz','w4jDh8KaB8OC','w7lOdcKsw7g=','wr/Cvh3Dj8Kr','AUB/wpbCucKxVlJwOcKWXcO5w77CnlPDkh/CrAJpwqLDmTbDtMKuw5lYwqLD
