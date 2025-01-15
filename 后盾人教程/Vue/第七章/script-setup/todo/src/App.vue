<template>
  <Suspense>
    <template #default>
      <div>
        <Todo />
      </div>
    </template>
    <template #fallback>loading...</template>
  </Suspense>
</template>

<script setup>
import Todo from './views/Todo.vue';
</script>

<style lang="scss" scoped></style>