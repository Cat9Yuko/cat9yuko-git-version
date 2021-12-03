$(".todayCalendar").calendar({
	dateFormat: "yyyy.mm.dd",

});

$(".weekMCalendar").calendar({
	dateFormat: "yyyy.mm",

});
$("#date3").calendar({
	container: "#inline-calendar",
	dateFormat: "yyyy.mm.dd"
});
$("#date3_2").calendar({
	container: "#inline-calendar",
	dateFormat: "yyyy.mm.dd"
});

$(".rli3").calendar({
	container: ".rili_3",
})

$(".rli3_2").calendar({
	container: ".rili_3_2",
})

$(".rli3_3").calendar({
	container: ".rili_3_3",
})

$(".rli3_4").calendar({
	container: ".rili_3_4",
})

$(".rli3_5").calendar({
	container: ".rili_3_5",
})
$(".rli3_6").calendar({
	container: ".rili_3_6",
})
$(".rli3_7").calendar({
	container: ".rili_3_7",
})
$(".rli3_8").calendar({
	container: ".rili_3_8",
})
$(".rli3_9").calendar({
	container: ".rili_3_9",
})
$(".rli3_10").calendar({
	container: ".rili_3_10",
})
$(function() {

	//				$(".dept_pList_bg").click(function () {
	//					$(this).addClass("dept_active");
	//					
	//				});

	$(".dept").click(function() {
		$(".rili_3").slideToggle();
	})
	$(".dept2").click(function() {
		$(".rili_3_2").slideToggle();
	})
	$(".dept3").click(function() {
		$(".rili_3_3").slideToggle();
	})
	$(".dept4").click(function() {
		$(".rili_3_4").slideToggle();
	})
	$(".dept5").click(function() {
		$(".rili_3_5").slideToggle();
	})
	$(".dept6").click(function() {
		$(".rili_3_6").slideToggle();
	})
	$(".dept7").click(function() {
		$(".rili_3_7").slideToggle();
	})
	$(".dept8").click(function() {
		$(".rili_3_8").slideToggle();
	})
	$(".dept9").click(function() {
		$(".rili_3_9").slideToggle();
	})
	$(".dept10").click(function() {
		$(".rili_3_10").slideToggle();
	})

})

$(".myslide_btn").click(function() {
	$(".myslide").slideToggle();
})
$(".myslide_btn").click(function() {
	$(".xian2").toggle()
})
$(".myslide_btn2").click(function() {
	$(".myslide2").slideToggle();
})
$(".myslide_btn2").click(function() {
	$(".xian1").toggle()
})
$(".myslide_btn3").click(function() {
	$(".myslide3").slideToggle();
})

$(".fa-chevron-down").click(function() {
	$(this).toggleClass("fa-chevron-up")
	$(this).toggleClass("fa-chevron-down")
})

$(".week").click(function() {
	$(this).addClass("wm_active")
	$(".month").removeClass("wm_active");
})
$(".month").click(function() {
	$(this).addClass("wm_active")
	$(".week").removeClass("wm_active");
})

$(".img_change1").click(function() {
	$(".img_change1_img").attr("src", "img/bottom-nav1.png");
	$(".img_change2_img").attr("src", "img/bottom-nav2.png");
})

$(".img_change2").click(function() {
	$(".img_change2_img").attr("src", "img/bottom-nav4.png");
	$(".img_change1_img").attr("src", "img/bottom-nav3.png");
})

$(".list_cell").click(function() {
	$(this).next().slideToggle()
	
})
