import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { Title: '工作台' }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { Title: '注册' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      if(localStorage.getItem('Token')){
        next('/dashboard')
      }else{
        next()
      }
    },
    meta: { Title: '登录' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//全局路由守卫,登录检查
router.beforeEach((to, from, next) => {
  let path = to.path
  if(path !== '/login' && path !== '/register'){
    if(localStorage.getItem('Token')){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})

export default router
