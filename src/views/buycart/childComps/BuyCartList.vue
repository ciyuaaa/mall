<template>
    <div v-if="prod">
        <div class="goods" v-for="(item, index) in prod" :key="index">
            <div class="left">
                <buy-cart-select-button @selectClick="select(item)"
                :select="item.checkSelect" ></buy-cart-select-button>
                <img style="margin-left: 1px" :src="item.image" alt="">
            </div>
            <div class="right">
                <p class="title">{{item.title}}</p>
                <p class="desc">{{item.desc}}</p>
                <div >
                    <span class="price">{{item.price}} </span>
                    <count class="buycar-count" :item="item" :min="1" 
                        text="最大支持200件" :count="200"
                        :lessBackFn="less(item)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BuyCartSelectButton from './SelectButton.vue'
import Count from 'components/content/Count'
export default {
    name: "BuyCartList",
    components: {
        BuyCartSelectButton,
        Count
    },
    props: {
        prod: [],
    },
    methods: {
        select(item) {
            item.checkSelect = !item.checkSelect
        },
        less(item) {
            let store = this.$store
            return function () {
                store.commit("lessPorduct", item)
            }
        }
    }
}
</script>

<style scoped>
    .price,.count {
        padding-top: 15px;
    }
    .price {
        float: left;
        color: orangered;
    }
    .buycar-count {
        float: right;
        padding-right: 10px;
    }
    .item-count {
        width: 30px;
        outline: none;
        border: none;
        background-color: #ccc;
        text-align: center;
    }
    .left {
        width: 30vw;
    }
    .right {
        width: 70vw;
    }
    img {
        width: 20vw;
        vertical-align: middle; 
        height: 13vh;
        border-radius: 10%;     
        
    }
    .goods {
        padding-top: 10px;
        text-align: center;
        display: flex;
        width: 100vw;
        height: 15vh;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        /* font-size: 14px; */
    }
    .title, .desc {
        white-space: nowrap; 
        overflow: hidden;
        text-overflow:ellipsis;
        margin: 0;
    }
    .desc {
        color: #ccc;
        font-size: 12px;
        padding-top: 10px;
    }
    
</style>