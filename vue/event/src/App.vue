<template>
  <div class="lesson">
    <lesson v-for="item in db" :key="item.id" :lesson="item" />
  </div>
</template>

<script>
import db from '../data/db';
import Lesson from './components/Lesson.vue'
export default {
  components: { Lesson, },
  data() {
    return { db }
  }
}
</script>

<style lang="scss" scoped>
.lesson {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
}
</style>