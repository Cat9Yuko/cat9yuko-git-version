<template>
  <div>
    {{ lesson.title }}
    <slot name="icon"/>
    <slot content="Cat9" title="cat" :id="lesson.id" />
  </div>
</template>

<script>
export default {
  props: ['lesson']
}
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>