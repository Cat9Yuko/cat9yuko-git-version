<template>
    <div>
        <div ref="target" class="w-full h-[250px]"></div>
    </div>
</template>

<script>
    import {recent} from '@/api/'
    import * as echarts from 'echarts'

    export default {
        mounted() {
            recent().then((res) => {
                this.renderChart(res)
            })
        },
        methods: {
            renderChart(res) {
                const target = this.$refs.target
                console.log(res);
                if(target) {
                    const mChart = echarts.init(target)
                    const option = {
                        tooltip: {
                            trigger: "axis",
                        },
                        // x 轴
                        xAxis: {
                            type: 'category',
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
                        grid: {
                            left:'30px',
                            right: '30px',
                            top:'30px',
                            bottom:'0',
                            containLabel: true
                        },
                        color:['#27babd','#e1ad48'],
                        // 图表配置
                        series: {
                            name: '近日更新',
                            type:'line',
                            data: res.map(item => (
                                {
                                value: item.value
                                }
                            )),
                            areaStyle: {
                                color:// 右下左上
                                {type: 'linear',x: 0,y: 0,x2: 1,y2: 0,
                                colorStops: [
                                    {offset: 0, color: 'rgba(39,186,89,0.2)'},
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
                        }

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