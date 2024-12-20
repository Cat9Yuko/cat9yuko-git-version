<template>
    <div>
        <card>
            <template #header>网站小贴</template>
            <div>后盾人是一个主张友好、分享、自由的技术交流社区。
                请记住我们的口号</div>
            <template v-slot:footer>后盾人 人人做后盾</template>
        </card>
    </div>
</template>

<script>
import Card from './components/Card.vue'
import HdButton from './components/Button.vue'
export default {
    components: { Card, HdButton },
    data() {
        return {
            content: '父组件content'
        }
    },
    methods: {
        show(content) {
            console.log('父组件', content);
        }
    }
}
</script>

<style lang="scss" scoped></style>