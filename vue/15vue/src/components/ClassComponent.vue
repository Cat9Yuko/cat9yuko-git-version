<template>
    <div class="classComponent">
        <div class="c1" :class="[classLists, 'package']">Cat9</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        classLists() {
            return {
                current: true,
                xj: true,
            }
        }

    }
}
</script>

<style lang="less">
.classComponent {
    .c1 {
        color: red;
    }

    .current {
        background-color: black;
    }
    .xj {
        border: 20px solid #ddd;
    }
    .package {
        font-weight: bold;
    }
}
</style>