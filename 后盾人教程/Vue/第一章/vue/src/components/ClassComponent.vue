<template>
    <div>
        <div class="c1" v-bind:class="{current: active}">后盾人</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c1 {color: red;}
</style>