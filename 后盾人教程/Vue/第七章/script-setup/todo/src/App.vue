<template>
  <div>
    {{ todos }}
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const todos = ref([])
onMounted(async () => {
  todos.value = await fetch(`http://127.0.0.1:3002/news`).
    then(r => r.json())
})
</script>

<style lang="scss" scoped></style>