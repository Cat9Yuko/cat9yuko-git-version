<template>
    <div v-if="false">
        <ul>
            <li v-for="(item, index) in items">
                {{ parentMessage }} -
                {{ index }} -
                {{ item.message }}
            </li>
        </ul>
        <ul>
            <li v-for="({ message }, index) in items">
                {{ message }} - {{ index }}
            </li>
        </ul>
        <ul>
            <li v-for="item in items">
                <span v-for="childItem in item.children">
                    {{ item.message }} {{ childItem }}
                </span>
            </li>
        </ul>

        <!-- 注意此处 n 的初值是从 1 开始而非 0。 -->
        <ul>
            <li v-for="(value, key, index) in myObject">
                {{ index }} - {{ key }}: {{ value }}
            </li>
        </ul>
        <ul>
            <li v-for="n in 3">{{ n }}</li>
        </ul>
        <ul>
            <template v-for="item in items">
                <li>{{ item.message }}</li>
                <li class="divider" role="presentation"></li>
            </template>
        </ul>
        <!-- 当它们同时存在于一个节点上时，v-if 比 v-for 的优先级更高。
         这意味着 v-if 的条件将无法访问到 v-for 作用域内定义的变量别名 -->
        <!-- <ul>
            <li v-for="todo in todods" v-if="!todo.isComplete">
                {{ todo.name }}
            </li>
        </ul> -->
        <ul>
            <template v-for="todo in todods" :key="todo.name">
                <li v-if="!todo.isComplete">{{ todo.name }}</li>
            </template>
        </ul>
    </div>
    <div>
        {{ index }} - {{ item }}
    </div>
</template>

<script setup>
defineProps(['item', 'index'])
import { ref, reactive } from 'vue';

// v-for
const items = ref([{ message: 'Foo' }, { message: 'Bar' }, { children: ['Apple', 'Orange'] }])
const parentMessage = ref('Parent')

// 多层嵌套
const children = ref([{ children: 'Apple' }, { children: 'Orange' }])

// v-for 与对象

const myObject = reactive({
    title: 'How to do list in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
})
const todods = reactive({
    isComplete: { name: '王二' },
    person1: { name: '张三' },
    person2: { name: '李四' }
})
</script>

<style lang="scss" scoped></style>