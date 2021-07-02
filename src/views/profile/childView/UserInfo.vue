<template>
    <div>
        <div v-if="show">
            <div class="user-info" ref="userInfo" >
                <center-top-bar text="账户信息" @back="back" :backShow='true'></center-top-bar>
                <div class="base-info">
                    <div class="item" >
                    <input type="file" class="uploadUserImg" @change="upload">
                        <div>头像</div>
                        <base-box>
                            <img src="~assets/img/profile/user.svg" alt="">
                        </base-box>
                    </div>
                    <div @click="setUserName" class="item">
                        <div>用户名</div>
                        <base-box>
                            <div>{{getUser.id}}</div>
                        </base-box>
                    </div>
                </div>
                <div class="bind">
                    账号绑定
                    <div class="base-info" @click="setPhone">
                        <div class="item">
                            <div class="bind-phone">
                                <img class="phone-img" src="~assets/img/profile/iphone.svg" alt="">
                                手机
                            </div>
                            <base-box>
                                <div>暂未绑定手机号码</div>
                            </base-box>
                        </div>
                    </div>
                </div>
                <div class="salf">
                    安全设置
                    <div class="base-info" @click="setPassword">
                        <div class="item ">
                            <div>登录密码</div>
                            <base-box>
                                <div>修改</div>
                            </base-box>
                        </div>
                    </div>
                </div>
                <div class="loging-out" @click="loginOut">
                    退出登录
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import CenterTopBar from "components/content/CenterTopBar"
import BaseBox from "./subChildComps/BaseBox"
export default {
    name: "UserInfo",
    components: {
        CenterTopBar,
        BaseBox
    },
    mounted() {
        this.show = true
    },
    destroyed() {
        this.show = false
    },
    data() {
        return {
            show: false,
            set: true,
            addImg: true
        }
    },
    methods: {
        setUserName() {
            this.$router.push("userinfo/setusername")
        },
        setPhone() {
            this.$popUps.show("暂未开放")
        },
        setPassword() {
            this.$router.push("userinfo/setpassword")
        },
        back() {
            this.show = false
        },
        upload() {
            // let inp = document.querySelector(".uploadUserImg")
            // let data = new FormData()
            // data.append('file', inp.files[0])
            
            // try {
            //     fetch("", {
            //         method: 'POST',
            //         body: data
            //     }).then((data) => {
            //         console.log(data)
            //     }).catch((d) => {
            //         console.log(d)
            //     })
            // } catch {
            // }
            this.$popUps.show("上传失败，没有服务器")
            
        },
        loginOut() {
            this.$router.back()
            this.$store.state.isLogin = false
            this.$store.getters.getUser.isLogin = false
            this.$store.state.product = []
            this.$store.commit('saveData')
        }
    },
    computed: {
        getUser() {
            return this.$store.getters.getUser
        },
    }
}
</script>

<style scoped>
.user-info {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #f2f2f2;
    z-index: 1;
    overflow: hidden;
}
.base-info {
    display: flex;
    flex-direction: column;
    width: 100vw;
    font-size: 16px;
    margin-top: 10px;
    background-color: #fff;
   
}
.item {
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 20px 10px;
    border-bottom: 1px solid #ccc;
     position: relative;
}
.item  img {
     width: 40px;
    height: 40px;
     border-radius: 50%;
    /* background-color: #ccc; */
    border: 1px solid #ccc;
}
.bind-phone {
    display: flex;
    align-items: center;
}
.bind-phone > img {
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-right: 10px;
}
.salf, .bind{
    font-size: 14px;
    margin-top: 10px;
}
.phone-img {
    background-color: #ccc;
}
.uploadUserImg {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
}
.loging-out {
    width: 200px;
    height: 50px;
    margin: 20px auto;
    line-height: 50px;
    text-align: center;
    color: #fff;
    background-color: #d8584a;
    border-radius: 10px
}
</style>