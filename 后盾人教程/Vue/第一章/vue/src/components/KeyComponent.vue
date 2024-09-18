<template>
    <div>
        按键事件
    </div>
    <!-- ctrl alt shift meta -->
     <!-- enter esc tab space delete up down left right -->
    <!-- <input type="text" @keyup.ctrl.alt.k="key"> -->
     <!-- .exact只有按alt键触发 -->
     <div style="height: 500px;width: 500px;background-color: green;" @click.middle="hd"></div>
</template>

<script>
    export default {
        methods: {
            key(event) {
                console.log(event.key);
            },
            hd(event) {
                console.log(event);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>