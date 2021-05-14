/*京东到家果园任务脚本,支持qx,loon,shadowrocket,surge,nodejs
//用抓包抓 https://daojia.jd.com/html/index.html 页面cookie填写到下面,暂时不知cookie有效期
//抓多账号直接清除浏览器缓存再登录新账号,千万别点退出登录,否则cookie失效
//cookie只要里面的deviceid_pdj_jd=xxx-xxx-xxx;o2o_m_h5_sid=xxx-xxx-xxx关键信息
//8,11,16整点各运行一次
//boxjs订阅地址:https://gitee.com/passerby-b/javascript/raw/master/JD/passerby-b.boxjs.json

[Script]
cron "2 0,8,11,17 * * *" script-path=https://raw.githubusercontent.com/passerby-b/JDDJ/main/jddj_fruit.js,tag=京东到家果园任务
*/
let isNotify = true;//是否通知,仅限nodejs
let ckPath = './jddj_cookie.js';//ck路径

eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([4acdf-hj-mo-qsu-wyzA-WYZ]|[12]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1I $=l API("jddj_fruit");j 1V=\'\',d=\'\',1p=\'\';j 1w=\'30.\'+q.u(q.27()*(2q-28)+28);j 1x=\'114.\'+q.u(q.27()*(2q-28)+28);j 1W=q.u(q.27()*(1500-1d)+1d);j 1y=[],1h=\'\';1q=0,1J=0,1O=\'\',1P=\'\';!(y()=>{f(1y.1r==0){f($.1K.1L){delete 29.cache[2r];1y=29(2r)}A{j 1X=$.2s(\'#jddj_cookies\');f(!!1X){f(1X.2d(\',\')<0){1y.push(1X)}A{1y=1X.1M(\',\')}}}}f(1y.1r==0){g.h(\'\\r\\n请先填写1Y\');1e}f(!$.1K.1L){1Z=$.2s(\'#jddj_isNotify\')}A{1h=29(\'./1N\')}1E(j i=0;i<1y.1r;i++){g.h(\'\\r\\n★★★★★开始执行第\'+(i+1)+\'个账号,共\'+1y.1r+\'个账号★★★★★\');1V=1y[i];1q=0,1J=0;f(!1V.2e())2t;1F 2f={};1F 2u=1V.1M(\';\');2u.forEach(a=>{f(a.2d(\'=\')>-1)2f[a.1M(\'=\')[0].2e()]=a.1M(\'=\')[1].2e()});d=2f.deviceid_pdj_jd;o 2v();o $.1j(1d);o 2g(0);o $.1j(1d);j 19=o 2h();f(19.11==1){$.1h(\'第\'+(i+1)+\'个账号1Y过期\',\'请访问B://C.D.z/1Q/H.1Q抓取1Y\',{1R:\'B://C.D.z/1Q/H.1Q\'});f($.1K.1L&&\'\'+1Z+\'\'==\'F\'){o 1h.1N(\'第\'+(i+1)+\'个账号1Y过期\',\'请访问B://C.D.z/1Q/H.1Q抓取1Y\')}2t}o 2w();o $.1j(1d);o 2x(19);o $.1j(1d);o 2y();o $.1j(1d);o 2z();o $.1j(1d);1P=\'\';19=o 2h();1E(j H=0;H<19.k.1G.1r;H++){j 20=19.k.1G[H];f(20.1s==\'23eee1c043c01bc\'){1O+=\'@\'+20.uniqueId+\',\';g.h(\'\\n好友互助码:\'+1O);1P=\',助力\'+20.finishNum+\'/\'+20.totalNum;break}}o 2g(2);o $.1j(1d)}$.1h(\'京东到家果园互助码:\',\'\',1O);f($.1K.1L){j 1h=29(\'./1N\');1h.1N(\'京东到家果园互助码:\',1O)}})().1f(y(e)=>{g.h(\'\',\'❌失败! 原因:\'+e+\'!\',\'\');f($.1K.1L&&\'\'+1Z+\'\'==\'F\'){1h.1N(\'京东到家果园\',\'❌失败! 原因:\'+e+\'!\')}}).2A(()=>{$.done()});y 1k 2v(){1e l 1t(y v=>{1i{j s=J(\'B://C.D.z/K?12=\'+q.u(l w())+\'&L=H5&M=N&O=&P=8.7.6&jdDevice=&Q=mine%2FgetUserAccountInfo&m=%R%22refPageSource%22:%22%22,%22fromSource%22:2,%22pageSource%22:%2B%22,%22ref%22:%22%22,%22ctp%22:%2B%22%S&jda=&13=\'+d+q.u(l w())+\'&T=\'+d+\'&U=\'+d,\'\');$.G.V(s).I(p=>{j 4=W.Y(p.m);f(4.11==0){1i{1p=4.k.userInfo.userBaseInfo.nickName;g.h("●●●"+1p+"●●●")}1f(E){1p=\'昵称获取失败\'}}});v()}1f(E){g.h(\'\\n【个人信息】:\'+E);v()}})}y 1k 2h(){1e l 1t(y v=>{1i{j s=J(\'B://C.D.z/K?12=\'+q.u(l w())+\'&Q=1l%2Flist&14=F&m=%R%1m%22%3A%2D%22%2C%1n%22%1o%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+\'&T=\'+d+\'&U=\'+d,\'\');$.G.V(s).I(p=>{j 4=W.Y(p.m);v(4)})}1f(E){g.h(\'\\n【任务列表】:\'+E);v({})}})}y 1k 2z(){1e l 1t(y v=>{1i{j s=J(\'B://C.D.z/K?12=\'+q.u(l w()),\'Q=2a%2Fwatering&14=F&2E=2F&m=%R%22waterTime%22%1o%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+\'&T=\'+d+\'&U=\'+d);j 2i=1,2j=0;do{2j++;g.h(\'\\n**********开始执行第\'+2j+\'次浇水**********\');$.G.2G(s).I(p=>{j 4=W.Y(p.m);g.h(\'\\n【浇水】:\'+4.c);2i=4.11;f(4.11==0)1J++});o $.1j(1d)}while(2i==0);v()}1f(E){g.h(\'\\n【浇水】:\'+E);v()}})}y 1k 2H(){1e l 1t(y v=>{1i{j s=J(\'B://C.D.z/K?12=\'+q.u(l w())+\'&Q=signin%2FuserSigninNew&14=F&m=%R%22channel%22%3A%22daojiaguoyuan%22%2C%2I%22%3A\'+1W+\'%2C%2J%22%3A\'+1x+\'%2C%2K%22%3A\'+1w+\'%2C%22ifCic%22%3A0%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+\'&T=\'+d+\'&U=\'+d,\'\');$.G.V(s).I(p=>{j 4=W.Y(p.m);g.h(\'\\n【到家签到】:\'+4.c);v()})}1f(E){g.h(\'\\n【到家签到领水滴】:\'+E);v()}})}y 1k 2w(){1e l 1t(y v=>{1i{j 21;j s=J(\'B://C.D.z/K?12=\'+q.u(l w())+\'&Q=2a%2FgetWaterBottleInfo&14=F&m=%R%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(l w())+\'&T=\'+d+\'&U=\'+d,\'\');o $.G.V(s).I(p=>{1I 4=W.Y(p.m);f(4.11==0){21=4.k.21;g.h(\'\\n【收玻璃瓶水滴】:水瓶中有:\'+4.k.todayAccumulate+\'水滴\')}A{g.h(\'\\n【收玻璃瓶水滴】:水瓶信息错误\')}});f(21==0){s=J(\'B://C.D.z/K?12=\'+q.u(l w())+\'&Q=2a%2receiveWaterBottle&14=F&m=%R%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(l w())+\'&T=\'+d+\'&U=\'+d,\'\');o $.G.V(s).I(p=>{1I 4=W.Y(p.m);f(4.11==0){g.h(\'\\n【收玻璃瓶水滴】:水瓶收取成功\')}A{g.h(\'\\n【收玻璃瓶水滴】:水瓶收取错误\')}})}A f(21==1){g.h(\'\\n【收玻璃瓶水滴】:水瓶已经收取过\')}A{g.h(\'\\n【收玻璃瓶水滴】:水瓶状态错误或暂不可收取:\')}v()}1f(E){g.h(\'\\n【收玻璃瓶水滴】:\'+E);v()}})}y 1k 2y(){1e l 1t(y v=>{1i{j 2b=[],1H=\'\';o $.G.V({1R:\'B://gitee.z/passerby-b/javascript/raw/master/test/sharecode.js\'}).I(p=>{1H=p.m});1i{o $.G.V({1R:\'G://107.172.97.176:8080/queryJddjCode\'}).I(p=>{1H+=p.m})}1f(E){}f(!!1H){1H=1H.substr(0,1H.1r-1);2b=1H.1M(\',\')}j 2k=2b[q.u(q.27()*(2b.1r-1)+0)];j s=J(\'B://C.D.z/K?1w=\'+1w+\'&1x=\'+1x+\'&2L=\'+1w+\'&2M=\'+1x+\'&2N=\'+1W+\'&T=\'+d+\'&U=\'+d+\'&O=2O&mpChannel=2O&Z=5.0.0&L=mini&P=5.0.0&M=N&16=17&xcxVersion=9.2.0&14=F&business=djgyzhuli&Q=1l%2c&m=%R%1m%22%3A%2D%22%2C%1u%22%3A1201%2C%1v%22%3A%2223eee1c043c01bc%22%2C%1n%22%3A5%2C%22assistTargetPin%22%3A%22\'+2k.1M(\'@\')[0]+\'%22%2C%22uniqueId%22%3A%22\'+2k.1M(\'@\')[1]+\'%22%S\',\'\');$.G.V(s).I(p=>{j 4=W.Y(p.m);g.h(\'\\n【助力】:\'+4.c);v()})}1f(E){g.h(\'\\n【助力】:\'+E);v()}})}y 1k _runTask(19){1e l 1t(y v=>{1i{1E(j H=0;H<19.k.1G.1r;H++){1I a=19.k.1G[H];f(a.1g==2P||a.1g==2Q){j s=J(\'B://C.D.z/K?12=\'+q.u(l w())+\'&Q=1l%2l&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1g+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(l w())+\'&T=\'+d+\'&U=\'+d,\'\');o $.G.V(s).I(p=>{1F 4=W.Y(p.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.k.1D}A{c=4.c}g.h(\'\\n领取任务【\'+a.1c+\'】:\'+c)})}f(a.1S>-1){1E(j t=0;t<2m(a.1S);t++){o $.1j(1d);g.h(\'计时:\'+(t+1)+\'秒...\')}};s=J(\'B://C.D.z/K?12=\'+q.u(l w())+\'&Q=1l%2c&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1g+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(l w())+\'&T=\'+d+\'&U=\'+d,\'\');o $.G.V(s).I(p=>{1F 4=W.Y(p.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.k.1D}A{c=4.c}g.h(\'\\n任务完成【\'+a.1c+\'】:\'+c)});s=J(\'B://C.D.z/K?12=\'+q.u(l w())+\'&Q=1l%2n&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1g+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(l w())+\'&T=\'+d+\'&U=\'+d,\'\');o $.G.V(s).I(p=>{1F 4=W.Y(p.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.k.1D}A{c=4.c}g.h(\'\\n领取奖励【\'+a.1c+\'】:\'+c)})}v()}1f(E){g.h(\'\\n【执行任务】:\'+E);v()}})}1I 2R=[2P,2Q,2S,1105,1103];y 1k 2x(19){1e l 1t(y v=>{1i{1E(j H=0;H<19.k.1G.1r;H++){1I a=19.k.1G[H];f(a.1T==3||a.1T==2){g.h(\'\\n【\'+a.1c+\'】: 任务已完成,跳过做任务\')}A f(a.1g==502){o 2H()}A f(2R.includes(a.1g)){f(a.1T==0){j s=J(\'B://C.D.z/K?12=\'+q.u(l w())+\'&Q=1l%2l&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1g+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(l w())+\'&T=\'+d+\'&U=\'+d,\'\');o $.G.V(s).I(p=>{j 4=W.Y(p.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.k.1D}A{c=4.c}g.h(\'\\n领取任务【\'+a.1c+\'】:\'+c);1e});f(a.1S>-1){1E(j t=0;t<2m(a.1S);t++){o $.1j(1d);g.h(\'计时:\'+(t+1)+\'秒...\')}}}A{g.h(\'\\n【\'+a.1c+\'】: 任务已领取或不需要领取\')};s=J(\'B://C.D.z/K?12=\'+q.u(l w())+\'&Q=1l%2c&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1g+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(l w())+\'&T=\'+d+\'&U=\'+d,\'\');o $.G.V(s).I(p=>{j 4=W.Y(p.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.k.1D;a.1T=2}A{c=4.c}g.h(\'\\n任务完成【\'+a.1c+\'】:\'+c)})}A{g.h(\'\\n【\'+a.1c+\'】: 脚本无法执行此任务或任务不需要主动完成\')}f(a.1T==2||a.taskTypes==2S){s=J(\'B://C.D.z/K?12=\'+q.u(l w())+\'&Q=1l%2n&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1g+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(l w())+\'&T=\'+d+\'&U=\'+d,\'\');o $.G.V(s).I(p=>{j 4=W.Y(p.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.k.1D}A{c=4.c}g.h(\'\\n领取奖励【\'+a.1c+\'】:\'+c)})}A f(a.1T==3){g.h(\'\\n【\'+a.1c+\'】: 奖励已领取,跳过领奖励\')}A{g.h(\'\\n【\'+a.1c+\'】: 任务未完成,跳过领奖励\')}}v()}1f(E){g.h(\'\\n【执行任务】:\'+E);v()}})}y 1k runTask2(19){1e l 1t(y v=>{1i{1E(j H=0;H<19.k.1G.1r;H++){1I a=19.k.1G[H];f(a.1c.2d(\'限时\')>-1){j s=J(\'B://C.D.z/K?12=\'+q.u(l w())+\'&Q=1l%2l&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1g+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(l w())+\'&T=\'+d+\'&U=\'+d,\'\');o $.G.V(s).I(p=>{1F 4=W.Y(p.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.k.1D}A{c=4.c}g.h(\'\\n领取任务【\'+a.1c+\'】:\'+c)});f(a.1S>-1){1E(j t=0;t<2m(a.1S);t++){o $.1j(1d);g.h(\'计时:\'+(t+1)+\'秒...\')}};s=J(\'B://C.D.z/K?12=\'+q.u(l w())+\'&Q=1l%2c&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1g+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(l w())+\'&T=\'+d+\'&U=\'+d,\'\');o $.G.V(s).I(p=>{1F 4=W.Y(p.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.k.1D}A{c=4.c}g.h(\'\\n任务完成【\'+a.1c+\'】:\'+c)});s=J(\'B://C.D.z/K?12=\'+q.u(l w())+\'&Q=1l%2n&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1g+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(l w())+\'&T=\'+d+\'&U=\'+d,\'\');o $.G.V(s).I(p=>{1F 4=W.Y(p.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.k.1D}A{c=4.c}g.h(\'\\n领取奖励【\'+a.1c+\'】:\'+c)})}}v()}1f(E){g.h(\'\\n【执行任务】:\'+E);v()}})}y 1k 2g(2o){1e l 1t(y v=>{1i{j s=J(\'B://C.D.z:443/K?12=\'+q.u(l w()),\'Q=2a%2FinitFruit&14=F&2E=2F&m=%R%2I%22%3A\'+1W+\'%2C%2J%22%3A\'+1x+\'%2C%2K%22%3A\'+1w+\'%S&1w=\'+1w+\'&1x=\'+1x+\'&2L=\'+1w+\'&2M=\'+1x+\'&2N=\'+1W+\'&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(l w())+\'&T=\'+d+\'&U=\'+d);o $.G.2G(s).I(y p=>{j 4=W.Y(p.m);f(4.11==0){f(2o==0){1q=4.k.23.24;1O+=4.k.18.userPin}f(2o==2){1q=(1J*10)+4.k.23.24-1q;f(1q<0)1q=0;f(4.k.18.25==0){g.h(\'\\n京东到家果园【\'+1p+\'】:\'+4.k.18.1U+\'已成熟,快去收取!\');$.1h(\'京东到家果园\',\'【\'+1p+\'】\',\'京东到家果园\'+4.k.18.1U+\'已成熟,快去收取!\');f($.1K.1L&&\'\'+1Z+\'\'==\'F\'){o 1h.1N(\'京东到家果园【\'+1p+\'】\',\'京东到家果园\'+4.k.18.1U+\'已成熟,快去收取!\')}}f(4.k.18.25>0){j 26=\'次\';f(4.k.18.growingStage==5)26=\'%\';g.h(\'\\n京东到家果园【\'+1p+\'】:\'+4.k.18.1U+\',本次领取\'+1q+\'滴水,浇水\'+1J+\'次,还需浇水\'+4.k.18.25+26+4.k.18.2p+\',还剩\'+4.k.23.24+\'滴水\'+1P);$.1h(\'京东到家果园\',\'【\'+1p+\'】\',\'【果树信息】:\'+4.k.18.1U+\',本次领取\'+1q+\'滴水,浇水\'+1J+\'次,还需浇水\'+4.k.18.25+26+4.k.18.2p+\',还剩\'+4.k.23.24+\'滴水\'+1P);f($.1K.1L&&\'\'+1Z+\'\'==\'F\'){o 1h.1N(\'京东到家果园【\'+1p+\'】\',\'【果树信息】:\'+4.k.18.1U+\',本次领取\'+1q+\'滴水,浇水\'+1J+\'次,还需浇水\'+4.k.18.25+26+4.k.18.2p+\',还剩\'+4.k.23.24+\'滴水\'+1P)}}}}v()})}1f(E){g.h(\'\\n【果树信息】:\'+E);v()}2A{treeInfoTimes=F}})}1k J(1R,m){j s={1R:1R,headers:{\'Host\':\'C.D.z\',\'Content-Type\':\'application/x-www-form-urlencoded;\',\'Origin\':\'B://C.D.z\',\'Cookie\':1V,\'Connection\':\'keep-alive\',\'2T\':\'*/*\',\'User-Agent\':\'Mozilla/5.0 (2U; CPU 2U OS 14_1 2W Mac OS X) AppleWebKit/605.1.15 (KHTML, 2W Gecko) Mobile/15E148________appName=jdLocal&Z=iOS&commonParams={"sharePackageVersion":"2"}&djAppVersion=8.7.5&supportDJSHWK\',\'2T-Language\':\'zh-cn\'},m:m};1e s}',[],183,'||||data||||||item||msg|deviceid||if|console|log||let|result|new|body||await|response|Math||option||round|resolve|Date||async|com|else|https|daojia|jd|error|true|http|index|then|urlTask|client|platCode|appName|paidaojia|channel|appVersion|functionId|7B|7D|deviceToken|deviceId|get|JSON||parse|platform||code|_jdrandom|traceId|isNeedDealError||deviceModel|appmodel|activityInfoResponse|tslist|ios||taskTitle|1000|return|catch|taskType|notify|try|wait|function|task|22modelId|22plateCode|3A1|nickname|waterNum|length|taskId|Promise|22taskType|22taskId|lat|lng|cookies|modelId|encodeURIComponent|22subNode|3Anull|awardValue|for|var|taskInfoList|codestr|const|waterTimes|env|isNode|split|sendNotify|shareCode|hzstr|html|url|browseTime|status|fruitName|thiscookie|cityid|ckstr|cookie|isNotify|element|receiveStatus||userResponse|waterBalance|curStageLeftProcess|unit|random|10000|require|fruit|scodes|2Ffinished|indexOf|trim|jsonlist|treeInfo|taskList|waterStatus|waterCount|scode|2Freceived|parseInt|2FsendPrize|step|stageName|99999|ckPath|read|continue|params|userinfo|waterBottle|runTask|zhuLi|water|finally|22myinfo||22M10007|method|POST|post|sign|22cityId|22longitude|22latitude|lat_pos|lng_pos|city_id|wx_xcx|307|901|do_tasks|1102|Accept|iPhone||like'.split('|'),0,{}))

