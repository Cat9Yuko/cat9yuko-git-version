<template>
  <div>
    <hd-button content="保存提交" type="success" style="margin-right: 10px;" />
    <hd-button conetnt="删除" type="danger" style="margin-right: 10px;" />
    <hd-button content="反馈" style="margin-right: 10px;" />
    <hd-button content="编辑" :disabled="true" style="margin-right: 10px;" />
    <hd-button v-bind="{content:'保存',type:'success',style:'margin-top:20px;'}"/>
  </div>
</template>

<script>
import hdButton from './components/Button.vue'
  export default {
    components: {hdButton},
    data() {
      return {
        btContent:'保存提交'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>