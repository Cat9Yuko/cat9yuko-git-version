<template>
    <!-- <div>
        <h1>Cat9Mrchen</h1>
        <div style="color: red;" @click="show(content)">
            
            {{ content }}
        </div>
    </div> -->
    <div>
        <slot/>
        <header><slot name="header"/></header>
        <main><slot name="main"/></main>
        <footer><slot name="footer"/></footer>
    </div>
</template>

<script>
export default {
    props: {
        content: { type: String, default: 'cat' }
    },
    methods: {
        show(content) {
            console.log(`子组件调用：${content}`);
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    border: solid 1px #ddd;
    header,main,footer {
        padding: 10px;
    }
    main {
        border-width: 1px 0 1px 0;
        border-style: solid;
        border-color: #ddd;
    }
}
</style>