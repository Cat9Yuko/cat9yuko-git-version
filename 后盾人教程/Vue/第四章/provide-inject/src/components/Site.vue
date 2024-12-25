<template>
    <div>
        <card>
            <template #header>站点信息</template>
            <div>
                <x-input title="网站名称" v-model="config.site.title" />
                <x-input title="tel" v-model="config.site.tel" />
                <x-input title="mail" v-model="config.site.mail" />
                <x-textarea :rows="5" v-model="config.site.desc" title="站点介绍" />
            </div>
            {{ config.site }}
        </card>
    </div>
</template>

<script>
export default {
    inject:['config']
}
</script>

<style lang="scss" scoped></style>