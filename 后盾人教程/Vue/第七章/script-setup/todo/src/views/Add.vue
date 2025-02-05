<template>
    <div class="add">
        <input type="text" v-model="title" placeholder="回车提交任务" @keyup.enter="onSubmit">
    </div>
</template>

<script setup>
import { ref } from 'vue';
import useTodo from '../composables/useTodo';
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
        border: 5px solid #16a085;
        padding: 10px;
        flex: 1;
    }
}
</style>