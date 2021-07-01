<template>
    <div>
        <tab-bar>
            <tab-bar-item :img="img.home" :img-active="img.homeActive" path="/home" text="首页"></tab-bar-item>
            <tab-bar-item :img="img.category" :img-active="img.categoryActive" path="/category" text="分类"></tab-bar-item>
            <tab-bar-item :img="img.buycart" :img-active="img.buycartActive" path="/buycart" text="购物车"></tab-bar-item>
            <tab-bar-item :img="img.profile" :img-active="img.profileActive" path="/profile" text="我的"></tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
import img from "./MainTabBarImg"
export default {
    name: "MainTabBar",
    components: {
        TabBar,
        TabBarItem
    },
    data() {
        return {
            img,
        }
    }
}
</script>