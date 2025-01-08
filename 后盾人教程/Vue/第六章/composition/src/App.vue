<template>
  <div>
    <Count :init="5" @change="changeHandle" ref="countComponent" />
    <br>
    {{ changeHandle() }}
  </div>
</template>

<script>
import Count from './components/Count.vue'
import { ref, onMounted } from 'vue';
export default {
  components: { Count },
  setup() {
    // let count = ref(0)
    const countComponent = ref()
    onMounted(()=> {
      console.log(countComponent.value.add);
    })
    const changeHandle = (v) => countComponent.value?.num
    return { changeHandle,countComponent }
  }
}
</script>

<style lang="scss" scoped></style>