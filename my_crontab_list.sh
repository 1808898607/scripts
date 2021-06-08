# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
56 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
#收集助力码
31 * * * * sh +x /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1

#关注店铺
7 9,17 * * * python3 /scripts/jd_follow.py  >> /scripts/logs/jd_follow.log 2>&1
##############短期活动##############
#女装盲盒 活动时间：2021-04-1到2021-04-31
35 0,8,22 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1
#京东极速版红包(活动时间：2021-5-5至2021-5-5)
13 0,23 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
#超级直播间红包雨(活动时间不定期，出现异常提示请忽略。红包雨期间会正常)
0,1 18 * * * node /scripts/jd_live_redrain.js >> /scripts/logs/jd_live_redrain.log 2>&1
#5G超级盲盒 活动时间：2021-03-19到2021-04-30
6 0,1-23/4 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1

#每日抽奖(活动时间：2021-05-01至2021-05-31)
9 0,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1

38 6,12 * 6 * node /scripts/jd_carnivalcity.js >> /scripts/logs/jd_carnivalcity.log 2>&1
9 2,9,18 * 6 * node /scripts/jd_carnivalcity.js >> /scripts/logs/jd_carnivalcity.log 2>&1
1 0-23/8,23 5 6 * node /scripts/jd_city.js >> /scripts/logs/jd_city.log 2>&1
23 0-23/1 * 6 * node /scripts/jd_zoo.js >> /scripts/logs/jd_zoo.log 2>&1
12,40 * * 6 * node /scripts/jd_zooCollect.js >> /scripts/logs/jd_zooCollect.log 2>&1

#3 0-23/1 * * * node /scripts/jd_zoo.js >> /scripts/logs/jd_zoo.log 2>&1
#金榜创造营
18 0-23/8 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
#星推官
0 0-23/6 * * * node /scripts/jd_xtg.js >> /scripts/logs/jd_xtg.log 2>&1
4 0-23/9 * * * node /scripts/jd_xtg_help.js >> /scripts/logs/jd_xtg_help.log 2>&1

#金榜投票............... ...............2021-05-21...2021-12-31
40 0,21 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
#5G魔盒............(...............2021-06-2...2021-07-31)
0 0-23/3 * 6,7 * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1

