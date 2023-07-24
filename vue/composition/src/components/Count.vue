<template>
    <component :is="defaults[0]" />
    <button @click="sub">-</button>
    <span :style="attrs.style">{{ num }}</span>
    <button @click="add">+</button>
    <br>
    <component :is="defaults[1]" />
    {{ sum }}
    <br>
    <button @click="updateUser('Cat9999999')">{{ user }}</button>
</template>

<script>
import { ref, watch, watchEffect, computed,inject } from 'vue'
export default {
    props: {
        init: { type: Number, default: 4 }
    },
    inheritAttrs: false,
    emits: ['change'],
    setup(props, context) {
        const { emit, expose, attrs, slots } = context
        const user = inject('user','Cat9')
        const updateUser = inject('updateUser')
        // console.log(this)
        const defaults = slots.default()
        let num = ref(props.init);
        let sum = computed(() => num.value + 100)
        let add = () => {
            num.value++;
            emit('change', num.value)
        }
        let sub = () => {
            num.value--
            emit('change', num.value)
        }
        const stop = watchEffect(() => {
            // 启动就执行，响应式数据自动执行
            if (num.value < 0) num.value = 0;
            emit('change', num.value)
        })
        // stop()
        // watch(num, (v) => {
        //     if (v < 0) num.value = 0
        // })
        // 只暴露num其他的读取不到
        expose({ num })
        return { num, add, sub, attrs, slots, defaults, sum,user,updateUser }
    }
}
</script>

<style lang="less" scoped></style>