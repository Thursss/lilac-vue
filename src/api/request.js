import instance from './service.js'

function login(params) {
  return instance({
    url: '/login',
    method: 'post',
    data: params
  })
}

export { login }