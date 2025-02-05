import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CoinPage from '../views/CoinPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/coins',
    name: 'Coins',
    component: () => import('../views/Coins.vue')
  },
  {
    path: '/coins/:id',
    name: 'Coin',
    component: CoinPage
  },
  {
    path: '/watchers',
    name: 'Watchers',
    component: () => import('../views/Watchers.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
