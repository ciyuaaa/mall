<template>
    <div @click="backToTop" class="backtop" v-show="show">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "BackTop",
    props: {
        px: {
            type: Number,
            default: 800
        },
        getEl: Function
    },
    data() {
        return {
            scrollTop: 0,
            el: {}
        }
    },
    mounted() {
        this.el = this.getEl()
        this.el.addEventListener('scroll', this.scrollChange)
    },
    activated(){
        this.el.addEventListener('scroll', this.scrollChange)
    },
    destroyed() {
        this.el.removeEventListener('scroll', this.scrollChange)
    },
    deactivated() {
        this.el.removeEventListener('scroll', this.scrollChange)
    },
    methods: {
        backToTop() {
            this.el.scrollTop = 0
        },
        scrollChange() {
            this.scrollTop = this.el.scrollTop
        }
    },
    computed: {
        show() {
            return this.scrollTop > this.px ? true : false
        },
        els() {
            // console.log(this.el())
            return this.getEl()
        }
    }
}
</script>

<style scoped>
    .backtop {
        background-color: #fff;
        border-radius: 100%;
        width: 20px;
        height: 20px;
        padding: 5px;
        position: fixed;
        bottom: 80px;
        right: 10px;
    }
    img {
        width: 100%;
    }
</style>