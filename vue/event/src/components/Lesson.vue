<template>
    <div>
        <img :src="lesson.preview" alt="lesson.title">
        <h3>{{ lesson.title }}</h3>
    </div>
</template>

<script>
    export default {
        props: ['lesson']
    }
</script>

<style lang="scss" scoped>
 div {
    border: 1px solid #dddddd;
    text-align: center;
    &:hover {
        box-shadow: 0 0 20px #aaaaaa;
    }
    h3 {
        padding: 0 0 20px 0;
        margin: 0;
    }
    img {
        width: 100%;
    }
 }
</style>