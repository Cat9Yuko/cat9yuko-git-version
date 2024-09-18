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
        {{ form }}
    </div>
</template>

<script>
const lessons = [{title:'php',value:'php'},{title: 'Linux',value:'Linux'},{"title":"JavaScript","value":"JavaScript"}]
const form = { title: "houdunren.com", content: "后盾人", isPost: false,lessons: [] }
export default {
    data() {
        return {
            form,
            lessons
        }
    }
}
</script>

<style lang="scss" scoped></style>