import axios from 'axios'
// import { baseURL, contentType, debounce, requestTimeout, successCode, tokenName } from '@/config'
import store from '@/store'
import router from '@/router'
// import { isArray } from '@/util/validate'

axios.defaults.timeout = 60000

//axios.defaults.baseURL = window.wp.domianURL // 服务器
axios.defaults.baseURL = '/mock-server/' // wp

if (process.env.NODE_ENV === 'prod') {
    axios.defaults.baseURL = ''
}

// http request 拦截器

axios.interceptors.request.use(
  config => {
    //   NProgress.start()
    //   let url = config.url
    //   url = url.slice(url.lastIndexOf('/') + 1)
    //   if (url !== 'token') {
    //       let token = store.getters.getToken
    //       if (!token) {
    //           token = sessionStorage.getItem('token')
    //           store.commit('setToken', token)
    //       }
    //       config.headers.Authorization = store.getters.getToken
    //   }
    //   // 开发设置
      if (process.env.NODE_ENV === 'development') {
          if (config.baseURL === '/api_wp/' && config.url.includes('/ess/')) {
              config.baseURL = '/api_ess_wp/'
              config.url = config.url.replace(/\/ess\//, '/')
              config.headers.uid = 'o1sUPeRMan'
          }
          if (config.baseURL === '/api_wp/') {
              config.url = config.url.replace(/\/u\//, '/')
              config.headers.uid = 'o1sUPeRMan'
          }
      }
      return config
  },
  err => {
    //   NProgress.done()
    //   return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    //   NProgress.done()
    //   return response
  },
  error => {
    //   if (error.response) {
    //       switch (error.response.status) {
    //           case 401:
    //               // 401 清除token信息并跳转到登录页面
    //               store.commit('userLogout')
    //               router.replace({
    //                   path: 'login',
    //                   query: {redirect: router.currentRoute.fullPath}
    //               })
    //       }
    //   }
    //   NProgress.done()
    //   return Promise.reject(error)
  })

export default axios