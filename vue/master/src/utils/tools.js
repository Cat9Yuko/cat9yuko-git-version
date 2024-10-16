import { OAUTH_API_GROUP } from '@/utils/authorityAPI'
import * as CONST from './constant'
// import { Toast } from 'vant'

export const _ = require('lodash')

// 存储localStorage
export const setStore = (name, content) => {
  if (!name) return
  removeStore(name)
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}

// 获取localStorage
export const getStore = name => {
  if (!name) return
  let content = window.sessionStorage.getItem(name)
  return JSON.parse(content)
}

// 删除localStorage
export const removeStore = name => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}

// route params 缓存到 session
export const linkToRoute = (_this, obj) => {
  const routeName = obj.name
  const content = obj.params
  removeStore(routeName)
  setStore(routeName, content)
  _this.$router.push(obj)
}

// 获取route 传的params
export const getRouteParams = _this => {
  if (_this.$route.params && !isEmptyObject(_this.$route.params)) return _this.$route.params
  return getStore(_this.$route.name)
}

/**
 * 过滤参数
 * @param params {object} 需要格式化的时间
 * @return {object} 格式化后的时间
 * @author test 2017/05/28
 * @example 略
 */
export function filterParams(params) {
  if (!_.isObject(params)) {
    return params
  }
  let newParams = {}
  _.each(params, function(v, k) {
    // 过滤掉条件是空的项
    if (!(typeof v === 'string' && v.length === 0)) {
      newParams[k] = v
    }
  })
  return newParams
}

/**
 * 格式化时间
 * @param time {string} 需要格式化的时间
 * @param cFormat {string} 时间格式
 * @return {string} 格式化后的时间
 * @author test 2017/07/21
 * @example 略
 */
export function parseTime(time, cFormat) {
  if (!time) return false
  if (arguments.length === 0) {
    return false
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    if (('' + time).length === 8 && ('' + time).indexOf('-') === -1 && ('' + time).indexOf('/') === -1) {
      time = time.substring(0, 4) + '-' + time.substring(4, 6) + '-' + time.substring(6, 8)
    }
    // ios的场景
    // if (!!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) { eslint总报错
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      time = time.replace(/-/g, '/')
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

export function addDate(time, days, cFormat) {
  days = days || 1
  let date = new Date(time)
  date.setDate(date.getDate() + days)
  return parseTime(date, cFormat)
}

export function subDate(time, days, cFormat) {
  days = days || 1
  let date = new Date(time)
  date.setDate(date.getDate() - days)
  return parseTime(date, cFormat)
}

/**
 * 将时间数组分割成开始时间和结束时间
 * @param time {array}
 * @return {object}
 * @author test 2017/08/01
 * @example 略
 */
export function formatTime(time) {
  if (Array.isArray(time)) {
    if (!time[0] || !time[1]) return false
    var start = parseTime(time[0], '{y}-{m}-{d}')
    var end = parseTime(time[1], '{y}-{m}-{d}')
    return {
      start: start,
      end: end
    }
  }

  return false
}

/**
 * 判断请求的api是否是要追加权限的
 * @param api {String}
 * @return {boolean}
 * @author test 2017/08/01
 * @example 略
 */
export function isExistOauthApi(api) {
  let isExist = false
  for (let item of OAUTH_API_GROUP) {
    if (api && api.includes(item)) {
      isExist = true
      break
    }
  }
  return isExist
}
export function IsPC() {
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone',
    'SymbianOS', 'Windows Phone',
    'iPad', 'iPod']
  let flag = true
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
/**
 * 权限API拼接用户名
 * @param api {String}
 * @return {boolean}
 * @author test 2017/08/01
 * @example 略
 */
export function getestoinOauthApi(url) {
  let name = window._loginName ? window._loginName : ''
  if (url.includes('?')) {
    url += '&createId=' + name
  } else {
    url += 'createId=' + name
  }
  return url
}

/**
 * 获取用户名
 * @param api {String}
 * @return {boolean}
 * @author test 2017/08/01
 * @example 略
 */
export function getParameterByName(name) {
  var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search)
  // alert(JSON.stringify(match))
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}

export function getUrlParameter() {
  var name, value, str, num, arr
  var retObj = {}
  str = location.href.substr(location.href.indexOf('?') + 1)
  arr = str.split('&')
  for (var i = 0; i < arr.length; i++) {
    num = arr[i].indexOf('=')
    if (num > 0) {
      name = arr[i].substring(0, num)
      value = arr[i].substr(num + 1)
      retObj[name] = value
    }
  }
  return retObj
}
/**
 * 将内容存储到sessionStorage
 * @param key {string} key
 * @param content {Object} 存储json对象
 * @author TJ 2018/05/28
 * @example 略
 */
export function setSessionStorage(key, content) {
  if (!key) return false
  let jsonContent = JSON.stringify(content)
  jsonContent ? sessionStorage.setItem(key, jsonContent) : sessionStorage.setItem(key, content)
}

/**
 * 获取存储到sessionStorage的内容
 * @param key {string} key
 * @return {object} 返回json对象
 * @author TJ 2018/05/28
 * @example 略
 */
export function getSessionStorage(key) {
  let item = sessionStorage.getItem(key)
  if (!item) return false
  let result = JSON.parse(sessionStorage.getItem(key))
  return result ? result : item
}
/**
 * 将内容存储到localStorage
 * @param key {string} key
 * @param content {Object} 存储json对象
 * @author TJ 2018/05/28
 * @example 略
 */
export function setLocalStorage(key, content) {
  if (!key) return false
  let jsonContent = JSON.stringify(content)
  jsonContent ? localStorage.setItem(key, jsonContent) : localStorage.setItem(key, content)
}

/**
 * 获取存储到localStorage的内容
 * @param key {string} key
 * @return {object} 返回json对象
 * @author TJ 2018/05/28
 * @example 略
 */
export function getLocalStorage(key) {
  let item = localStorage.getItem(key)
  if (!item) return false
  let result = JSON.parse(localStorage.getItem(key))
  return result ? result : item
}
/**
 * 删除存储到sessionStorage的内容
 * @param key {string} key
 * @author TJ 2018/05/28
 * @example 略
 */
export function removeLocalStorage(key) {
  localStorage.removeItem(key)
}
/**
 * 删除存储到sessionStorage的内容
 * @param key {string} key
 * @author TJ 2018/05/28
 * @example 略
 */
export function removeSessionStorage(key) {
  sessionStorage.removeItem(key)
}

/**
 * 拼接查询URL
 * @param url {String}
 * @param obj {obj}
 * @return {String}
 * @author test 2017/08/01
 * @example 略
 */
export function joinQueryUrl(url, obj) {
  let str = ''
  let fullUrl = ''
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) return
    if (str) {
      str += '&'
    }
    str += key + '=' + obj[key]
  }
  if (url.includes('?')) {
    fullUrl = url + '&' + str
  } else {
    fullUrl = url + '?' + str
  }
  return fullUrl
}

