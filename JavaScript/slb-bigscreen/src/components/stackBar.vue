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
                        // x 轴
                        xAxis: {
                            type: 'category',
                            data: months,
                            axisLabel: {
                                color: '#ffffff',
                                fontSize: 10,
                            },
                            axisLine: {
                                lineStyle: {
                                    color:'#0f5b6a'
                                }
                            },
                            axisTick: {
                                show: false
                            }
                        },
                        // y 轴
                        yAxis: {
                            type: 'value',
                            axisLabel: {
                                color: '#ffffff',
                                fontSize: 10,
                            },
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed',
                                    color: '#06434f'
                                }
                            }
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
                        grid: {
                            left:'30px',
                            right: '30px',
                            top:'40px',
                            bottom:'0',
                            containLabel: true
                        },
                        color:['#27babd','#27babd'],
                        // 图表配置
                        series: [{
                            name: legend[0],
                            type:'line',
                            label: {
                                show: false
                            },
                            stack: '网上投票',
                            barMaxWidth: 10,
                            zlevel: 1,
                            data: data1,
                            areaStyle: {
                                color: // 右下左上
                                {type: 'linear',x: 0,y: 0,x2: 1,y2: 0,
                                colorStops: [
                                    {offset: 0, color: 'rgba(39,186,189,0.2)'},
                                    {offset: 1, color: 'rgba(39,186,189,0.5)'}
                                ],
                                global: false}
                            },
                            showSymbol:false,
                            markPoint: {
                                symbol:'circle',
                                symbolSize: 6,
                                label: {
                                    color: '#ffffff',
                                    offset: [15,0]
                                },
                                itemStyle: {
                                    color: '#ffffff'
                                },
                                data: [
                                { type: 'max', name: 'Max' }
                                ]
                            },
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