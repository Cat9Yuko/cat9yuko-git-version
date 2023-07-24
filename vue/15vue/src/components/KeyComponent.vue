<template>
    <div>按键事件</div>
    <!-- <input type="text" @keyup.ctrl.k="key"> -->
    <div style="height: 500px;width: 500px;background-color: green;" @click.alt.exact="hd"></div>
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

<style lang="less" scoped></style>