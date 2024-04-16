import axios from 'axios'
import { showToast, closeToast, showLoadingToast } from 'vant'

// 业务额外控制字段
let extraReqConf = {
  redirecturi: '',
  showLoading: true
}
const showLoading = () => {
  showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })
}

// 初始化axios
const service = axios.create({
  timeout: 30 * 1000,
  baseURL: import.meta.env.VITE_BASE_URL
})

service.interceptors.request.use(
  (config) => {
    extraReqConf.showLoading && showLoading()
    // todo 在此可以控制token鉴权等处理
    return config
  },
  (error) => {
    closeToast()
    showToast(error.message)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    closeToast()
    const { code, data } = response.data
    if (code !== 1) {
      return Promise.reject(response)
    } else {
      // todo redirecturi 需要跳转的话可以在此处单独处理
      return data
    }
  },
  (error) => {
    closeToast()
    // HTTP 状态码
    const status = error.response?.status
    // 处理 HTTP 网络错误
    const errMessageMap = {
      400: '请求错误',
      401: '未授权，请登录',
      403: '拒绝访问',
      404: '请求地址404',
      408: '请求超时',
      500: '服务器内部错误',
      502: '网关错误',
      503: '服务不可用'
    }
    showToast(errMessageMap[status] || '网络连接失败，请稍后重试')
    return Promise.reject(error)
  }
)

/**
 * @param req 请求参数
 * @param extraConf 额外业务请求参数
 *  目前支持:
 *  redirecturi 请求成功跳转
 *  showLoading 是否使用沟通全局loading
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const serviceInstance = (req, extraConf = {}) => {
  // 记录额外的请求参数
  extraReqConf = Object.assign({}, extraReqConf, extraConf)
  return service(req)
}

export default serviceInstance
