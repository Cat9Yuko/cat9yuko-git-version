<template>
    <div>
        <header>
            <slot name="header"/>
        </header>
        <main>
            <slot/>
        </main>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
div {
    border: 1px solid #ddd;
    margin-top: 20px;
    border-radius: 5px;
    header {
        border-bottom: 1px solid #ddd;
        padding: 10px;
        background-color: #f3f3f3;
    }
    main {
        padding: 10px;
    }
}
</style>