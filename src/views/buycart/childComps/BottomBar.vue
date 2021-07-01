<template>
    <div class="bottom-bar">
        <div class="bottom-bar-item">
            <buy-cart-select-button class="selects" :select="select" @selectClick="allSelect" />
            <div class="all">全选</div>
        </div>
        <div class="bottom-bar-item">
            合计：{{total}}
        </div>
        <div class="bottom-bar-item btn" >
            去结算({{count}})
        </div>
    </div>
</template>

<script>
import BuyCartSelectButton from './SelectButton.vue'
export default {
    name: "BottomBar",
    components: {
        BuyCartSelectButton
    },
    props: {
    },
    methods: {
        sele(boolean) {
            this.$store.getters.currentProduct.forEach((item) => {
                item.checkSelect = boolean
            })  
        },
        allSelect() {
            if (this.select) {
                this.$store.getters.currentProduct.forEach((item) => {
                    item.checkSelect = false
                })
            } else {
                this.$store.getters.currentProduct.forEach((item) => {
                    item.checkSelect = true
                })
            }
            this.$emit('allSelect', this.select)
        }
    },
    computed: {
        total() {
            return this.$store.getters.totalPrice
        },
        count() {
            return this.$store.getters.count
        },
        select() {
            return this.$store.getters.chekcSelectAll
        }
    }
}
</script>

<style scoped>
.bottom-bar {
    display: flex;
    position: fixed;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #f3f3f3;
    bottom: 50px;
    font-size: 14px;
    align-items: center;
}
.bottom-bar-item {
    flex: 1;
}
.btn {
    background-color: orangered;
    text-align: center;
}
.selects {
    position: relative;
    bottom: -3px;
    left: 10px;
}
.all {
    display: inline-block;
    margin-left: 14px;
}
</style>