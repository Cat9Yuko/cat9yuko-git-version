<template>
    <div @click="sum(199,1001,1000),ev(1,2,3,4,5,6,7,$event)">事件对象</div>
</template>

<script>
    export default {
        data() {
        return {
            num: 1
        }
        },
        methods: {
            sum(...args) {
                console.log('执行了 sum');
                this.num = args.reduce((s,n)=> s+n, this.num)
            },
            ev(...args) {
                console.log('执行了 ev');
                // pop() 方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。
                const event = args.pop()
                console.log(event);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>