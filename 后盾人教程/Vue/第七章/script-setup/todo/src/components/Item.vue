<template>
  <div class="item">
    <input type="text" :value="todo.title">
    <button @click="del">删除</button>
  </div>
</template>

<script setup>
const { todo } = defineProps({
  todo: {
    type: Object, required: true
  }
})
const emit = defineEmits(['del'])
const del = async () => {
  await fetch(`http://127.0.0.1:3002/news/${todo.id}`, {
    method: 'delete'
  })
  emit('del')
}
</script>

<style lang="scss">
div.item {
  display: flex;

  input {
    flex: 1;
    padding: 10px;
  }
}
</style>