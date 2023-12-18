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


router.beforeEach((to, from, next) => {
  // 取得storage
  const isAuthenticated = sessionStorage.getItem('key');
  if(to.path === '/login' || to.path === '/register' || isAuthenticated){
    next()
  }else{
    // 避免 login頁面 導向自己 產生錯誤
    if (to.path !== '/login' && to.path !== '/') {
      next({ name: 'LoginView' });
    } else {
      next();
    }
  }
})

export default router
