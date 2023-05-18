<template>
    <!-- {{ lessons }} -->
    <lesson v-for="lesson of lessons" :key="lesson.id" :lesson="lesson">
       <!-- <template v-slot:default="{content,title}">
        {{ title }} - {{ content }}
       </template> -->
       <template #icon>:)</template>
       <template #default="{id}">
        <!-- {{ id }} -->
        <button @click="del(id)">删除</button>
       </template>
    </lesson>
  
</template>

<script>
import lessons from './data'
import Lesson from './components/Lesson.vue'
  export default {
  components: { Lesson },
    data() {
      return {
        lessons
      }
    },
    methods: {
      del(id) {
        const index = this.lessons.findIndex(l=>l.id == id);
        this.lessons.splice(index,1)
      }
    }
  }
</script>

<style lang="scss" scoped>
// yarn add -D sass
div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>