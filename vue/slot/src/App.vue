<template>
    <card :content="content">
    </card>
    <button-def>aaa</button-def>
</template>

<script>
import ButtonDef from './components/ButtonDef.vue';
import Card from './components/Card.vue'
export default {
  components: { Card, ButtonDef, },
  data() {
    return {
      content: '父组件的content'
    }
  },
  methods: {
    show(content) {
      console.log('父组件' + content);
    }
  }
}
</script>

<style lang="scss" scoped>
// 安装sass yarn add -D sass
div {}
</style>