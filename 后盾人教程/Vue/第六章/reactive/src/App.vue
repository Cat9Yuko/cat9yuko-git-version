<template>
  <div>
    <button @click="change">{{ name }}</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
export default {
  setup() {
    let hd = reactive({ name: '后盾人' })
    const change = () => {
      hd.name = '向军'
    }
    return { ...toRefs(hd), change }
  }
}
</script>

<style lang="scss" scoped></style>