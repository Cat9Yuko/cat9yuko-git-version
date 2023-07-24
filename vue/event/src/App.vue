<template>
  <div>
    <div class="lesson">
      <lesson v-for="item in db" :key="item.id" :lesson="item" @del="show" 
      v-model:title.toupper.substr_2="item.title"
      v-model:price="item.price" />
      {{ db[0].title }}
      <!-- <input type="text" :value="title" @input="title = $event.target.value">
    {{ title }} -->
      <!-- <hd-input-vue :value="title" @update:value="change" /> -->
      <!-- <hd-input-vue v-model="title" /> -->
    </div>
    <!-- <hr>
    {{ title }} -->
  </div>
</template>

<script>
import db from '../data/db';
import Lesson from './components/Lesson.vue'
import HdInputVue from './components/HdInput.vue'
export default {
  components: { Lesson, HdInputVue, },
  data() {
    return { db, title: 'cat9' }
  },
  methods: {
    show(id) {
      const index = this.db.findIndex(l => l.id == id)
      this.db.splice(index, 1)
    },
    change(v) {
      this.title = v
    }
  }
}
</script>

<style lang="less" scoped>
.lesson {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
}
</style>