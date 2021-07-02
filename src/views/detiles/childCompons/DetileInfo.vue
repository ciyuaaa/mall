<template>
    <div class="detile-info">
        <div style="margin-left: 1em">
            <div class="left">
                <div class="que"></div>
                <div class="linedown"></div>
            </div>
            <div style="margin: 10px">{{detileInfo.desc}}</div>
            <div class="right">
                <div class="que"></div>
                <div class="linedown"></div>
            </div>
        </div>
        <p style="margin-left: 1em ">
            {{infoList.key}}
        </p>
        <img 
        v-for="(item, index) in infoList.list"
        :key="index"
        v-lazy="item" alt=""
        ref='image'>
    </div>
</template>

<script>
export default {
    props: {
        detileInfo: {},
        infoList: {}
    },
    methods: {
        imgload() {
            this.$emit('load')
        }
    }
}
</script>

<style scoped>
.detile-info {
    margin-top:10px;
}
img {
    width: 100%;
}
.right > .que {
    right: -105px;
}
.right {
    width: 10px;
    position: relative;
    left: 235px;
}
.linedown {
    position: relative;
    margin-left: 5px;
    width: 5px;
    height: 5px;
    border-bottom: 1px solid #ccc;
    padding-right: 100px;
}
.que {
    position: relative;
    top: 5px;
    background-color: #000;
    width: 5px;
    height: 5px;
}
</style>