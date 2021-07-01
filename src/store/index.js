import Vue from 'vue'
import Vuex from 'vuex'
import { userAll } from '../common/init'
import utiles from "common/storeUtiles"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userAll: userAll,
    product: [],
    userIndex: 0
  },
  mutations: {
    addProduct(state, prod) {
      if (state.isLogin) {
        utiles.add(this.getters.currentProduct, prod)
        utiles.saveLocalStorage(state.userAll)
      } else {
        utiles.add(state.product, prod)
      }
    },
    userLogin(state, user) {
      state.userAll.some((item, index) => {
        item.id === user.id ? state.userIndex = index : false
      })
      state.isLogin = true

      if (state.product.length) {
        utiles.add(this.getters.currentProduct, state.product)
        utiles.saveLocalStorage(state.userAll)
      }
    },
    saveData(state) {
      localStorage.userData = JSON.stringify(state.userAll)
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
            return prev + +(curr.price.slice(1) * curr.count)
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