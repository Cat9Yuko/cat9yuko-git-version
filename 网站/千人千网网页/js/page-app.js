// 我的收藏选项卡
$(".check-title").click(function (event) {
    // event.
    $(this).next().stop().slideToggle("act");
});

$(".wdwz").click(function (event) {
    $(this).next(".user-link-tabchild").stop().slideToggle("act");
    event.stopPropagation();
    console.log('suce')
});