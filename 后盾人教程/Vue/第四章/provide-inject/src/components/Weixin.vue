<template>
    <div>
        <card>
            <template #header>微信</template>
            <div>
                <x-input title="appid" v-model="config.weixin.appid" />
                <x-input title="secret" v-model="config.weixin.secret" />
                <x-input title="wecharName" v-model="config.weixin.wecharName" />
                <x-input title="老师" v-model="content" />
            </div>
            {{ config.weixin }}
        </card>
    </div>
</template>

<script>
export default {
    inject: ['config'],
    data() {
        return {
            content: '向军'
        }
    },
    methods: {
        show() {
            alert(this.content)
        }
    }
}
</script>

<style lang="scss" scoped></style>