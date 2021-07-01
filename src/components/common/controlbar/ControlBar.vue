<template>
        <div class="control-bar" :class="{fiexd: fiexd}">
            <div v-for="(item, index) in list" :key="index" class="control-bar-item" :class="{active: curr === index}" @click="aClick(index)">
                <span>{{ item }}</span>
            </div>
    </div>
</template>

<script>
export default {
    name: "ControlBar",
    props: {
        list: Array,
        fiexd: {
                type: Boolean,
                default: false
            },
    },
    data() {
        return {
            curr: 0,
            
        }
    },
    methods: {
        aClick(index) {
             this.curr = index
             this.$emit("tabClick", index)
        }
    },
    computed: {
        isActive() {
            return this.$route.path.includes(this.path)
        },
    }
}
</script>

<style scoped>    
    .control-bar {
        display: flex;
        width: 100%;
        text-align: center;
        line-height: 40px;
        background-color: #fff;
    }
    .fiexd {
        position: sticky;
        top: -1px;
    }
    .control-bar-item {
        flex: 1;
        width: 40px;
        height: 40px;
         
    }
    .active span {
        color: red;
        padding: 5px;
        border-bottom:2px solid red
    }
</style>