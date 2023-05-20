<template>
    <div>
        <label>
            <div>{{ title }}</div>
            <input type="text" v-model="content">
        </label>
    </div>
</template>

<script>
export default {
    props: ['title', 'modelValue'],
    emits:['update:modelValue'],
    inject: ['webname'],
    data() {
        return {
            content:this.modelValue
        }
    },
    watch: {
        content(v) {
            this.$emit('update:modelValue',v)
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
        width: 100px;
        color: #666;
        font-size: 16px;
        margin-right: 10px;
    }
    input {
        border: 2px solid #ddd;
        padding: 5px 10px;
        color: #666;
        outline: none;
    }
}
</style>