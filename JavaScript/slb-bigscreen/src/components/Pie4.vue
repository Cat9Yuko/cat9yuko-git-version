<template>
    <div>
        <div ref="target" class="w-full h-[200px]">
            
        </div>
    </div>
</template>

<script>
    import {wwfw} from '@/api/'
    import * as echarts from 'echarts'

    export default {
        mounted() {
            wwfw().then((res) => {
                this.renderChart(res)
            })
        },
        methods: {
            renderChart(data) {
                const target = this.$refs.target
                if(target) {
                    const total = data[0].value
                    const bjnum = data[1]
                    const wbj = data[0].value - data[1].value
                    const wbjnum = {"name": "未办结数量"}
                    Object.assign(wbjnum,{"value":wbj})
                    const data2 = []
                    data2.push(bjnum,wbjnum)
                    console.log(data2);
                    const mChart = echarts.init(target)
                    const option = {
                        tooltip: {
                            trigger: 'item'
                        },
                        // x 轴
                        xAxis: {
                            show: false
                        },
                        // y 轴
                        yAxis: {show: false},
                        title:{   //圆环中间内容
                            text: total,
                            subtext: '受理数量',
                            left:"center",
                            top:"40%",
                            textStyle:{
                                color:"#fff",
                                fontSize:18,
                                align:"center"
                            },
                            subtextStyle: {
                                fontSize: 18,
                                fontWeight: '700',
                                align:"center",
                                color:'#fff'
                            },
                        },
                        color:[
                            {type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
                            colorStops: [
                                {offset: 0, color: '#18646f'},
                                {offset: 0.3, color: '#2ad9dd'},
                                {offset: 1, color: '#145361'}
                            ],
                            global: false},
                            {type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
                            colorStops: [
                                {offset: 0, color: '#0c8f60'},
                                {offset: 0.3, color: '#16be7b'},
                                {offset: 1, color: '#094d44'}
                            ],
                            global: false},
                            {type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
                            colorStops: [
                                {offset: 0, color: '#b38a3e'},
                                {offset: 0.3, color: '#fdce4f'},
                                {offset: 1, color: '#434436'}
                            ],
                            global: false},
                            {type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
                            colorStops: [
                                {offset: 0, color: '#6d38ac'},
                                {offset: 0.3, color: '#883fcd'},
                                {offset: 1, color: '#392a6c'}
                            ],
                            global: false},
                            {type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
                            colorStops: [
                                {offset: 0, color: '#ce41a8'},
                                {offset: 0.3, color: '#eb70ca'},
                                {offset: 1, color: '#ce41a8'}
                            ],
                            global: false},
                            {type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
                            colorStops: [
                                {offset: 0, color: '#ef3e5b'},
                                {offset: 0.3, color: '#e67184'},
                                {offset: 1, color: '#a81b32'}
                            ],
                            global: false},
                            {type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
                            colorStops: [
                                {offset: 0, color: '#ffa030'},
                                {offset: 0.3, color: '#f1a954'},
                                {offset: 1, color: '#c47110'}
                            ],
                            global: false},
                            {type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
                            colorStops: [
                                {offset: 0, color: '#2ad9dd'},
                                {offset: 0.3, color: '#52e0e3'},
                                {offset: 1, color: '#0eadb1'}
                            ],
                            global: false},
                        ],
                        // 图表配置
                        series: [
                      {
                        name: '',
                        avoidLabelOverlap: false,//防止标签重叠
                        type: 'pie',
                        radius: ['90%', '100%'], //大小
                        left:'center',
                        top:'middle',
                        width: '190px',
                        height: '190px',
                        startAngle: 190,
                        padAngle: 5,
                        hoverAnimation: true,
                        labelLine: {
                          show:true,
                          lineStyle: {
                            width: 3,
                          },
                          normal: {
                            length: 20, // 指示线长度
                            length2:20
                          },
                        },
                        data: data2,
                        label: {
                          show: true,
                          formatter: function(params){ },
                          textStyle: {
                            fontSize: '12',
                            fontWeight: 'bold',
                            color:'#fff'
                          }
                        },
                        emphasis: {
                          show: false,
                        },
                      },
                      {
                        type: 'gauge',
                        zlevel: 2,
                        splitNumber: 85,
                        radius: '95%',
                        width: '150px',
                        height: '150px',
                        startAngle: 90,
                        endAngle: -269.9999,
                        axisLine: {
                          show: false,
                        },
                        axisTick: {
                          show: false,
                        },
                        axisLabel: {
                          show: false,
                        },
                        splitLine: {
                          show: true,
                          length: 7,
                          lineStyle: {
                            width: 2,
                            color: '#017383',
                          },
                        },
                        pointer: {
                          show: 0,
                        },
                        detail: {
                          show: 0,
                        }
                      },
                    ]

                    }
                    mChart.setOption(option)
                    window.addEventListener('resize', function() {
                        mChart.resize();
                    });
                }

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>