<template>
    <div class="base">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"Topbar",
    props: {
        text: String
    }
}
</script>

<style scoped>
.base {
        display: flex;
        /* position: fixed; */
        z-index: 9;
        width: 100%;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    }
.left, .right {
    width: 60px
}
.center {
    flex: 1;
}
</style>