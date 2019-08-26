import Vue from 'vue'
import Vuex from 'vuex'
import find from './modules/find/find'
import song from './modules/song/song'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:[
    find,
    song
  ]
})
