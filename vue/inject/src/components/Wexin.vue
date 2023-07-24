<template>
  <div>
    <card>
      <template #header>微信</template>
      <div>
        <x-input title="appid" v-model="config.wexin.appid" />
        <x-input title="secret" v-model="config.wexin.secret" />
        <x-textarea title="wechatName" v-model="config.wexin.wechatName"/>
        <x-input title="老师" v-model="content"/>
      </div>
    </card>
  </div>
</template>

<script>
import XInput from './XInput.vue'
export default {
  components: { XInput },
  inject: ['config'],
  data() {
    return {
      content:'老死'
    }
  },
  methods: {
    show(){
      alert(this.content)
    }
  }
}
</script>

<style lang="less" scoped>
div {}
</style>