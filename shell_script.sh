#!/usr/bin/env bash
## CUSTOM_SHELL_FILE for https://gitee.com/lxk0301/jd_docker/tree/master/docker
### 编辑docker-compose.yml文件添加: - CUSTOM_SHELL_FILE=https://raw.githubusercontent.com/monk-coder/dust/dust/shell_script_mod.sh
#### 容器完全启动后执行 docker exec -it jd_scripts /bin/sh -c 'crontab -l' 查看目前修行的经书

function sj(){
    # https://github.com/monk-coder/dust
    rm -rf /acoolbook /scripts/sj_*
    git clone https://github.com/acoolbook/scripts.git /acoolbook
    cp /acoolbook/jddj_cookie.js /scripts/jddj_cookie.js
    # 拷贝脚本
    for jsname in $(find /acoolbook -name "*.js" | grep -vE "\/backup\/"); do cp ${jsname} /scripts/sj_${jsname##*/}; done
    # 匹配js脚本中的cron设置定时任务
    for jsname in $(find /acoolbook -name "*.js" | grep -vE "\/backup\/"); do
        jsnamecron="$(cat $jsname | grep -oE "/?/?cron \".*\"" | cut -d\" -f2)"
        test -z "$jsnamecron" || echo "$jsnamecron node /scripts/sj_${jsname##*/} >> /scripts/logs/sj_${jsname##*/}.log 2>&1" >> /scripts/docker/merged_list_file.sh
    done
}
#cp /acoolbook/jddj_cookie.js /scripts/jddj_cookie.js
#echo "3 0,6 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX)); node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1" >> /scripts/docker/merged_list_file.sh
echo "10 2,15 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX)); node /scripts/sj_jd_mc.js >> /scripts/logs/sj_jd_mc.js.log 2>&1" >> /scripts/docker/merged_list_file.sh
echo "20 4,17 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX)); node /scripts/sj_jd_mc.js >> /scripts/logs/sj_jd_mc.js.log 2>&1" >> /scripts/docker/merged_list_file.sh
echo "30 6,19 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX)); node /scripts/sj_jd_mc.js >> /scripts/logs/sj_jd_mc.js.log 2>&1" >> /scripts/docker/merged_list_file.sh
echo "40 8,21 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX)); node /scripts/sj_jd_mc.js >> /scripts/logs/sj_jd_mc.js.log 2>&1" >> /scripts/docker/merged_list_file.sh
echo "50 10,23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX)); node /scripts/sj_jd_mc.js >> /scripts/logs/sj_jd_mc.js.log 2>&1" >> /scripts/docker/merged_list_file.sh
#sed -i 's/jOkIZzWCgGa9NfPuHBSx1A/AkOULcXbUA_8EAPbYLLMgg/g' /scripts/jd_speed_redpocke.js

#apk add nodejs-current
#转换win换行符-Linux
dos2unix /scripts/docker/merged_list_file.sh
#git config pull.ff false
git config pull.rebase false

function main(){
    # 首次运行时拷贝docker目录下文件
    [[ ! -d /jd_diy ]] && mkdir /jd_diy && cp -rf /scripts/docker/* /jd_diy
    # DIY脚本执行前后信息
    a_jsnum=$(ls -l /scripts | grep -oE "^-.*js$" | wc -l)
    a_jsname=$(ls -l /scripts | grep -oE "^-.*js$" | grep -oE "[^ ]*js$")
    sj
    b_jsnum=$(ls -l /scripts | grep -oE "^-.*js$" | wc -l)
    b_jsname=$(ls -l /scripts | grep -oE "^-.*js$" | grep -oE "[^ ]*js$")
    # DIY脚本更新TG通知
    info_more=$(echo $a_jsname  $b_jsname | tr " " "\n" | sort | uniq -c | grep -oE "1 .*$" | grep -oE "[^ ]*js$" | tr "\n" " ")
    [[ "$a_jsnum" == "0" || "$a_jsnum" == "$b_jsnum" ]] || curl -sX POST "https://api.telegram.org/bot$TG_BOT_TOKEN/sendMessage" -d "chat_id=$TG_USER_ID&text=DIY脚本更新完成：$a_jsnum $b_jsnum $info_more" >/dev/null
    # LXK脚本更新TG通知
    lxktext="$(diff /jd_diy/crontab_list.sh /scripts/docker/crontab_list.sh | grep -E "^[+-]{1}[^+-]+" | grep -oE "node.*\.js" | cut -d/ -f3 | tr "\n" " ")"
    test -z "$lxktext" || curl -sX POST "https://api.telegram.org/bot$TG_BOT_TOKEN/sendMessage" -d "chat_id=$TG_USER_ID&text=LXK脚本更新完成：$(cat /jd_diy/crontab_list.sh | grep -vE "^#" | wc -l) $(cat /scripts/docker/crontab_list.sh | grep -vE "^#" | wc -l) $lxktext" >/dev/null
    # 拷贝docker目录下文件供下次更新时对比
    cp -rf /scripts/docker/* /jd_diy
}

main