/**
 * 判断参数是否嵌入在url中
 * @param url {String}
 * @param params {obj}
 * @author test 2018/08/27
 */
export function isInlineParams(url) {
  const splitChar = '{&'
  if (url && url.indexOf(splitChar) > -1) {
    return true
  } else {
    return false
  }
}

/**
 * 替换url里的参数
 * @param url {String}
 * @param params {obj}
 * @author test 2018/05/31
 */
export function replaceUrlParams(url, params) {
  if (url) {
    if (!isInlineParams(url)) {
      return url
    }
    // 正则匹配{}，生成数组
    let patt = /\{.*?\}/g
    let arr = url.match(patt) ? url.match(patt) : []
    arr.forEach(function(item) {
      let key = item.replace('{', '').replace('}', '').replace('$', '')
      url = url.replace(item, params[key])
    })
  }
  return url
}

/**
 * 设置SessionStorage初始用户信息
 * @author test 2017/10/17
 */
export function setUserInfo(content) {
  setSessionStorage('user', content)
}

/**
 * 获取SessionStorage用户信息
 * @author test 2017/10/17
 */
export function getUserInfo() {
  return getSessionStorage('user')
}

export function isEmptyObject(obj) {
  if (obj === null) return true
  return Object.keys(obj).length === 0
}

/**
 * 将null转换为空对象
 * @param params {obj}
 * @author test 2018/05/31
 */
export function emptyObjectWrapper(obj) {
  return obj === null ? {} : obj
}

export function success(msg = CONST.MSG_SYS_SUCCESS) {
  vm.$toast.success(msg)
}

export function fail(msg = CONST.MSG_SYS_FAIL) {
  vm.$toast({
    message: msg,
    duration: 3000
  })
}

export function error(msg = CONST.MSG_SYS_ERR) {
  vm.$toast({
    message: msg,
    duration: 3000
  })
}

export function warning(msg = CONST.MSG_SYS_WARNING) {
  vm.$toast({
    message: msg,
    duration: 3000
  })
}

export function showLoading(mask = false, text = '加载中...') {
  window.$loadinToast = vm.$toast.loading({
    mask: mask,
    message: text
  })
}

export function clearLoading() {
  const timer = setTimeout(() => {
    window.$loadinToast.clear()
    clearTimeout(timer)
  }, 2000)
}
