<template>
  <div>
    <div>{{content}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      content: {
        type: String,
        default: '确定objk'
      },
      arr: {
        type: Number,
        default() {
          return ['1,2',3]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    background-color: #27ae60;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 10px;
    opacity: 0.6;
    transition: 1s;
    display: inline-block;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
</style>