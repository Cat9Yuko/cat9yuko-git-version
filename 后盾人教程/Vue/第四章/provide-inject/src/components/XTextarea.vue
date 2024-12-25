<template>
    <label>
        <div>{{ title }}</div>
        <textarea :rows="rows" v-model="content" @input="$emit('update:modelValue', $event.target.value)">
        </textarea>
    </label>
</template>

<script>
export default {
    props: {
        title: String,
        modelValue: String,
        rows: {
            type: Number,
            default: 10
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

    textarea {
        border: 2px solid #ddd;
        padding: 5px 10px;
        color: #666666;
        outline: none;
    }
}
</style>