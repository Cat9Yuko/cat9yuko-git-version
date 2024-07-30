<template>
    <div>
        <!-- 数值 -->
        <!-- <div v-for="n in 8" :key="n"> {{ n }}</div> -->

        <!-- 对象 -->
         <!-- <div v-for="(value,key, index) in obj" :key="index">{{ value }} - {{ key }} - {{ index }}</div> -->

         <div v-for="lession of lessions">{{ lession.title }}</div>
    </div>
</template>

<script>
import lessions from '../../data/lession'
    export default {
        data() {
            return {
                lessions,
                obj: {
                    name: "后盾人",
                    url: 'houdunren.com'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>