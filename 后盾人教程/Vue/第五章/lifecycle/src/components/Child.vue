<template>
  <div ref="el">
    子组件
  </div>
</template>

<script>
export default {
  data() {
    return {
      hd: '向军大叔'
    }
  },
  beforeCreate() {
    console.log(`子组件 beforeCreate: ` + this.hd);
  },
  created() {
    // 可以获取网络请求
    console.log(`子组件 created: ` + this.hd);
  },
  beforeMount() {
    console.log(`子组件 beforeMount: ` + this.hd);
    console.log(`子组件 beforeMount: ` + this.$refs.el);
  },
  mounted() {
    // 挂载组件
    console.log(`子组件 mounted: ` + this.hd);
    console.log(`子组件 mounted: ` + this.$refs.el);
  }
}
</script>

<style lang="scss" scoped></style>