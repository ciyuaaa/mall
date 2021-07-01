<template>
    <div>
        <div class="dart" @click="hide" :class="{dartActive: show, 'dart-dective': !show}"></div>
        <div class="options" ref="option" :class="{optionsActive: show, 'options-deactive':!show}">
            <div class="top" >
                <img :src="baseInfo.image" alt="">
                <div class="title">
                    <span>{{baseInfo.title}}</span>
                    <p class="price">{{baseInfo.price}}</p>
                </div>
            </div>
            <scroll class="scroll">
                <div class="content">
                    <div v-for="(item, index) in skusInfo.props" :key="index">
                        <span>{{item.label}}</span>
                        <div class="style">
                            <p class='item' v-for="(subItem, indexy) in item.list" 
                            :key="indexy" 
                            @click="select($event,subItem.index,item.label, subItem.name)"
                            >
                                {{subItem.name}}    
                            </p>
                        </div>
                    </div>
                    <count class="buycar-count" text="最大支持200件" :count="200" :item="baseInfo" />
                </div>
            </scroll>
            <div class="btn" @click="addBuyCart" >确定</div>
        </div>
        <!-- <pop-ups ref="popUps" /> -->
    </div>
</template>
<script>

import Scroll from 'components/common/scroll/scroll.vue'
// import PopUps from 'components/common/popups/PopUps'
import Count from 'components/content/Count'
export default {
    name: 'DetileOption',
    props: {
        skusInfo: {},
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            // 商品数据
            baseInfo: {
                image:"",
                title: "",
                price: "",
                desc: "",
                stock: 0,
                count: 1,
                checkSelect: false,
            },
            // 用于区分样式与尺码
            keys : {},
            // 用于创建商品参数描述
            paramsData: {}
        }
    },
    components: {
        Scroll,
        // PopUps,
        Count
    },
    mounted() {
       this.load()
    },
    methods: {
        load() {
            let dataLoad = new Promise((resolve,reject) => {
                if (Object.keys(this.skusInfo).length) {
                    this.baseInfo.title = this.skusInfo.title
                    this.baseInfo.image = this.skusInfo.image
                    this.baseInfo.price = this.skusInfo.defaultPrice
                    this.keys[this.skusInfo.sizeKey] = 0
                    this.keys[this.skusInfo.styleKey] = 0
                    // this.baseInfo.desc = this.skusInfo.desc
                    resolve()
                } else {
                    reject()
                }
            })
            dataLoad.catch(() => {
                setTimeout(this.load, 100)
            })
        },
        hide() {
            this.$emit('hide')
        },
        select(e,index, label, params) {
            let current = null
            let key = label.split(':')[0]
            e.target.parentElement.children.forEach((item) => {
                if (item.className.includes('selects')) {
                    current = item
                    item.className = 'item'
                }
            })
            if (e.target !== current) {
                e.target.className = e.target.className + ' selects'
                this.createdGoodsParamsInfo(label, params)
                this.createdGoodsInfo(key, index)
            } else {
                this.keys[key] = 0
            }
            
        },
        createdGoodsParamsInfo(label, params) {
            let str = ''
            this.paramsData[label] = params
            
            Object.entries(this.paramsData).forEach((item) => {
               str += item.join('') + " "
            })
            this.baseInfo.desc = str
            // console.log(str)
        },
        createdGoodsInfo(key, index) {
                this.keys[key] = index
                this.skusInfo.skus.forEach((item) => {
                    if (this.keys[this.skusInfo.sizeKey] === item.sizeId &&
                     this.keys[this.skusInfo.styleKey] === item.styleId) {
                         let i = item.nowprice / 100
                         if (!((i+"").includes('.'))) {
                            //  console.log('???')
                             i = i+".00"
                            //  console.log(i)
                         }

                         this.baseInfo.price = item.currency + i
                         this.baseInfo.image = item.img
                         this.baseInfo.stock = item.stock
                         this.baseInfo.checkSelect = true
                    }
                })
        },
        add() {
            this.baseInfo.count++
        },
        less() {
            this.baseInfo.count ? this.baseInfo.count-- : false
        },
        addBuyCart() {
            let obj = {}
            for (const i in this.baseInfo) {
                obj[i] = this.baseInfo[i]
            }
             
            switch(true) {
                case this.baseInfo.count === 0:
                    this.$popUps.show('数量为空')
                    break
                case this.keys[this.skusInfo.styleKey] === 0:
                    this.$popUps.show(`选择${this.skusInfo.styleKey}`)
                    break
                case this.keys[this.skusInfo.sizeKey] === 0:
                    this.$popUps.show(`选择${this.skusInfo.sizeKey}`)
                    break
                default :
                    this.$store.commit('addProduct', obj)
                    this.$popUps.show(`加入购物车成功`, 1500)
                    this.hide()
            }
        },
    },

}
</script>
<style scoped>
    .count > input{
        width: 10vw;
        text-align: center;
    }
    .count > button {
        border: none;
        background-color: #fff;
        font-size: 6vw;
    }
    .less-active {
        color: #ccc;
    }
    .selects {
        color: red;
    }
    .dartActive {
        background-color: rgba(0,0,0,.3);
        height: 100vh;
    }
    .dart-deactive,.options-deactive{
        height: 0;
    }
    .optionsActive {
        height: 70vh;
    }
    .dart,.options {
        transition: all .3s ease-in .1s;
    }
    .dart {
        width: 100vw;
        position: absolute;
        top: 0;
    }
    .scroll {
        height: calc(70vh - 20vh - 40px);
    }
    .content {
        padding: 20px;
    }
    .price {
        position: absolute;
        bottom: 0px;
        margin: 0;
        color: orangered;
    }
    .title {
        padding-left: 5px;
        position: relative;
    }
    .top {
        display: flex;
        width: calc(100vw - 20px);
        height: 15vh;
        overflow: hidden;
        margin: 10px;
        font-size: 14px;
    }
    img {
        width: 25%;
        height: 100%;
        border-radius: 5px;
        /* vertical-align: middle; */
    }
    .btn {
        width: 60%;
        height: 5vh;
        margin: 10px auto;  
        background-color: orangered;
        border-radius: 5vw;
        text-align: center;
        line-height: 5vh;
    }
    .options {
        background-color: #fff;
        width: 100vw;
        position: absolute;
        bottom: 0px;
        overflow: scroll;
    }
    .style {
        display: flex;
        flex-wrap: wrap;
        width: 80vw;
        padding: 10px;
    }
    .item {
        font-size: 15px;
        border-radius: 10px;
        text-align: center;
        flex-basis: 50%;
        flex-grow: 1;
        flex-shrink: 1;
        /* width: 100%;
        height: 100%; */
        background-color: #ccc;
        border: 1px solid #ccc;
        margin: 0;
        margin: 5px;
    }
</style>