<template>
    <div>
        <h1>Cat9Mrchen</h1>
        <div style="color: red;" @click="show(content)">
            
            {{ content }}
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            content: {type: String, default: 'cat'}
        },
        methods: {
            show(content) {
                console.log(`子组件调用：${content}`);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>