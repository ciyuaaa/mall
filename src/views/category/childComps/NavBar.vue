<template>
    <div class="category-layout">
        <scroll class="nav-sc">
            <div class="nav-bar">
                <ul>
                    <li v-for="(title, index) in titles" :key="index" 
                    :class="{active: currentIndex === index}" 
                    @click="tclick(index)">
                        {{title.title}}
                    </li>
                </ul>
            </div>
        </scroll>
        <scroll class="item-sc">
            <slot></slot>
        </scroll>
        
    </div>
</template>

<script>
import Scroll from "components/common/scroll/scroll"
export default {
    name: "NavBar",
    components: {
        Scroll
    },
    props: {
        titles: ""
    },
    data() {
        return {
            currentIndex: 0      
        }
    },
    methods: {
        tclick(index) {
            this.currentIndex = index
            this.$emit("navClick", index)
        }
    }
}
</script>

<style scoped>
.item-sc {
    width: calc(70% + 10px);
    height: calc(100vh - 44px - 49px);
    position: absolute;
    top:44px;
    right: 0px;
    background-color: #fff;
}
.category-layout {
    width: 100vw;
}
.nav-sc {
    width: 30%;
    height: calc(100vh - 44px - 49px);
}

.nav-bar {
    width: 100%;
    height: 100vh;
    /* background-color: #f3f3f3; */
    font-size: 16px;
    text-align: center;
}
.nav-bar > ul{
    width: 100%;
    margin: 0;
    padding: 0px;
    list-style-type: none;
    background-color: #f3f3f3;
}
.nav-bar > ul > li {
    padding: 15px;
}
.active {
    background-color: #fff;
    color: orangered;
    font-weight: 600;
}
</style>