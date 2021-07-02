<template>
    <div>
        <div class="login-box">
            <input type="" placeholder="账号" v-model.trim="loginUser.id">
            <input type="password" placeholder="密码" v-model="loginUser.password" >
        </div>
        <div class="tips" @click="login">
            温馨提升：未注册过的账号，登录时将自动注册
        </div>
        <div class="btn-login" @click="login">
            登录
        </div>
        <div class="reset" @click="reset">
            重置密码
        </div>
    </div>
</template>
<script>
import {userAll} from "common/init"
export default {
    name: "LoginBox",
    data() {
        return {
            loginUser: {
                id:"",
                password: "",
                name: "",
                product: [],
                isLogin: false
            }
        }
    },
    methods: {
        hasUser(userData) {
            return userData.some((item, index) => {
                    if (item.id === this.loginUser.id) {
                        this.index = index
                        return true
                    }
                    return false 
                })
        },
        isPasswordErr(userData) {
            return !(userData[this.index].password === this.loginUser.password)
        },
        loginSuc(addUser = false) {
            if (addUser) {
                this.index = this.$store.state.userAll.push(this.loginUser) - 1
            }
            this.$store.commit('userLogin', this.index)
            this.$router.push('/profile')
        },
        login() {
            if (userAll.length) {
                let hasUser = this.hasUser(userAll)
                if (hasUser) {
                    let isPasswordErr = this.isPasswordErr(userAll)
                    if (isPasswordErr) {
                        this.$popUps.show("密码错误")
                    } else {
                        this.loginSuc()
                    }
                } else {
                    this.loginSuc(true)
                }
            } else {
                if (this.loginUser.id) {
                    localStorage.userData = JSON.stringify([this.loginUser])
                    this.loginSuc(true)
                } else {
                    this.$popUps.show('用户名不能为空')
                }
            }
        },
        reset() {
            this.$router.push('/profile/userinfo/setpassword')
        }
    },
   
}
</script>
<style scoped>
    .login-box {
        width: 100vw;
        height: 100px;
        background-color: #fff;
        margin-top: 30px;
    }
    .login-box > input {
        padding:0;
        width: 100%;
        height: 50px;
        border: none;
        outline: none;
        border-bottom: 1px solid #ccc;
        text-indent: 10px;
    }
    .btn-login {
        width: calc(100vw - 50px);
        height: 50px;
        margin-top: 20px;
        margin: 25px;
        border: none;
        outline: none;
        background-color: #4cd964;
        color: #fff;
        line-height: 50px;
        text-align: center;
    }
    .tips {
        width: 100vw;
        height: 50px;
        font-size: 14px;
        text-align: center;
        line-height: 50px;
        color: red;
    }
    .reset {
        color: blue;
        text-align: right;
        padding-right: 30px;
    }
</style>