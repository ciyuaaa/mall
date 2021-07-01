<template>
    <div class="profile">
                <router-view/>
        <center-top-bar text="我的档案" ></center-top-bar>
        <user @unserInfo="userinfo"></user>
        <wallet :wallet="wallet" @walletClick="walletClick"></wallet>
        <other-options :otherOptions="otherOptions" 
        @opClick="opClick"
        />
        <other-options :otherOptions="shopping" 
        @opClick="opClickShopping"
        bgStyle="#fff"
        />
        
    </div>
</template>

<script>
import CenterTopBar from "components/content/CenterTopBar"
import User from './childComps/User.vue'
import Wallet from './childComps/Wallet.vue'

import OtherOptions from './childComps/OtherOptions.vue'
import messageImg from "assets/img/profile/message.svg"
import couponMallImg from "assets/img/profile/coupon_mall.svg"
import membershipImg from "assets/img/profile/membership.svg"
import buycartImg from "assets/img/profile/buycart.svg"
import shoppingImg from "assets/img/profile/shopping.svg"

export default {
    name: "Profile",
    components: {
        CenterTopBar,
        User,
        Wallet,
        OtherOptions
    },
    data() {
        return {
            wallet: [
                {
                    number: "0.00",
                    typeText: "我的余额",
                    unit: "元"
                },
                {
                    number: "0",
                    typeText: "我的优惠",
                    unit: "个"
                },
                {
                    number: "0",
                    typeText: "我的积分",
                    unit: "分"
                }
            ],
            otherOptions: [
                {
                    img: messageImg,
                    text: "我的消息"
                },
                {
                    img: couponMallImg,
                    text: "积分商场"
                },
                {
                    img:membershipImg,
                    text: "会员卡"
                }
            ],
            shopping: [
                {
                    img: buycartImg,
                    text: "我的购物车"
                },
                {
                    img: shoppingImg,
                    text: "下载购物APP"
                }
            ],
            show: false
        }
    },
    methods: {
        opClick(index) {
            this.$popUps.show("暂未开放")
        },
        walletClick(index) {
            this.$popUps.show("暂未开放")
        },
        opClickShopping(index) {
            if (!index) {
                this.$router.push('/buycart')
            } else {
                this.$popUps.show("暂未开放")
            }
        },
        userinfo() {
            this.show = true
        },
    }
}
</script>

<style scoped>
.profile {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

</style>