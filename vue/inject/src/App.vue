<template>
  <main>
    <div v-for="(component, index) in components" :key="index"
    @click="currentComponent = component.name"
    :class="{active:component.name == currentComponent}">
      {{ component.title }}
    </div>
  </main>
  <component :is="currentComponent"/>
</template>

<script>
import Wexin from './components/Wexin.vue';
import Pay from './components/Pay.vue';
export default {
  provide:{webname: '穿透数据'},
  components: { Wexin, Pay },
  data() {
    return {
      currentComponent: 'wexin',
      components: [
        { title: '微信管理', name: 'wexin' },
        { title: '在线支付', name: 'pay' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;

  div {
    border: 1px solid #ddd;
    padding: 10px;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.5s;
    &.active {
      background-color: #16a085;
      color: #fff;
    }
  }
}
</style>