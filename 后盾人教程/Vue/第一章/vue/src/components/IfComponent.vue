<template>
    <div v-for="(lesson, index) in lessons" :key="index">
        <div v-if="lesson.isDelete" style="background-color: red;">{{ lesson.title }}</div>
        <template v-else-if="lesson.price > 100" style="background-color: green;">{{ lesson.title }}</template>
        <div v-else>{{ lesson.title }}</div>
    </div>
</template>

<script>
    import lessons from '../../data/lession'
    export default {
        data() {
            return {
                lessons
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>