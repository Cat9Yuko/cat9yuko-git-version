<template>
    <div>
        <div ref="target" class="w-full h-[250px] mt-[-25px]"></div>
    </div>
</template>

<script>
    import {wzfb} from '@/api/'
    import * as echarts from 'echarts'
    export default {
        mounted() {
            wzfb().then((res) => {
                this.renderChart(res)
            })
        },
        methods: {
            renderChart(data) {
                let names = []
                let value = []

                data.map(item => {
                    item.name.map(item => {
                        names.push({name:item})
                    })
                    item.value.map(item => {
                        value.push(item)
                    })
                })
                const target = this.$refs.target
                if(target) {
                    const mChart = echarts.init(target)
                    const option = {
                    grid: {
                        top:'0'
                    },
                    radar: {
                        // shape: 'circle',
                        indicator: names,
                        axisName: {
                            color:'#ffffff'
                        },
                        axisLine: {
                            lineStyle: {
                                color:'#1e384b'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color:'#354758'
                            }
                        },
                        splitArea: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        }
                    },
                    series: [
                        {
                        name: '网站发布',
                        type: 'radar',
                        label: {
                            show: true,
                            color:'#ffffff',
                            fontSize: 6
                        },
                        areaStyle: {
                            opacity: 0.2
                        },
                        itemStyle: {

                        },
                        data: value
                        }
                    ]
                    };

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