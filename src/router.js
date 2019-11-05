/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 21:51:49
 * @LastEditTime: 2019-09-06 18:21:55
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/find'
    },
    {
      path:'/songDetial',
      name:'songDetial',
      component: () => import('./views/songDetial.vue'),
    },
    {
      path:'/search',
      name:'search',
      component: () => import('./views/search.vue'),
    },
    {
      path:'/searchResult/:key',
      name:'searchResult',
      component: () => import('./components/search/searchResult.vue'),
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
