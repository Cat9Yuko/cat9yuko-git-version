(function () {
    $(document).ready(function ($) {
        // @St. fireman1018
        function removeIframe() {
            $(".recom-box-video").find("video").attr('src', '').remove();
        }
        // 定义页面参数
        var page = {
            render: function () {

                this.renderRecomSwiper();
                this.renderVideoSwitch();
            },
            renderRecomSwiper: function () {

                /*
                 * @St. 2017-10-18-01.42
                 * 修复视频重复播发的bug
                 */

                var cache = {};
                var $tabItems = $("#recomendVideo .recom-cont-item");

                // 初始化首页
                initTab(0, $("#recomendVideo .talking-tabs a")[0]);

                $("#recomendVideo .talking-tabs a")
                    .on('touchstart mousedown click', function (e) {
                        e.preventDefault();
                        var i = $(this).index();
                        // 切换tab标签
                        initTab(i, this);
                    });

                function initTab(i, swiper) {

                    $(swiper)
                        .addClass('active')
                        .siblings()
                        .removeClass('active');

                    $tabItems.eq(i)
                        .addClass('on')
                        .siblings()
                        .removeClass('on');

                    // stop video
                    // @St. fireman1018
                    // $(".recom-box-video").find("iframe").hide().attr("src", '');
                    removeIframe();

                    // 高亮第一条
               /*  $('.index' + i + ' .recom-box-swiper')
                        .find(".swiper-slide")
                        .eq(0)
                        .addClass("hover") // 去除hover效果
                        .siblings().removeClass("on"); // 去除播放状态 */

                    // 取第一条设置视频封面
                    // var coverUrl = $('.index' + i + ' .recom-box-swiper')
                    //     .find(".swiper-slide")
                    //     .eq(0)
                    //     .find("img").attr("src");

                    // $('.index' + i + " .recom-cover").attr("src", coverUrl);

                    // 缓存导航
                 

                    // 初始化swiper
                    var recomSwiper = new Swiper('.index0 .recomSwiper', {
                        slidesPerView: 3,
                        mode: 'vertical'
                    });

                    $tabItems.eq(i)
                        .find('.recom-box-swiper .arrow-top').on('click', function (e) {
                            e.preventDefault();
                            recomSwiper.swipePrev();
                        });

                    $tabItems.eq(i)
                        .find('.recom-box-swiper .arrow-down').on('click', function (e) {
                            e.preventDefault();
                            recomSwiper.swipeNext();
                        });
                }


            },
            renderVideoSwitch: function () {
                var beginImg;
                var $parentTab;

                // 封面加载效果
                $(".recomSwiper .swiper-slide").hover(function () {
                    var $this = $(this);

                    $parentTab = $this.parents(".recom-cont-item");

                    $this.addClass("hover")
                        .siblings(".swiper-slide")
                        .removeClass("hover");

                    comeInImg($this);

                }, function () {
                    var $this = $(this);

                    $this.removeClass("hover");

                    leaveImg($this);
                });

                // 进入效果
                function comeInImg(obj) {

                    beginImg = '<img src="' + obj.find("img").attr("src") + '" class="beginPos" style="width: 710px;height: 460 px;display: block;position: absolute;z-index:10;top:0">';

                    $parentTab.find(".recom-box-video").append(beginImg);
                    $parentTab.find(".beginPos").stop(true, true).animate({
                        right: "0"
                    }, 700, function () {
                        $(this).removeClass("beginPos").addClass("prepareOut");
                    });
                }

                // 移出效果
                function leaveImg(obj) {
                    if ($parentTab.find(".beginPos").is(":animated")) {
                        $parentTab.find(".beginPos").stop(true, true).animate({
                            right: "0"
                        }, 0, function () {
                            $(this).removeClass("beginPos").addClass("prepareOut");
                        });
                    }

                    $parentTab.find(".recom-box-video")
                        .find(".prepareOut")
                        .stop(true, true)
                        .animate({
                            right: 710
                        }, 700, function () {
                            // obj.removeClass('hover');
                        });
                }

               
            },
        };
        // 渲染页面
        page.render(); 
    });
})();