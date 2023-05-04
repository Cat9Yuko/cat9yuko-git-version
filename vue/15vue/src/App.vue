<script>
import ClassComponent from './components/ClassComponent.vue'
import ClassList from "./components/ClassList.vue"
import StyleComponent from './components/StyleComponent.vue'
import IfComponent from './components/IfComponent.vue'
import VForComponent from './components/VForComponent.vue'
import LessonForVue from './components/LessonFor.vue'
import ArrComponent from './components/ArrComponent.vue'
import EventComponent from './components/EventComponent.vue'
import EventFixComponent from './components/EventFixComponent.vue'
import KeyComponent from './components/KeyComponent.vue'
import InputComponent from './components/InputComponent.vue'
export default {
  components: { ClassComponent, ClassList, StyleComponent, IfComponent, VForComponent, LessonForVue, ArrComponent, EventComponent, EventFixComponent, KeyComponent, InputComponent },
  data() {
    return {
    }
  }
}
</script>

<template>
  <!-- <ClassComponent /> -->
  <!-- <class-component/> -->
  <!-- <class-list class="cat9name" /> -->
  <!-- <style-component /> -->
  <!-- <if-component/> -->
  <!-- <v-for-component v-for="n in 10" :key="n" /> -->
  <!-- <lesson-for-vue /> -->
  <!-- <arr-component /> -->
  <!-- <event-component /> -->
  <!-- <event-fix-component /> -->
  <!-- <key-component /> -->
  <input-component/>
</template>

<style></style>
