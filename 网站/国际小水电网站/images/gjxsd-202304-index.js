$(".nav-p .nav-c").hover(function(){
    $(this).find("ul").stop().slideDown("act");
},function(){
    $(this).find("ul").stop().slideUp("act");
})