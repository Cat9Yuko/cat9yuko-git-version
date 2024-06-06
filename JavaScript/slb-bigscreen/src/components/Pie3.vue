<template>
    <div>
        <div ref="target" class="w-full h-[230px]"></div>
    </div>
</template>

<script>
    import {zmjj} from '@/api/'
    import * as echarts from 'echarts'

    export default {
        mounted() {
            zmjj().then((res) => {
                this.renderChart(res)
            })
        },
        methods: {
            renderChart(data) {
                var data  = data.sort((a, b) => {
   return a.value - b.value;
});
                const target = this.$refs.target
                if(target) {
                    const mChart = echarts.init(target)
                    let legendarr = []
                    data.map(item => {
                        legendarr.push(item.value)
                    })
                    const option = {
                        tooltip: {
                            trigger: "item",
                        },
                        grid: {
                            left:'0',
                            right: '0',
                            bottom: '0',
                            top: '0',
                            containLabel: true
                        },
                        color:[
                            // 右下左上
                            {type: 'linear',x: 0,y: 0,x2: 1,y2: 0,
                            colorStops: [
                                {offset: 0, color: 'rgba(37,192,198,0.2)'},
                                {offset: 1, color: 'rgba(37,192,198,1)'}
                            ],
                            global: false}
                            
                        ],
                        // 图表配置
                        series: [
                                {
                                    type: "pie",
                                    color: '#8E99B3',
                                    silent: true,
                                    clockwise: true,
                                    radius: ["0%", "10%"],
                                    center: ["50%", "50%"],
                                    label: {
                                        show: false,
                                    },
                                    labelLine: {
                                        show: false,
                                    },
                                    data: [0],
                                },
                                {
                                    type: "pie",
                                    color: '#8E99B3',
                                    silent: true,
                                    clockwise: true,
                                    radius: ["15%", "16%"],
                                    center: ["50%", "50%"],
                                    label: {
                                        show: false,
                                    },
                                    labelLine: {
                                        show: false,
                                    },
                                    data: [0],
                                },
                                {
                                    stack: "a",
                                    type: "pie",
                                    radius: ["30%", "68%"],
                                    center: ["50%", "50%"],
                                    silent: true, // 鼠标悬浮效果
                                    clockwise: true, // 鼠标悬浮效果
                                    roseType: "area",
                                    zlevel: 10,
                                    label: {
                                        show: true,
                                        color: '#fff',
                                        fontSize: 12,
                                        lineHeight: 20,
                                        formatter: '{b}: {c}',
                                        rich: {
                                        percent: {
                                        fontSize: 15,
                                        color: '#0be5ff',
                                        },
                                        }
                                    },
                                    itemStyle: {
                                        borderWidth: 3,
                                    },
                                    data: data
                                }
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