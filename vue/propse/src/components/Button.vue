<template>
  <div :class="[type, { disabled }]" :style="$attrs.style">
    {{ content }}
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '确定'
    },
    type: {
      type: String,
      default: 'info',
      validator(v) {
        return ['success','danger','info'].includes(v)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
// yarn add -D sass
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
    background-color: #27ea60;
  }

  &.danger {
    background-color: #e74c3c;
  }

  &.disabled {
    opacity: 1;
    background-color: #aaa !important;
    cursor: not-allowed;
  }
}
</style>