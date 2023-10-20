$(".navmenu").click(function(){
    $(".navmenu-childs").stop().slideToggle(".act")
})
// 查看电脑版
// $('#godesktop').on('click', function () {
//     var isShowPc = localStorage.setItem('isShowPc', true)
//     $("meta[name='viewport']").attr("content", "width=1280, target-densitydpi=device-dpi")
//     $('body').append('<div id="showMobi" class="showMobi"><img src="/images/trs_mobiIcon.png" ignoreapd="true" />返回手机版</div>')
//   });
//   // 返回手机版
//   $('body').on('click', '#showMobi', function () {
//     var isShowPc = localStorage.setItem('isShowPc', false)
//     $("meta[name='viewport']").attr("content", "width=750, user-scalable=no, target-densitydpi=device-dpi")
//     $('#showMobi').remove()
//   });