import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import Dashboard from '@/views/Dashboard/Dashboard.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Explore from '@/views/Explore.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {Title: '欢迎'}
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { Title: '工作台' },
    children: [
      {
        path: 'doc',
        component: Dashboard
      },
      {
        path: 'sub',
        component: Dashboard
      }
    ]
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
  },
  {
    path: '/explore',
    name: "Explore",
    component: Explore,
    meta: {Title: '发现'}
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
  if(path !== '/login' && path !== '/register' && path !== '/'){
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
