<template>
    <div>
        <img :src="lesson.preview" alt="">
    </div>
</template>

<script>
    export default {
        props:['lesson']
    }
</script>

<style lang="scss" scoped>
    div {
        border: 1px solid #ddd;
        text-align: center;
        
    }
</style>