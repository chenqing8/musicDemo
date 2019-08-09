import Vue from 'vue'
import Vuex from 'vuex'
import find from './modules/find/find'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:[
    find
  ]
})
