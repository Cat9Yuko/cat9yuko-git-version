import axios from 'axios'
import * as CONST from '../utils/constant'
import * as $T from '../utils/tools'
import qs from 'qs'
// import * as $t from "./tools"
// 创建axios实例
const service = axios.create({
  timeout: 300000
})

function filterOauthData(config) {
  // let url = config.url
  // let userInfo = $T.getLocalStorage('tokenParamsSh')
  // if (config.method === 'post') {
  //   if (Array.isArray(Object.keys(userInfo)) && Object.keys(userInfo).length) {
  //     config.data.mobile = userInfo.mobile
  //   }
  //   // post请求的场合下，追加角色名称
  // }
  // if (config.method === 'get') {
  //   if (Array.isArray(Object.keys(userInfo)) && Object.keys(userInfo).length) {
  //     config.params.mobile = userInfo.mobile
  //   }
  // }
  return config
}

// request拦截器
service.interceptors.request.use(
  config => {
    $T.showLoading()
    let copyConfig = Object.assign({}, config)
    copyConfig = filterOauthData(copyConfig)
    // copyConfig.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // copyConfig.headers['authorization'] = $T.getLocalStorage('tokenParams') ? $T.getLocalStorage('tokenParams').token : ''
    return copyConfig
  },
  error => {
    $T.clearLoading()
    Promise.reject(error)
  })

// respone拦截器
service.interceptors.response.use(
  response => {
    $T.clearLoading()
    const res = response.data
    if (res.returncode * 1 !== 0) {
      $T.fail(res.message)
      return Promise.reject(res)
    } else {
      return res
    }
  },
  error => {
    // $T.clearLoading()
    if (error.message.includes('timeout')) {
      $T.fail(CONST.MSG_SYS_TIME_OUT)
    } else {
      $T.fail(CONST.MSG_SYS_ERR)
    }
    return Promise.reject(error)
  }
)

const $http = {}
$http.$service = service
$http.$axios = axios
$http.get = function(url, params = {}) {
  return service({
    url: url,
    method: 'get',
    params: params
  })
}
$http.post = function(url, data = {}) {
  return service({
    url: url,
    method: 'post',
    data: qs.stringify(data)
  })
}
$http.post1 = function(url, data = {}) {
  return service({
    url: url,
    method: 'post',
    data: data
  })
}
$http.put = function(url, data = {}) {
  return service({
    url: url,
    method: 'put',
    data: data
  })
}
$http.delete = function(url, data = {}) {
  return service({
    url: url,
    method: 'delete',
    data: data
  })
}
export default $http
