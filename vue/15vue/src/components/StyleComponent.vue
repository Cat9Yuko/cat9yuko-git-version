<template>
    <div style="color: red;" :style="[styles,hdStyle]">
        abs
    </div>
</template>

<script>
export default {
    data() {
        return {
            hdStyle: {
                border: "solid 10px #333",
            }
        }
    },
    computed:  {
        styles() {
            return {
                backgroundColor:'green'
            }
        }
    }
}
</script>

<style lang="less" scoped></style>