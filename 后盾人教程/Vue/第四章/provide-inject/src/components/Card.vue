<template>
    <div>
        <header>
            <slot name="header" />
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
// 全局组件
export default {

}
</script>

<style lang="scss" scoped>
div {
    border: 1px solid #dddddd;
    margin-top: 20px;
    border-radius: 5px;

    header {
        border-bottom: 1px solid #dddddd;
        padding: 10px;
        background-color: #f3f3f3f3;
    }

    main {
        padding: 10px;
    }
}
</style>