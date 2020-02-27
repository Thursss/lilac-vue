import instance from '@/api/service.js'

function login(params) {
  return instance({
    url: '/login',
    method: 'post',
    data: params
  })
}

function register(params) {
  return instance({
    url: '/register',
    method: 'post',
    data: params
  })
}

function logout(Vue) {
  window.localStorage.removeItem('Token')
  Vue.$router.push({
    path: '/login'
  })
}

function getUserInfo() {
  return instance({
    url: '/getUserInfo',
    method: 'post'
  })
}

export { login, getUserInfo, register, logout }