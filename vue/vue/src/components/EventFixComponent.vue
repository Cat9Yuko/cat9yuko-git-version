<template>
    <!-- .stop .self .capture .once .prevent --> 
    <div @scroll.passive="d1" style="border: 10px solid green;height: 300px;overflow: auto;">
        <div @click="d2" style="background-color: red;height: 2000px;">d2</div>
    </div>
    <a href="www.baidu.com" @click.passive="link">link</a>
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
                console.log('link...');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>