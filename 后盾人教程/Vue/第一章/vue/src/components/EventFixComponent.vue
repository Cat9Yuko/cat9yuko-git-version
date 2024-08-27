<template>
    <div>
        <div @scroll.passive="d1" style="border: 10px solid green;height: 300px;overflow-y: auto;">
            <div @click.once="d2" style="background-color: red;height: 2000px;">d2</div>
        </div>
        <a href="https://www.houdunren.com" @click.passive="link">后盾人</a>
        <!-- 
            .stop 阻止冒泡
            .capture 捕获时执行
            .self 点击自己才执行
            .once 执行一次
            .prevent 阻止默认行为
            .passive 忽略默认行为的检测
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
            link(event) {
                event.preventDefault();
                console.log('link');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>