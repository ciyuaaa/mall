<template>
    <div class="recomm">
        <div v-for="(item, index) in recommend" :key="index" class="recomm-item ">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
                <p>
                    {{ item.title }}
                </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeRecommend",
    props: {
        recommend: Array
    }
}
</script>

<style scoped>
    .recomm {
        display: flex;
        text-align: center;
        padding: 10px 0 20px 0;
        border-bottom: 10px solid #f1f1f1;
    }
    .recomm-item {
        flex: 1;
    }
    img {
        width: 80%;
    }
    p {
        margin: 10px 0 10px 0;
    }
</style>