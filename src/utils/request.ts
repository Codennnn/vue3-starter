import axios from 'axios'

// import { getToken, removeToken } from '@/utils/token'
// import responseHandler from '@/utils/response-handler'

const errorHandler = (error) => {
  const { status = 'default', statusText = '错误信息' } = error.response
  // responseHandler[status](status, statusText)

  return Promise.reject(error)
}

const service = axios.create({
  baseURL: 'http://xxx',
  timeout: 10000,
  responseType: 'json',
})

service.interceptors.request.use((config) => {
  // const token = getToken()
  const token = 'getToken()'
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, errorHandler)

service.interceptors.response.use((response) => {
  const { data } = response

  const { code, message = '接口异常' } = data
  if (code !== 2000) {
    // Message.warning(message)

    if (code === 4018) {
      // removeToken()
      window.location.reload()
    }

    return Promise.reject(data)
  }
  return data
}, errorHandler)

export default service
