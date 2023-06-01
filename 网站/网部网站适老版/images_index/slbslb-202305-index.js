/*智能检索*/
$("#searchbox").click(function () {
    $('#searctitle').hide();
    $('#searchword').show();
    $('#searchword').focus();
});
$(".chnltitle-container .chnltitle").hover(function(){
    $(this).addClass("act").siblings().removeClass("act");
    $(this).parent().next().find(".chnllist").eq($(this).index()).addClass("act").siblings().removeClass("act");
});