<script>
import ClassComponent from './components/ClassComponent.vue'
import ClassList from './components/ClassList.vue'
import StyleComponent from './components/StyleComponent.vue'
import IfComponentVue from './components/IfComponent.vue'
import VForComponent from './components/VForComponent.vue'
import LessonForVue from './components/LessonForVue.vue'
import ArrComponent from './components/ArrComponent.vue'
import EventComponent from './components/EventComponent.vue'
import EventFixComponent from './components/EventFixComponent.vue'
import KeyComponent from './components/KeyComponent.vue'
import InputComponent from './components/InputComponent.vue'

export default {
  components: {ClassComponent,ClassList,StyleComponent,IfComponentVue,VForComponent,LessonForVue,ArrComponent,EventComponent,EventFixComponent,KeyComponent,InputComponent},
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

  <!-- <styleComponent /> -->
  <!-- <if-component-vue /> -->
  <!-- <VForComponent v-for="n in 10" :key="n" /> -->

  <!-- <LessonForVue /> -->
  <!-- <ArrComponent/> -->
  <!-- <EventComponent/> -->
  <!-- <EventFixComponent/> -->
  <!-- <KeyComponent/> -->
  <InputComponent/>
</template>

<style>
  .hd {
    background-color: green;
  }
</style>
