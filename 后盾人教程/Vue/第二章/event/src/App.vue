<template>
  <div>
    <lesson v-for="item in db" :key="item.id" :lesson="item" />
  </div>
</template>

<script>
import db from '../data/db'
import Lesson from './components/Lesson.vue';
export default {
  components: { Lesson },
  data() {
    return {
      db: db
    }
  }
}
</script>

<style lang="scss" scoped></style>