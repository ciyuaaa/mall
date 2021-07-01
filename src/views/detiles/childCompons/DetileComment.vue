<template>
    <div class="comment" ref="comme"> 
        <div>
            用户评价
        </div>
        <div  v-if="Object.keys(rate).length === 0">
            暂无评价
        </div>
        <div v-for="(item, index) in rate.list" :key="index" class="content">
            <div class="user">
                <img :src="item.user.avatar" alt="" class="user-img">
                <span class="user-name">{{item.user.uname}}</span>
            </div>
            <p class="">{{item.content}}</p>
            <p class="user-style">
                <span class="user-created-data">{{date(item.created)}}</span>
                <span>{{item.style}}</span>
            </p>
            <div class="comment-img" v-if="item.images">
                <img v-for="(image, inde) in item.images" 
                :src="image" alt="" :key="inde" @click="see(image)">
                <div class="seeBigImg" v-if="seeImg" @click="hide">
                    <img :src="image" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        rate: {}
    },
    data() {
        return {
            seeImg:false,
            image: ''
            }
        },
    methods: {
       date(i) {
           let createdDate = new Date(i*1000)
           let year = createdDate.getFullYear()
           let month = createdDate.getMonth()+1
           let day = createdDate.getDate()
           if (month < 10) month = "0" + month
           if (day < 10) day = "0" + day
           return `${year}-${month}-${day}`
       },
       see(src) {
           console.log(src)
           this.seeImg = true
           this.image = src
       },
       hide() {
           this.seeImg = false
       }
    }
}
</script>

<style scoped>
.content {
    padding-top: 20px;
}
.user-name {
    margin-left: 10px;
}
.user-img {
    border-radius: 100%;
    width: 10%;
    vertical-align: middle;
}
.user-style {
    color: #ccc;
}
.user-style > span {
    padding-right: 10px;
}
.comment {
    padding: 10px;
    padding-top: 30px
}
.comment-img > img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
}
.seeBigImg {
    width: 90vw;
    height: 50vh;
    text-align: center;
    overflow: hidden;
}
.seeBigImg > img {
    width: 100%;
    height: 100%;
}
</style>