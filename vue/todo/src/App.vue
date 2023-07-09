<script setup>
import Todo from './views/Todo.vue'
</script>

<template>
  <suspense>
    <template #default>
      <div>
        <todo />
      </div>
    </template>
    <template #fallback>
      Loading....
    </template>
  </suspense>
</template>

<style lang="scss" scoped>

</style>
