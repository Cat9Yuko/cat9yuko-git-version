<template>
  <base-page class="home-wrap">
    <van-nav-bar right-arrow title="部网站信息发布审核单" right-text="新建" @click-right="onClickRight">
<!--      <van-icon name="icon iconfont icon-ai207" slot="left" />-->
    </van-nav-bar>
    <div class="patrol-list">
      <van-tabs v-model="active" animated>
        <van-tab name="0">
          <template slot='title'> <van-icon name="newspaper-o" />我的待办</template>
          <my-works ref='workRef'></my-works>
        </van-tab>
        <van-tab name="1">
          <template slot='title'> <van-icon name="todo-list-o" />审核单跟踪</template>
          <history-list ref="historyList"></history-list>
        </van-tab>
      </van-tabs>
    </div>
  </base-page>
</template>

<script>
  import MixinAuthority from '../utils/MixinAuthority'
  import MyWorks from './MyWorks'
  import HistoryList from './HistoryList'
  import * as $t from '../utils/tools'
  export default {
    name: 'homeWrapper',
    mixins: [MixinAuthority],
    components: { MyWorks, HistoryList },
    data() {
      return {
        active: '0',
        noData: false,
        searchContent: '',
        patrolTasks: [],
        dialogUrl: '',
        selType: 'userInfo',
        userName: $t.getLocalStorage('tokenParams') ? $t.getLocalStorage('tokenParams').userName : '',
        userType: $t.getLocalStorage('tokenParams') ? $t.getLocalStorage('tokenParams').userType : 0
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        console.log(from.name)
        if (from.name === 'ApproveTask' || from.name === 'NewTask') {
          vm.active = '1'
        }
        vm.$nextTick(() => {
          if (vm.$refs.workRef) {
            vm.$refs.workRef.initTable()
          }
          if (vm.$refs.historyList) {
            vm.$refs.historyList.initTable()
          }
        })
      })
    },
    created() {
      // this.userPage = this.userType === 0 ? 'UserInfo' : 'LegalUserInfo'
    },
    methods: {
      leftClick() {
        let a = document.createElement('a')
        a.setAttribute('href', 'http://weixin.mwr.gov.cn/workform/upload/attach/3309957397841555.docx')
        a.setAttribute('target', '_blank')
        a.click()
      },
      onClickRight() {
        this.$router.push({ name: 'NewTask' })
      }
    }
  }
</script>

<style lang="less">
  @import '../styles/variable';

  .home-wrap {
    .van-nav-bar__title{
      color: #fff;
    }
    .patrol-list {
      .van-icon{
        font-size: 18px;
        position: relative;
        top: 3px;
        right: 1px;
      }
      position: absolute;
      top: 1.22667rem;
      left: 0;
      right: 0;
      /*bottom: 0;*/
      overflow: auto;
      .van-cell{
        padding: 0.36667rem 0.4rem !important;
        color: #333333;
        font-size: 0.40333rem;
      }
    }
  }
</style>
