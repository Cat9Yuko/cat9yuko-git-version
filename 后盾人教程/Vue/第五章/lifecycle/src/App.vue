<template>
  <div ref="el">
    向军
  </div>
  <button @click="show = !show">控制</button>
  <child v-if="show" ref="child" />
  {{ hd }}
  {{ show }}
</template>

<script>
import Child from './components/Child.vue'
export default {
  components: { Child },
  data() {
    return {
      hd: '向军大叔',
      show: true
    }
  },
  beforeCreate() {
    console.log(`父组件 beforeCreate: ` + this.hd);
  },
  created() {
    // 可以获取网络请求
    console.log(`父组件 created: ` + this.hd);
    // setTimeout(() => {
    //   this.hd = '后盾人'
    // }, 1000);
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
  },
  beforeUpdate(){
    console.log(`父组件 beforeUpdate` + this.hd);

    console.log(this.$refs.child);
  },
  updated() {
    console.log(`父组件 updated` + this.hd);
  }
}
</script>

<style lang="scss" scoped></style>