#5 0-23/1 * 6 * node /scripts/jd_big_winner.js >> /scripts/logs/jd_big_winner.log 2>&1
#..................(5.31.........)
0 1,7,10 1-10 6 * node /scripts/jd_star_shop.js >> /scripts/logs/jd_star_shop.log 2>&1
3 0,6,20 1-18 6 * node /scripts/jd_mcxhd.js >> /scripts/logs/jd_mcxhd.log 2>&1
3 0,1,8 * * * node /scripts/jd_jxlhb.js >> /scripts/logs/jd_jxlhb.log 2>&1
##############长期活动##############
# 签到
4 0,17 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 东东超市兑换奖品
0,30 0 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 摇京豆
2 0,23 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 东东农场
15 8,12,20 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1
# 宠汪汪
35 */2,23 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
# 宠汪汪积分兑换京豆
0 0 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
59 7,15 * * * sleep 58; node conc /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
# 宠汪汪喂食
15 */1 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
# 宠汪汪邀请助力
10 13-20/1 * * * node /scripts/jd_joy_run.js >> /scripts/logs/jd_joy_run.log 2>&1
# 摇钱树
13 */2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 东东萌宠
2 8,13,19 * * * node /scripts/jd_pet.js >> /scripts/logs/jd_pet.log 2>&1
# 京东种豆得豆
16 8-23/1 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1
# 京东全民开红包
5 0-23/4 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
# 进店领豆
0 0,12 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
# 东东超市
21 0,1-23/2 * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
# 取关京东店铺商品
6 8 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 京豆变动通知
30 7 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 京东抽奖机
0 0,12,23 * * * node /scripts/jd_lotteryMachine.js >> /scripts/logs/jd_lotteryMachine.log 2>&1
# 京东排行榜
11 8,9,15 * * * node /scripts/jd_rankingList.js >> /scripts/logs/jd_rankingList.log 2>&1
# 天天提鹅
36 * * * * node /scripts/jd_daily_egg.js >> /scripts/logs/jd_daily_egg.log 2>&1
# 金融养猪
24 0-23/6 * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 点点券
20 0,20 * * * node /scripts/jd_necklace.js >> /scripts/logs/jd_necklace.log 2>&1
# 京喜工厂
33 7-23/1 * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1
50 23 * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1
# 东东小窝
26 6,18,22 * * * node /scripts/jd_small_home.js >> /scripts/logs/jd_small_home.log 2>&1
# 东东工厂
41 * * * * node /scripts/jd_jdfactory.js >> /scripts/logs/jd_jdfactory.log 2>&1
# 赚京豆(微信小程序)
36,56 0,19,22 * * * node /scripts/jd_syj.js >> /scripts/logs/jd_syj.log 2>&1
# 京东快递签到
22 1,18 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# 京东汽车(签到满500赛点可兑换500京豆)
0 0 * * * node /scripts/jd_car.js >> /scripts/logs/jd_car.log 2>&1
# 领京豆额外奖励(每日可获得3京豆)
1 0,6,20 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 微信小程序京东赚赚
16 0-5/1,11 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# crazyJoy自动每日任务
30 7,23 * * * node /scripts/jd_crazy_joy.js >> /scripts/logs/jd_crazy_joy.log 2>&1
# 京东汽车旅程赛点兑换金豆
#0 0 * * * node /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
# 导到所有互助码
11 7,19 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 口袋书店
23 7,12,19 * * * node /scripts/jd_bookshop.js >> /scripts/logs/jd_bookshop.log 2>&1
# 京喜农场
9 0,6,9,12,18,23 * * * node /scripts/jd_jxnc.js >> /scripts/logs/jd_jxnc.log 2>&1
# 签到领现金
5 */6,23 * * * node /scripts/jd_cash.js >> /scripts/logs/jd_cash.log 2>&1
# 京喜app签到
14 7,19 * * * node /scripts/jx_sign.js >> /scripts/logs/jx_sign.log 2>&1
# 闪购盲盒
13 10,20 * * * node /scripts/jd_sgmh.js >> /scripts/logs/jd_sgmh.log 2>&1
# 京东秒秒币
3 6,18 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
#美丽研究院
#21 7,12,19 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
#京东保价
31 10 * * 5 node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
#京东极速版签到+赚现金任务
7 0,5,17 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
#监控crazyJoy分红
2 12 * * * node /scripts/jd_crazy_joy_bonus.js >> /scripts/logs/jd_crazy_joy_bonus.log 2>&1
#京喜财富岛
54 */2 * * * node /scripts/jd_cfd.js >> /scripts/logs/jd_cfd.log 2>&1
# 删除优惠券(默认注释，如需要自己开启，如有误删，已删除的券可以在回收站中还原，慎用)
#20 9 * * 6 node /scripts/jd_delCoupon.js >> /scripts/logs/jd_delCoupon.log 2>&1
#家庭号
4 6,7,20 * * * node /scripts/jd_family.js >> /scripts/logs/jd_family.log 2>&1
#京东直播（又回来了）
30-50/5 12,23 * * * node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1      
#京小兑
6 7,15,21 * * * node /scripts/jd_jxd.js >> /scripts/logs/jd_jxd.log 2>&1
#京东健康社区
13 8,22 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log 2>&1
#京东健康社区收集健康能量
24,51 * * * * node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1
# 幸运大转盘
15 8,22 * * * node /scripts/jd_market_lottery.js >> /scripts/logs/jd_market_lottery.log 2>&1
# 津贴                                                                                                                
1 0,8,23 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1 
#龙猪猪红包雨
4 0 * * * node /scripts/sj_jd_redrainlzz.js >> /scripts/logs/sj_jd_redrainlzz.log 2>&1
4 0 * * * node /scripts/sj_jd_redrainme.js >> /scripts/logs/sj_jd_redrainlme.log 2>&1
# .....................                                                                                                     
13 0,9,18,22 * * * node /scripts/jd_jump.js >> /scripts/logs/jd_jump.log 2>&1 
#京喜牧场
45 */3 * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1 
#3 0,23 * * * node /scripts/jd_tcl.js >> /scripts/logs/jd_tcl.log 2>&1
#3 0,23 * * * node /scripts/jd_tcl.js >> /scripts/logs/jd_tcl.log 2>&1
#3 0,23 * * * node /scripts/jd_tcl.js >> /scripts/logs/jd_tcl.log 2>&1
#3 0,23 * * * node /scripts/jd_tcl.js >> /scripts/logs/jd_tcl.log 2>&1

