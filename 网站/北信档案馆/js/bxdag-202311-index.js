$(".nav-item").hover(function(){
    $(this).find(".nav-child").stop().slideDown();
},function(){
    $(this).find(".nav-child").stop().slideUp();
})