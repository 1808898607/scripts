#!/bin/sh
#自定义clone一个仓库示例脚本
 function initCustRepo() {
     git clone https://github.com/acoolbook/scripts.git /custRepo
 }

  if [ ! -d "/custRepo/" ]; then
     echo "未检查到custRepo仓库脚本，初始化下载相关脚本"
     initShylocks
 else
     echo "更新custRepo脚本相关文件"
     git -C /custRepo reset --hard
     git -C /custRepo pull --rebase
 fi

# #自定义增加crontab任务示例
# #临时增加红包雨
# echo "59,0,1,2,3,4,5 0,9,11,13,15,17,19,20,21,22,23 * * *  node /scripts/jd_live_redrain_offical.js >> /scripts/logs/jd_live_redrain_offical.log 2>&1" >> /scripts/docker/merged_list_file.sh
# echo "59,0,1,2,3,4,5 0,9,11,13,15,17,19,20,21,22,23 * * *  node /scripts/jd_live_redrain_offical_mod.js >> /scripts/logs/jd_live_redrain_offical_mod.log 2>&1" >> /scripts/docker/merged_list_file.sh
# echo "59,0,1,2,3,4,5 0,9,11,13,15,17,19,20,21,23 3,5,20-30/1 1,2 * node /scripts/jd_live_redrain_nian.js >> /scripts/logs/jd_live_redrain_nian.log 2>&1" >> /scripts/docker/merged_list_file.sh
# echo "29,30,31,32,33 12-23/1 * * * node /scripts/jd_live_redrain_half.js >> /scripts/logs/jd_live_redrain_half.log 2>&1" >> /scripts/docker/merged_list_file.sh
# echo "59,0,1,2,3,4,5 19-21/1 * * * node /scripts/jd_live_redrain2.js >> /scripts/logs/jd_live_redrain2.log 2>&1" >> /scripts/docker/merged_list_file.sh
# echo "29,30,31,32,33 20-23/1 28 1 * node /scripts/jd_live_redrain.js >> /scripts/logs/jd_live_redrain.log 2>&1" >> /scripts/docker/merged_list_file.sh
