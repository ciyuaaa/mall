<template>
    <div class="login">
        <center-top-bar text="登录" :backShow='true'></center-top-bar>
        <login-box></login-box>
    </div>
</template>

<script>
import CenterTopBar from "components/content/CenterTopBar"
import LoginBox from './childComps/LoginBox.vue'
export default {
    name: "Login",
    components: {
        CenterTopBar,
        LoginBox
    }
}
</script>

<style scoped>
    .login {
        width: 100vw;
        height: 100vh;
        background-color: #f3f3f3;
        position: relative;
        z-index: 1;
    }
</style>