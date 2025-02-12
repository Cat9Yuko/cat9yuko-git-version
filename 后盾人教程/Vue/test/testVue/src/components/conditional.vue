<template>
    <div>
        <button @click="awesome = !awesome">Toggle</button>
        <h1 v-if="awesome">Vue is awesome!</h1>
        <h1 v-else>Oh no 😢</h1>
    </div>
    <div>
        <p v-if="type === 'A'">A</p>
        <p v-else-if="type === 'B'">B</p>
        <p v-else-if="type === 'C'">C</p>
        <p v-else>Not A/B/C</p>
    </div>
    <div>
        <template v-if="ok">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>
    </div>
    <div>
        <h1 v-show="ok">Hello!</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// v-if
const awesome = ref(true)
const type = ref('B')
const ok = ref(true)
// v-else-if

// v-show
// 不同之处在于 v-show 会在 DOM 渲染中保留该元素；v-show 仅切换了该元素上名为 display 的 CSS 属性。
// v-show 不支持在 <template> 元素上使用，也不能和 v-else 搭配使用。
</script>

<style lang="scss" scoped></style>