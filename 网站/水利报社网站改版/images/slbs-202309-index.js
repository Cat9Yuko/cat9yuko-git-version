$(".navmenu").click(function(){
    $(".navmenu-childs").stop().slideToggle(".act")
    $(".bzzc-nav").stop().hide();
})
$(".bzzc").click(function(){
  $(".bzzc-nav").stop().slideToggle("act");
  $(".navmenu-childs").stop().hide();
})
// 查看电脑版
// $('#apptopc').on('click', function () {
//     // var isShowPc = localStorage.setItem('isShowPc', true)
//     $("meta[name='viewport']").attr("content", "width=1300, target-densitydpi=device-dpi")
//     // $('body').append('<div id="backmobile" class="backmobile"><img src="./images/slbs-202310-mobileicon.png" />返回手机版</div>')
//     var h2title = '<TRS_DOCUMENTS ID="大标题新闻" NUM="1"><a href="<TRS_DOCUMENT FIELD="_RECURL"/>" target="_blank" rel="noopener noreferrer"><TRS_DOCUMENT FIELD="DOCPEOPLE" AUTOLINK="FALSE" AUTOCOLOR="true" CODEFILTERED="false"/></a></TRS_DOCUMENTS>';
//     $(".hnews-container h2").html(h2title);
//   });
  // 返回手机版
  // $('body').on('click', '#backmobile', function () {
  //   // var isShowPc = localStorage.setItem('isShowPc', false)
  //   $("meta[name='viewport']").attr("content", "width=device-width")
  //   $('#backmobile').remove()
  // });
