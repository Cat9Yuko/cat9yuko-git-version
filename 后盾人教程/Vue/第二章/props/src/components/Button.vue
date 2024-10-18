<template>
    <section>
      <div v-bind="$attrs" :class="[type,{disabled}]" @click="onClick">{{ text }}</div>
      <div :id="$attrs.id" :class="[type,{disabled}]" @click="onClick">{{ text }}</div>
    {{ content }}
    </section>
      <!-- <hr>
    <button @click="content='后盾人'">子组件</button>
    {{ content }} -->
</template>

<script>
export default {
  // 继承属性
  // inheritAttrs: false,
  props: {
    content: {
      type: String,
      default: '确定'
      // required: true
    },
    type: {
      type: String,
      default: 'info',
      // 检测类型
      validator(v) {
        return ['success','danger','info'].includes(v)
      }
    },
    hdTip: String,
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