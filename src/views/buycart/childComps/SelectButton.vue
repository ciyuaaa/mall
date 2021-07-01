<template>
    <div  class="selec" @click="selectClick" :class="{'selec-ac': select }">
        <img src="~assets/img/selectBtn/selectAcBtn.svg" alt="" v-if='select'>
    </div>
</template>
<script>
export default {
    name: "BuyCartSelectButton",
    props: {
        select: false
    },
    methods: {
        selectClick() {
            this.$emit('selectClick')
        }
    },
}
</script>
<style scoped>
    .selec {
        position: relative;
        width: 15px;
        height: 15px;
        margin-right: 5px;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 50%;
    }
    .selec-ac {
        width: 17px;
        height: 17px;
        background-color: pink;
        border: none;
    }
    .selec > img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
            /* padding-bottom: 12px; */
    }
    
</style>