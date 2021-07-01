import PopUps from "./PopUps"

const popUps = {}
popUps.install = function (Vue) {
    const popUpsConstructor = Vue.extend(PopUps)

    const popups = new popUpsConstructor()

    popups.$mount(document.createElement('div'))

    document.body.appendChild(popups.$el)

    Vue.prototype.$popUps = popups 
}

export default popUps