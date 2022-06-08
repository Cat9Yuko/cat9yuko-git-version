$(function () {

    // 时间
    var date = new Date();
    var l_str = "";
    var l_year = date.getFullYear();
    var l_month = date.getMonth() + 1;
    var l_day = date.getDate();
    l_str += l_year + "年" + l_month + "月" + l_day + "日";
    $(".lotime").text(l_str);

    
    $(".nav li").hover(function () {
            // over
            $(this).addClass("act");
        }, function () {
            // out
            $(this).removeClass("act");
        }
    );
})

function SetHome(){//设为首页
        var url = 'http://nsbd.mwr.cn/'
	if (document.all) {
            document.body.style.behavior='url(#default#homepage)';
            document.body.setHomePage(url);
        }else{
            alert("抱歉，您的浏览器不支持自动设为首页，请手动设置！");
        }
}

function AddFavorite(){//添加收藏
        window.external.AddFavorite(document.location.href,document.title);
}