import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserInfo from './views/children/UserInfo.vue'
import LegalUserInfo from './views/children/LegalUserInfo.vue'
import MyMessage from './views/children/MyMessage.vue'
import MyAddress from './views/children/MyAddress.vue'
import MySuggest from './views/children/MySuggest.vue'
import MyCollection from './views/children/MyCollection.vue'
import MyService from './views/children/MyService.vue'
import EmailEdit from './views/children/children/emailEdit.vue'
import ProfessionEdit from './views/children/children/professionEdit.vue'
import DeptEdit from './views/children/children/deptEdit.vue'
import AddressEdit from './views/children/children/addressEdit.vue'

import NewTask from './views/NewTask.vue'
import ApproveTask from './views/ApproveTask.vue'
import LookHistoryTask from './views/LookHistoryTask'
import MySearch from './views/MySearch.vue'

Vue.use(Router)

const routes = {
  routes: [
    {
      path: '/',
      name: 'Homes',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '部网站信息发布审核单'
      }
    },
    {
      path: '/newTask',
      name: 'NewTask',
      component: NewTask,
      meta: {
        title: '新建审核单'
      }
    },
    {
      path: '/mySearch',
      name: 'MySearch',
      component: MySearch,
      meta: {
        title: '搜索页'
      }
    },
    {
      path: '/approveTask',
      name: 'ApproveTask',
      component: ApproveTask,
      meta: {
        title: '我的待办'
      }
    },
    {
      path: '/lookHistoryTask',
      name: 'LookHistoryTask',
      component: LookHistoryTask,
      meta: {
        title: '审核单跟踪'
      }
    },
    {
      path: '/userInfo',
      name: 'UserInfo',
      component: UserInfo,
      meta: {
        title: '我的账号'
      }
    },
    {
      path: '/legalUserInfo',
      name: 'LegalUserInfo',
      component: LegalUserInfo,
      meta: {
        title: '我的账号'
      }
    },
    {
      path: '/emailEdit',
      name: 'EmailEdit',
      component: EmailEdit,
      meta: {
        title: '修改邮箱'
      }
    },
    {
      path: '/addressEdit',
      name: 'AddressEdit',
      component: AddressEdit,
      meta: {
        title: '修改地址'
      }
    },
    {
      path: '/professionEdit',
      name: 'ProfessionEdit',
      component: ProfessionEdit,
      meta: {
        title: '修改职业'
      }
    },
    {
      path: '/deptEdit',
      name: 'DeptEdit',
      component: DeptEdit,
      meta: {
        title: '修改单位'
      }
    },
    {
      path: '/myMessage',
      name: 'MyMessage',
      component: MyMessage,
      meta: {
        title: '我的消息'
      }
    },
    {
      path: '/mySuggest',
      name: 'MySuggest',
      component: MySuggest,
      meta: {
        title: '我的推荐'
      }
    },
    {
      path: '/myAddress',
      name: 'MyAddress',
      component: MyAddress,
      meta: {
        title: '我的足迹'
      }
    },
    {
      path: '/myCollection',
      name: 'MyCollection',
      component: MyCollection,
      meta: {
        title: '我的收藏'
      }
    },
    {
      path: '/myService',
      name: 'MyService',
      component: MyService,
      meta: {
        title: '我的服务'
      }
    }
  ]
}
const router = new Router({
  base: 'xxfbshd',
  mode: 'history',
  routes: routes.routes
})
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export default router