/*********************************** API *************************************/
function ENV() { const e = "undefined" != typeof $task, t = "undefined" != typeof $loon, s = "undefined" != typeof $httpClient && !t, i = "function" == typeof require && "undefined" != typeof $jsbox; return { isQX: e, isLoon: t, isSurge: s, isNode: "function" == typeof require && !i, isJSBox: i, isRequest: "undefined" != typeof $request, isScriptable: "undefined" != typeof importModule } } function HTTP(e = { baseURL: "" }) { const { isQX: t, isLoon: s, isSurge: i, isScriptable: n, isNode: o } = ENV(), r = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/; const u = {}; return ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"].forEach(l => u[l.toLowerCase()] = (u => (function (u, l) { l = "string" == typeof l ? { url: l } : l; const h = e.baseURL; h && !r.test(l.url || "") && (l.url = h ? h + l.url : l.url); const a = (l = { ...e, ...l }).timeout, c = { onRequest: () => { }, onResponse: e => e, onTimeout: () => { }, ...l.events }; let f, d; if (c.onRequest(u, l), t) f = $task.fetch({ method: u, ...l }); else if (s || i || o) f = new Promise((e, t) => { (o ? require("request") : $httpClient)[u.toLowerCase()](l, (s, i, n) => { s ? t(s) : e({ statusCode: i.status || i.statusCode, headers: i.headers, body: n }) }) }); else if (n) { const e = new Request(l.url); e.method = u, e.headers = l.headers, e.body = l.body, f = new Promise((t, s) => { e.loadString().then(s => { t({ statusCode: e.response.statusCode, headers: e.response.headers, body: s }) }).catch(e => s(e)) }) } const p = a ? new Promise((e, t) => { d = setTimeout(() => (c.onTimeout(), t(`${u} URL: ${l.url} exceeds the timeout ${a} ms`)), a) }) : null; return (p ? Promise.race([p, f]).then(e => (clearTimeout(d), e)) : f).then(e => c.onResponse(e)) })(l, u))), u } function API(e = "untitled", t = !1) { const { isQX: s, isLoon: i, isSurge: n, isNode: o, isJSBox: r, isScriptable: u } = ENV(); return new class { constructor(e, t) { this.name = e, this.debug = t, this.http = HTTP(), this.env = ENV(), this.node = (() => { if (o) { return { fs: require("fs") } } return null })(), this.initCache(); Promise.prototype.delay = function (e) { return this.then(function (t) { return ((e, t) => new Promise(function (s) { setTimeout(s.bind(null, t), e) }))(e, t) }) } } initCache() { if (s && (this.cache = JSON.parse($prefs.valueForKey(this.name) || "{}")), (i || n) && (this.cache = JSON.parse($persistentStore.read(this.name) || "{}")), o) { let e = "root.json"; this.node.fs.existsSync(e) || this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.root = {}, e = `${this.name}.json`, this.node.fs.existsSync(e) ? this.cache = JSON.parse(this.node.fs.readFileSync(`${this.name}.json`)) : (this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.cache = {}) } } persistCache() { const e = JSON.stringify(this.cache, null, 2); s && $prefs.setValueForKey(e, this.name), (i || n) && $persistentStore.write(e, this.name), o && (this.node.fs.writeFileSync(`${this.name}.json`, e, { flag: "w" }, e => console.log(e)), this.node.fs.writeFileSync("root.json", JSON.stringify(this.root, null, 2), { flag: "w" }, e => console.log(e))) } write(e, t) { if (this.log(`SET ${t}`), -1 !== t.indexOf("#")) { if (t = t.substr(1), n || i) return $persistentStore.write(e, t); if (s) return $prefs.setValueForKey(e, t); o && (this.root[t] = e) } else this.cache[t] = e; this.persistCache() } read(e) { return this.log(`READ ${e}`), -1 === e.indexOf("#") ? this.cache[e] : (e = e.substr(1), n || i ? $persistentStore.read(e) : s ? $prefs.valueForKey(e) : o ? this.root[e] : void 0) } delete(e) { if (this.log(`DELETE ${e}`), -1 !== e.indexOf("#")) { if (e = e.substr(1), n || i) return $persistentStore.write(null, e); if (s) return $prefs.removeValueForKey(e); o && delete this.root[e] } else delete this.cache[e]; this.persistCache() } notify(e, t = "", l = "", h = {}) { const a = h["open-url"], c = h["media-url"]; if (s && $notify(e, t, l, h), n && $notification.post(e, t, l + `${c ? "\n多媒体:" + c : ""}`, { url: a }), i) { let s = {}; a && (s.openUrl = a), c && (s.mediaUrl = c), "{}" === JSON.stringify(s) ? $notification.post(e, t, l) : $notification.post(e, t, l, s) } if (o || u) { const s = l + (a ? `\n点击跳转: ${a}` : "") + (c ? `\n多媒体: ${c}` : ""); if (r) { require("push").schedule({ title: e, body: (t ? t + "\n" : "") + s }) } else console.log(`${e}\n${t}\n${s}\n\n`) } } log(e) { this.debug && console.log(`[${this.name}] LOG: ${this.stringify(e)}`) } info(e) { console.log(`[${this.name}] INFO: ${this.stringify(e)}`) } error(e) { console.log(`[${this.name}] ERROR: ${this.stringify(e)}`) } wait(e) { return new Promise(t => setTimeout(t, e)) } done(e = {}) { console.log('done!'); s || i || n ? $done(e) : o && !r && "undefined" != typeof $context && ($context.headers = e.headers, $context.statusCode = e.statusCode, $context.body = e.body) } stringify(e) { if ("string" == typeof e || e instanceof String) return e; try { return JSON.stringify(e, null, 2) } catch (e) { return "[object Object]" } } }(e, t) }
/*********************************/
