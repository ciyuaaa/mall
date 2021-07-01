<template>
    <div class="user-login">
        <div class="user-img">
            <img src="~assets/img/profile/user.svg" alt="">
        </div>
        <div class="user-info" @click="clicks">
            <div class="user"  >
                <div v-if="show">
                    {{$store.getters.getUser.id}}
                </div>
                <div v-else >
                    登录/注册
                </div>
            </div>
            <div class="phone">
                <img src="~assets/img/profile/iphone.svg" alt="">{{phoneId}}
                <img src="~assets/img/profile/right-arrow.svg" class="right-arrow">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'User',
    props: {
        path: "",
    },
    data() {
        return {
            phoneId: '暂无绑定手机号',
            
        }
    },
    methods: {
        login() {
            this.$router.push("/login")
        },
        userInfo() {
            this.$emit('unserInfo')
            this.$router.push("profile/userinfo")
        }
    },
    computed:{
        show() {
            return this.$store.state.isLogin
        },
        clicks() {
            return this.show ? this.userInfo : this.login
        }
    }
}
</script>

<style scoped>
.user-login {
    display: flex;
    width: 100vw;
    height: 80px;
    background-color: rgb(255, 128, 151);
}
.user-img {
    display: inline-block;
    text-align: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 10px 20px;
}
.user-img > img{
    width: 60%;
    height: 60%;
    padding-top: 20%;
}
.user-info {
    /* width: 60px; */
    height: 60px;
    /* background-color: #fff; */
    color: #fff;
    font-size: 18px;
    margin: 10px 0;
}
.user {
    padding-top: 10px;
    padding-left: 3px;
}
.phone {
    padding-top: 5px;
    font-size: 12px;
    /* vertical-align: middle; */
}
.phone > img 
{
    width: 16px;
    height: 16px;
    vertical-align: bottom;
}
.right-arrow{
    position: relative;
    /* bottom: 16px; */
    left: 130px;
}
</style>