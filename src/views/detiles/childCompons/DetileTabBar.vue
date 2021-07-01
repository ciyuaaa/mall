<template>
    <div class="nav-bar">
        <div class="shop-ab">
            <div >
                <img src="~assets/img/detiles/kefu.svg" alt="">
                <div @click="notC">客服</div>
            </div>
            <div @click="notC">
                <img src="~assets/img/detiles/shop.svg" alt="">
                <div>店铺</div>
            </div>
            <div @click="scon">
                <img :src="isSC" alt="">
                <div>收藏</div>
            </div>
        </div>
        <div class="buy-ab" >
            <div class="add-buycart" @click="addCart">
                加入购物车
            </div>
            <div class="buy" >
                购买
            </div>
        </div>
    </div>
</template>

<script>
import scI from "assets/img/detiles/sc.svg"
import scAC from "assets/img/detiles/sc_ac.svg"
export default {
    name: "detileTabbar",
    data() {
        return {
            sc:scI,
            not: false
        }
    },
    methods: {
        notC() {
            this.$popUps.show('暂未开放')
            console.log('123')
        },
        scon() {
            if (this.sc === scI) {
                this.sc = scAC
            } else {
                this.sc = scI
            }
        },
        addCart() {
            this.$emit('addCart')
        }
    },
    computed: {
        isSC() {
            return this.sc
        }
    }
}
</script>

<style scoped>
.nav-bar {
    display: flex;
    text-align: center;
    height: 49px;
}
.nav-bar img {
    width: 20px;
}
.nav-bar > div {
    flex: 1;
}
.shop-ab, .buy-ab {
    display: flex;
    align-items: center;
}
.shop-ab > div, .buy-ab>div {
    flex: 1;
}
.add-buycart,.buy {
    line-height: 49px;
    text-align: center;
}
.add-buycart {
    background-color: orange;
}
.buy {
    color: #fff;
    background-color: red;
}

</style>