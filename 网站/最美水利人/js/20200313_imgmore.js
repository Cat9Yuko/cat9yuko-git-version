$(function() {
	var flag = true;
	var zoom_n = 1;
	init();
	$(".moveimg").click(function() {
		$(".moveimg").removeClass('active');
		$(this).addClass('active');
		var thisSrc = $(this).attr('src');
		$(".big-img img").attr('src', thisSrc);
		$(".big-img .img-parent").attr('style', '');
		zoom_n = 1;
		$(".big-img .img-parent img").css('transform', 'scale(1)');
	});
	$(".small-img .left").on('click', function() {
		flag ? left() : "";
	});
	$(".small-img .right").on('click', function() {
		flag ? right() : "";
	});

	function left() {
		flag = false;
		var imgPosition = $(".moveimg:last").offset().left + $(".moveimg:last").width();
		var boxPosition = $(".small-img").offset().left + $(".small-img").width();
		if(imgPosition >= boxPosition) {
			$('.small-img ul').animate({
				left: '-=105'
			}, 500, function() {
				flag = true;
			});
		} else {
			flag = true;
		}
	}

	function right() {
		flag = false;
		var imgPosition = $(".moveimg:first").offset().left;
		var boxPosition = $(".small-img").offset().left;
		if(imgPosition < boxPosition) {
			$('.small-img ul').animate({
				left: '+=105'
			}, 500, function() {
				flag = true;
			});
		} else {
			flag = true;
		}
	}

	function init() {
		var numImg = $('.moveimg').length;
		$(".small-img ul").css('width', numImg * 105 + 'px');
		$($('.moveimg')[0]).addClass('active');
		$(".big-img img").attr('src', $($('.moveimg')[0]).attr('src'));
	}
	var $div_img = $(".big-img .img-parent");
	$div_img.bind("mousedown", function(event) {
		event.preventDefault && event.preventDefault();
		var offset_x = $(this)[0].offsetLeft;
		var offset_y = $(this)[0].offsetTop;
		var mouse_x = event.pageX;
		var mouse_y = event.pageY;
		$(".big-img .img-parent").bind("mousemove", function(ev) {
			var _x = ev.pageX - mouse_x;
			var _y = ev.pageY - mouse_y;
			var now_x = (offset_x + _x) + "px";
			var now_y = (offset_y + _y) + "px";
			$div_img.css({
				top: now_y,
				left: now_x
			});
		});
	});
	$(".big-img .img-parent").bind("mouseup", function() {
		$(this).unbind("mousemove");
	});
	var spin_n = 0;
	$(".img-rotate.left").click(function() {
		spin_n -= 15;
		$(".big-img .img-parent").css({
			"transform": " rotate(" + spin_n + "deg)",
			"-moz-transform": " rotate(" + spin_n + "deg)",
			"-ms-transform": " rotate(" + spin_n + "deg)",
			"-o-transform": " rotate(" + spin_n + "deg)",
			"-webkit-transform": " rotate(" + spin_n + "deg)"
		});
	});
	$(".img-rotate.right").click(function() {
		spin_n += 15;
		$(".big-img .img-parent").css({
			"transform": " rotate(" + spin_n + "deg) ",
			"-moz-transform": " rotate(" + spin_n + "deg) ",
			"-ms-transform": " rotate(" + spin_n + "deg)",
			"-o-transform": " rotate(" + spin_n + "deg)",
			"-webkit-transform": " rotate(" + spin_n + "deg)"
		});
	});

	function zoomImg(o, delta) {
		if(delta == 'up') {
			zoom_n -= 0.1;
			zoom_n = zoom_n <= 0.1 ? 0.1 : zoom_n;
		} else {
			zoom_n += 0.1;
		}
		$(".big-img .img-parent img").css({
			"transform": "scale(" + zoom_n + ")",
			"-moz-transform": "scale(" + zoom_n + ")",
			"-ms-transform": "scale(" + zoom_n + ")",
			"-o-transform": "scale(" + zoom_n + ")",
			"-webkit-transform": "scale(" + zoom_n + ")"
		});
	}
//	$(".big-img .img-parent img").bind("mousewheel DOMMouseScroll", function(e) {
//		console.log(1231);
//		e = e || window.event;
//		var delta = e.originalEvent.wheelDelta || e.originalEvent.detail;
//		var dir = delta > 0 ? 'up' : 'down';
//		zoomImg(this, dir);
//		return false;
//	});
});