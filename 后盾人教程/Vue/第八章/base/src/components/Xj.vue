<template>
        <div>
            <slot></slot>
        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
section {
    perspective: 800px;
}
div {
    background-color: aquamarine;
    padding: 20px;
    // transition: 0.5s;
    border-radius: 0.5rem;
    display: inline-block;
    color: #ffffff;
    cursor: pointer;
}


button {
    margin-top: 60px;
}
</style>