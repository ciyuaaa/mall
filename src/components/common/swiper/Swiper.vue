<template>
    <div id="my-swiper" >
        <div ref="ss" class="swiper" @touchstart="touchStart" @touchend="touchEnd" @touchmove="touchMove" >
            <slot></slot>
        </div>
        <div class="inds">
            <div v-for="(item, index) in slideCount" class="ind" :key="index" :class="{activeInd:item === curr}"></div>
        </div>
    </div>
</template>

<script>

export default {
    name:'Swiper',
    props:{
        playTime: {
            type: Number,
            default: 3000
        },
        animDuration: {
		    type: Number,
            default: 300
        },
        moveRatio: {
            type: Number,
            default: 0.1
        }
    },
    data(){
        return {
            slideCount: 0,
            swiperStyle: {},
            targetWidth: 0,
            curr: 0,
            scrolling: false,
            appendFirst: 0,
            appendLast: 0
            
        }
    },
    mounted(){
            this.loader()
    },
    watch: {
        
    },
    methods: {
        loader() {
            let hand = new Promise((reolve, reject)=>{
                try {
                    this.handlerSwiper()
                    reolve()
                } catch (error) {
                    reject()
                }
            })
            hand.catch(()=>{
                setTimeout(this.loader, 10)
            })
        },
        handlerSwiper() {
            const swiper = this.$refs.ss
            const slide = this.$refs.ss.children
            
            this.slideCount = slide.length
            
            swiper.append(slide[0].cloneNode(true))
            swiper.insertBefore(slide[slide.length - 1].cloneNode(true), slide[0])
            this.appendFirst = 0
            this.appendLast = slide.length - 1
            
            this.swiperStyle = swiper.style
            this.targetWidth = swiper.offsetWidth
            this.setTransform(-this.curr * this.targetWidth)
            this.player()
        },
        scrollStart() {
            this.scrolling = true
            this.swiperStyle.transition=`all ${this.animDuration}ms ease`
            this.setTransform(-this.targetWidth * this.curr)
            
            setTimeout(() => {
                this.scrolling = false
            }, this.animDuration)
        },
        setTransform(val) {
            this.swiperStyle.transform=`translate3d(${val}px, 0, 0)`
            this.check()
        },
        check() {
            setTimeout(() => {
                this.swiperStyle.transition = '0ms';
                if (this.curr > this.slideCount) {
                    this.curr = 1
                    this.setTransform(-this.curr * this.targetWidth)
                } else if (this.curr === 0) {
                    this.curr = this.slideCount
                    this.setTransform(-this.curr * this.targetWidth)
                }
            }, this.animDuration)
        },
        player() {
            if (!this.id) {
                this.id = setTimeout(()=>{
                    this.scrollStart(-this.targetWidth * this.curr++)
                    this.id = 0
                    this.player()
                },this.playTime)
            }
        },
        isScrolling(fn) {
            if (!this.scrolling) fn()
        },
        touchMove(e) {
            this.isScrolling(()=>{
                this.currentX = e.touches[0].pageX;
                this.distance = this.currentX - this.startX;
                let currentPosition = -this.curr * this.targetWidth;
                let moveDistance = this.distance + currentPosition;
                // 2.设置当前的位置
                this.setTransform(moveDistance);
            })
        },
        touchStart(e) {
            this.isScrolling(()=>{
                this.startX = e.touches[0].pageX
                clearTimeout(this.id)
                this.id = 0
            })
        },
        touchEnd() {
            this.isScrolling(()=>{
                // 1.获取移动的距离
                let currentMove = Math.abs(this.distance);
                // 2.判断最终的距离
                if (this.distance === 0) {
                return
                } else if (this.distance > 0 && currentMove > this.targetWidth * this.moveRatio) { // 右边移动超过0.5
                this.curr--
                } else if (this.distance < 0 && currentMove > this.targetWidth * this.moveRatio) { // 向左移动超过0.5
                this.curr++
                }
                // 3.移动到正确的位置
                this.scrollStart(-this.curr * this.targetWidth);
                // 4.移动完成后重新开启定时器
                // this.startTimer();
                this.player()
            })
        }
    },
}
</script>

<style scoped>
    #my-swiper{
        overflow: hidden;
        position: relative;
    }
    .swiper{ 
        display: flex;
    }
    .inds{
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 10px;
    }
    .ind {
        width: 10px;
        height: 10px;
        margin-left: 10px;
        border-radius: 10px;
        background-color: red;
    }
    .activeInd {
        background-color: orange;
    }
</style>