<template>
    <div class="set-user-name">
        <center-top-bar text="修改用户名" :backShow='true'></center-top-bar>
        <input type="text" v-model.trim="name" placeholder="输入用户名" class="set-name">
        <input type="submit" class="btn" value="确认修改" @click="setNewUserName">
    </div>
</template>

<script>
import CenterTopBar from "components/content/CenterTopBar"
export default {
    name: "SetUserName",
    components: {
        CenterTopBar,
    },
    data() {
        return {
            name: ""
        }
    },
    methods: {
        setNewUserName() {
            console.log(this.name)
            if (this.$store.getters.getUser.id === this.name) {
                this.$popUps.show('未更改')
                this.$router.back()
            } else {
                let re = this.$store.state.userAll.find((item) => {
                return item.id === this.name ? true : false
                })
                if (re){
                    this.$popUps.show('用户名已存在')
                } else if(this.name) {
                    this.$store.getters.getUser.id = this.name
                    this.$store.commit('saveData')
                    this.$popUps.show('已更改')
                    this.$router.back()
                } else {
                    this.$popUps.show('用户名不能为空')
                }
            }
        }
    }
}
</script>

<style scoped>
.set-user-name {
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