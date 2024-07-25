<script>
import ClassComponent from './components/ClassComponent.vue'
import ClassList from './components/ClassList.vue';
export default {
  components: {ClassComponent,ClassList},
  data() {
    return {
      title: '后盾人',
      name: 'abc'
    }
  }
}
</script>

<template>
  <!-- <div class="hd">{{ title }} - {{ name }}</div> -->
  <!-- <class-component/> -->
  <classList/>
</template>

<style>
  .hd {
    background-color: green;
  }
</style>
