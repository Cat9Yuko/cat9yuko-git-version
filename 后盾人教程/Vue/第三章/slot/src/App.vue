<template>
    <div>
        <card :content="content">
            <hd-button>提交</hd-button>
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
            console.log('父组件',content);
        }
    }
}
</script>

<style lang="scss" scoped></style>