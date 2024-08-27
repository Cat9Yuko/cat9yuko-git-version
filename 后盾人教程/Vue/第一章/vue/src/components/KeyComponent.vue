<template>
    <div>
        按键事件
    </div>
    <!-- ctrl alt shift meta -->
     <!-- enter esc tab space delete up down left right -->
    <input type="text" @keyup.ctrl.alt.k="key">
</template>

<script>
    export default {
        methods: {
            key(event) {
                console.log(event.key);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>