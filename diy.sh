#!/usr/bin/env bash
## Author:SuperManito
## Modified:2021-3-14

##############################  作  者  昵  称  （必填）  ##############################
# 使用空格隔开
author_list="acoolbook"

## 目前使用本人收集的脚本库

##############################  作  者  脚  本  地  址  URL  （必填）  ##############################
# 例如：https://raw.sevencdn.com/whyour/hundun/master/quanx/jx_nc.js
# 1.从作者库中随意挑选一个脚本地址，每个作者的地址添加一个即可，无须重复添加
# 2.将地址最后的 “脚本名称+后缀” 剪切到下一个变量里（my_scripts_list_xxx）
scripts_base_url_1=https://github.com/acoolbook/scripts/blob/main/

## 添加更多脚本地址URL示例：scripts_base_url_3=https://raw.sevencdn.com/SuperManito/JD-FreeFuck/main/

##############################  作  者  脚  本  名  称  （必填）  ##############################
# 将相应作者的脚本填写到以下变量中
my_scripts_list_1="jd_entertainment.js jd_shakeBean.js jd_axc.js jd_xxl_gh.js jd_factory_component.js jd_marketLottery.js jd_superDay.js jd_xmf.js jd_wish.js jx_nc.js jx_products_detail.js"

## 活动脚本名称1：百变大咖秀、摇京豆、东东爱消除、个护爱消除、京喜工厂Plus、京东超市-大转盘、超级品类日

## 目前使用本人收集的脚本库

##############################  随  机  函  数  ##############################
rand() {
  min=$1
  max=$(($2 - $min + 1))
  num=$(cat /proc/sys/kernel/random/uuid | cksum | awk -F ' ' '{print $1}')
  echo $(($num % $max + $min))
}
cd ${ShellDir}
index=1
for author in $author_list; do
  echo -e "开始下载第三方活动脚本"
  # 下载my_scripts_list中的每个js文件，重命名增加前缀"作者昵称_"，增加后缀".new"
  eval scripts_list=\$my_scripts_list_${index}
  #echo $scripts_list
  eval url_list=\$scripts_base_url_${index}
  #echo $url_list
  for js in $scripts_list; do
    eval url=$url_list$js
    echo $url
    eval name=$js
    echo $name
    wget -q --no-check-certificate $url -O scripts/$name.new

    # 如果上一步下载没问题，才去掉后缀".new"，如果上一步下载有问题，就保留之前正常下载的版本
    # 随机添加个cron到crontab.list
    if [ $? -eq 0 ]; then
      mv -f scripts/$name.new scripts/$name
      echo -e "更新 $name 完成...\n"
      croname=$(echo "$name" | awk -F\. '{print $1}')
      script_date=$(cat scripts/$name | grep "http" | awk '{if($1~/^[0-59]/) print $1,$2,$3,$4,$5}' | sort | uniq | head -n 1)
      if [ -z "${script_date}" ]; then
        cron_min=$(rand 1 59)
        cron_hour=$(rand 7 9)
        [ $(grep -c "$croname" ${ListCron}) -eq 0 ] && sed -i "/hangup/a${cron_min} ${cron_hour} * * * bash jd $croname" ${ListCron}
      else
        [ $(grep -c "$croname" ${ListCron}) -eq 0 ] && sed -i "/hangup/a${script_date} bash jd $croname" ${ListCron}
      fi
    else
      [ -f scripts/$name.new ] && rm -f scripts/$name.new
      echo -e "更新 $name 失败，使用上一次正常的版本...\n"
    fi
  done
  index=$(($index + 1))
done

##############################  删  除  失  效  的  活  动  脚  本  ##############################
## 删除旧版本失效的活动示例： rm -rf ${ScriptsDir}/jd_test.js
rm -rf ${ScriptsDir}/jd_jump_jump.js
rm -rf ${ScriptsDir}/jd_shake.js
rm -rf ${ScriptsDir}/jx_factory_component.js


##############################  修  正  定  时  任  务  ##############################
## 注意两边修改内容区别在于中间内容"jd"、"${ShellDir}/jd.sh"
## 修正定时任务示例：sed -i "s|bash jd jd_test|bash ${ShellDir}/jd.sh test|g" ${ListCron}
##                 sed -i "s|bash jd jd_ceshi|bash ${ShellDir}/jd.sh ceshi|g" ${ListCron}
sed -i "s|bash jd jd_entertainment|bash ${ShellDir}/jd.sh jd_entertainment|g" ${ListCron}
sed -i "s|bash jd jd_shakeBean|bash ${ShellDir}/jd.sh jd_shakeBean|g" ${ListCron}
sed -i "s|bash jd jd_axc|bash ${ShellDir}/jd.sh jd_axc|g" ${ListCron}
sed -i "s|bash jd jd_xxl_gh|bash ${ShellDir}/jd.sh jd_xxl_gh|g" ${ListCron}
sed -i "s|bash jd jd_factory_component|bash ${ShellDir}/jd.sh jd_factory_component|g" ${ListCron}
sed -i "s|bash jd jd_marketLottery|bash ${ShellDir}/jd.sh jd_marketLottery|g" ${ListCron}
sed -i "s|bash jd jd_superDay|bash ${ShellDir}/jd.sh jd_superDay|g" ${ListCron}
sed -i "s|bash jd jd_xmf|bash ${ShellDir}/jd.sh jd_xmf|g" ${ListCron}
sed -i "s|bash jd jd_wish|bash ${ShellDir}/jd.sh jd_wish|g" ${ListCron}
sed -i "s|bash jd jx_nc|bash ${ShellDir}/jd.sh jx_nc|g" ${ListCron}
sed -i "s|bash jd jx_products_detail.js|bash ${ShellDir}/jd.sh jx_products_detail.js|g" ${ListCron}
