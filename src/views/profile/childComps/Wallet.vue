<template>
    <div class="wallet">
        <div class="item" v-for="(item, index) in wallet" :key="index">
            <div @click="click(index)" class="sub-item">
                <span>{{item.number}}</span>{{item.unit}}
                <div>
                    {{item.typeText}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Wallet",
    props: {
        wallet: []
    },
    methods: {
        click(index) {
            this.$emit("walletClick", index)
        }
    }
}
</script>

<style scoped>
    .wallet {
        display: flex;
        width: 100vw;
        height: 80px;
        background-color: #ccc;
        padding-bottom: 15px;
    }
    .item {
        flex: 1;
        width: 30%;
        height: 100%;
        text-align: center;
        border-right: 1px solid #ccc;
        background-color: #fff;
    }
    .sub-item {
        padding: 20px 0;
    }
    .sub-item > span{
        color: orangered;
    }
</style>