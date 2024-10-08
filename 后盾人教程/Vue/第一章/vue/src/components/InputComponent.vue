<template>
    <div>
        <input type="text" v-model="form.title">
        <hr>
        <textarea v-model="form.content"></textarea>
        <hr>
        <input type="checkbox" v-model="form.isPost" true-value="yes" false-value="no"> 发布
        <hr>
        <label v-for="l in lessons" :key="l.value">
            <input type="checkbox" v-model="form.lessons" :value="l.value">{{ l.title }}
        </label>
        <hr>
        <input type="radio" v-model="form.sex" :value="1"> 男
        <input type="radio" v-model="form.sex" :value="2"> 女
        <hr>
        <select v-model="form.cities" multiple>
            <option value="" disabled>===请选择城市===</option>
            <option :value="{name: 'beijing'}">北京</option>
            <option :value="{name: 'wuhan'}">武汉</option>
            <option :value="{name: 'tianjin'}">天津</option>
        </select>
        <hr>
        {{ form }}
        <hr>
        <input type="text" v-model.lazy="hd">
        <hr>
        <input type="text" v-model.number="num">
        <hr>
        <input type="text" v-model.trim="title">
        {{ title }}
    </div>
</template>

<script>
const lessons = [{title:'php',value:'php'},{title: 'Linux',value:'Linux'},{"title":"JavaScript","value":"JavaScript"}]
const form = { title: "houdunren.com", content: "后盾人", isPost: false,lessons: []
,sex:1,cities: [{name: 'beijing'},{name: 'tianjin'}] }
export default {
    data() {
        return {
            form,
            lessons,
            hd: 'houdunren.com',
            num: 1,
            title: '后盾人'
        }
    },
    watch: {
        hd(n) {
            console.log('网络请求');
        },
        title(n,o) {
            console.log(n.length);
        }
    }
}
</script>

<style lang="scss" scoped></style>