$(".navbar-toggle").click(function(){
    $(this).toggleClass("collapsed");
    $(".navbg").stop().fadeToggle();
})