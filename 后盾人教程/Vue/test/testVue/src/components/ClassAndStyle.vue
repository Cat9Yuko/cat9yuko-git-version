<template>
    <div class="static" :class="classObject2">active:isActive</div>
    <div :class="[activeClass, errorClass]">active:isActive</div>
    <div :class="[isActive ? activeClass : '', errorClass]">active:isActive</div>
    <div :class="[{ [activeClass]: isActive }, errorClass]">active:isActive</div>
    <div :class="$attrs.class">指定根元素接受class</div>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">内联样式</div>
    <div :style="{ 'font-size': fontSize + 'px' }">内联样式</div>
    <div :style="styleObject">绑定一个对象</div>
    <div :style="[styleObject, styleObject2]">绑定一个数组(包含多个样式对象的数组)</div>
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">样式多值(数组仅会渲染浏览器支持的最后一个值。)</div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
const isActive = ref(true)
const hasError = ref(true)
const classObject = reactive({
    active: true,
    'text-danger': false
})

// 绑定一个返回对象的计算属性
const error = ref(null)
const classObject2 = computed(() => ({
    active: isActive.value && !error.value,
    'text-danger': error.value && error.value.type === 'fatal'
}))
// 绑定数组
const activeClass = ref('active')
const errorClass = ref('text-danger')

// 绑定内联样式
const activeColor = ref('red')
const fontSize = ref(30)
const styleObject = reactive({
    color: 'red',
    fontSize: '30px',
    fontWeight: 'bold'
})
const styleObject2 = reactive({
    color: 'green',
    fontSize: '25px'
})
</script>

<style lang="scss" scoped></style>