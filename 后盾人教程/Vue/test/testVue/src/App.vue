<script setup>
import { ref, reactive } from 'vue'
import TheWelcome from './components/TheWelcome.vue'
import myComputed from './components/computed.vue'
import ClassAndStyle from './components/ClassAndStyle.vue'
import conditional from './components/conditional.vue'
import list from './components/list.vue'
import eventHanding from './components/eventHanding.vue'

const msg = '你好'
const rawHtml = '<span style="color: red">This should be red.</span>'
const hid = 'dynamicId'
const title = 'Lorem ipsum dolor sit amet.'
const isButtonDisabled = true
const attributeName = 'class'
const eventName = 'dblclick'
const objectArrts = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color: green;color:white;'
}
function doSomthing() {
  alert('doSomthing')
}
function onSubmit() {

}
function callSomeFunction(param) {
  console.log(param);
}

const count = ref(0)
console.log(count);
console.log(count.value);
const state = reactive({ count2: 0 })
let { count2 } = state
count2++
callSomeFunction(state.count2)

const items = ref(['张三', '李四', '王五'])
const items2 = ref([{ 'name': '张三', id: 1 }, { 'name': '李四', id: 2 }, { 'name': '王五', id: 3 }])
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <div>
        <p>{{ msg.split('').reverse().join('') }}</p>
        <p>{{ rawHtml }}</p>
        <p><span v-html="rawHtml"></span></p>
        <p v-bind:id="hid">{{ hid }}</p>
        <p v-bind:id="`list-${hid}`">{{ hid }}</p>
        <p><button :disabled="isButtonDisabled">button</button></p>
        <p v-bind="objectArrts">Lorem ipsum dolor sit amet.</p>
        <p v-if="isButtonDisabled">v-if=""</p>
        <p :title="title">{{ title }}</p>
        <a v-on:click="doSomthing">Click</a>
        <p v-bind:[attributeName]="hid">动态参数</p>
        <p v-on:[eventName]="doSomthing">动态事件</p>
        <p>
        <form @submit.prevent="onSubmit">修饰符</form>
        </p>
      </div>
    </div>
  </header>

  <main>
    <!-- <ClassAndStyle class="baz" /> -->
    <!-- <conditional /> -->
    <!-- <list v-for="(item, index) in items" :item="item" :index="index" /> -->
    <!-- <list v-for="(item, index) in items2" :item="item" :index="index" :key="item.id" /> -->
    <!-- <list /> -->
    <event-handing />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  header .wrapper p {
    margin: 5px 0;
  }
}
</style>
