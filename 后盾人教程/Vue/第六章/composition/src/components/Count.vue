<template>
  <component :is="defaults[0]" />
  <button @click="sub">-</button>
  <span :style="attrs.style">{{ num }}</span>
  <button @click="add">+</button>
  <component :is="defaults[1]" />
  <br>
  <button @click="updateUser('后盾人-向军老师')">{{ user }}</button>
</template>

<script>
import {
  ref, watch, watchEffect, computed, onBeforeMount,
  onBeforeUpdate, onUpdated, onUnmounted, onBeforeUnmount, inject
} from 'vue';
export default {
  props: {
    init: {
      type: Number,
      default: 3
    }
  },
  inheritAttrs: false,
  setup(props, context) {
    console.log(context);
    // 变成响应式数据
    const user = inject('user', '后盾人--向军')
    const updateUser = inject('updateUser')
    const { emit, expose, attrs, slots } = context
    const defaults = slots.default()
    let num = ref(props.init)
    let sum = computed(() => { num.value + 100 })
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
    return { num, add, sub, attrs, defaults, sum, user, updateUser }
  }
}
</script>

<style lang="scss" scoped></style>