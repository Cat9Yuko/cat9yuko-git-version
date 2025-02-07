<script setup>

import TheWelcome from './components/TheWelcome.vue'
const msg = '你好'
const rawHtml = '<span style="color: red">This should be red.</span>'
const hid = 'dynamicId'
const isButtonDisabled = true
const objectArrts = {
id: 'container',
class:'wrapper',
style:'background-color: green;color:white;'
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <p>{{ msg }}</p>
      <p>{{ rawHtml }}</p>
      <p><span v-html="rawHtml"></span></p>
      <p v-bind:id="hid">{{ hid }}</p>
      <p><button :disabled="isButtonDisabled">button</button></p>
      <p v-bind="objectArrts">Lorem ipsum dolor sit amet.</p>
    </div>
  </header>

  <main>
    <TheWelcome />
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
}
</style>
