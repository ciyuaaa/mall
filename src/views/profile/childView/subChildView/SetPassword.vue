<template>
    <div class="set-password">
        <center-top-bar text="重置密码" :backShow='true'></center-top-bar>
        <input type="text" v-model="userId" placeholder="账号" class="set-name">
        <input type="text" v-model="lowPassword" placeholder="输入旧密码" class="set-name">
        <input type="text" v-model="newPassword" placeholder="输入新密码" class="set-name">
        <input type="text" v-model="checkPassword" placeholder="确认密码" class="set-name">
        <input type="submit" class="btn" @click="set" value="确认修改" >
    </div>
</template>

<script>
import CenterTopBar from "components/content/CenterTopBar"
export default {
    name: "SetPassword",
    components: {
        CenterTopBar,
    },
    data() {
        return {
            userId: "",
            lowPassword: "",
            newPassword: "",
            checkPassword: "",
            index: 0
        }
    },
    methods: {
        set() {
            if (this.$store.state.isLogin) {
                let sets = this.getUser.id === this.userId ? 
                this.getUser.password === this.lowPassword ? true : this.$popUps.show('原密码错误')
                : this.$popUps.show('账号错误')
                if (sets) {
                    if (this.newPassword === this.checkPassword) {
                        this.getUser.password = this.newPassword
                        this.$store.commit('saveData')
                        this.$popUps.show('已修改')
                        this.$router.back()
                    } else {
                        this.$popUps.show('密码必须一致，请重新确认密码')
                    }
                } 
            } else {
                let re = this.$store.state.userAll.find((item, index) => {
                    if (item.id === this.userId) {
                        this.password = item.password
                        this.index = index
                        return true
                    }
                    return false
                })
                let sets = re ? 
                this.password === this.lowPassword ? true : this.$popUps.show('原密码错误')
                : this.$popUps.show('账号不存在')
                if (sets) {
                    if (this.newPassword === this.checkPassword) {
                        this.$store.state.userAll[this.index].password = this.newPassword
                        this.$store.commit('saveData')
                        this.$popUps.show('已修改')
                        this.$router.back()
                    } else {
                        this.$popUps.show('密码必须一致，请重新确认密码')
                    }
                } 
            }
        }
    },
    computed: {
        getUser() {
            return this.$store.getters.getUser
        }
    }
}
</script>

<style scoped>
.set-password {
    width: 100vw;
    height: 100vh;
    position: absolute;
    right: 0;
    background-color: #f2f2f2;
    z-index: 1;
}
.set-name, .btn {
    width: calc(100vw - 30px);
    height: 50px;
    display: block;
    margin: 20px auto;
    padding: 0;
    text-indent: 1em;
    border: 1px solid #ccc;
    outline: none;
    background-color: transparent;
}
 .btn {
    width: calc(100vw - 60px);
    text-align: center;
    background-color: rgb(255, 128, 151);
}
</style>