import axios from 'axios'
import { Message, Loading } from 'element-ui'

let loadingInstance = null

let instance = axios.create({
  // baseURL: 'http://127.0.0.1:3000/api',
  baseURL: 'http://47.101.149.194/api',
  timeout: 3000
})

//设置请求拦截器
instance.interceptors.request.use(config => {
  //显示loading
  loadingInstance  = Loading.service({
    lock: true,
    text: '加载中...'
  })
  //配置请求头
  const TOKEN = localStorage.getItem('Token') || ''
  if(TOKEN){
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = TOKEN;
  }
  return config;
}, error => {
  console.warn(error)
  return Promise.reject(error)
})
//设置响应拦截器
instance.interceptors.response.use(response => {
  //关闭laoding
  loadingInstance.close()
  return response.data
}, error => {
  const msg = error.Message || ''
  Message({
    message: '网络错误  ' + msg,
    type: 'error',
    duration: 3000
  })
  //关闭loading
  loadingInstance.close()
  return Promise.reject(error)
})

export default instance
