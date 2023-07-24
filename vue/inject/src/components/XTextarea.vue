<template>
    <label>
        <div>{{ title }}</div>
        <textarea :rows="rows" v-model="content" @input="$emit('update:modelValue', $event.target.value)"></textarea>
    </label>
</template>

<script>
export default {

    props: {
        title: {
            type: String,
            required: true
        },
        modelValue: String,
        rows: {
            type: Number,
            default: 3
        }
    },
    emits: ['update:modelValue'],
    inject: ['webname'],
    data() {
        return {
            content: this.modelValue
        }
    }
}
</script>

<style lang="less" scoped>
label {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    div {
        width: 100px;
        color: #666;
        font-size: 16px;
        margin-right: 10px;
    }

    textarea {
        border: 2px solid #ddd;
        padding: 5px 10px;
        color: #666;
        outline: none;
    }
}
</style>