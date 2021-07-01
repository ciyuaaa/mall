<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>
<style scoped>
.tabbar {
    display: flex;
    position:fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: 49px;
    box-shadow:0 -2px 2px rgba(0,0,0,0.1);
    text-align: center;
    background-color: #f2f2f2;
}
</style>