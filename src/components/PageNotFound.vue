<template>
    <section class="page-not-found">
        Page not found
    </section>
</template>

<script>
    export default {
        name: "ErrorPage"
    }
</script>

<style lang="scss">
    .page-not-found {
        font-size: 1.5rem;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
    }
</style>