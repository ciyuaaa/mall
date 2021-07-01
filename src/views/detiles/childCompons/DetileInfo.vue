<template>
    <div class="detile-info">
        <div style="margin-left: 1em">
            <div class="que">
                <div class="qq"></div>
            </div>
            <p>
                {{detileInfo.desc}}
            </p>
            <div class="que" style="float: right">
                <div class="qq" style="float: right"></div>
            </div>
        </div>
        <p style="margin-left: 1em">
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
    mounted() {
        // let ob = new MutationObserver(() => {
        //     console.log(111)
        // })
        // ob.observe(this.$refs.image, {
        //     attributes: true
        // })
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
.que {
    /* background-color: #000; */
    margin-left: 5px;
    width: 5px;
    height: 5px;
    border-bottom: 1px solid #ccc;
    padding-right: 100px;
}
.qq {
    background-color: #000;
    width: 5px;
    height: 5px;
    /* width: 100px; */
}
</style>