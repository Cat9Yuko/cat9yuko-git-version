<template>
    <div class="page">
        <slot></slot>
    </div>
</template>

<script>

  export default {
    name: 'BasePage'
  }
</script>

<style lang="less">
    .page {
        position: relative;
        height: 100%;
        overflow: auto;
    }
</style>
