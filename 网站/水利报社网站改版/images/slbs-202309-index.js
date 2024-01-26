$(".navmenu").click(function(){
    $(".navmenu-childs").stop().slideToggle(".act")
    $(".bzzc-nav").stop().hide();
})
// app部长之窗调整
if($(window).width() <= 991) {
  $(".bzzc").click(function(){
    $(".bzzc-nav").stop().slideToggle("act");
    $(".navmenu-childs").stop().hide();
  })
}