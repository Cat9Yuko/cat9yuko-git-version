$(function () {
	// 日期
		var myDate = new Date();
		var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
		var month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
		var date = myDate.getDate(); //获取当前日(1-31)
		console.log(year + "年" + month + "月" + date)
		var str = "星期" + "日一二三四五六".charAt(new Date().getDay());
		console.log(str)
		$(".date").text(year + "年" + month + "月" + date + "日 " + str);

})
