<template>
  <!-- <Hd v-if="show">保存提交</Hd> -->
  <transition name="trans" 
  enter-from-class="" 
  enter-active-class=""
  enter-to-class=""
  leave-from-class=""
  leave-active-class=""
  leave-to-class="">
    <Trans v-if="show">保存提交</Trans>
  </transition>

  <transition name="xj">
    <Xj v-if="show">保存提交</Xj>
  </transition>
  <button @click="show = !show">切换</button>
</template>

<script setup>
import { ref } from 'vue';
import Hd from './components/Hd.vue';
import Xj from './components/Xj.vue'
import Trans from './components/Trans.vue';
const show = ref(false)
</script>

<style lang="scss" scoped>
.trans-enter-from {
  opacity: 0;
}

.trans-enter-active {
  transition: 2s ease;
}

.trans-enter-to {
  opacity: 1;
}

.trans-leave-from {
  opacity: 1;
}

.trans-leave-active {
  transition: 3s ease;
}

.trans-leave-to {
  opacity: 0;
  transform: translateY(-220px);
}

.xj-enter-from {
  opacity: 0;
}

.xj-enter-active {
  // transition: 2s ease;
  animation: identifier 2s ease;
}

.xj-enter-to {
  opacity: 1;
  transform: rotateX(360deg);
}

@keyframes identifier {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1) rotateX(360deg);

  }
}

button {
  margin-top: 30px;
  display: block;
}
</style>