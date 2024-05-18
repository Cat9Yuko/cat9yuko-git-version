<template>
    <div>
        <div ref="target" class="w-full h-[151px]">
            
        </div>
    </div>
</template>

<script>
    import {resources} from '@/api/'
    import * as echarts from 'echarts'

    export default {
        data() {
            return {
                resources: {}
            }
        },
        mounted() {
            resources().then(res => {
                this.resources = res
            })
            this.renderChart()
        },
        methods: {
            renderChart() {
                const target = this.$refs.target
                if(target) {
                    const mChart = echarts.init(target)
                    const option = {
                        
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