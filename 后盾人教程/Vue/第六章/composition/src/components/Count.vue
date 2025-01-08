<template>
  <button @click="sub">-</button>
  {{ num }}
  <button @click="add">+</button>
</template>

<script>
import { ref, watch, watchEffect } from 'vue';
export default {
  props: {
    init: {
      type: Number,
      default: 3
    }
  },
  setup(props, context) {
    // 变成响应式数据
    const { emit, expose } = context
    let num = ref(props.init)
    let add = () => {
      num.value++
      emit('change', num.value)
    }
    let sub = () => {
      num.value--
      emit('change', num.value)
    }
    // watch(num, (v) => {
    //   if (v < 0) num.value = 0
    // })
    watchEffect(() => {
      if (num.value < 0) num.value = 0
      emit('change', num.value)
    })
    expose({ num })
    return { num, add, sub }
  }
}
</script>

<style lang="scss" scoped></style>