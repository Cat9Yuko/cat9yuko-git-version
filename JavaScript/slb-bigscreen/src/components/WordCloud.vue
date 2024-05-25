<template>
    <div>
        <div ref="target" class="w-full h-[230px]"></div>
    </div>
</template>

<script>
    import {focused} from '@/api/'
    import * as echarts from 'echarts'
    import 'echarts-wordcloud'
    export default {
        mounted() {
            focused().then((res) => {
                this.renderChart(res)
            })
        },
        methods: {
            renderChart(data) {
                const target = this.$refs.target
                if(target) {
                    const mChart = echarts.init(target)
                    let randcolor = () => {
                    let r = 41 + ~~(Math.random() * 100);
                    let g = 173 + ~~(Math.random() * 100);
                    let b = 247 + ~~(Math.random() * 100);
                    return `rgb(${r}, ${g}, ${b})`
                    }
                    const option = {
                        // 图表配置
                        series: {
                            type: "wordCloud",
                            // 网格大小，各项之间间距
                            gridSize: 10,
                            // 形状 circle 圆，cardioid  心， diamond 菱形，
                            // triangle-forward 、triangle 三角，star五角星
                            shape: 'circle',
                            // 字体大小范围
                            sizeRange: [20, 50],
                            // 文字旋转角度范围
                            rotationRange: [0, 0],
                            // 旋转步值
                            // rotationStep: 90,
                            // 自定义图形
                            // maskImage: maskImage,
                            left: 'center',
                            top: 'center',
                            right: null,
                            bottom: null,
                            layoutAnimation: true,
                            // 是否渲染超出画布的文字
                            drawOutOfBound: false,
                            textStyle: {
                                color: randcolor,
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                            },
                            data: data.map(item => ({
                                name: item.name,
                                value: item.symbolSize
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