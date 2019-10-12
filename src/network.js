import axios from 'axios'

const Net = axios.create({
  baseURL: 'https://api.shisanshui.rtxux.xyz/',
  timeout: 5000,
  validateStatus(status) {
    return status < 500; // 状态码在大于或等于500时才会 reject
  }
})

// 添加请求拦截器
Net.interceptors.request.use(function (config) {
  if (localStorage.Authorization) {
    config.headers.X = localStorage.Authorization
  }
  console.log(config)
  return config;
}, function (error) {
  return Promise.reject(error);
})
// 添加响应拦截器
// Net.interceptors.response.use(function (response) {
//   console.log(response)
//   // 尝试在此处判断ErrorCode
//   const code = response.data.ErrorCode
//   if (code) {
//     if (code === 40300) {
//       localStorage.setItem('Authorization', '')
//       alert('请重新登录后再次尝试此操作。错误码40300')
//     } else if (code === 40400) {
//       localStorage.setItem('Authorization', '')
//       alert('登录已过期，请重新登录')
//     } else if (code === 40500) {
//       alert('登陆后才能访问该内容！')
//     } else if (code === 45009) {
//       alert('密码错误，请重试')
//     } else {
//       alert(`错误码：${code}\n错误信息：${ClientErrorCode(code)}；请联系管理人员`)
//     }
//     return Promise.reject(response)
//   }
//   return response.data;
// }, function (error) {
//   if (error.toString().includes('timeout')) {
//     alert('网络超时，请稍后再试。')
//   }
//   return Promise.reject(error)
// })
export default Net