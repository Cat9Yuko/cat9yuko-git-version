<template>
  <main>
    <div v-for="(component, index) of components" :key="index" :class="{ active: component.name == currentComponent }"
      @click="currentComponent = component.name">
      {{ component.title }}
    </div>
  </main>
  <component :is="currentComponent" />
</template>

<script>
import Weixin from './components/Weixin.vue';
import Pay from './components/Pay.vue';
export default {
  components: { Weixin, Pay },
  data() {
    return {
      currentComponent: 'weixin',
      components: [
        { title: '微信管理', name: 'weixin' },
        { title: '在线支付', name: 'pay' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;

  div {
    border: 1px solid #dddddd;
    padding: 10px;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.5s;
    &.active {
      background-color: #16a085;
      color: #ffffff;
    }
  }
}
</style>