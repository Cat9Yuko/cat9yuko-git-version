<template>
  <div>
    <!-- <h2>向军大叔</h2>
    <div style="color: red;" @click="show(content)">
      <slot></slot>
    </div>
    {{ content }} -->
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot name="default" />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: String, default: '向军' }
  },
  methods: {
    show(content) {
      console.log(`子组件调用: ${content}`);
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  border: 1px solid #dddddd;

  header,
  main,
  footer {
    padding: 10px;
  }

  main {
    border-width: 1px 0 1px 0;
    border-style: solid;
    border-color: #ddd;
  }
}
</style>