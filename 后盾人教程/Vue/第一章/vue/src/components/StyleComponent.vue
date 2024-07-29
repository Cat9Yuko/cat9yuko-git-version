<template>
    <div style="color: red;" :style="[styles,hdStyle]">
        后盾人
    </div>
</template>

<script>
    export default {
        data() {
            return {
                styles: {backgroundColor: 'green'}
            }
        },

        computed: {
            hdStyle() {
                return {border: '5px solid #eeeeee'}
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>