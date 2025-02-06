<template>
  <div class="item">
    <input type="text" :value="todo.title">
    <button @click="del(todo.id)">删除</button>
  </div>
</template>

<script setup>
import useTodo from '../composables/useTodo';

const { del } = useTodo()
const { todo } = defineProps({
  todo: {
    type: Object, required: true
  }
})
</script>

<style lang="scss">
div.item {
  display: flex;

  input {
    flex: 1;
    padding: 10px;
  }
  button {
        margin-left: 10px;
        background-color: #e74c3c;
        color: #ffffff;
        border: none;
        padding: 5px 10px;
    }
}
</style>