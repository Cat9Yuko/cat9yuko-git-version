<template>
  <main>
    <div v-for="(component, index) in components" :key="index" @click="currentComponent = component.name"
      :class="{ active: component.name == currentComponent }">
      {{ component.title }}
    </div>
  </main>
  <keep-alive>
    <component :is="currentComponent" ref="cat9" />
  </keep-alive>
  {{ config }}
  <button @click="callComponent">调用组件</button>
  <!-- <input type="text" ref="cat"> -->
</template>

<script>
import Wexin from './components/Wexin.vue';
import Site from './components/Site.vue'
import { computed } from 'vue';
import config from './config'
export default {
  provide() { return { webname: computed(() => this.teacher), config:this.config } },
  components: { Wexin, Site },
  data() {
    return {
      config,
      teacher: 'teacher',
      currentComponent: 'wexin',
      components: [
        { title: '微信管理', name: 'wexin' },
        { title: '网站管理', name: 'site' },
      ]
    }
  },
  methods: {
    callComponent() {
      // console.log(this.$refs.cat);
      this.$refs.cat9.show()
    }
  }
}
</script>

<style lang="less" scoped>
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