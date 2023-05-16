<template>
    <div>
        <img :src="lesson.preview" alt="lesson.title">
        <h3 @dblclick="inputShow = true">
            <input v-if="inputShow" type="text" :value="lesson.title" @input="changeTitle" @keyup.enter="inputShow = fasle"
                @blur="inputShow = false">
            <strong v-else>{{ lesson.title }}</strong>
        </h3>
        <h3 @dblclick="inputPriceShow = true">
            <input v-if="inputPriceShow" type="text" :value="lesson.price"
                @input="$emit('update:price', $event.target.value)" @keyup.enter="inputPriceShow = fasle"
                @blur="inputPriceShow = false">
            <strong v-else>{{ lesson.price }}</strong>
        </h3>
        <span @click="del">X</span>
    </div>
</template>

<script>
export default {
    props: ['lesson', 'title', 'price', 'titleModifiers'],
    data() {
        return {
            inputShow: false,
            inputPriceShow: false,
        }
    },
    created() {
        console.log(this.titleModifiers);
    },
    emits: {
        'update:title': null,
        del(v) {
            if (/^\d+$/.test(v)) {
                return true
            }
            throw new Error('需要一个数值的参数')
        }
    },
    methods: {
        changeTitle($event) {
            let value = $event.target.value;
            if (this.titleModifiers.toupper) {
                value = value.toUpperCase();
            }
            const substr = Object.keys(this.titleModifiers).find(m => /^substr_/.test(m));
            console.log(this.titleModifiers + ' ' + substr);
            if (substr) {
                let info = substr.split('_')
                value = value.substr(0, info[1])
            }
            this.$emit('update:title', value)
        },
        del() {
            if (confirm('确定删除吗？')) {
                this.$emit('del', this.lesson.id)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    border: 1px solid #dddddd;
    text-align: center;
    position: relative;

    &:hover {
        box-shadow: 0 0 20px #aaaaaa;

        >span {
            opacity: 1;
            transition: 1s;
        }
    }

    span {
        display: block;
        background-color: #666666;
        color: #ffffff;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        font-size: 12px;
        opacity: 0;
    }

    h3 {
        padding: 0 0 20px 0;
        margin: 0;
        font-size: 16px;
    }

    img {
        width: 100%;
    }
}
</style>