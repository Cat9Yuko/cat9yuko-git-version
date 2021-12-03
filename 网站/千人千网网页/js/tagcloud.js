// 我的关键字
var data = [{name: "水雨情", weight: 21, url:"http://mwr.gov.cn/"},
{name: "水利新闻", weight: 23, url:"http://mwr.gov.cn/"},
{name: "地方水利", weight: 17, url:"http://mwr.gov.cn/"},
{name: "水利政策", weight: 22, url:"http://mwr.gov.cn/"},
{name: "项目资质", weight: 15, url:"http://mwr.gov.cn/"},
{name: "地方河流政策", weight: 11, url:"http://mwr.gov.cn/"},
{name: "河道信息", weight: 18, url:"http://mwr.gov.cn/"},
{name: "工程违规举报", weight: 30, url:"http://mwr.gov.cn/"},
{name: "湖泊分布信息", weight: 14, url:"http://mwr.gov.cn/"},
{name: "水利知识", weight: 19, url:"http://mwr.gov.cn/"}];
// var data =[];
var obj = {}
jQuery.ajax({
	type: "get",
	url: "http://www.mwr.gov.cn/syxg/tpxw/qrqwwdgjz.js",
	dataType: "jsonp",
	jsonp: "callback",
	jsonpCallback: "qrqwwdgjz",
	success: function (result) {

		// data.push(result);
		for (var i = 0; i < result.length; i++) {
			let obj = {}
			obj.name = result[i].name;
			obj.weight = result[i].weight;
			obj.url = result[i].url;
			data.push(obj);
			// console.log(obj);
		}
		// console.log(obj);
		// console.log(result)
		// console.log(data)
		Highcharts.chart('img', {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'wordcloud',
				height: 200,
				margin: [0, 0, 10, 0]

			},
			tooltip: {
				enabled: false
			},
			plotOptions: {
				series: {
					cursor: 'pointer',
					point: {
						events: {
							click: function (e) {
								location.href = this.options.url;
								// location.href = e.point.url
								// location.href = window.open(e.point.url)
							}
						}
					}
				}
			},
			series: [{
				data: data,
				name: '我的关键字',
				rotation: {
					from: 0,
					to: 0
				},
				spiral: 'rectangular',
				placementStrategy: 'center'
			}],
			colors: ['#92c1ff', '#fbd34b', '#a9e979', '#66decf', '#5acb78', '#975fe4'],
			title: {
				text: null
			},
			credits: {
				// 去除logo
				enabled: false,
			},
		});
	}
});



// 行为分析
var qrqwfwtj = [];
jQuery.ajax({
	type: "get",
	url: "http://pv.mwr.gov.cn/main_json.php?token=41d5ff202c2cf56fpc",
	dataType: "jsonp",
	jsonp: "callback",
	jsonpCallback: "qrqwfwtj",
	success: function (result) {
		for (var i = 0; i < result.length; i++) {
			qrqwfwtj.push(result[i]);
		}

		// result.forEach(element => {
		// 	qrqwfwtj.push(element)
		// 	// console.log(element)
		// });
		Highcharts.chart('container', {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie',
				height: 300,
				marginRight: 250,
				// marginTop:10,
			},
			title: {
				text: null
			},
			credits: {
				// 去除logo
				enabled: false,
			},
			legend: {
				align: 'right',
				verticalAlign: 'middle',
				floating: true,
				// width: 100,
				itemMarginTop: 10,
				itemMarginBottom: 14,
				layout: 'vertical',
				x: -60,
				// labelFormatter: function() {
				// 	 return this.name +" <span style='color:#dbdbdb;'>|</span> "+Highcharts.numberFormat(this.percentage, 1)+"%";
				// }
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			colors: ['#3ba0ff', '#36cbcb', '#4dcb73', '#fad337', '#f2637b', '#975fe4'],
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: false
					},
					showInLegend: true
				}
			},
			series: [{
				name: '占比',
				colorByPoint: true,
				innerSize: '80%',
				data: qrqwfwtj

			}]
		});
	}
});