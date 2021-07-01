<template>
    <div class="detil-swiper">
        <swiper class="detil" ref="swiper">
            <swiper-item v-for="(image, index) in images" :key="index">
                <img :src="image" alt="" @load="load">
            </swiper-item>6
        </swiper>
    </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper"
import SwiperItem from "components/common/swiper/SwiperItem"
export default {
    name: "DetilesCommondity",
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        images: Array,
    },
    methods: {
        load() {
            this.$emit('load')
        }
    }
}
</script>

<style scoped>
    .detil{
        height: 260px;
        overflow: hidden;
    }
</style>