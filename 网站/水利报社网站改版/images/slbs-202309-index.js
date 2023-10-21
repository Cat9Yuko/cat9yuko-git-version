$(".navmenu").click(function(){
    $(".navmenu-childs").stop().slideToggle(".act")
})
// 查看电脑版
$('#apptopc').on('click', function () {
    // var isShowPc = localStorage.setItem('isShowPc', true)
    $("meta[name='viewport']").attr("content", "width=1300, target-densitydpi=device-dpi")
    $('body').append('<div id="backmobile" class="backmobile"><img src="/images/slbs-202310-mobileicon.png" ignoreapd="true" />返回手机版</div>')
  });
  // 返回手机版
  $('body').on('click', '#backmobile', function () {
    // var isShowPc = localStorage.setItem('isShowPc', false)
    $("meta[name='viewport']").attr("content", "width=device-width")
    $('#backmobile').remove()
  });