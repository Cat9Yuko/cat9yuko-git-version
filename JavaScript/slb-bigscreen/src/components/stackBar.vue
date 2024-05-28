<template>
    <div>
        <div ref="target" class="w-full h-[230px]"></div>
    </div>
</template>

<script>
    import {wstp} from '@/api/'
    import * as echarts from 'echarts'

    export default {
        mounted() {
            wstp().then((res) => {
                this.renderChart(res)
            })
        },
        methods: {
            renderChart(data) {
                const target = this.$refs.target
                if(target) {
                    const mChart = echarts.init(target)
                    let months = []
                    let data1 = []
                    let data2 = []
                    let legend = []
                    data.map(item => {
                        data1 = item.value[0]
                        data2 = item.value[1]
                        legend = item.name
                        item.month.map(item => {
                            months.push(item)
                        })
                    })
                    // console.log(legendarr);
                    const option = {
                        tooltip: {
                            trigger: "axis",
                        },
                        legend:  {
                            textStyle: {
                                color: '#ffffff',
                                fontSize: 10
                            },
                            right:'30px',
                            top: '15px',
                            icon: 'roundRect',
                            itemWidth: 12,
                            itemHeight: 2
                        },
                        // x 轴
                        xAxis: {
                            type:'category',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color:'#0f5b6a'
                                }
                            },
                            axisLabel: {
                                show: true,
                                color: '#ffffff',
                                fontSize: 10,
                                interval: 0,
                                // rotate: 90,
                                inside: false
                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                            zlevel: 2,
                            data: months
                        },
                        // y 轴
                        yAxis: {
                            type: 'value',
                            axisLabel: {
                                color: '#ffffff',
                                // show: false,
                                fontSize: 10,
                                margin: 15
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed',
                                    color: '#06434f'
                                }
                            }
                        },
                        grid: {
                            left:'30px',
                            right: '30px',
                            bottom: '10px',
                            top: '40px',
                            containLabel: true
                        },
                        color:[
                            // 右下左上
                            {type: 'linear',x: 0,y: 1,x2: 0,y2: 0,
                            colorStops: [
                                {offset: 0, color: 'rgba(37,192,198,0.2)'},
                                {offset: 1, color: 'rgba(37,192,198,1)'}
                            ],
                            global: false},
                            {type: 'linear',x: 0,y: 1,x2: 0,y2: 0,
                            colorStops: [
                                {offset: 0, color: 'rgba(53,151,94,0.2)'},
                                {offset: 1, color: 'rgba(53,151,94,1)'}
                            ],
                            global: false},
                            {type: 'linear',x: 0,y: 1,x2: 0,y2: 0,
                            colorStops: [
                                {offset: 0, color: 'rgba(222,184,76,0.2)'},
                                {offset: 1, color: 'rgba(222,184,76,1)'}
                            ],
                            global: false}
                            
                        ],
                        // 图表配置
                        series: [{
                            name: legend[0],
                            type:'bar',
                            label: {
                                show: false
                            },
                            stack: '网上投票',
                            barMaxWidth: 10,
                            zlevel: 1,
                            data: data1
                        },{
                            name: legend[1],
                            type:'bar',
                            label: {
                                show: false
                            },
                            stack: '网上投票',
                            barMaxWidth: 10,
                            zlevel: 1,
                            data: data2
                        },{
                            name: legend[2],
                            type:'bar',
                            label: {
                                show: false
                            },
                            stack: '网上投票',
                            barMaxWidth: 10,
                            zlevel: 1,
                            data: data2
                        }]

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