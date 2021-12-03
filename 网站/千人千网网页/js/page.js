$(".wdwz").click(function (event) {

    $(this).next(".user-link-tab-childs").stop().slideToggle("act");
    $(this).find('.fa').stop().toggleClass("fa-flip-vertical");
    event.stopPropagation();
});


// 我的收藏选项卡
$(".check-title").click(function () {
    $(this).next().stop().slideToggle("act");
    $(this).find(".fa").toggleClass("fa-flip-vertical");
});
$(".tree-c span").click(function () {
    $(this).addClass("act").siblings().removeClass("act");
    // alert($(this).index());
    $(".tree-ch").eq($(this).index()).addClass("act").siblings().removeClass("act");
});

var shareinit = function () {
    // 微信分享
    $(".wechat").hover(function () {
        var qrhtml = "<div class=\"vm\"\><div id=\"output\"></div\><p style=\"color: #808080\"\>扫一扫，直接在手机上打开</p\></div>";
    
        $(this).append(qrhtml);
        jQuery('#output').qrcode({
            width: 150,
            height: 150,
            text: $("#output").parents(".dy-tab").find("a").attr("href")
        });
    }, function () {
        $(this).find(".vm").remove();
    });
    
    var sinpic="";
    // 微博分享
    $(".sina").on("click",function() {
        shareToXl($(this).parents(".dy-tab").find("a").text(), $(this).parents(".dy-tab").find("a").attr("href"), sinpic);
        console.log('suc');
    })
    //分享到微博
    function shareToXl(title, url, picurl) {
        var sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + url + '&content=utf-8&sourceUrl=' + url + '&pic=' + picurl;
        window.open(sharesinastring, 'newwindow', 'height=400,width=400,top=100,left=100');
    }
    
    }

    $(window).scroll(function(){
        // scroll at bottom
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
			$('.user-info-tab.act').css('top','inherit')
            $('.user-info-tab.act').css('bottom','325px')
        } else {
			$('.user-info-tab.act').css('top','0px')
            $('.user-info-tab.act').css('bottom','inherit')
		}
    });