<template>
    <div id="home">
        <center-top-bar text="购物街"></center-top-bar>
        <scroll class="home-content" @scrolls="updataHeight" ref="scorll">
            <home-swiper :banner="banner"></home-swiper>
            <home-recommend :recommend="recommend"></home-recommend>
            <control-bar :list="op" :fiexd="true" @tabClick="tabClick"></control-bar>
            <goods-list :list="goods[this.index].list"
            :imgItemStyle="{height: px+'vw'}"
            ></goods-list>
            <home-updata ref="homeUpdata"></home-updata>
            <back-top :getEl="elF">
                <img src="~assets/img/backtop/backtop.svg" alt="">
            </back-top >
        </scroll>
    </div>
</template>

<script>
import ControlBar from "components/common/controlbar/ControlBar"
import BackTop from "components/common/backtop/BackTop"
import Scroll from 'components/common/scroll/scroll'
import CenterTopBar from 'components/content/CenterTopBar'

import GoodsList from 'components/content/GoodsList'

import HomeSwiper from "./homeComponents/HomeSwiper"
import HomeRecommend from "./homeComponents/HomeRecommend"
import HomeUpdata from "./homeComponents/HomeUpdata"

import {HomeMultidata, HomeData} from "network/homeData"
import {px2vw} from "common/utiles"

export default {
    name: "Home",
    components: {
        HomeSwiper,
        HomeRecommend,

        ControlBar,
        BackTop,
        HomeUpdata,
        Scroll,
        GoodsList,

        CenterTopBar
    },
    data() {
        return {
            px : 260,
            banner: [],
            recommend: [],
            op: ["流行", "精选","上新"],
            goods: [
                {
                    type: "pop",
                    page: 1,
                    list: [],
                    scrollTop: 0
                },
                {
                    type: "sell",
                    page: 1,
                    list: [],
                    scrollTop: 0
                },
                {
                    type: "new",
                    page: 1,
                    list: [],
                    scrollTop: 0
                }
            ],
            height: 0,
            arr: [],
            index: 0,
            clientHeight: document.documentElement.clientHeight,
            scrollTop: 0,
            elF: () => { return this.$refs.scorll.$el}
        }
    },
    created() {
        this.px = px2vw(this.px)
        HomeMultidata.then((data) => {
            this.banner = data.banner.list
            this.recommend = data.recommend.list
        })
         HomeData(this.goods[this.index].type, this.goods[this.index].page).then((data)=>{
            this.goods[this.index].list.push(...data.list)
        })
    },
    activated() {        
        this.$refs.scorll.$el.scrollTop = this.scrollTop 
    },
    deactivated() {
        this.scrollTop = this.$refs.scorll.top
    },
    methods: {
        updataHeight() {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                if (this.$refs.homeUpdata.$el.getBoundingClientRect().top <= this.clientHeight) {
                    this.goods[this.index].page++
                    this.getHomeData(this.goods[this.index].type,this.goods[this.index].page)
                } 
                this.scrollTop = this.$refs.scorll.scrollTop
            }, 10)
        },
        /**
         * 控制栏相关
         */
        tabClick(index) {
            if (this.index !== index) {
                this.goods[this.index].scrollTop = this.$refs.scorll.top
                this.index = index
                if (this.goods[index].list.length === 0) {
                    this.getHomeData(this.goods[index].type, this.goods[index].page)
                } else {
                    this.$refs.scorll.$el.scrollTop = this.goods[this.index].scrollTop
                }
            }
        },
        getHomeData(type, page) {
            HomeData(type, page).then((data) => {
                this.goods[this.index].list.push(...data.list)
            })
        },
    }
}
</script>

<style scoped>
.home-content {
        width: 100%;
        height: calc(100vh - 45px - 50px);
        overflow: scroll;
    }
</style>