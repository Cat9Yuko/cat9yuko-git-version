$(function(){
    $(".nav-child").hover(function(){
        $(this).addClass("act").siblings().removeClass("act");
    },function(){
        $(this).removeClass("act");
    })

    $(".nav-menu").click(function(){
        $(this).toggleClass("act");
        $("nav").toggleClass("act");
        $(".nav-childs").stop().slideToggle();
    })

    $(".nav-child").click(function(){
        $(this).toggleClass("nmore");
    })

    $(".imgshow-title-c").click(function(){
        $(this).addClass("act").siblings().removeClass("act");
        $(".imgshow-title-container").eq($(this).index()).addClass("act").siblings().removeClass("act");
    })

    $(".con-tab").click(function(){
        $(this).addClass("act").siblings().removeClass("act");
        $(this).parent().next().children(".contabimg-con").eq($(this).index()).addClass("act").siblings().removeClass("act");
    })
})