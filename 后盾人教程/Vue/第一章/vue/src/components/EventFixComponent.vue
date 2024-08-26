<template>
    <div>
        <div @click.self="d1" style="background-color: green;">
            <div @click.once="d2" style="background-color: red;width: 200px;">d2</div>
        </div>
        <a href="https://www.houdunren.com" @click.prevent="link">后盾人</a>
        <!-- 
            .stop 阻止冒泡
            .capture 捕获时执行
            .self 点击自己才执行
            .once 执行一次
            .prevent 阻止默认行为
        -->
    </div>
</template>

<script>
    export default {
        methods: {
            d1() {
                console.log('d1');
            },
            d2() {
                console.log('d2');
            },
            link() {
                console.log('link');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>