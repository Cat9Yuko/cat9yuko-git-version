<template>
  <div>
    <h2>向军大叔</h2>
    <div style="color: red;" @click="show(content)">
      <slot></slot>
    </div>
    {{ content }}
  </div>
</template>

<script>
export default {
  props: {
    content: {type:String, default: '向军'}
  },
  methods: {
    show(content) {
            console.log(`子组件调用: ${content}`);
        }
  }
}
</script>

<style lang="scss" scoped></style>