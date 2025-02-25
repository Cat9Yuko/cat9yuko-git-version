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
        <!-- {{ index }} - {{ item }} -->

        <!-- 通过 key 管理状态 -->

        <!-- Vue 默认按照“就地更新”的策略来更新通过 v-for 渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。 -->

        <!-- <template v-for="todo in todos" :key="todo.name">
            <li>{{ todo.name }}</li>
        </template> -->

        <!-- 数组变化侦测
        push()
        pop()
        shift()
        unshift()
        splice()
        sort()
        reverse() 
        -->
        <!-- <ul>
            <li v-for="n in evenNumbers">{{ n }}</li>
        </ul> -->

        <ul v-for="numbers in sets">
            <li v-for="n in even(numbers)">{{ n }}</li>
        </ul>

    </div>
</template>

<script setup>
defineProps(['item', 'index'])
import { ref, reactive, computed } from 'vue';

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
const todos = reactive({
    person1: { name: '田七' },
    person2: { name: '郑八' }
})

const myArr = ref([{ message: 'Apple' }, { message: 'iPhone' }, { message: 'Foo' }, { message: 'iFoo' }])


myArr.value = myArr.value.filter((item) => { return item.message.match(/Foo/) })

const numbers = ref([1, 2, 3, 4, 5])
const evenNumbers = computed(() => {
    return numbers.value.filter((n) =>
        n % 2 === 0)
})
// 多层嵌套
const sets = ref([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
])
function even(numbers) {
    return numbers.filter((number) => {
        return number % 2 === 0
    })
}
// 在计算属性中使用 reverse() 和 sort() 的时候务必小心！这两个方法将变更原始数组，计算函数中不应该这么做。
</script>

<style lang="scss" scoped></style>