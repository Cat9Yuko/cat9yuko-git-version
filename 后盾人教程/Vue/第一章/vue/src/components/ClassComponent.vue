<template>
    <div>
        <div class="c1" v-bind:class="{ current: active }">后盾人</div>
        <div class="c2" :class="[classList,'package']">后盾人</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: true,
            classList: {
                current: false,
                xj: true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.c1 {
    color: #ffffff;
    background-color: aqua;
}
.current {
    background-color: black;
}
.xj {
    border: 20px solid #eeeeee;
}
</style>