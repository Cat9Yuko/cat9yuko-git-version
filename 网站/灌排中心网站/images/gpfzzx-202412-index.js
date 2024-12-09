// 显示时间
moment.locale('zh-cn')
var str1  = moment().format('ll')
var str2 = moment().format('dddd')
var time = str1 +' '+ str2
$("#time").html(time)