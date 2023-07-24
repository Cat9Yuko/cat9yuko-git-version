<template>
  <base-page class="my-works-wrap">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
            v-model="isShowLoading"
            :finished="finished"
            :immediate-check="false"
            :offset="10"
            finished-text="没有更多了"
            @load="onLoad"
    >
      <van-cell size="large" v-for='item in tableData' :key='item.id' @click='lookHistoryTask(item)'>
        <template slot="title">
          <div class='left-msg'>
            <span><van-icon name='warning'></van-icon></span>
            <span>{{item.title}}</span>
          </div>
          <div class='right-msg'>
            <!--                    <span><van-tag type="warning">低</van-tag></span>-->
            <span>{{item.statusStr}}</span>
          </div>
        </template>
        <template slot="label">
          <div><span class="label-style">{{item.proposeColumn}}</span></div>
          <div><span class="label-style">{{item.applyTime}}</span></div>
        </template>
      </van-cell>
    </van-list>
    </van-pull-refresh>
  </base-page>
</template>

<script>
  import MixinAuthority from '../utils/MixinAuthority'
  import * as $t from '../utils/tools'

  export default {
    name: 'MyWorks',
    mixins: [MixinAuthority],
    components: {},
    data() {
      return {
        tableData: [],
        total: 0,
        pages: 1,
        isShowLoading: false,
        active: '',
        finished: false,
        refreshing: false,
        pageInfo: {
          pageNum: 1,
          pageSize: 10
        }
      }
    },
    created() {
      this.pageInfo.pageNum = 1
      // this.initTable()
    },
    activated() {
      this.pageInfo.pageNum = 1
      this.tableData = []
    },
    methods: {
      initTable() {
        this.pageInfo.pageNum = 1
        // this.userPage = this.userType === 0 ? 'UserInfo' : 'LegalUserInfo'
        this.initTableData()
      },
      onClickRight() {

      },
      lookHistoryTask(item) {
        if (item.status * 1 === -1) {
          this.$router.push({ name: 'NewTask', query: item })
        } else {
          this.$router.push({ name: 'ApproveTask', query: Object.assign({ 'isGet': true }, item) })
        }
      },
      onLoad() {
        this.pageInfo.pageNum++
        this.initTableData()
      },
      onRefresh() {
        this.pageInfo.pageNum = 1
        this.tableData = []
        // 清空列表数据
        this.finished = false
        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        // this.isShowLoading = true
        this.initTableData()
      },
      initTableData() {
        console.log(6666666)
        // this.isShowLoading = true
        let userInfo = $t.getLocalStorage('tokenParamsSh')
        let params = {}
        // if (Array.isArray(Object.keys(userInfo)) && Object.keys(userInfo).length) {
        //   params.mobile = userInfo.mobile
        // }
        this.$http.post1(this.$API.SLB_POST_TODO_LIST, Object.assign(params, this.pageInfo)).then(res => {
          const rows = res.result.list
          if (rows === null || rows.length === 0) {
            // 加载结束
            this.finished = true
            return
          }
          if (rows.length < this.pageInfo.pageSize) {
            // 最后一页不足10条的情况
            this.finished = true
          }
          // 处理数据
          if (this.pageInfo.pageNum === 1) {
            this.tableData = rows
          } else {
            this.tableData = this.tableData.concat(rows)
          }
        }).catch((e) => {

        }).finally(() => {
          this.isShowLoading = false
          this.refreshing = false
        })
      }
    }
  }
</script>

<style lang="less">
  @import '../styles/variable';

  .my-works-wrap {
      .van-pull-refresh {
          height: calc(100vh - 100px) !important;
          overflow: auto !important;
      }
      .van-list { height: auto !important; }
    .van-nav-bar__title {
      color: #fff;
    }

    .left-msg {
      margin-right: 35px;
      .van-icon-warning {
        color: #ff976a;
        margin-right: 10px;
        position: relative;
        top: 3px;
      }
    }

    .right-msg {
      position: absolute;
      right: 9px;
      top: 12px;
      font-size: 12px;
      color: #55a532;

      .van-tag--warning {
        font-size: 8px;
        padding: 0 3px;
        background-color: #f7d8ca;
        margin-right: 5px;
        color: #63a35c;
      }
    }

    .label-style {
      line-height: 30px;
    }

    .patrol-list {
      position: absolute;
      top: 1.22667rem;
      left: 0;
      right: 0;
      /*bottom: 0;*/
      overflow: auto;

      .van-cell {
        padding: 0.36667rem 0.4rem !important;
        color: #333333;
        font-size: 0.40333rem;
      }
    }
  }
</style>
