<template>
    <div class="arrow">
        <slot></slot>
        <img src="~assets/img/profile/info-arrow-right.svg" class="right" alt="">
    </div>
</template>
<script>
export default {
    name: "BaseBox"
}
</script>
<style scoped>
.arrow {
    display: flex;
    align-items: center;
    color:#ccc;
    font-size: 14px;
}
.arrow .right {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    border: none;
}
</style>