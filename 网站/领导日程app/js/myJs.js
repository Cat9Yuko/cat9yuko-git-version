$(function() {
	
	
	

	//底部导航切换图标
	$(".mine").click(function() {
		$(".ww_img").attr("src", "images/weekwork.png");
		$(".mi_img").attr("src", "images/mine_active.png");
		$(".biaoge").show();
		my_bl();
	})

	$(".week_work").click(function() {
		$(".ww_img").attr("src", "images/week_work_active.png");
		$(".mi_img").attr("src", "images/mine.png");
	})

	//周日切换

	$(".week_btn").click(function() {
		$(this).addClass("wdb_active");
		$(this).siblings().removeClass("wdb_active");
		$(".week_slector").show();
		$(".day_slector").hide();
		$(".biaoge").show();
		$(".biaoge2").hide();
		$(".topf2").show();
		$(".day_buttons").hide();
		$(".week_buttons").show();
	})
	$(".day_btn").click(function() {
		$(this).addClass("wdb_active");
		$(this).siblings().removeClass("wdb_active");
		$(".day_slector").show();
		$(".week_slector").hide();
		$(".biaoge2").show();
		$(".biaoge").hide();
		$(".topf2").hide();
		$(".week_buttons").hide();
		$(".day_buttons").show();
		pdd();
	})

	//判断one-day 里li的个数,为1时高度100%

	function my_bl() {
		var $odl = $(".one-day");
		$(".one-day").each(function(index, value) {
			var ll = $(this).children("li");
			if(ll.length == 1) {
				ll.css("height", "100%");
			}
		})

	}
	
	
		
	var ssame = function () {
		
	
	//解决类名相同时的行高问题
	$(".mon").each(function (index, value) {
		//mon
	var mon_max = 0;
	var mon_max2 = 0;
	var morning_max = 0;
	var afternoon_max = 0;
	var evening_max = 0;
	var one_day = $(this).find(".one-day");
	var week = $(this).find(".week");
	one_day.each(function(index2, value) {
		if($(this).children("li").length == 2) {
			var aa = $(this).find("li:first");
			var aa2 = $(this).find("li:last");
			var h = aa.height();
			var hh = aa2.height();
			mon_max = h > mon_max ? h : mon_max;
			mon_max2 = hh > mon_max2 ? hh : mon_max2;
			one_day.find("li:first").height(mon_max);
			week.find("li:first").height(mon_max + 9);
			week.find("li:first").css("line-height", mon_max + 9 + "px");
			one_day.find("li:last").height(mon_max2);
			week.find("li:last").height(mon_max2 + 9);
			week.find("li:last").css("line-height", mon_max2 + 9 + "px");
		}
		if($(this).children("li").length == 3) {
			var morning = $(this).find("li:eq(0)");
			var afternoon = $(this).find("li:eq(1)");
			var evening = $(this).find("li:eq(2)");
			var morningh = morning.height();
			var afternoonh = afternoon.height();
			var eveningh = evening.height();
			morning_max = morningh > morning_max ? morningh : morning_max;
			afternoon_max = afternoonh > afternoon_max ? afternoonh : afternoon_max;
			evening_max = eveningh > evening_max ? eveningh : evening_max;
			one_day.find("li:eq(0)").height(morning_max);
			one_day.find("li:eq(1)").height(afternoon_max);
			one_day.find("li:eq(2)").height(evening_max);

			week.find("li:eq(0)").height(morning_max + 9);
			week.find("li:eq(1)").height(afternoon_max + 9);
			week.find("li:eq(2)").height(evening_max + 9);
			week.find("li:eq(0)").css("line-height", morning_max + 9 + "px");
			week.find("li:eq(1)").css("line-height", afternoon_max + 9 + "px");
			week.find("li:eq(2)").css("line-height", evening_max + 9 + "px");
		}
	})	
	});
	}
	ssame();
	my_bl();
	
	//判断日列表高度
	var pdd = function() {
		$(".d_people").each(function(index, value) {
			var aa = $(this).find("li:first");
			aa.siblings().height(aa.height());
			aa.siblings().find("div").height(aa.height());
			//判断日列宽度
//			var width = $(this).width();
//			var fliwidth = $(this).find("li:first").width();
//			var rliwidth = width - fliwidth;
//			var lilen = $(this).find("li").length;
//			if(lilen == 2) {
//				$(this).find("li:last div").width(rliwidth);
//			}
//			console.log(lilen);
//			console.log(rliwidth);
		})
	};

	$(".sxw").click(function() {
		$(this).addClass("s_active");
		$(this).siblings().removeClass("s_active");
	})
	$(".qt").click(function() {
		$(this).addClass("s_active");
		$(this).siblings().removeClass("s_active");
	})

	var $ww = $(window).width();
	var swc = $(".sw_content");
	var xwc = $(".xw_content");
	var xzc = $(".xz_content");
//	console.log($ww);

	//	pc端修改
	if($ww >= 768) {
		swc.attr("contenteditable", true);
		xwc.attr("contenteditable", true);
		xzc.attr("contenteditable", true);
		$(".xm_content").attr("contenteditable", "true");
		$(".xz_content").attr("contenteditable", "true");
	}
	//手机端跳转
	if($ww < 768) {
		$(".xm_content").click(function() {
						window.location.href = "xiaomiluru.html";
		});
		$(".xz_content").click(function() {
			window.location.href = "xiaozhang_mine.html";
});
		$(".mobile_url").attr("href","xiaozhangluru.html");
		
	}
	//校长我的提交跳转
	$(".h_master_btn").click(function () {
			window.location.href = "xiaozhang_mine.html";
		})
	//校秘提交跳转
	$(".xm__btn").click(function () {
			window.location.href = "xiaomiwode.html";
		})
	//主任返回跳转
	$(".zr_back_btn").click(function () {
			window.location.href = "zhurenwode.html";
		})
	$(".inc_bom input").focus(function() {
		var a = $(this).parent().siblings();
		a.addClass("foucolor");
	})

	$(".inc_bom input").blur(function() {
		var a = $(this).parent().siblings();
		a.removeClass("foucolor");
	})

	$(".switch_btn span").click(function() {

		$(this).addClass("switch_btn_active");
		$(this).siblings().removeClass("switch_btn_active");
	})
	$(".switch_btn span:first").click(function() {
		$(".input_container").show();
		$(".input_container2").hide();
	})
	$(".switch_btn span:last").click(function() {
		$(".input_container2").show();
		$(".input_container").hide();
	})

	$(".inc_bom textarea").focus(function() {
		var a = $(this).parent().siblings();
		a.addClass("foucolor");
	})

	$(".inc_bom textarea").blur(function() {
		var a = $(this).parent().siblings();
		a.removeClass("foucolor");
	})

	obaganlestyle(1, 7);

	function obaganlestyle(snum, lnum) {
		var myDate = new Date();
		var day = myDate.getDay(); //返回0-6
		var today = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');

		//当天的日期
		var endday;
		var startday;

		endday = getthisDay(-day + lnum); //算得周日
		startday = getthisDay(-day + snum); //算的周一
//		$(".w_first").attr("data-start")
		console.log(startday);
		$(".w_first").text(startday);
		$(".w_last").text(endday);
	}
	//取得日期
	function getthisDay(day) {
		var today = new Date();
		var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
		today.setTime(targetday_milliseconds); //关键
		var tyear = today.getFullYear();
		var tMonth = today.getMonth();
		var tDate = today.getDate();
		if(tDate < 10) {
			tDate = "0" + tDate;
		}
		tMonth = tMonth + 1;
		if(tMonth < 10) {
			tMonth = "0" + tMonth;
		}
		return tMonth + "." + tDate + "";
	}

	//各种日期取得
	function getdaybytype(type) {
		switch(type) {
			case 1:
				obaganlestyle(1, 7);
				break;
			case 2:
				obaganlestyle(0, -6);
				break;
			case 3:
				obaganlestyle(1, 7);
				break;
			default:
				break;
		}
	}
	//给日期设置一个属性
	var initDate = function () {
		var nowtime = new Date();
		var y = nowtime.getFullYear();
		var m = nowtime.getMonth()+1;
		var d = nowtime.getDate();
		var d2 = nowtime.getDate();
		var we = nowtime.getDay();
//		console.log(we);
		var time = y + "-" + m + "-" + d;
//		console.log(y + "-" + m + "-" + d);
		$(".d_first").attr("data-start",time);
		$(".w_first").attr("data-start",time);
		var month = (nowtime.getMonth() + 1) < 10 ? '0' + (nowtime.getMonth() + 1) : (nowtime.getMonth() + 1);
		var day = nowtime.getDate() < 10 ? '0' + nowtime.getDate() : nowtime.getDate();
		$(".d_first").text(month+"."+day);
	}
	initDate();
		
	var zuotian = function() {
		
		var date = new Date($(".d_first").attr("data-start").replace(/-/g, '/'));
		var showStr, year, month, day;
		date.setDate(date.getDate() - 1);
		year = date.getFullYear();
		var jtzj = date.getDay();
		var zhouji = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
		// getMonth() 的范围是[0, 11]，所以显示值需+1
		month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
		day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
		
		ll = year +"-"+ month + "-"+ day;
		$(".d_first").attr("data-start",ll);
		showStr = month + '.' + day;
		$(".d_first").text(showStr)
		$(".d_last").text(zhouji[jtzj]);
		//
//		console.log("zuotian");
	}
	
	//明天
	var mingtian = function() {
		
		var date = new Date($(".d_first").attr("data-start").replace(/-/g, '/'));
		var showStr, year, month, day;
		date.setDate(date.getDate() + 1);
		year = date.getFullYear();
		var jtzj = date.getDay();
		var zhouji = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
		// getMonth() 的范围是[0, 11]，所以显示值需+1
		month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
		day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
		
		ll = year +"-"+ month + "-"+ day;
		$(".d_first").attr("data-start",ll);
		showStr = month + '.' + day;
		$(".d_first").text(showStr)
		$(".d_last").text(zhouji[jtzj]);
		//
		console.log("miingtian");
	}
	
	$(".pre_day").click(function() {
		zuotian();
	})
	$(".this_day").click(function() {
		initDate();
	})
	$(".next_day").click(function() {
		mingtian();
//		getdaybytype(3);
		
	});
	//校长我的
	//周一
	$(".qt1").click(function() {

		$(".qt1_2").css("display", "table");
		$(".qt1_1").hide();
	})
	$(".sxw1").click(function() {
		$(".qt1_1").show();
		$(".qt1_2").hide();
	})
	//周二
	$(".qt2").click(function() {

		$(".qt2_2").css("display", "table");
		$(".qt2_1").hide();
	})
	$(".sxw2").click(function() {
		$(".qt2_1").show();
		$(".qt2_2").hide();
	})
	//周三
	$(".qt3").click(function() {

		$(".qt3_2").css("display", "table");
		$(".qt3_1").hide();
	})
	$(".sxw3").click(function() {
		$(".qt3_1").show();
		$(".qt3_2").hide();
	})
	//周四
	$(".qt4").click(function() {

		$(".qt4_2").css("display", "table");
		$(".qt4_1").hide();
	})
	$(".sxw4").click(function() {
		$(".qt4_1").show();
		$(".qt4_2").hide();
	})
	//周五
	$(".qt5").click(function() {

		$(".qt5_2").css("display", "table");
		$(".qt5_1").hide();
	})
	$(".sxw5").click(function() {
		$(".qt5_1").show();
		$(".qt5_2").hide();
	})
	//周六
	$(".qt6").click(function() {

		$(".qt6_2").css("display", "table");
		$(".qt6_1").hide();
	})
	$(".sxw6").click(function() {
		$(".qt6_1").show();
		$(".qt6_2").hide();
	})
	//周日
	$(".qt7").click(function() {

		$(".qt7_2").css("display", "table");
		$(".qt7_1").hide();
	})
	$(".sxw7").click(function() {
		$(".qt7_1").show();
		$(".qt7_2").hide();
	})
	
	
	//校秘点击时的状态
	
	$(".xm_biaoge .one-day div").on("click",function () {
		$(this).addClass("xm_active");
		$(".xm_biaoge .one-day div").not($(this)).removeClass("xm_active");
	})
	
	
	//页面跳转
	$(".back_rewrite").click(function () {
		window.location.href = "zhurenjujue.html";
	})
	
	
	//上下周切换新增
	window.onload = function(){     
      var cells = document.getElementById('monitor').getElementsByTagName('td');
      var clen = cells.length;
      var currentFirstDate;
      var formatDate = function(date){       
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var week = '('+['星期天','星期一','星期二','星期三','星期四','星期五','星期六'][date.getDay()]+')'; 
 		if (month < 10) {
                month = "0" + month;
            }
 		if (day < 10) {
                day = "0" + day;
            }
        return year+'.'+month+'.'+day;
      };
      var addDate= function(date,n){    
        date.setDate(date.getDate()+n);    
        return date;
      };
      var setDate = function(date){       
        var week = date.getDay()-1;
        date = addDate(date,week*-1);
        currentFirstDate = new Date(date);
 
        for(var i = 0;i<clen;i++){         
          cells[i].innerHTML = formatDate(i==0 ? date : addDate(date,1));
        }
        
      };
      $(".pre_week").on("click",function () {
      	 setDate(addDate(currentFirstDate,-7));
        $(".w_first").text($(".zhouyi").text().substring(5,10));
        $(".w_last").text($(".zhouri").text().substring(5,10));
        
      })
	  $(".this_week").on("click",function () {
		obaganlestyle(1, 7);
	 
   })
      $(".next_week").on("click",function () {
      	setDate(addDate(currentFirstDate,7));
      	$(".w_first").text($(".zhouyi").text().substring(5,10));
        $(".w_last").text($(".zhouri").text().substring(5,10));
      })
      setDate(new Date());
    }
	
	//校秘切换 
	$(".class_name").on("click",".change_button",function () {
		var $lp = $(this).parents(".lp");
		$oneday = $lp.find(".one-day");
		$b1 = $lp.find(".b1");
		if($b1.length == 2) {
			$oneday.empty();
			$oneday.append("<li class='b1'><div class='xm_content' contenteditable='true''></div></li>");
			my_bl();
		}
		if($b1.length == 1) {
			$oneday.empty();
			$oneday.append("<li class='b1'><div class='xm_content' contenteditable='true''></div></li>");
			$oneday.append("<li class='b1'><div class='xm_content' contenteditable='true''></div></li>");
			ssame();
			my_bl();
		}
//		console.log($b1.length)
	})
	//校长切换 
	$(".class_name").on("click",".change_button2",function () {
		var $lp = $(this).parents(".lp");
		$oneday = $lp.find(".one-day");
		$b1 = $lp.find(".b1");
		if($b1.length == 3) {
			$oneday.empty();
			$oneday.append("<li class='b1'><div class='xz_content' contenteditable='true''></div></li>");
			my_bl();
		}
		if($b1.length == 1) {
			$oneday.empty();
			$oneday.append("<li class='b1'><div class='xz_content' contenteditable='true''></div></li>");
			$oneday.append("<li class='b1'><div class='xz_content' contenteditable='true''></div></li>");
			$oneday.append("<li class='b1'><div class='xz_content' contenteditable='true''></div></li>");
			ssame();
			my_bl();
		}
//		console.log($b1.length)
	})
	// 新增同步滚动
	
	$(".class_name").scroll(function () {
		var class_name_scrollleft = $(this).scrollLeft();

		$(".week_name").scrollLeft(class_name_scrollleft);
		$(".class_name").scrollLeft(class_name_scrollleft);
		// console.log(class_name_scrollleft);
	});
	
})
