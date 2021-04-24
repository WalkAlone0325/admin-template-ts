import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'
import { getCookie } from '@/utils/cookie'

const service = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000,
})

service.interceptors.response.use(
  config => {
    if (store.getters.token) {
      config.headers['Authorization'] = getCookie('DEFAULT_TOKEN')
    }
    return config
  },
  err => Promise.reject(err),
)

service.interceptors.request.use(
  response => {
    const res = response.data
    console.log(res)
    if (res.data.code !== 200) {
      ElMessage({
        type: 'error',
        message: res.message || 'Error',
        duration: 5 * 1000,
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  err => {
    console.log(err)
    ElMessage({
      type: 'error',
      message: err.message || 'Error',
      duration: 5 * 1000,
    })
    return Promise.reject(err)
  },
)

export default service
