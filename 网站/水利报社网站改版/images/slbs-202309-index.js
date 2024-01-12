$(".navmenu").click(function(){
    $(".navmenu-childs").stop().slideToggle(".act")
    $(".bzzc-nav").stop().hide();
})
$(".bzzc").click(function(){
  $(".bzzc-nav").stop().slideToggle("act");
  $(".navmenu-childs").stop().hide();
})
