<template>
    <div>
        <top-bar class="center-top-bar" @click="back">
             <template v-slot:left >
                <div @click="back" v-if="backShow" >
                    <img src="~assets/img/back/back.svg" alt="">
                </div>
            </template>
            <template v-slot:center>
                <div>
                    {{text}}
                </div>
            </template>
        </top-bar>
    </div>
</template>

<script>
import TopBar from "components/common/topbar/TopBar"
export default {
    name: "CenterTobBar",
    components: {
        TopBar
    },
    props: {
        text: "",
        backShow: false
    },
    methods: {
        back() {
            this.$router.back()
            this.$emit('back')
        }
    }
}
</script>

<style scoped>
.center-top-bar {
    background-color: rgb(255, 128, 151);
}
.center-top-bar img {
    width: 40px;
    vertical-align: middle;
}
</style>