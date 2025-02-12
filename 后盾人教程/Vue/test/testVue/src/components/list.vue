<template>
    <div>
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
    </div>
</template>

<script setup>
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

</script>

<style lang="scss" scoped></style>