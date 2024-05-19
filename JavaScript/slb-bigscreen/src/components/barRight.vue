<template>
    <div>
        <div ref="target" class="w-full h-[150px]"></div>
    </div>
</template>

<script>
    import {lmfwlph} from '@/api/'
    import * as echarts from 'echarts'

    export default {
        mounted() {
            lmfwlph().then((res) => {
                this.renderChart(res)
            })
        },
        methods: {
            renderChart(data) {
                const target = this.$refs.target
                if(target) {
                    const mChart = echarts.init(target)
                    let legendarr = []
                    data.map(item => {
                        legendarr.push(item.value)
                    })
                    const option = {
                        tooltip: {
                            trigger: "axis",
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
                            data: data.map(item => ({
                                value: item.name
                            }))
                        },
                        // y 轴
                        yAxis: {
                            type: 'log',
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
                            top: '20px',
                            containLabel: true
                        },
                        // 滚动条
                        // dataZoom: [
                        // {
                        //     id: 'dataZoomY',
                        //     xAxisIndex: [0],
                        //     show: true, //是否显示滑动条，不影响使用
                        //     type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                        //     startValue: 0, // 从头开始。
                        //     endValue: 10, // 一次性展示5个
                        //     height: 5,
                        //     bottom: '10px',
                        //     borderColor: 'transparent',
                        //     fillerColor: 'rgba(87, 102, 236,1)',
                        //     zoomLock: true,
                        //     showDataShadow: false, //是否显示数据阴影 默认auto
                        //     backgroundColor: '#fff',
                        //     showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
                        //     realtime: true, //是否实时更新
                        //     filterMode: 'filter',
                        //     handleIcon: 'circle',
                        //     handleStyle: {
                        //         color: 'rgba(87, 102, 236,1)',
                        //         borderColor: 'rgba(87, 102, 236,1)',
                        //     },
                        //     // handleSize: '80%',
                        //     moveHandleSize: 0,
                        //     // maxValueSpan: "2014-02-24",
                        //     // minValueSpan: 4,
                        //     brushSelect: false, //刷选功能，设为false可以防止拖动条长度改变 ************（这是一个坑）
                        // }],
                        color:[
                            // 右下左上
                            {type: 'linear',x: 0,y: 1,x2: 0,y2: 0,
                            colorStops: [
                                {offset: 0, color: 'rgba(37,192,198,0.2)'},
                                {offset: 1, color: 'rgba(37,192,198,1)'}
                            ],
                            global: false}
                            
                        ],
                        // 图表配置
                        series: {
                            name: '主站主要栏目访问量排行',
                            type:'bar',
                            label: {
                                show: false
                            },
                            barMaxWidth: 10,
                            zlevel: 1,
                            data: data.map(item => ({
                                value: item.value
                            })),
                        },

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