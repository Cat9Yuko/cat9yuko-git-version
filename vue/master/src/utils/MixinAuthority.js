import * as $t from '../utils/tools'
import $http from '../utils/axios'
const $api = require('../api/index.js')
export default {
  methods: {},
  beforeRouteEnter(to, from, next) {
    let ticketParamSh = $t.getParameterByName('code')
    let oldTicketParamSh = $t.getLocalStorage('ticketParamSh')
    let oldTokenParamSh = $t.getLocalStorage('tokenParamsSh')
    if (ticketParamSh && ticketParamSh !== oldTicketParamSh) {
      $t.setLocalStorage('ticketParamSh', ticketParamSh)
      $http.get($api.SLB_GET_USER_LOGIN, {
        code: ticketParamSh
      }).then(res => {
        if (res.returncode * 1 === 0) {
          // $t.setSessionStorage('tokenParams', res.result)
          $t.setLocalStorage('tokenParamsSh', res.result)
        }
        next()
      }).catch(() => {
        $t.error('授权失败！')
        window.location = 'https://lanxinplus.mwr.cn:10443/user/passport/oauth2/authorize?appid=1017471&redirect_uri=http://weixin.mwr.gov.cn/xxfbshd&response_type=code&scope=snsapi_userinfo&state=1'
        // next()
      })
    } else {
      if (oldTokenParamSh && Array.isArray(Object.keys(oldTokenParamSh)) && Object.keys(oldTokenParamSh).length) {
        next()
      } else {
        $http.get($api.SLB_GET_USER_LOGIN, {
          code: ticketParamSh
        }).then(res => {
          if (res.returncode * 1 === 0) {
            // $t.setSessionStorage('tokenParams', res.result)
            $t.setLocalStorage('tokenParamsSh', res.result)
          }
          next()
        }).catch(() => {
          $t.error('授权失败！')
          window.location = 'https://lanxinplus.mwr.cn:10443/user/passport/oauth2/authorize?appid=1017471&redirect_uri=http://weixin.mwr.gov.cn/xxfbshd&response_type=code&scope=snsapi_userinfo&state=1'
          // next()
        })
      }
    }
  }
}
