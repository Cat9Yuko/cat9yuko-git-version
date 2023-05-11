<template>
  <div class="lesson">
    <lesson v-for="item in db" :key="item.id" :lesson="item" @del="show" />
  </div>
</template>

<script>
import db from '../data/db';
import Lesson from './components/Lesson.vue'
export default {
  components: { Lesson, },
  data() {
    return { db }
  },
  methods: {
    show(lesson) {
      // console.log(lesson);
      const index = this.db.findIndex(l=>l.id == lesson.id)
      this.db.splice(index,1)
    },
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