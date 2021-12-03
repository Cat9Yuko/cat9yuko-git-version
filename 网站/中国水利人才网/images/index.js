// 获取时间
var date = new Date();
var localtime = "";
var weeks = ["日", "一", "二", "三", "四", "五", "六"]
var localYear = date.getFullYear();
var localMonth = date.getMonth() + 1;
var localDay = date.getDate();
var localWeek = date.getDay();
localtime = localYear + "年" + localMonth + "月" + localDay + "日" + "&nbsp;" + "星期" + weeks[localWeek];
$(".localtime").html(localtime);


// 导航
$(".nav-child").hover(function () {
    // $(this).find(".nav-more").addClass("act").siblings().removeClass("act");
    $(this).find(".nav-childs").stop().slideToggle();
});
var h3 = 0;
var h1 = $(".content").height();
var h2 = $(".w300").height();
h3 = h2 > h1 ? h2 : h1;
if(h2 > h1) {
    $(".content").height(h3);
}

console.log(h1 + ' ' + h2 + ' ' + h3);

$(document).ready(function () {
    $(".lf-nav-p a").each(function () {
        if (this.href == window.location.href) {
            $(this).css("color", "#1a74cc");
        }
        if (window.location.href.indexOf(this.href) > -1) {
            $(this).css("color", "#1a74cc");
        }
    })
});