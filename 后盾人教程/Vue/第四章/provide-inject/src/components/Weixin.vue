<template>
    <div>
        <card>
            <template #header>微信</template>
            <div>
                <x-input title="appid" v-model="config.weixin.appid" />
                <x-input title="secret" v-model="config.weixin.secret" />
                <x-input title="wecharName" v-model="config.weixin.wecharName" />
            </div>
            {{ config.weixin }}
        </card>
    </div>
</template>

<script>
export default {
    inject: ['config']
}
</script>

<style lang="scss" scoped></style>