<template>
    <div>
        <item class="item" v-for="todo of todos" :key="todo.id" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Item from '../components/Item.vue'
const todos = ref([])
todos.value = await fetch(`http://127.0.0.1:3002/news`).
    then(r => r.json())
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    .item {
        margin: 10px;
    }
}
</style>