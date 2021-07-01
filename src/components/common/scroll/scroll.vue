<template>
    <div class="scroll" @scroll="sc" ref="scroll">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"Scroll",
    data() {
        return {
            top: 0,
            height : 0,
            
        }
    },
    mounted() {
        this.height = this.$refs.scroll.clientHeight
    },
    methods: {
        sc(e) {
            this.top = this.$refs.scroll.scrollTop
            this.$emit("scrolls", e)    
        },
    }
}
</script>

<style scoped>
.scroll {
        position:relative;
        width: 100%;
        overflow: scroll;
    }
</style>