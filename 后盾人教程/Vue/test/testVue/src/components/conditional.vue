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
</template>

<script setup>
import { ref } from 'vue';
// v-if
const awesome = ref(true)
const type = ref('B')
const ok = ref(false)
// v-else-if
</script>

<style lang="scss" scoped></style>