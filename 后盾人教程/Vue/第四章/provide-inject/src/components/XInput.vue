<template>
    <label>
        <div>{{ title }}</div>
        <input type="text">
    </label>
</template>

<script>
export default {
    props: ['title', 'modelValue']
}
</script>

<style lang="scss" scoped>
label {
    display: flex;
    align-items: center;

    div {
        color: #666666;
        font-size: 16px;
        margin-right: 10px;
    }

    input {
        border: 2px solid #ddd;
        padding: 5px 10px;
        color: #666666;
        outline: none;
    }
}
</style>