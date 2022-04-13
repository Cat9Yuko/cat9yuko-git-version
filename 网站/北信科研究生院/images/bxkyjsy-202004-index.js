$(function(){
    $(".nav-child").hover(function(){
        $(this).addClass("act").siblings().removeClass("act");
    },function(){
        $(this).removeClass("act");
    })

    $(".nav-menu").click(function(){
        $(this).toggleClass("act");
        $(".nav").toggleClass("act");
        $(".nav-childs").stop().slideToggle();
    })

    $(".nav-child").click(function(){
        $(this).toggleClass("nmore");
    })
})