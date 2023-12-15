import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: r => require.ensure([], () => r(require('../views/HomeView.vue')), 'home')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: r => require.ensure([], () => r(require('../views/LoginView.vue')), 'login')
  },
  {
    path: '/employ',
    name: 'employ',
    component: r => require.ensure([], () => r(require('../views/EmployView.vue')), 'employ')
  },
  {
    path: '/register',
    name: 'register',
    component: r => require.ensure([], () => r(require('../views/RegView.vue')), 'register')
  },
]

const router = new VueRouter({
  routes
})

export default router
