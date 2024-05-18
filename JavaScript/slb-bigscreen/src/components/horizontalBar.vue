<template>
    <div>
        <div ref="target" class="w-full h-[150px]"></div>
    </div>
</template>

<script>
    import {hdjl} from '@/api/'
    import * as echarts from 'echarts'

    export default {
        mounted() {
            hdjl().then((res) => {
                this.renderChart(res)
            })
        },
        methods: {
            renderChart(data) {
                const target = this.$refs.target
                if(target) {
                    const mChart = echarts.init(target)
                    const option = {
                        // x 轴
                        xAxis: {
                            type:'value',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color:'#0f5b6a'
                                }
                            },
                            axisLabel: {
                                color: '#ffffff'
                            },
                            splitLine: {
                                show: false
                            }
                        },
                        // y 轴
                        yAxis: {
                            type: 'category',
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
                            data: data.map(item => ({
                                value: item.name
                            }))
                        },
                        legend:  {
                            show:false
                        },
                        grid: {
                            left:'30px',
                            top: '0',
                            right: '30px',
                            bottom:'0',
                            containLabel: true
                        },
                        color:[
                            // 右下左上
                            {type: 'linear',x: 0,y: 0,x2: 1,y2: 0,
                            colorStops: [
                                {offset: 0, color: 'rgba(39,186,190,0.2)'},
                                {offset: 1, color: 'rgba(39,186,190,1)'}
                            ],
                            global: false}
                            
                        ],
                        // 图表配置
                        series: {
                            name: '互动交流',
                            type:'bar',
                            barWidth:'7px',
                            // barCategoryGap: '10px',

                            label: {
                                show: true,
                                position: 'right',
                                color: '#24a7ad',
                                fontSize: 11
                            },
                            data: data.map(item => ({
                                value: item.value
                            }))
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