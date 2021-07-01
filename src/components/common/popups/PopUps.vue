<template>
    <div class="pop-ups" :class={show:active}>
        {{text}}
    </div>
</template>
<script>
export default {
    name: "PopUps",
    data() {
        return {
            text: "",
            active: false
        }
    },
    methods: {
        show(text, delay = 1000) {
            this.text = text
            this.active = true
            setTimeout(() => {
                this.active = false
            }, delay)
        }
    }
}
</script>
<style>
 .pop-ups{
    position: absolute;
    width: 100vw;
    height: 40px;
    color: transparent;
    background-color: transparent;
    top: 50%;
    line-height: 40px;
    text-align: center;
    z-index: -1;
    transition: all .5s ease-in 0s;
 }
 .show {
    z-index: 99;
    color: #ccc;
    background-color: rgba(0, 0, 0, .5);
 }
</style>