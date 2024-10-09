<template>
  <div>
    <hd-button :content="btContent" />
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