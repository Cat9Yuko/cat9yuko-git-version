<template>
  <div>
    <hd-button type="success" :content="btContent" class="hd" id="cat" @click="show" />
    <!-- <hr>
    <button @click="btContent = '奥利给'">父组件</button>{{ btContent }} -->
    <!-- <hd-button content="保存提交" hdTip="后盾@" type="success" style="margin-right: 10px;"/>
    <hd-button content="删除" type="danger" style="margin-right: 10px;"/>
    <hd-button content="反馈" type="info" style="margin-right: 10px;"/>
    <hd-button content="禁用" :disabled="true" style="margin-right: 10px;"/>
    <hd-button v-bind="{content:'保存',type:'success',style:'margin-top:20px;'}"/> -->
  </div>
</template>

<script>
import hdButton from './components/Button.vue';
export default {
  components: { hdButton },
  data() {
    return {
      btContent: '反馈'
    }
  },
  methods: {
    show() {
      alert('cat9mm')
    }
  }
}
</script>

<style lang="less" scoped></style>