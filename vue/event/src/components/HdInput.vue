<template>
    <div>
        <input type="text" :value="content" @input="change">
        {{ content }}
    </div>
</template>

<script>
export default {
    props: ['modelValue'],
    emits:['update:modelValue'],
    data() {
        return { content: this.modelValue }
    },
    methods: {
        change(eve) {
            this.content = eve.target.value
            this.$emit('update:modelValue',this.content)
        }
    }
}
</script>

<style lang="less" scoped></style>