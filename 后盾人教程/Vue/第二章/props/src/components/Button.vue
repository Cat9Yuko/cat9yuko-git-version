<template>
    <div :class="[type,{disabled}]">{{ content }}</div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '确定objk'
    },
    type: {
      type: String,
      default: 'info',
      // 检测类型
      validator(v) {
        return ['success','danger','info'].includes(v)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
    // arr: {
    //   type: Number,
    //   default() {
    //     return ['1,2', 3]
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
div {
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 10px;
  opacity: 0.6;
  transition: 1s;
  display: inline-block;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &.info {
    background-color: #dddddd;
  }

  &.success {
    background-color: #27ae60;
  }
  &.danger {
    background-color: #e74c3c;
  }
  &.disabled {
    background-color: #aaaaaa;
    color: #666666;
    opacity: 1;
    cursor: default;
  }
}
</style>