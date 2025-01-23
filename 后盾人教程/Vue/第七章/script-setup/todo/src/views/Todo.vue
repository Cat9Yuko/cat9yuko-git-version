<template>
    <div class="todo">
        <item :todo="todo" @del="del" class="item" v-for="todo of todos" :key="todo.id" />
    </div>
</template>

<script setup>

import Item from "../components/Item.vue";
import useTodo from '../composables/useTodo'
import useRequest from '../composables/useRequest';

const request = useRequest()
const emit = defineEmits(["del"]);

const { todos } = await useTodo()

const del = async () => {
    todos.value = await request.get()
};
</script>

<style lang="scss">
div.todo {
    display: flex;
    flex-direction: column;

    .item {
        margin-bottom: 10px;
    }
}
</style>
