// 鎏金岁月js
;(function ($) {
    //大图滚动
    var viewSwiper = new Swiper('.qzhd .view .swiper-container', {
                    // loop : true,//可选选项，开启循环
                    // autoplay: 3000,
                    // autoplayDisableOnInteraction:false,
    onSlideChangeStart: function() {
      updateNavPosition();
    },
    onInit: function(swiper){
                      
      $('.qzhd .view .swiper-slide-bottom-pagenum em').text(swiper.activeIndex+1);
      
      $('.qzhd .view .swiper-slide-bottom-pagenum var').text(swiper.slides.length);
    }
    
  })
            
  $('.qzhd .view .arrow-left,.preview .arrow-left').on('click', function(e) {
    e.preventDefault();
    if(viewSwiper.activeIndex == 0) {
      viewSwiper.swipeTo(viewSwiper.slides.length - 1, 1000);
      $('.qzhd .view .swiper-slide-bottom-pagenum em').text(viewSwiper.slides.length);
      return;
    }
    viewSwiper.swipePrev();
    $('.qzhd .view .swiper-slide-bottom-pagenum em').text(viewSwiper.activeIndex+1);
  })
  $('.qzhd .view .arrow-right,.preview .arrow-right').on('click', function(e) {
    
    e.preventDefault();
    if(viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
      
      viewSwiper.swipeTo(0, 1000);
      $('.qzhd .view .swiper-slide-bottom-pagenum em').text(1);
      return
    }
    viewSwiper.swipeNext();
    //必须放到这里
    $('.qzhd .view .swiper-slide-bottom-pagenum em').text(viewSwiper.activeIndex+1);
  })
  
  var previewSwiper = new Swiper('.preview .swiper-container', {
            visibilityFullFit: true,
            slidesPerView: 'auto',
            onlyExternal: true,
            onSlideClick: function(previewSwiper) {
                
                viewSwiper.swipeTo(previewSwiper.clickedSlideIndex);
            
                $('.qzhd .view .swiper-slide-bottom-pagenum em').text(previewSwiper.clickedSlideIndex+1);
                
            },
            //回调函数，非首次初始化后执行。解决刚加载完毕缩略图由于宽度问题点击最后一张图片导致容器向左滚动的问题,而且改变窗口大小的时候也会执行
            onInit: function(swiper){
                
                var previewWidth = $('.preview .swiper-slide').outerWidth(true);
                
                var length = $('.preview .swiper-slide').length;
                
                $('.preview .swiper-wrapper').width(previewWidth*length);
                
                //解决刚加载完毕缩略图由于宽度问题点击最后一张图片导致容器向左滚动的问题
                $('.preview .swiper-slide').last().css({
                    width:240
                });
            }
            
    });
            
  function updateNavPosition() {
    $('.preview .active-nav').removeClass('active-nav');
    var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav');
    if(!activeNav.hasClass('swiper-slide-visible')) {
      
      if(activeNav.index() > previewSwiper.activeIndex) {
        var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1;
        previewSwiper.swipeTo(activeNav.index() - thumbsPerNav);
      } else {
        previewSwiper.swipeTo(activeNav.index());
      }
      
    }
  };
  
})(jQuery);

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
                slidesPerView: 6,
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