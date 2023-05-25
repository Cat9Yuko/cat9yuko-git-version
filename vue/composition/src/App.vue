<template>
  <div>
    <count :init="5" @change="changeHandle" ref="countComponent" style="color: red;">
    <h1>Cat9YuKo</h1>
    <p>Oh!!!</p>
    </count><br>
    <!-- {{ count }} -->
  </div>
</template>

<script>
import Count from './components/Count.vue';
import { ref, onMounted,onBeforeMount,onBeforeUpdate,onUpdated,onUnmounted,onBeforeUnmount,provide } from 'vue'
export default {
  components: { Count },
  setup() {
    // let count = ref(0)
    let user = ref('Cat9YuKo')
    provide('user',user)
    provide('updateUser',(newValue)=>user.value = newValue)
    setTimeout(() => 
      user.value = 'baidu.com'
    , 1000)
    const countComponent = ref()
    onMounted(() => {
      console.log(countComponent.value.num);
    })
    const changeHandle = (v) => countComponent.value?.num
    return { changeHandle, countComponent }
  }
}
</script>

<style lang="sass" scoped>

</style>