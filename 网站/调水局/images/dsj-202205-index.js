$(function () {

    // 时间
    var date = new Date();
    var l_str = "";
    var l_year = date.getFullYear();
    var l_month = date.getMonth() + 1;
    var l_day = date.getDate();
    l_str += l_year + "年" + l_month + "月" + l_day + "日";
    $(".lotime").text(l_str);

    
    // more链接切换
})