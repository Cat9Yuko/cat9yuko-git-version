<template>
    <div>
        <img :src="lesson.preview" :alt="lesson.title">
        <h3>{{ lesson.title }}</h3>
        <span @click="del">X</span>
    </div>
</template>

<script>
export default {
    props: ['lesson'],
    emits: {
        del(e) {
            if(/^\d+$/.test(e)) {
                return true;
            }
            throw new Error('del emit 需要数值参数')
        }
    },
    methods: {
        del(){
            if(confirm('确定删除嘛?')) {
                this.$emit('del', this.lesson.id)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    border: 1px solid #ddd;
    text-align: center;
    transition: 1s;
    position: relative;

    &:hover {
        box-shadow: 0 0 20px #aaa;

        >span {
            opacity: 1;
        }
    }

    span {
        background-color: #666;
        color: #fff;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        font-size: 12px;
        opacity: 0;
        transition: 1s;
    }

    h3 {
        margin: 0;
        padding: 0 0 20px;
        font-size: 1px;
    }

    img {
        width: 100%;
    }
}
</style>