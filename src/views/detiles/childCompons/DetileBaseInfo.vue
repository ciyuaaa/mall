<template>
    <div class="baseInfo">
        <p>{{ baseInfo.title}}</p>
        <div class="item-info">
            <span :style="{color:baseInfo.discountBgColor}"  class="price"   >
                {{ baseInfo.price }}
                </span>
            <span class="old-price">
                {{ baseInfo.oldPrice }}
            </span>
            <span :style="{backgroundColor:baseInfo.discountBgColor,color:'white'}" v-if="baseInfo.discountDesc" class="desc">
                {{ baseInfo.discountDesc }}
            </span>
        </div>
        <div class="columns">
            <span v-for="(item, index) in baseInfo.columns" :key="index" class="columns-item">
                {{item}}
            </span>
        </div>
        <div class="shop-info">
            <span v-for="(item, index) in baseInfo.services" :key="index" class="shop-info-item"> 
                <img :src="item.icon" alt="" @load="load">
                {{item.name}}
            </span>
        </div>
    </div>
</template>

<script>

export default {
    name: "DetileBaseInfo",
    props: {
        baseInfo: Object
    },
    methods: {
        load() {
            this.$emit('load')
        }
    }
}
</script>

<style scoped>
    .item-info {
        padding-bottom: 20px;
    }
    .price {
        font-size: 20px;
        padding-bottom: 10px;
    }
    .old-price {
        color: #ccc;
        font-size: 12px;
    }
    .shop-info, .columns {
        display: flex;
        justify-content: space-between;
    }
    .columns {
        color: #ccc;
        font-size: 13px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
        padding-bottom: 5px;
    }
    .shop-info {
        font-size: 5px;
    }
    .shop-info-item img {
        width: 12px;
    }
    .desc {
        font-size: 15px;
        padding: 4px;
        border-radius: 10px;
    }
</style>