<template>
    <div class="no-data-wrap">
        <slot>暂无数据！</slot>
    </div>
</template>

<script>

  export default {
    name: 'BasePage'
  }
</script>

<style lang="less">
    @import '../../styles/variable';

    .no-data-wrap {
        position: absolute;
        top: 30%;
        left: 0;
        right: 0;
        background-color: transparent;
        color: @text-secondary;
        text-align: center;
    }
</style>
