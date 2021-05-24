# 东东超市兑换奖品
0,30 0 * * * node conc /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
59 23 * * * sleep 58; node conc /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
59 23 * * * sleep 59; node conc /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 宠汪汪积分兑换京豆
#0 0 * * * node  /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
4 0 * * * sleep 59; node conc /scripts/jd_carnivalcity.js >> /scripts/logs/jd_sjkhc.log 2>&1

# 京东汽车旅程赛点兑换金豆
#0 0 * * * node conc /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
#59 7,15 * * * sleep 58; node conc /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
