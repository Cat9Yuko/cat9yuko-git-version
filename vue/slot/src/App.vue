<template>
    <!-- <card :content="content">
      <button-def>aaa</button-def>
    </card> -->
    <card>
      <template #header>Lorem ipsum,</template>
      <template v-slot:main> dolor sit amet consectetur adipisicing elit. Qui debitis natus accusantium quibusdam commodi laboriosam maxime at reprehenderit magni molestias quam dolore ut autem omnis iste est iure</template>
      <template v-slot:footer>, vel atque.</template>
    </card>
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

<style lang="less" scoped>
// 安装sass yarn add -D sass
div {}
</style>