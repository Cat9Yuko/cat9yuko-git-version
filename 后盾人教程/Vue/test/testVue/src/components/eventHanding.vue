<template>
    <div>
        <button @click="count++">Add 1</button>
        <p>Count is: {{ count }}</p>

        <button v-on:click="greet">Greet</button>
        <br>
        <button @click="say('hello')">Say hello</button>
        <br>
        <button @click="say('bye')">Say bye</button>
        <br>
        <form action="">
            <!-- 使用特殊的 $event 变量 -->
            <button @click="warn('默认提交被阻止',$event)" type="submit">submit</button>
            <br>
            <!-- 使用内联箭头函数 -->
             <button @click="(event) => warn('默认提交被阻止',event)">Submit</button>
        </form>
        <!-- 事件修饰符 -->
         
        <p><a @click.stop="doThis">.stop 单击事件将停止传递</a></p>

        <!-- 提交事件将不再重新加载页面 -->
        <p><form @submit.prevent="onSubmit"><button type="submit">submit</button></form></p>
        <p><a @click.stop.prevent="doThat">修饰语可以使用链式书写</a></p>

        <!-- 也可以只有修饰符 -->
        <p><form @submit.prevent><button type="submit">submit</button></form></p>
        <p @click.self="doThat">仅当 event.target 是元素本身时才会触发事件处理器</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// 内联事件处理器
const count = ref(0)

// 方法事件处理器
const name = ref('Vue.js')
function greet(event) {
    alert(`Hello ${name.value}!`)
    if (event) {
        alert(event.target.tagName)
    }
}
 function say(message) {
    alert(message)
 }
//  在内联事件处理器中访问事件参数
function warn(message,event) {
    if(event) {
        event.preventDefault()
    }
    alert(message)
}

</script>

<style lang="scss" scoped></style>