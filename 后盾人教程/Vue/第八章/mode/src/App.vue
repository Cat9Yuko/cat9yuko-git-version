<template>
  <section>
    <transition enter-active-class="animate__animated animate__zoomIn"
     leave-active-class="animate__animated animate__zoomOut"
     mode="out-in">
      <button v-if="action == 'on'" @click="action = 'off'" class="on">开启</button>
      <button v-else @click="action = 'on'" class="off">关闭</button>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import 'animate.css'
const action = ref('on')
</script>

<style lang="scss" scoped>
.animate__animated {
  animation-duration: 1s;
}
button {
  border: none;
  padding: 5px 10px;
  color: #ffffff;
  cursor: pointer;
  &.on {
    background-color: #16a085;
  }
  &.off {
    background-color: #d35400;
  }
}
</style>