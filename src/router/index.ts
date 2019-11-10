import Vue from 'vue'
import VueRouter from 'vue-router'
import Timer from '../views/Timer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'timer',
    component: Timer,
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/reports',
    name: 'reports',
    component: () =>
      import(/* webpackChunkName: "reports" */ '../views/Reports.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () =>
      import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
