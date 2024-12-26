<template>
  <div ref="el">
    向军
  </div>
  <child />
</template>

<script>
import Child from './components/Child.vue'
export default {
  components: { Child },
  data() {
    return {
      hd: '向军大叔'
    }
  },
  beforeCreate() {
    console.log(`父组件 beforeCreate: ` + this.hd);
  },
  created() {
    // 可以获取网络请求
    console.log(`父组件 created: ` + this.hd);
  },
  beforeMount() {
    // 挂载子组件
    console.log(`父组件 beforeMount: ` + this.hd);
    console.log( this.$refs.el);
  },
  mounted() {
    // 挂载组件
    console.log(`父组件 mounted: ` + this.hd);
    console.log(this.$refs.el);
  }
}
</script>

<style lang="scss" scoped></style>