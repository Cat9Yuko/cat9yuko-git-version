<script>
import ClassComponent from './components/ClassComponent.vue'
export default {
  components: {ClassComponent},
  data() {
    return {
      title: '后盾人',
      name: 'abc'
    }
  }
}
</script>

<template>
  <div class="hd">{{ title }} - {{ name }}</div>
  <class-component/>
</template>

<style>
  .hd {
    background-color: green;
  }
</style>
