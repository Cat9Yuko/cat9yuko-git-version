<template>
  <div>
    <button @click="change">{{ name }}</button>
  </div>
</template>

<script>
import { ref,reactive,toRefs } from 'vue'
export default {
  setup() {
    const hd = reactive({name: 'Cat9YuKo'})
    const change = () => hd.name = '我要饿死啦'
    return { ...toRefs(hd), change }
  }
}
</script>

<style lang="less" scoped></style>