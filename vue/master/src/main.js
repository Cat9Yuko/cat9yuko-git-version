import './utils/rem'
import { SinopecAppPlugin } from './utils/SinopecAppPlugin_Vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@components/_globals'
import * as filters from './filters'
// import Vant from 'vant'
// import 'vant/lib/vant-css/index.css'
import './styles/index.less'
import {
  Button,
  Popup,
  Tag,
  Row,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  Dialog,
  SwipeItem,
  DatetimePicker,
  DropdownMenu,
  DropdownItem,
  Field,
  Form,
  Panel,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  NavBar,
  Loading,
  Search,
  Step,
  Steps,
  Collapse,
  CollapseItem,
  List,
  Checkbox,
  Radio,
  Uploader,
  ActionSheet,
  PullRefresh,
  Picker
} from 'vant'

import * as API from './api'
import * as CONST from '@/utils/constant'
import * as T from '@utils/tools'
import http from '@utils/axios'
import * as $t from './utils/tools'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Popup)
Vue.use(Tag)
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Swipe)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(SwipeItem)
Vue.use(DatetimePicker)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Field)
Vue.use(Panel)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Loading)
Vue.use(Search)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(List)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(Uploader)
Vue.use(ActionSheet)
Vue.use(Picker)
Vue.use(Form)
Vue.use(Step)
Vue.use(Steps)
Vue.use(PullRefresh)

Vue.prototype.$API = API
Vue.prototype.$http = http
Vue.prototype.$T = T
Vue.prototype.$CONST = CONST

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const FastClick = require('fastclick')
FastClick.attach(document.body)

// 注册桥接移动端的插件
window.SinopecAppPlugin = SinopecAppPlugin
if (process.env.NODE_ENV === 'development') {
  // aaa
  require('../mock/aaa')
}
if ($t.IsPC()) {
  let rootDom = document.getElementsByTagName('html')[0]
  rootDom.style.fontSize = '40px'
}
window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Toast.setDefaultOptions({ duration: 3000 });
vm.$toast = Toast
