import Vue from 'vue'
import Vuex from 'vuex'
import { userAll, isLogin ,userIndex,} from '../common/init'
import utiles from "common/storeUtiles"

Vue.use(Vuex)

function saveData(state) {
  localStorage.userData = JSON.stringify(state.userAll)
}

export default new Vuex.Store({
  state: {
    isLogin,
    userAll,
    userIndex,
    product: [],
  },
  mutations: {
    addProduct(state, prod) {
      if (state.isLogin) {
        utiles.add(this.getters.currentProduct, prod)
        saveData(state)
      } else {
        utiles.add(state.product, prod)
      }
    },
    lessPorduct(state, prod) {
      if (state.isLogin) {
        utiles.less(this.getters.currentProduct, prod)
      } else {
        utiles.less(state.product, prod)
      }
    },
    userLogin(state, index) {
      state.userIndex = index
      state.isLogin = true
      state.userAll[index].isLogin = true

      if (state.product.length) {
        utiles.add(this.getters.currentProduct, state.product)
      }
      saveData(state)
    },
    saveData(state) {
      saveData(state)
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    totalPrice(state, getters) {
      return !Object.keys(getters.currentProduct).length ? 0 : 
      getters.currentProduct[0].price.slice(0,1) + getters.currentProduct.reduce((prev, curr) => {
            if (curr.checkSelect) {
              return prev + +(curr.price.slice(1) * curr.count).toFixed(2)
            } else {
              return prev
            }
        }, 0)
    },
    count(state,getters) {
      return getters.currentProduct.reduce((prev, curr) => 
      curr.checkSelect ? ++prev : prev, 0)
    },
    chekcSelectAll(state, getters) {
      return Object.keys(getters.currentProduct).length ? 
      getters.currentProduct.every((item) => item.checkSelect) :
        false
    },
    getUser(state) {
      return state.userAll[state.userIndex]
    },
    currentProduct(state) {
      return state.isLogin ? 
      state.userAll[state.userIndex].product : state.product
    },
  }
})