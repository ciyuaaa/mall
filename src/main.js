import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from "vue-lazyload"
import PopUps from 'components/common/popups'
Vue.config.productionTip = false

Vue.use(PopUps)
Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
