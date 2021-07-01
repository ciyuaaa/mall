<template>
    <div class="goods">
        <slot></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>