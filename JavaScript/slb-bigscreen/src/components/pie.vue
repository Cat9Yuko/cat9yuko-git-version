<template>
    <div>
        <div ref="target" class="w-full h-[165px]">
            
        </div>
    </div>
</template>

<script>
    import {resources} from '@/api/'
    import * as echarts from 'echarts'

    export default {
        mounted() {
            resources().then((res) => {
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
                            show: false
                        },
                        // y 轴
                        yAxis: {show: false},
                        legend:  {
                            orient:'vertical',
                            left: '285px',
                            top: '55px',
                            align: 'left',
                            height: '50px',
                            itemGap: 19,
                            textStyle: {
                                color: '#ffffff'
                            },
                            icon: 'rect'
                        },
                        
                        color:[
                            {type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
                            colorStops: [
                                {offset: 0, color: '#18646f'},
                                {offset: 0.3, color: '#2ad9dd'},
                                {offset: 1, color: '#145361'}
                            ],
                            global: false},
                            {type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
                            colorStops: [
                                {offset: 0, color: '#0c8f60'},
                                {offset: 0.3, color: '#16be7b'},
                                {offset: 1, color: '#094d44'}
                            ],
                            global: false},
                            {type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
                            colorStops: [
                                {offset: 0, color: '#b38a3e'},
                                {offset: 0.3, color: '#fdce4f'},
                                {offset: 1, color: '#434436'}
                            ],
                            global: false},
                            {type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
                            colorStops: [
                                {offset: 0, color: '#6d38ac'},
                                {offset: 0.3, color: '#883fcd'},
                                {offset: 1, color: '#392a6c'}
                            ],
                            global: false},
                            
                        ],
                        // 图表配置
                        series: {
                            name:'信息发布',
                            type: 'pie',
                            radius: ['50%','100%'],
                            startAngle: 150,
                            minAngle:20,
                            width:'151px',
                            height: '151px',
                            left: '82px',
                            top:'5px',
                            label: {
                                show: true,
                                position: 'inside',
                                color: '#ffffff',
                                fontSize: 8,
                                formatter: '{d}%',
                            },
                            labelLine: {
                                show: false
                            },
                            data: data
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