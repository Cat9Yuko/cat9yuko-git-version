<template>
  <div class="item">
    <input type="text" :value="todo.title">
    <button @click="del">删除</button>
  </div>
</template>

<script setup>
import useRequest from '../composables/useRequest';


const request = useRequest()
const { todo } = defineProps({
  todo: {
    type: Object, required: true
  }
})
const emit = defineEmits(['del'])
const del = async () => {
  await request.delete(todo.id)
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