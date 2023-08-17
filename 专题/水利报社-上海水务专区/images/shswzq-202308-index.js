$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if(scrollTop > 550) {
        $(".fixed-nav").addClass("act");
    } else {
        $(".fixed-nav").removeClass("act");
    }
})
$(".fixed-t span").click(function(){
    $(this).parents(".fixed-nav").remove();
})
$(".fixed-back").click(function(){
    $('html , body').animate({scrollTop: 0},'slow');
})