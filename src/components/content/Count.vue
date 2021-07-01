<template>
    <div class="count">
        <slot></slot>
        <button @click="less" :class="{'less-active': !mins}">- </button>
        <input type="number" v-model="item.count" @input="inputs(item)">
        <button @click="add" > +</button>
    </div>
</template>

<script>
export default {
    nmae: "Count",
    props: {
        item: {},
        min: {
            type: Number,
            default: 0
        },
        count: Number,
        text: ""
    },
    components: {
        
    },
    methods: {
        add() {
            this.item.count++
            this.$store.commit('saveData')
        },
        less() {
            this.mins ? this.item.count-- : false
            this.$store.commit('saveData')
        },
        inputs(item) {
            if (item.count > this.count) {
                this.$popUps.show(this.text)
                item.count = this.count
            }else if (item.count <= this.min) {
                item.count = this.min
            }
        }
    },
    computed: {
        mins() {
            return this.item.count > this.min
        }
    }
}
</script>

<style scoped>
.count > input{
        width: 30px;
        outline: none;
        border: none;
        background-color: #ccc;
        text-align: center;
    }
    .count > button {
        border: none;
        background-color: #fff;
        font-size: 6vw;
    }
    .less-active {
        color: #ccc;
    }
</style>