<template>
    <div class="detile" :key="updata">
        <detile-top-bar @topbarClick="tbClick" ref="tpc"></detile-top-bar>
       <scroll class="detiles-scroll" ref="scorll" @scrolls="sc">
            <div ref="goods" class="goods">
                <detile-swiper :images="topImages"  ref="swiper"  ></detile-swiper>
                <detile-base-info :base-info="baseInfo"></detile-base-info>
                <detile-shop-info :shop-info="shop"></detile-shop-info>
                <detile-info :detileInfo="detailInfo" :infoList="infoList" ref="info"></detile-info>
            </div>
            <detile-params :params="itemParams" ref="params"></detile-params>
            <detile-comment :rate="rate" ref="comment"></detile-comment>
            <goods-list ref="recommend" :list="recommList"
            :imgItemStyle="{height: '230px'}" />
            <back-top :getEl="elF">
                <img src="~assets/img/backtop/backtop.svg" alt="">
            </back-top >
        </scroll>
        <detile-option :skusInfo="skusInfo" :show="show" @hide="optionsHide"></detile-option>
        <detile-tab-bar @addCart="addCart"></detile-tab-bar>
    </div>
</template>

<script>
import {detilesData, BaseInfo, Shop, ItemParams, getRecommend} from "network/detilesData"
import {imgload} from 'common/utiles'

import DetileTopBar from "./childCompons/DetileTopBar"
import DetileSwiper from "./childCompons/DetileSwiper.vue"
import DetileBaseInfo from './childCompons/DetileBaseInfo'
import DetileShopInfo from './childCompons/DetileShopInfo'
import DetileTabBar from './childCompons/DetileTabBar.vue'
import DetileInfo from './childCompons/DetileInfo.vue'
import DetileParams from './childCompons/DetileParams.vue'
import DetileComment from './childCompons/DetileComment.vue'
import DetileOption from './childCompons/DetileOption.vue'

import Scroll from 'components/common/scroll/scroll.vue'
import BackTop from 'components/common/backtop/BackTop.vue'

import GoodsList from 'components/content/GoodsList'
export default {
    name: "Detile",
    components: {
        DetileTopBar,
        DetileSwiper,
        DetileBaseInfo,
        DetileShopInfo,
        DetileTabBar,
        DetileInfo,
        DetileParams,
        DetileComment,
        DetileOption,

        Scroll,
        BackTop,

        GoodsList
    },
    beforeRouteUpdate(to, from, next) {
        this.getDetile(to.params.id).then(() => {
            this.updata++
            // this.$forceUpdate()
        })
        // this.tbClick(0)
        this.$refs.tpc.currentIndex = 0
        next()
    },
    data() {
        return {
            topImages: [],
            baseInfo: {},
            shop: {},
            detailInfo: {},
            infoList: {},
            itemParams: {},
            rate: {},
            recommList: [],
            skusInfo: {},
            elF: () => { return this.$refs.scorll.$el},
            themeTop: [],
            detileImgload: Function,
            updata: 0,
            show: false
        }
    },
    created() {
        let getOffsetTop = () => {
            this.themeTop = []
            this.themeTop.push(this.$refs.goods.offsetTop)
            this.themeTop.push(this.$refs.params.$el.offsetTop)
            this.themeTop.push(this.$refs.comment.$el.offsetTop)
            this.themeTop.push(this.$refs.recommend.$el.offsetTop)
        }
        this.getDetile().then(() => {
            this.$nextTick().then(() => {
                imgload.imgObserve(getOffsetTop)
            })
        })
            
    },
    destroyed() {
        imgload.disconnect()
    },
    methods: {
        getDetile(params = this.$route.params.id) {
            return detilesData(params).then((d) => {
                const data = d.result
                this.topImages = data.itemInfo.topImages
                this.baseInfo = new BaseInfo(data.itemInfo, data.columns, data.shopInfo.services)
                this.shop = new Shop(data.shopInfo)
                this.detailInfo = data.detailInfo
                this.infoList = data.detailInfo.detailImage[0]
                this.itemParams = new ItemParams(data.itemParams)

                this.skusInfo = data.skuInfo
                this.skusInfo.image = this.topImages[0]
                this.skusInfo.desc = this.detailInfo.desc

                // 评论数据
                if (data.rate.cRate !== 0) {
                    this.rate = data.rate
                }
                // 推荐数据
                getRecommend().then((response) => {
                    this.recommList = response.data.list
                })
            })
        },
        sc(e) {
            if (!this.tbClicks) {
                let top = this.$refs.scorll.top
                let length = this.themeTop.length
                for (let i =0; i < length; i++) {
                    if ((i < length - 1 
                        && (top >= this.themeTop[i] 
                        && top < this.themeTop[i + 1])) 
                        || (i === length - 1 && top > this.themeTop[i] )) {
                        this.$refs.tpc.currentIndex = i
                    }
                }
            }
        },
        tbClick(e) {
            this.tbClicks = true
            this.tbClickIndex = e
            this.$refs.scorll.$el.scrollTo(0, this.themeTop[e])
            setTimeout(() => {
                this.tbClicks = false
            }, 100)
        },
        optionsHide() {
            this.show = false
        },
        addCart() {
            this.show = true
        }
    }
}
</script>

<style scoped>
    .detile {
        height: 100vh;
        position: relative;
        z-index: 2;
        background-color: #fff;
    }
    .detiles-scroll {
        height: calc(100vh - 45px - 49px);
    }
</style>