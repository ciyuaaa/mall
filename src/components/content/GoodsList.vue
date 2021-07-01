<template>
    <div class="asd">
        <commodity>
            <commodity-card 
            v-for="(item, index) in list" 
            :key="index"
            :image="item.img || item.show.img"
            :data="item"
            @goodsCardClick="commodityClick"
            :imgItemStyle="imgItemStyle"
            >
            <div class="ss">
                <p class="title">{{ item.title }}</p>
            </div>
            </commodity-card>
        </commodity>
    </div>
</template>

<script>
import Commodity from "components/common/commodity/Commodity"
import CommodityCard from "components/common/commodity/CommodityCard"


export default {
    name: "DetileRecommend",
    props: {
        list: Array,
        imgItemStyle: {}
    },
    data() {
        return {
            img: []
        }
    },
    components: {
        Commodity,
        CommodityCard,
    },
    methods: {
        commodityClick(data) {
            // this.$router.replace('/')
            this.$router.push("/detiles/" + data.iid)
            document.documentElement.scrollTop = 0
        },
    },
}
</script>

<style scoped>

</style>