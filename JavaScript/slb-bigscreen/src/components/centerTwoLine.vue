<template>
    <div>
        <div ref="target" class="w-full h-[230px]"></div>
    </div>
</template>

<script>
    import {wsdt} from '@/api/'
    import * as echarts from 'echarts'

    export default {
        mounted() {
            wsdt().then((res) => {
                this.renderChart(res)
            })
        },
        methods: {
            renderChart(res) {
                const target = this.$refs.target
                let name = []
                let data1 = []
                let data2 = []
                let year = []
                res.map((item)=> {
                    name.push(item.name[0]) 
                    name.push(item.name[1]) 
                    data1 = item.value[0]
                    data2 = item.value[1]
                    year = item.year
                })
                
                if(target) {
                    const mChart = echarts.init(target)
                    const option = {
                        tooltip: {
                            trigger: "axis",
                        },
                        // x 轴
                        xAxis: {
                            data: year,
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
                            type: 'log',
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
                        color:[
                            // 右下左上
                            {type: 'linear',x: 0,y: 1,x2: 0,y2: 0,
                            colorStops: [
                                {offset: 0, color: 'rgba(222,184,76,0.2)'},
                                {offset: 1, color: 'rgba(222,184,76,1)'}
                            ],
                            global: false},
                            {type: 'linear',x: 0,y: 1,x2: 0,y2: 0,
                            colorStops: [
                                {offset: 0, color: 'rgba(37,192,198,0.2)'},
                                {offset: 1, color: 'rgba(37,192,198,1)'}
                            ],
                            global: false}
                            
                        ],
                        // 图表配置
                        series: [{
                            name: name[0],
                            type:'bar',
                            data: data1,
                            barMaxWidth: 10,
                            showSymbol:false
                        },{
                            name: name[1],
                            type:'bar',
                            data: data2,
                            barMaxWidth: 10,
                            showSymbol:false
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