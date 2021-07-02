export const debounce = (fn, timerout = 300) => {
    let timer;
    return () => {
        clearTimeout(timer)
        timer = setTimeout(fn, timerout)
    }
}

export const imgload = {
    imgs: document.images,
    observer: {},
    imgObserve(fn) {
        this.observer = new MutationObserver((mutationRecord) => {
            fn(mutationRecord)
        })
        this.imgs.forEach((item) => {
            this.observer.observe(item, {attributes: true})
        })
    },
    disconnect() {
        this.observer.disconnect()
    }
}

export const px2vw = (px) => {
    let vw_1 = document.documentElement.clientWidth * 0.01
    if (!(px === 1)) {
        return px / vw_1
    }
}