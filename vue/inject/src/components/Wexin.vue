<template>
  <div>
    <card>
      <template #header>微信</template>
      <div>
        <x-input title="微信账号" v-model="appName" />
        <x-input title="秘钥" v-model="key" />
      </div>
    </card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appName: 'cat9',
      key: 'lorem a'
    }
  }
}
</script>

<style lang="scss" scoped>
div {}
</style>