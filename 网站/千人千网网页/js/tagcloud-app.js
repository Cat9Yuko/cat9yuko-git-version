// 行为分析
var qrqwfwtj = [];
$.ajax({
    type: "get",
    url: "http://pv.mwr.gov.cn/main_json.php?token=41d5ff202c2cf56fpc",
    dataType: "jsonp",
    jsonpCallback: "qrqwfwtj",
    success: function (result) {
        for (var i = 0; i < result.length; i++) {
            qrqwfwtj.push(result[i]);
        }
        Highcharts.chart('container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                // height: 300
            },
            title: {
                text: null
            },
            credits: {
                // 去除logo
                enabled: false,
            },
            legend: {
                itemDistance: 20,
                width: 200,
                itemMarginBottom: 14,
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
                        enabled: true,
                        format: '{point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    },
                    showInLegend: true
                },

            },
            series: [{
                name: '行为分析',
                colorByPoint: true,
                innerSize: '80%',
                data: qrqwfwtj
            }]
        });


    }
});


// 我的关键字
var data = [];
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