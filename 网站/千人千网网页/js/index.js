// 首页文章加载
var data_img = "";
var data_notice = "";
var data_news = "";
var qrqwcnxh = "";
var qrqwdjdzs = "";
jQuery.ajax({
    type: "get",
    url: "http://www.mwr.gov.cn/syxg/tpxw/qrqwIndex.js",
    dataType: "jsonp",
    jsonp: "callback",
    jsonpCallback: "qrqwIndex",
    success: function (result) {
        if (result && result.length > 0) {
            result.forEach(function (cv) {
                if (cv.name === "data_img") {
                    cv.data.forEach(function (v) {
                        data_img += "<div class=\"slick-item\"><a href='" + v.url + "' title='" + v.title + "'><img src='" + v.img + "' alt=''><div class=\"tit1\">" + v.title + "</div></a></div>";
                    });
                    $('.slick-mod').append(data_img);
                    $(".slick-mod").slick({
                        dots: false,
                        autoplay: true
                    });
                    // console.log(data_img)
                } else if (cv.name === "data_notice") {
                    cv.data.forEach(function (v) {
                        data_notice += "<li><a href=\"" + v.url + "\" title='" + v.title + "'><img src='/img/mobile/list-icon.png' style='vertical-align: middle;' />&nbsp;&nbsp;" + v.title + "</a></li>"
                    });
                    $('#data_notice').append(data_notice);
                } else if (cv.name === "data_news") {
                    cv.data.forEach(function (v) {
                        data_news += "<li><a href=\"" + v.url + "\" title='" + v.title + "'><img src='/img/mobile/list-icon.png' style='vertical-align: middle;' />&nbsp;&nbsp;" + v.title + "<span class=\"fr\">" + v.date + "</span></a></li>"
                    });
                    $('#data_news').append(data_news);
                }
            })
        }
    }
});
// 猜你喜欢
jQuery.ajax({
    type: "get",
    url: "http://pv.mwr.gov.cn/ranking.php?token=41d5ff202c2cf56fpc",
    dataType: "jsonp",
    jsonp: "callback",
    jsonpCallback: "qrqwcnxh",
    success: function (result) {
        // console.log(result);
        for (var i = 0; i < result.length; i++) {
            qrqwcnxh += "<li><a href=\"" + result[i][1] + "\" title='" + result[i][0] + "'><div class=\"wins\"><img src='/img/mobile/list-icon.png' style='vertical-align: middle;' />&nbsp;&nbsp;" + result[i][0] + "</div><span class=\"fr\">" + result[i][2] + "</span></a></li>"
            // qrqwfwtj.push(result[i]);
        }
        // result.forEach(element => {
        //     // console.log(element)
        //     qrqwcnxh += "<li><a href=\"" + element[1] + "\" title='" + element[0] + "'>●&nbsp;&nbsp;" + element[0] + "<span class=\"fr\">" + element[2] + "</span></a></li>"
        // });
        $('#qrqwcnxh').append(qrqwcnxh);
    }
});

// 大家都在搜
jQuery.ajax({
    type: "get",
    url: "http://10.1.196.36:9090/jsearchfront/interfaces/hotword.do?websiteid=000000000130000",
    dataType: "jsonp",
    jsonp: "callback",
    //jsonpCallback: "qrqwdjdzs",
    success: function (result) {
        if (result && result.length > 0) {


            result.forEach(function (v, index) {
				if(index < 5) {
                qrqwdjdzs += "<li><a href='http://search.mwr.gov.cn/jrobot/search.do?webid=1&od=1&q=" + v.word + "'>" + v.word + "<span class=\"fr\">" + v.weight + "</span></a></li>"
				}
            });
            $('#qrqwdjdzs').append(qrqwdjdzs);
        }
    }
});