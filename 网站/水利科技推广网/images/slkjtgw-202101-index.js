// time
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var time = year + '年'+ month + '月'+ day +'日';
$(".time").html(time);

// 导航
$(".nav-child").hover(function () {
    $(this).addClass("act").siblings().removeClass("act");
    $(this).find(".nav-childs").stop().slideToggle();
});

$(document).ready(function () {
    $(".slick-mod").slick({
        dots: true,
        autoplay: true,
    });

    $(".slick-mod2").slick({
        dots: true,
        autoplay: true,
    });
    $(".slick-mod3").slick({
        dots: true,
        autoplay: true,
    });

})

$(".tabs .tab").hover(function () {
    $(this).addClass("act").siblings().removeClass("act");
    $(".tab-childs .tab-child").eq($(this).index()).addClass("act").siblings().removeClass("act");
});

function showOptionValue(option) {
    //alert(option.value);
    var address = option.value;
    if (address != "ts") {

        window.open(address, "_blank");

    } else {

        return;
    }
}


$(document).ready(function(){
    var flheight = $(".list-container > .fl").height();
    var frheight = $(".list-container > .fr").height();
    var minheight = 0;
    minheight = flheight > frheight ? flheight : frheight;
    $(".list-container .fr").css("min-height",minheight);
});

$(".btn a").click(function(){
    alert("正在开发中!")
});