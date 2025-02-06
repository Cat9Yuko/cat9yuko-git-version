<template>
  <!-- <Hd v-if="show">保存提交</Hd> -->
  <!-- <transition appear="" enter-from-class="" enter-active-class="animate__animated animate__wobble" enter-to-class=""
    leave-from-class="" leave-active-class="animate__animated animate__flash" leave-to-class="">
    <Trans>保存提交</Trans>
  </transition> -->

  <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
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

const beforeEnter = (el) => {
  gsap.set(el, {
    opacity: 0
  })
}
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    duration: 2,
    onComplete: done
  })
}
const leave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    duration: 2,
    onComplete: done
  })
}
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