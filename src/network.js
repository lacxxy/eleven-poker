import axios from 'axios'

const Net = axios.create({
  baseURL: 'https://api.shisanshui.rtxux.xyz/',
})

// 添加请求拦截器
Net.interceptors.request.use(function (config) {
  if (localStorage.Authorization) {
    config.headers['X-Auth-Token'] = localStorage.Authorization
  }
  console.log(config)
  return config;
}, function (error) {
  return Promise.reject(error);
})
// 添加响应拦截器
Net.interceptors.response.use(function (response) {
  console.log(response.status)
  return response.data;
}, function (error) {
  const code = error.response.status
  if (code) {
    if (code === 401) {
      localStorage.setItem('Authorization', '')
      alert('请先登录！')
      window.location.href = '#/login'
    } 
    console.log(code)
    return Promise.reject(response)
  }
  if (error.toString().includes('timeout')) {
    alert('网络超时，请稍后再试。')
  }
  return Promise.reject(error)
})
export default Net