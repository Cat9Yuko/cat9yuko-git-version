var helangSearch = {
    els: {},
    searchIndex: 0,
    hot: {
        color: [],
        list: ['水温测报新技术','水温测报新技术','水温测报新技术','水温测报新技术']
    },
    init: function () {
        var _this = this;
        this.els = {
            pickerBtn: $(".picker"),
            pickerList: $(".picker-list"),
            logo: $(".logo"),
            hotList: $(".hot-list"),
            input: $("#search-input"),
            button: $(".search")
        };
        // 热词
        // this.els.hotList.html(function () {
        //     var str = '';
        //     $.each(_this.hot.list, function (index, item) {
        //         str += '<a href="https://www.baidu.com/s?ie=utf8&oe=utf8&tn=98010089_dg&ch=11&wd=' + item + '" target="_blank">' +
        //             '<div class="number" style="color: ' + _this.hot.color[index] + '">' + (index + 1) + '</div>' +
        //             '<div>' + item + '</div>' +
        //             '</a>';
        //     });
        //     return str;
        // });
        this.els.pickerBtn.click(function () {
            if (_this.els.pickerList.is(':hidden')) {
                setTimeout(function () {
                    _this.els.pickerList.show();
                }, 100);
            }
        });
        this.els.pickerList.on("click", ">li", function () {
            // _this.els.logo.css("background-image", ('url(img/' + $(this).data("logo") + ')'));
            _this.searchIndex = $(this).index();
            _this.els.pickerBtn.html($(this).html())
        });
        this.els.input.click(function () {
            if (!$(this).val()) {
                setTimeout(function () {
                    _this.els.hotList.show();
                }, 100);
            }
        });
        this.els.input.on("input", function () {
            if ($(this).val()) {
                _this.els.hotList.hide();
            }
        });
        this.els.button.click(function () {
            var searchArr = ['全部', '法律法规', '部门规章', '规范性文件','权责清单','政策解读'];
            alert(searchArr[_this.searchIndex] + "搜索：" + _this.els.input.val());
        });
        $(document).click(function () {
            _this.els.pickerList.hide();
            _this.els.hotList.hide();
        });
    }
};



// 文档树
$(".parent_title").on("click", function() {
    $(this).addClass("act").siblings().removeClass("act");
    var span = $(this).find(".jia");
    span.toggleClass("jian");
    $(".parent_title span").not(span).removeClass("jian");
    var next = $(this).next();
    $(".childs").not(next).hide();
    next.toggle();
    $(".child").removeClass("act");
    $(".child2").removeClass("act");
    $(".childs2").hide();
    $(".child_title .jia").removeClass("jian");
})

$(".child_title").on("click", function() {
    $(this).addClass("act").siblings().removeClass("act");
    var span = $(this).find(".jia");
    span.toggleClass("jian");
    $(".child_title span").not(span).removeClass("jian");
    var next = $(this).next();
    $(".childs2").not(next).hide();
    next.toggle();
})

$(".child").on("click", function() {
    $(this).addClass("act").siblings().removeClass("act");
    $(".child2").removeClass("act");
})
$(".child2").on("click", function(event) {
    $(this).addClass("act").siblings().removeClass("act");
    event.stopPropagation();
})
$(document).ready(function () {
    $(".parent_title:first").click();
    
});

$("#qrcode").qrcode({
    text: window.location.href, //文本或url
    width: 130, //宽度
    height: 130, //高度
    // correctLevel: QRErrorCorrectLevel.M, //错误纠正级别 L:1,M:0,Q:3,H:2
})
$(".sjb-qrcode").hover(function () {
        // over
        $(".qrcode").show();
    }, function () {
        // out
        $(".qrcode").hide();
    }
);