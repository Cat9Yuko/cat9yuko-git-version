<template>
    <div>
        <card>
            <template #header>站点信息</template>
            <div>
                <x-input title="微信号" v-model="appName" />
                <x-input title="秘钥" v-model="key" />
                <x-textarea :rows="5" v-model="key" title="秘钥" />
            </div>
        </card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            appName: '向军大叔',
            key: 'asdashdjashdk1h23j1l2k3',
        }
    }
}
</script>

<style lang="scss" scoped></style>