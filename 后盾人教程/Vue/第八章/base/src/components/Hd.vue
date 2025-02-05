<template>
    <section>
        <div>
            <slot></slot>
        </div>
    </section>
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
    animation: identifier 2s ease;
    transition: 0.5s;
    border-radius: 0.5rem;
    display: inline-block;
    color: #ffffff;
    cursor: pointer;
    &:hover {
        background-color: orange;
        // transform: rotateY(360deg) rotateX(100deg);
    }
}

@keyframes identifier {
    from {
        transform: translateX(-5px);
    }

    20% {
        transform: translateX(5px);

    }

    40% {
        transform: translateX(-5px);

    }

    60% {
        transform: translateX(5px);

    }

    80% {
        transform: translateX(-5px);

    }

    to {
        transform: translateX(0);

    }
}

button {
    margin-top: 60px;
}
</style>