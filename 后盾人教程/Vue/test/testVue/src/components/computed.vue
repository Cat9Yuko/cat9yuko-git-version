<template>
    <div>
        <p>Has published books:</p>
        <p></p>
    </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})
const count = ref(4)
// 一个计算属性 ref
// const publicBooksMessage = computed(() => {
//     return author.books.length > 0 ? 'yes' : 'no'
// })
const alawysSmall = computed({
    get(previous) {
        if (count.value <= 3) {
            return count.value
        }
        return previous
    },
    set(newValue) {
        count.value = newValue * 2
    }
})
</script>

<style lang="scss" scoped></style>