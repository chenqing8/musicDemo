import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Axios from 'axios'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'public/favicon.ico',
  loading: 'public/favicon.ico',
  attempt: 3
})
window.cancelList = []
Axios.defaults.baseURL = 'http://192.168.50.11:3000/';
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
