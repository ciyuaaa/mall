<template>
    <div>
        <control-bar :list="titels" :fiexd="true" @tabClick="tabClick"></control-bar>
        <goods-list 
        :list="goods"
        :imgItemStyle="{height: '160px'}" />
    </div>
</template>

<script>
import ControlBar from "components/common/controlbar/ControlBar"
import GoodsList from "components/content/GoodsList"
export default {
    name: "CategoryContentDetial",
    components: {
        ControlBar,
        GoodsList
    },
    props: {
        titels: [],
        goods: []
    },
    methods: {
        tabClick(index) {
            this.$emit('tabClick',index)
        }
    }
}
</script>