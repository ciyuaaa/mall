<template>
    <div class="other-options" :style="{backgroundColor: bgStyle}">
        <div 
        class="op-item" 
        v-for="(item, index) in otherOptions" 
        :key="index"
        @click="click(index)"
        >
            <div class="sub-item">
                <img :src="item.img" alt="">
                <div class="type">{{item.text}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "OtherOptions",
    props: {
        otherOptions: [],
        bgStyle: ""
    },
    methods: {
        click(index) {
            this.$emit("opClick", index)
        }
    }
}
</script>

<style scoped>
    .other-options {
        padding-bottom: 15px;
        background-color: #ccc;
    }
    .op-item {
        width: 100vw;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        background-color: #fff;
    }
    .op-item img {
        width: 25px;
        vertical-align: middle;
        padding: 0 5px;
    }
    .type {
        display: inline-block;
        width: calc(100vw - 35px);
    }
    .other-options :not(:last-of-type) {
        border-bottom:1px solid #ccc;
    }   
    
</style>