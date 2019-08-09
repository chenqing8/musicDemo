import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/find'
    },
    {
      path: '/find',
      name: 'find',
      component: () => import('./views/find.vue'),
      children: [{
        path: '/',
        name: 'home',
        component: () => import('./components/find/find.vue')
      }, {
        path: 'songSheet',
        name: 'songSheet',
        component: () => import('./components/find/songSheet.vue')
      }, {
        path: 'sort',
        name: 'sort',
        component: () => import('./components/find/sort.vue')
      }, {
        path: 'sortDetial/:name',
        name: 'sortDetial',
        component: () => import('./components/find/sortDetial.vue')
      }, {
        path: 'song/:id',
        name: 'song',
        component: () => import('./components/find/song.vue')
      }]
    }
  ]
})
