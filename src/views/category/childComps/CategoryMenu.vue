<template>
    <div>
        <div class="menu" >
            <div v-for="(item, index) in categoryMenu" :key="index" class="item">
                <div class="item-img">
                    <a :href="item.link">
                        <img v-lazy="item.image" alt="">
                    </a>
                </div>
                <div>{{item.title}}</div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "CategoryMenu",
    props: {
        categoryMenu: [],
        categoryRecomment: []
    }
}
</script>

<style scoped>
.menu {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
.item {
    width: 45%;
    padding: 5px;
    text-align: center;
    height: 100%;
}
.item-img > a >img{
    width: 50px;
    height: 50px;
}
</style>