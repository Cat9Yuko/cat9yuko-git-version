<template>
    <div class="form">
        <Add class="add" />
        <Sort />
    </div>
    <div class="todo">
        <transition-group appear name="todo" @before-enter="beforeEnter" @enter="enter">
            <item :todo="todo" class="item" v-for="(todo,index) of todos" 
            :key="todo.id" :data-index="index" />
        </transition-group>
    </div>
</template>

<script setup>

import Item from "../components/Item.vue";
import useTodo from '../composables/useTodo'
import Add from "./Add.vue";
import Sort from "../components/Sort.vue";
import gsap from 'gsap';

const { todos, load } = useTodo()
load()
// const del = async () => {
//     todos.value = await request.get()
// };
const beforeEnter = (el) => {
    gsap.set(el, {
        opacity: 0
    })
}
const enter = (el) => {
    gsap.to(el, {
        opacity: 1,
        duration: 0.6,
        delay: el.dataset.index * 0.1
    })
}
</script>

<style lang="scss">

.todo-leave-to {
    opacity: 0;
    transform: scale(0);
}

.todo-leave-active {
    transition: 1s ease;
    position: absolute;
}

.todo-move {
    transition: all 1s ease;
}

.form {
    display: flex;
    margin-bottom: 20px;

    .add {
        flex: 1;
    }
}

div.todo {
    display: flex;
    flex-direction: column;
    position: relative;

    .item {
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>
