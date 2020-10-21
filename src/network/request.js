import axios from 'axios'

export function request (config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 5000
  })
  // 2.axios的拦截器

  // 2.1请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config)
    config.headers.accessToken = window.localStorage.getItem("token")
    console.log(config)
    return config
  }, err => {
    console.log(err)
  })
  // 2.2响应拦截
  // instance.interceptors.response.use(data => {
  //   console.log(data)
  // }, err => {
  //   console.log(err)
  // })
  // 3.发送真正的网络请求
  return instance(config)
}
