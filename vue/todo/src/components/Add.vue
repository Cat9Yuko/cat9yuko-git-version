<template>
    <div class="add">
        <input type="text" v-model="title" placeholder="回车提交任务" @keyup.enter="onSubmit">
    </div>
</template>

<script setup>
import useTodo from '../composables/useTodo';
import { ref } from 'vue'
const title = ref('')
const onSubmit = () => {
    useTodo().add({ title: title.value })
    title.value = ''
}
</script>

<style lang="scss" scoped>
div.add {
    display: flex;

    input {
        border: 5px solid #8e44ad;
        padding: 10px;
        flex: 1;
    }
}
</style>