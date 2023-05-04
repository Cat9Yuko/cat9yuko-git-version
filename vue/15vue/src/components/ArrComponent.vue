<template>
    <div v-for="(a, index) in arr" :key="index">
        {{ a }}
    </div>
    {{ arr }}
</template>

<script>
const obj = { name: 'cat' }
var arr = ['baidu.com', 'cat9.com']
export default {
    data() {
        return {
            obj, arr
        }
    },
    mounted() {
        setTimeout(() => {
            // this.obj.name = 'cat9'
            // this.arr.push('bilibili.com')
            // this.arr = this.arr.slice(0,1)
            this.arr.slice(0,1)
        }, 2000)
    },
}
</script>

<style lang="scss" scoped></style>