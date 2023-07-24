<template>
  <section>
    <div :id="$attrs.id" :class="[type, { disabled }]">
      {{ text }}
    </div>
    <h2 v-bind="$attrs">Cat9</h2>
    <!-- {{ content }}
    <hr>
    <button @click="text = '奥利'">子组件</button>
    {{ text }} -->
  </section>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    click: {type: Function},
    content: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'info',
      validator(v) {
        return ['success', 'danger', 'info'].includes(v)
      }
    },
    hdTip: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      text: this.content
    }
  },
  watch: {
    content(v) {
      this.text = v
    }
  },
  methods: {
    onClick() {
      this.text = 'loading...'
      setTimeout(() => {
        this.text = this.content
      }, 3000);
    }
  }
}
</script>

<style lang="less" scoped>
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