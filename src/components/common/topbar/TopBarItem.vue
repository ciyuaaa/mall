<template>
    <div class="topbar-item">
        <slot name="left"></slot>
        <slot name="center"></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
    name: "TopBarItem"
}
</script>

<style scoped>
.topbar-item {
    flex: 1;
}
</style>