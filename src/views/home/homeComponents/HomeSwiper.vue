<template>
    <div class="home-swiper">
        <swiper>
            <swiper-item v-for="(item, index) in banner" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper"
import SwiperItem from "components/common/swiper/SwiperItem"
export default {
    name: "HomeSwiper",
    props: {
        banner: Array
    },
    components: {
        Swiper,
        SwiperItem,
    }
}
</script>

<style scoped>
.home-swiper {
    /* padding-top: 44px; */
}
</style>