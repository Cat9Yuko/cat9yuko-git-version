<script>
import ClassComponent from './components/ClassComponent.vue'
import ClassList from './components/ClassList.vue';
import StyleComponent from './components/StyleComponent.vue';
export default {
  components: {ClassComponent,ClassList,StyleComponent},
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
  <!-- <classList class="hdxj" /> -->

  <styleComponent />
</template>

<style>
  .hd {
    background-color: green;
  }
</style>
