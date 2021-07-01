<template>
    <div @click='clickEvent' class="item" :class="{active}" :style="active">  
        <img v-if='!isActive' :src='img' :alt="alts" >
        <img v-else :src='imgActive'>
        <div >{{ text }}</div>
    </div>
</template>

<script>
export default {
    name:'TabBarItemContent',
    props: {
        img: String,
        imgActive: String,
        text: String,
        path: String,
        activeStyle: Object,
        alts:String
    },
    data() {
        return {
            styleActive: false
        }
    },
    methods: {
        clickEvent() {
            if (!this.isActive) {
                this.$router.push(this.path)
            }
        }
    },
    computed: {
        isActive() {
            return this.$route.path.includes(this.path)
        },
        active() {
            if (this.isActive && this.cousom) return this.activeStyle

            return this.isActive
        },
        cousom() {
            return !!this.activeStyle
        }
    }
}
</script>
<style scoped>
    .item {
        flex: 1;       
    }
    img {
        height: 24px;
        width: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
    .active {
        color: red
    }
</style>