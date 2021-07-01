<template>
    <div>
        <top-bar class="detile-topbar">
            <template v-slot:left >
                <div @click="back">
                    <img src="~assets/img/back/back.svg" alt="">
                </div>
            </template>
            <template v-slot:center>
                <div class="title" @click="controlClick">
                    <div v-for="(item, index) in titles" 
                    :key="index" class="title-item" 
                    :class="{active: currentIndex === index}" 
                    @click="itemClick(index)"
                    >{{ item }}</div>
                </div>
            </template>
        </top-bar>
    </div>
</template>

<script>
import TopBar from "components/common/topbar/TopBar"
export default {
    name: "DetilesTopBar",
    components: {
        TopBar,
    },
    data() {
        return {
            titles: ["商品", "参数", "评论", "推荐"],
            currentIndex: 0
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
             this.$emit("topbarClick",index)
        },
        back() {
            this.$router.back()
            // setTimeout(() => {
            //     this.$router.go(0)
            // },10)
        },
        controlClick(e) {
            // this.$emit("topbarClick",e)
        }
    }
}
</script>

<style scoped>
    .detile-topbar {
        background-color: #fff;
    }
    .title {
        display: flex;
        font-size: 13px;
    }
    .title-item {
        flex: 1;
    }
    .active {
        color: red;
    }
    .detile-topbar img {
    width: 40px;
    vertical-align: middle;
}
</style>