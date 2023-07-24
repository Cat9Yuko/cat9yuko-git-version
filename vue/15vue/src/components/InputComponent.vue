<template>
    <div>
        <input type="text" v-model="form.title">
        <hr>
        <textarea v-model="form.content"></textarea>
        <hr>
        <input type="checkbox" v-model="form.isPost"> 发布
        <hr>
        <label v-for="lesson in lessons" :key="lesson.value">
            <input type="checkbox" v-model="form.lesson" :value="lesson.value"> {{ lesson.title }} <br>
        </label>
        <hr>
        <input type="radio" v-model="form.sex" :value="1"> 男
        <input type="radio" v-model="form.sex" :value="2"> 女
        <hr>
        <select v-model="form.citys" multiple>
            <option>===请选择城市===</option>
            <option :value="{ name: '北京' }">北京</option>
            <option :value="{ name: '上海' }">上海</option>
        </select>
        <hr>
        <input type="text" v-model.lazy="hd">
        {{ hd }}
        <hr>
        <input type="text" v-model.number="num">
        {{ num + 100 }}
        <hr>
        <input type="text" v-model.trim="title">
        <br>
        {{ form }}
    </div>
</template>

<script>
const lessons = [{ title: 'php', value: 'php' }, { title: 'linux', value: 'linux' }, { title: '苹果系统', value: 'Mac' }]
const form = { title: 'baidu.com', content: 'cat9', isPost: false, lesson: [], sex: 1, citys: [] }
export default {
    data() {
        return {
            form,
            lessons,
            hd: 'baidu.com',
            num: 1,
            title:'阿咿呀'
        }
    },
    watch: {
        hd() {
            console.log('发送请求');
        },
        title(n) {
            console.log(n.length);
        }
    }
}
</script>

<style lang="less" scoped></style>