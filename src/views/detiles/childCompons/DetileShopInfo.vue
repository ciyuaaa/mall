<template>
    <div class="shopinfo">
        <div class="shopI-info">
            <img :src="shopInfo.shopLogo" alt="">
            <span>{{shopInfo.name}}</span>
        </div>
        <div class="sells-goods-score">
            <div  class="sells-goods sells-goods-score-item">
                <div class="sells-goods-item sells">
                    <span>{{shopInfo.cSells}}</span>
                    <div>总销量</div>
                </div>
                <div class="sells-goods-item goods">
                    <span>{{shopInfo.cGoods}}</span>
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="sells-goods-score-item score">
                <div class="score-item">
                    <p  v-for="(item, index) in shopInfo.score" :key="index">{{item.name}}</p>
                </div>
                <div  class="score-item">
                    <p v-for="(item, index) in shopInfo.score" :key="index">{{item.score}}
                        <span v-if="item.isBetter" :style="{backgroundColor:'red', color:'#fff'}">高</span>
                        <span v-else :style="{backgroundColor:'green', color:'#fff'}">底</span>
                    </p>
                </div>
            </div>
        </div>
            <div class="shop-button">
                <button>进店逛逛</button>
            </div>
    </div>
</template>

<script>
export default {
    name: "DetileShopInfo",
    props: {
        shopInfo: Object
    }
}
</script>

<style scoped>
    .shopinfo {
        border-bottom: 1px solid #ccc;
    }
    .shop-button {
        text-align: center;
        padding: 10px 0px 30px 0px;
    }
    button {
        color: #ccc;
        background-color: rgb(122, 134, 138);
        width: 8em;
        border: none;
    }
    .shopI-info img {
        margin-left: 10px;
        width: 40px;
        border: 1px solid #ccc;
        border-radius: 20px 20px 20px 20px ;
        
        vertical-align:middle;
    }
    .shopI-info > span{
        display: inline-block;
        text-indent: 1em;
    }
    .goods {
        padding-right: 5px;
        border-right: 1px solid #ccc;
    }
    .sells > div, .goods > div {
        padding-top: 5px;
    }
    .sells-goods {
        font-size: 14px;
    }
    .sells-goods,.sells-goods-score {
        text-align: center;
        display: flex;
        justify-content: center; 
        align-items: center;     
        
    }
    .sells-goods-item, .sells-goods-score-item {
        flex: 1;
    }
    .sells-goods-item p {
        margin: 5px;
    }
    .score-item{
        font-size: 14px;
        display: inline-block;
        text-align: right;
        text-indent: 1em;
    }
    
    .score-item > p{
        margin: 0;
        padding-bottom: 10px;
    }
</style>