<template>
  <div ref="el">
    子组件
  </div>
</template>

<script>
export default {
  data() {
    return {
      hd: '向军大叔',
      timeId: null
    }
  },
  beforeCreate() {
    console.log(`子组件 beforeCreate: ` + this.hd);
  },
  created() {
    // 可以获取网络请求
    console.log(`子组件 created: ` + this.hd);
    this.timeId = setInterval(() => {
      console.log('后盾人');
    }, 1000);
  },
  beforeMount() {
    console.log(`子组件 beforeMount: ` + this.hd);
    console.log(`子组件 beforeMount: ` + this.$refs.el);
  },
  mounted() {
    // 挂载组件
    console.log(`子组件 mounted: ` + this.hd);
    console.log(`子组件 mounted: ` + this.$refs.el);
  },
  beforeUnmount() {
    console.log(`子组件 beforeUnmount` + this.hd);
  },
  unmounted() {
    console.log(`子组件 unmounted` + this.hd);
    clearInterval(this.timeId)
  }
}
</script>

<style lang="scss" scoped></style>