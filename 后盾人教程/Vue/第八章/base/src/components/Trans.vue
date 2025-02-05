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
    background-color: rgb(4, 150, 101);
    padding: 20px;
    border-radius: 0.5rem;
    display: inline-block;
    color: #ffffff;
    cursor: pointer;
}
</style>