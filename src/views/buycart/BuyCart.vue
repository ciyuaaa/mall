<template>
    <div>
        <center-top-bar :text="`购物车(${prod.length})`"></center-top-bar>
        <scroll class="content">
            <buy-cart-list :prod="prod" />
        </scroll>
        <bottom-bar></bottom-bar>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/scroll'

import CenterTopBar from 'components/content/CenterTopBar'
import BuyCartList from './childComps/BuyCartList.vue'
import BottomBar from './childComps/BottomBar.vue'
export default {
    name: "BuyCart",
    components: {
        BuyCartList,
        BottomBar,
        
        Scroll,
        CenterTopBar
    },
    data() {
        return {
            prod: {},
        }
    },
    created() {
        this.prod = this.$store.getters.currentProduct
    },
    methods: {
    }
    // activated() {
    //     this.prod = this.$store.state.product
    //     this.goods = this.$store.state.goods
    //     console.log(this.prod)
    // }
}
</script>

<style scoped>
.content {
    width: 100%;
    height: calc(100vh - 45px - 49px - 40px);
}
</style>