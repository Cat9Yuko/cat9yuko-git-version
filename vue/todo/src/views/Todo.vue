<script setup>
import Item from '../components/Item.vue'
import useTodo from '../composables/useTodo'
import Add from '../components/Add.vue'
import Sort from '../components/Sort.vue';
const { todos, load } = await useTodo();
load()
</script>

<template>
  <Add />
  <Sort />
  <div class="todo">
    <item :todo="todo" class="item" v-for="todo of todos" :key="todo.id" />
  </div>
</template>

<style lang="scss">
div.todo {
  display: flex;
  flex-direction: column;

  .item {
    margin-bottom: 10px;
  }
}
</style>
