<template>
    <div class="goods-card-item" @click="dClick">
        <div class="ite">
            <div class="img-item" :style="imgItemStyle">
                <img v-lazy="image" alt="" @load="imgLoad" ref="image" :style="imgItemStyle">
            </div>
            <div class="title">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShopCard",
    props: {
        image: String,
        data: Object,
        imgItemStyle: {}
    },
    methods: {
        dClick() {
            this.$emit("goodsCardClick", this.data)
        },
        imgLoad() {
            this.$emit('imgLoad')
        },
    }
}
</script>

<style scoped>

    .title {
       white-space: nowrap; 
        overflow: hidden;
        text-overflow:ellipsis;
        bottom: 0;
    }
    .goods-card-item {
        flex: 1;
        list-style: none;
        width: 45%;
        padding: 5px;
    }

    .ite,.img-item {
        width: 100%;
        height: 70%;
    }
    img {
        width: 100%;
        border-radius: 5%;
    }
</style>