<template>
    <div>
        <div ref="target" class="w-full h-[500px]"></div>
    </div>
</template>

<script>
    import {distribute} from '@/api/'
    import {chinamap} from '@/api/'
    import * as echarts from 'echarts'

    export default {
        mounted() {
            distribute().then((res) => {
                chinamap().then((chinamap) => {
                this.renderChart(res,chinamap)
            })
            })
        },
        methods: {
            renderChart(data,chinamap) {
                const target = this.$refs.target
                if(target) {
                    const mChart = echarts.init(target)
                    echarts.registerMap('china',chinamap)
                    
                    const option = {
                        geo: {
                            map: 'china',
                            label: {
                                show: true,
                                color: '#ffffff'
                            },
                            left: '24px',
                            top: '68px',
                            roma: true,
                            zoom: 0.9,
                            itemStyle: {
                                areaColor: {type: 'linear',x: 1,y: 1,x2: 0,y2: 0,
                                colorStops: [
                                {offset: 0, color: 'rgba(0,112,188,0.7)'},
                                {offset: 1, color: 'rgba(38,221,240,0.75)'}
                            ],
                            global: false},
                                borderColor: '#ffffff'
                            },
                            emphasis: {
                                disabled: true
                            }
                        },
                        title: {
                            text: '访问量所占百分比',
                            right: 74,
                            top: 30,
                            textStyle: {
                                color: '#ffffff',
                                fontSize: '18px'
                            }
                        },
                        // x 轴
                        xAxis: {
                            show: false,
                            splitLine: {
                                show: false
                            },
                            max: 100,
                            type: 'value'
                        },
                        // y 轴
                        yAxis: [{
                            type: 'category',
                            axisLabel: {
                                color: '#ffffff',
                                // show: false,
                                fontSize: 12,
                                margin: 15
                            },
                            inverse: true,
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            data: data.visits.map(item => ({
                                value: item.name
                            }))
                        },{
                            type: 'category',
                            axisLabel: {
                                color: '#ffffff',
                                // show: false,
                                fontSize: 12,
                                margin: 15
                            },
                            inverse: true,
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            label: {
                                formatter: '{b}%',
                            },
                            data: data.visits.map(item => ({
                                value: item.percentage + '%'
                            }))
                        }],
                        legend:  {
                            show:false
                        },
                        grid: {
                            left:'528px',
                            right: '35px',
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
                        series: [{
                            name: '流量分布',
                            type:'bar',
                            barWidth:'7px',
                            MaxSize: 0,
                            showBackground: true,
                            backgroundStyle: {
                                borderRadius: 5
                            },
                            itemStyle: {
                                borderRadius: [5,5,5,5]
                            },
                            label: {
                                show: false,
                                position: 'right',
                                color: '#24a7ad',
                                fontSize: 11,
                                formatter: '{c}%',
                            },
                            data: data.visits.map(item => ({
                                value: item.percentage
                            }))
                        },]

                    }
                    echarts.registerMap('china',chinamap)
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