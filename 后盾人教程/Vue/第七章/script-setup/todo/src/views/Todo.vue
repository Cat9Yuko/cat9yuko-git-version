<template>
    <h2>向军大叔</h2>
    <div>
        {{ todos }}
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const todos = ref([])
todos.value = await fetch(`http://127.0.0.1:3002/news`).
    then(r => {
        return r.json()
        // return new Promise(resolve => {
        //     setTimeout(() => {
        //         resolve(r.json())
        //     }, 2000);
        // })
    })
</script>

<style lang="scss" scoped></style>