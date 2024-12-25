<template>
  <main>
    <div v-for="(component, index) of components" :key="index" :class="{ active: component.name == currentComponent }"
      @click="currentComponent = component.name">
      {{ component.title }}
    </div>
  </main>
  <component :is="currentComponent" />
  <!-- <input v-model="teacher" />{{ teacher }} -->
</template>

<script>
import Weixin from './components/Weixin.vue';
import Site from './components/Site.vue';
import { computed } from 'vue'
export default {
  components: { Weixin, Site },
  provide() {
    return { webname: computed(() => this.teacher) }
  },
  data() {
    return {
      teacher: '向军老师',
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