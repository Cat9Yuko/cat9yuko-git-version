<template>
    <div class="todo">
        <item :todo="todo" @del="del" class="item" v-for="todo of todos" :key="todo.id" />
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Item from '../components/Item.vue'
    
    const todos = ref([])
    todos.value = await fetch(`http://127.0.0.1:3002/news`).then(r => r.json())

    const emit = defineEmits(['del'])

    const del = async () => {
        todos.value = await fetch(`http://127.0.0.1:3002/news`).then(r => r.json())
    }
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