<template>
  <div>
    <hd-button content="保存提交" type="success" style="margin-right: 10px;"/>
    <hd-button content="删除" type="danger" style="margin-right: 10px;"/>
    <hd-button content="反馈" type="info" style="margin-right: 10px;"/>
    <hd-button content="禁用" :disabled="true" style="margin-right: 10px;"/>
  </div>
</template>

<script>
import hdButton from './components/Button.vue';
  export default {
    components: {hdButton},
  }
</script>

<style lang="scss" scoped>

</style>