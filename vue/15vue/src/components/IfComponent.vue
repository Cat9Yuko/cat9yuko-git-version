<template>
    <template v-for="(lesson,index) in lessons" :key="index">
       <div v-if="lesson.isDelete" style="background-color: red;"> {{ lesson.title }}</div>
       <!-- <template v-else>{{ lesson.title }}</template> -->
    </template>
</template>

<script>
    import lessons from '../data/lesson';
    export default {
        data() {
            return {
                lessons
            }
        },
    }
</script>

<style lang="less" scoped>

</style>