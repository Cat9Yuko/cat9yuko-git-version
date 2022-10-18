// 导航
$(".nav-child").hover(function(){
    $(this).addClass("act").siblings().removeClass("act");
},function(){
    $(this).removeClass("act");
});
$(document).ready(function () {
    $(".slick-mod").slick({
        dots: true,
        autoplay: true
    });

})