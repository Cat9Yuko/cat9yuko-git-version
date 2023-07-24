<template>
    <div>
        <!-- <div v-for="(value,index) in obj" :key="index">{{ value }}</div> -->
        <div v-for="lesson of lessons" :key="lesson">
            <template v-if="!lesson.isDelete">{{ lesson.title }}</template>
        </div>
    </div>
</template>

<script>
import lessons from '../data/lesson';
    export default {
        data() {
            return {
                lessons,
                obj: {
                    name: "cat",
                    url: "www.cat.com",
                }
            }
        },
    }
</script>

<style lang="less" scoped>

</style>