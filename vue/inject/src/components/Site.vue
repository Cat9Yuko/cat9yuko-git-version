<template>
    <div>
        <card>
            <template #header>站点信息</template>
            <div>
                <x-input title="网站名称" v-model="config.site.title" />
                <x-input title="电子邮箱" v-model="config.site.mail"/>
                <x-input title="电话号码" v-model="config.site.tel"/>
                <x-textarea title="站点介绍" v-model="config.site.desc" />
            </div>
        </card>
    </div>
</template>
  
<script>
import config from '../config';
import XInput from './XInput.vue';
export default {
  components: { XInput },
    inject: ['config'],
}
</script>
  
<style lang="less" scoped>
div {}
</style>