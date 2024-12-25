<template>
    <label>
        <div>{{ title }}</div>
        <input type="text" v-model="content">
    </label>
</template>

<script>
export default {
    props: ['title', 'modelValue'],
    emits: ['update:modelValue'],
    inject: ['webname'],
    data() {
        return {
            content: this.modelValue
        }
    },
    watch: {
        content(value) {
            this.$emit('update:modelValue', value)
        }
    }
}
</script>

<style lang="scss" scoped>
label {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    div {
        color: #666666;
        font-size: 16px;
        margin-right: 10px;
        width: 100px;
    }

    input {
        border: 2px solid #ddd;
        padding: 5px 10px;
        color: #666666;
        outline: none;
    }
}
</style>