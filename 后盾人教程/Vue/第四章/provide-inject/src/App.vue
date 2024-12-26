<template>
  <main>
    <div v-for="(component, index) of components" :key="index" :class="{ active: component.name == currentComponent }"
      @click="currentComponent = component.name">
      {{ component.title }}
    </div>
  </main>
  <button @click="callComponent">调用组件</button>
  <input ref="input" />
  <keep-alive>
    <component :is="currentComponent" ref="component" />
  </keep-alive>
  <!-- <input v-model="teacher" />{{ teacher }} -->
</template>

<script>
import Weixin from './components/Weixin.vue';
import Site from './components/Site.vue';
import { computed } from 'vue'
import config from './config'
export default {
  components: { Weixin, Site },
  provide() {
    return { webname: computed(() => this.teacher), config: this.config }
  },
  data() {
    return {
      config,
      teacher: '向军老师',
      currentComponent: 'weixin',
      components: [
        { title: '微信管理', name: 'weixin' },
        { title: '网站信息', name: 'site' }
      ]
    }
  },
  methods: {
    callComponent() {
      // console.log(this.$refs.input.value='向军大叔');
      this.$refs.component.show()
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