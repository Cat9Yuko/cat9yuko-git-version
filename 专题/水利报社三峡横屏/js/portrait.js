	// 试试横屏
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    if (width < height) {
        console.log(width + "，" + height);
        $print = $('#print');
        $print.width(height);
        $print.height(width);
        $print.css('top', (height - width) / 2);
        $print.css('left', 0 - (height - width) / 2);
        $print.css('transform', 'rotate(90deg)');
        $print.css('transform-origin', '50% 50%');

		// 竖屏
		$(".box").css("width",document.documentElement.clientHeight)
		$(".box").css("height",document.documentElement.clientWidth)
		$("#parallax").css("width",document.documentElement.clientHeight*11)
    }
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    console.log(evt, 'evt')
    window.addEventListener(evt, function() {
        setTimeout(function() {
            var width = document.documentElement.clientWidth;
            var height = document.documentElement.clientHeight;

            $print = $('#print');
            $videoIntroduce = $('#videoIntroduce')
            $toVideoBack = $('#toVideoBack')
            $backgroundImg = $('.backgroundImg')
            if (width > height) {
                $print.width(width);
                $print.height(height);
                $print.css('top', '0');
                $print.css('left', 0);
                $print.css('transform', 'none');
                $print.css('transform-origin', 'initial');

				// 横屏
				$(".box").css("height",document.documentElement.clientHeight)
				$(".box").css("width",document.documentElement.clientWidth)
				$("#parallax").css("width",document.documentElement.clientWidth*11)
            } else {
                $print.width(height);
                $print.height(width);
                $print.css('top', (height - width) / 2);
                $print.css('left', 0 - (height - width) / 2);
                $print.css('transform', 'rotate(90deg)');
                $print.css('transform-origin', '50% 50%');

				// 竖屏
				$(".box").css("width",document.documentElement.clientHeight)
				$(".box").css("height",document.documentElement.clientWidth)
				$("#parallax").css("width",document.documentElement.clientHeight*11)
            }
        }, 500)
    }, false);

	
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {


		// if(/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
		// 	$("#zuihouv").attr("muted","true")
		// }
		console.log(navigator.userAgent);
        // 判断是手机版
		$(".hands").addClass("act");
		$(".hands").click(function(){
			$(this).removeClass("act")
			if ($(this).hasClass('yygb')) {
                $(this).removeClass('yygb');	
                $(this).addClass("yydk");
                $('.bgmusic7')[0].pause();
            } else {
                $(this).removeClass('yydk');	
                $(this).addClass("yygb");
                $('.bgmusic7')[0].play();
            }
			$("#zuihouv")[0].play();
			$("#zuihouv")[0].pause();
		})
        // 音乐按钮
        $(".btn_yykg a").click(function (){
            if ($(this).hasClass('yygb')) {
                $(this).removeClass('yygb');	
                $(this).addClass("yydk");
                $('.bgmusic7')[0].pause();
            } else {
                $(this).removeClass('yydk');	
                $(this).addClass("yygb");
                $('.bgmusic7')[0].play();
            }
        });

        var scrollPosition2 = $(".main").scrollLeft();
        var screen = $(window).height()
		function readDeviceOrientation() {
			var wwidth = $(window).width()
			var hheight = $(window).height()
			// console.log("wwidth: "+ wwidth);
			// console.log("hheight: "+ hheight);
			if(wwidth>hheight) {
				screen = wwidth
			} else {
				screen = hheight
			}
			// alert("wwidth: "+ wwidth)
			// alert("hheight: "+ hheight)
		}
		$(function(){
				readDeviceOrientation()
			$(window).resize(function(){
				readDeviceOrientation()
			})
		})

		// 解决返回微信页面刷新
		$(document).ready(function(){
			var maodian = window.location.hash
			if(maodian == "#box6") {
				$('.main').animate({
					scrollLeft: screen * 5
				}, 'slow');
				// $(".hands").click()
			}
			if(maodian == "#box8") {
				$('.main').animate({
					scrollLeft: screen * 7
				}, 'slow');
				// $(".hands").click()
			}
			if(maodian == "#box10") {
				$('.main').animate({
					scrollLeft: screen * 9
				}, 'slow');
				// $(".hands").click()
			}
		})
		$(".box6 p a").click(function(){
			location.href= 'http://www.chinawater.com.cn/vr/yiling/'
		})
		$(".box8 p a").click(function(){
			location.href= 'http://www.chinawater.com.cn/vr/badong/'
		})
		$(".box10 p a").click(function(){
			location.href= 'http://www.chinawater.com.cn/vr/wanzhou/'
		})
        // // 滚动事件开始
        $(".main").scroll(function () {
            var scrollPosition = $(".main").scrollLeft();
            var screen = $(window).height()
			var orientation = window.orientation
			// 判断是否是横屏
			if(orientation == 90 || orientation == -90) {
				screen = $(window).width()
			}
			// var left = $(".box1").offset().left
			// var top = $(".box1").offset().top
			// var wsw = document.documentElement.clientWidth
			// var wsh = document.documentElement.clientHeight
			
			// console.log("scrollPosition:" + scrollPosition);
			// console.log("left: "+ left);
			// console.log("top: "+ top);
			// $(".scrolltext1").html("scrollPosition:" + scrollPosition+
			// 	 "<br>screen: "+ screen+
			// 	 "<br>orientation:" + orientation)
			// $(".scrolltext2").html("left:" + left)
			// $(".scrolltext3").html("top:" + top)
			// $(".scrolltext4").html("wsh:" + wsh+"wsw:"+wsw)

			
		// 给菜单加样式
		if (scrollPosition > (screen*1.9)) {
			if (scrollPosition > (screen*3)) {
				if (scrollPosition > (screen*9.9)) {
					$(".menu2").removeClass("hov");
					$(".menu1").removeClass("hov");
					$(".menu3").addClass("hov");
				}else {
					$(".menu1").removeClass("hov");
					$(".menu3").removeClass("hov");
					$(".menu2").addClass("hov");
				};
			}else {
				$(".menu2").removeClass("hov");
				$(".menu3").removeClass("hov");
				$(".menu1").addClass("hov");
			};
		}else{
			$(".menu2").removeClass("hov");
			$(".menu3").removeClass("hov");
			$(".menu1").removeClass("hov");
		};
		
		
		// 菜单出现动画
		if (scrollPosition > (screen*0.95)) {
			$('.leftmenu').addClass('openmu movemu')
			setTimeout(function() {
				$('.menu1').addClass('openmu movemu')
			}, 500);
			setTimeout(function() {
				$('.menu2').addClass('openmu movemu')
			}, 1000);
			setTimeout(function() {
				$('.menu3').addClass('openmu movemu')
			}, 1500);
		}else{};

        // 视觉差动画
		if (scrollPosition > (screen* 1.875)) {
			$('.shijue3').addClass('move5 openmu')
			setTimeout(function() {
				$('.shijue2').addClass('')
			}, 500);
			setTimeout(function() {
				$('.shijue1').addClass('move3 openmu')
			}, 0);
		}else{};
		
		if (scrollPosition > (screen * 3.9)) {
			$('.shijue4').addClass('moveman openmu')
			setTimeout(function() {
				$('.shijue5').addClass('moveman openmu')
			}, 1500);
		}else{};	
			
		if (scrollPosition > (screen * 5.7)) {
			$('.shijue6').addClass('moveman openmu')
			setTimeout(function() {
				$('.shijue7').addClass('moveman openmu')
			}, 1500);
		}else{};	

		if (scrollPosition > (screen * 7.8)) {
			$('.shijue8').addClass('moveman openmu')
			
		}else{};
		
		
		

		//车站闪烁
		if (scrollPosition > (screen*1.8)) {
			if (scrollPosition > (screen* 2.6)) {
						$(".map a").removeClass("hov");
					}else {
						$('.map1').addClass('hov')
						setTimeout(function() {
							$('.map2').addClass('hov')
							$(".map1").removeClass("hov");
						}, 500);
						setTimeout(function() {
							$('.map3').addClass('hov')
							$(".map2").removeClass("hov");
						}, 1000);
						setTimeout(function() {
							$('.map4').addClass('hov')
							$(".map3").removeClass("hov");
						}, 1500);
						setTimeout(function() {
							$('.map5').addClass('hov')
							$(".map4").removeClass("hov");
						}, 2000);
						setTimeout(function() {
							$('.map6').addClass('hov')
							$(".map5").removeClass("hov");
						}, 2500);
						setTimeout(function() {
							$('.map7').addClass('hov')
							$(".map6").removeClass("hov");
						}, 3000);
						setTimeout(function() {
							$('.map8').addClass('hov')
							$(".map7").removeClass("hov");
						}, 3500);
						setTimeout(function() {
							$('.map9').addClass('hov')
							$(".map8").removeClass("hov");
						}, 4000);
						setTimeout(function() {
							$('.map10').addClass('hov')
							$(".map9").removeClass("hov");
						}, 4500);
						setTimeout(function() {
							$('.map11').addClass('hov')
							$(".map10").removeClass("hov");
						}, 5000);
						setTimeout(function() {
							$('.map12').addClass('hov')
							$(".map11").removeClass("hov");
						}, 5500);
						setTimeout(function() {
							$(".map12").removeClass("hov");
						}, 6000);
						setTimeout(function() {
							$(".map1").addClass("");
							$(".map1 i").addClass("hov-hand");
						}, 7000);
					};
			
		}else{};
			
		 
		

		// 控制声音播放
		if (scrollPosition > (screen*4)) {
			if (scrollPosition > (screen* 4.2)) {
				$('.bgmusic1')[0].pause();
			}else{
				$('.bgmusic1')[0].play();
			}
		}else if(scrollPosition < (screen*3.9)) {
			$('.bgmusic1')[0].pause();
		}else{};
	
		if (scrollPosition > (screen*5.8)) {
				if (scrollPosition > (screen*6.8)) {
					$('.bgmusic2')[0].pause();
				}else{
					$('.bgmusic2')[0].play();
				};
			}else if(scrollPosition < (screen*5.5)) {
				$('.bgmusic2')[0].pause();
			}else{};
			
		if (scrollPosition > (screen*8)) {
				if (scrollPosition > (screen*8.1)) {
					$('.bgmusic3')[0].pause();
				}else{
					$('.bgmusic3')[0].play();
				};
			}else if(scrollPosition < (screen*7.8)) {
				$('.bgmusic3')[0].pause();
			}else{};

		
		// 控制视频播放
		if (scrollPosition > (screen*5.7)) {			
			$('#vid1')[0].pause();
		}else if(scrollPosition < (screen*4.5)) {
			$('#vid1')[0].pause();
		}else{};

		if (scrollPosition > (screen*7.8)) {
			$('#vid2')[0].pause();
		}else if(scrollPosition < (screen*6.9)) {
			$('#vid2')[0].pause();
		}else{};

		if (scrollPosition > (screen*10)) {
			$('#vid3')[0].pause();
		}else if(scrollPosition < (screen*9.3)) {
			$('#vid3')[0].pause();
		}else{};

		
		//视频播放的时候暂停背景音乐
		var video2 = $('.vid');
		var audio2 = $('.bgmusic7');
		video2.on('play', function() {
			audio2[0].pause();
			$(".btn_yykg a").addClass("yydk");
			$(".btn_yykg a").removeClass('yygb');
		});
		video2.on('pause', function() {
			audio2[0].play();
			$(".btn_yykg a").addClass("yygb");
			$(".btn_yykg a").removeClass('yydk');
		});
		video2.on('ended', function() {
			audio2[0].play();
			$(".btn_yykg a").addClass("yygb");
			$(".btn_yykg a").removeClass('yydk');
		});
		
			
		// 笑脸视频播放
		if (scrollPosition >= (screen*9.8)) {
			$("#zuihouv")[0].play();
			$('.bgmusic7')[0].pause();
			$(".btn_yykg a").addClass("yydk");
			$(".btn_yykg a").removeClass('yygb');
			setTimeout(function() {
				$('.zimucon').addClass('moveman openmu')
			}, 26000);
		}
		else {
			// $("#zuihouv")[0].pause();
		};

        
        })
        // 滚动事件结束

        // menu 点击滚动到相应位置
        $(".menu1").click(function (){
            $(".menu2").removeClass("hov");
            $(".menu3").removeClass("hov");
            $(".menu1").addClass("hov");
            $(".main").animate({ scrollLeft: scrollPosition2 + (screen *2) }, 1000);
        });
        $(".menu2").click(function (){
            $(".menu1").removeClass("hov");
            $(".menu3").removeClass("hov");
            $(".menu2").addClass("hov");
            $(".main").animate({ scrollLeft: scrollPosition2 + (screen *4) }, 1000);
        });
        $(".menu3").click(function (){
            $(".menu1").removeClass("hov");
            $(".menu2").removeClass("hov");
            $(".menu3").addClass("hov");
            $(".main").animate({ scrollLeft: scrollPosition2 + (screen *10) }, 1000);
        });
        // 听故事 点击滚动到相应位置
        // 第四屏点击
        $(".tingbg1").click(function (){
            $(".main").animate({ scrollLeft: scrollPosition2 + (screen *4) }, 1000);
        });
        $(".tingbg2").click(function (){
            $(".main").animate({ scrollLeft: scrollPosition2 + (screen *6) }, 1000);
        });
        $(".tingbg3").click(function (){
            $(".main").animate({ scrollLeft: scrollPosition2 + (screen *8) }, 1000);
        });


      }