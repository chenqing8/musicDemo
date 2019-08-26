/*
//  * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 21:51:49
 * @LastEditTime: 2019-08-19 09:20:23
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Axios from 'axios'
import VueLazyload from 'vue-lazyload'
import $ from "jquery"

window.$=$
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'public/favicon.ico',
  loading: 'public/favicon.ico',
  attempt: 3
})
window.cancelList = []
// Axios.defaults.baseURL = 'http://192.168.88.147:3000/'
Axios.defaults.baseURL = 'http://47.103.59.27:3000/'
// Axios.defaults.baseURL = 'http://192.168.50.11:3000/'
// Axios.defaults.baseURL = 'http://172.20.10.2:3000/'
// get请求
Vue.prototype.$httpget = function (url, data = {}) {
  cancelList.map((item, index) => {
    cancelList[index].fun()
    delete cancelList[index]
  })
  return new Promise((reso, rej) => {
    Axios.get(url, data).then(res => {
      reso(res)
    }), err => {
      rej(err)
    }
  })
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
