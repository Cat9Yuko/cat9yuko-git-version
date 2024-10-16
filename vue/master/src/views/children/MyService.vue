<template>
    <div class="my-service">
        <van-nav-bar right-arrow title="服务" @click-left="onClickLeft" @click-right="onClickRight">
            <van-icon name="wap-home" slot="left" />
            <van-icon name="icon iconfont icon-ai207" slot="right" />
        </van-nav-bar>
        <van-tabs v-model="activeName" @click="clickTabs">
            <van-tab>
                <div slot="title">公众资讯事项</div>
                <van-cell size="large"  v-for='item in listData' :key='item.id'>
                    <template slot="title">
                        <span class="custom-title"><a style="color:#666666" rel="noopenner noreferrer" :href="item.sendUrl" :target="item.targetLi">{{item.content}}</a>&nbsp;&nbsp;【{{item.replyName}}】</span>
                    </template>
                    <template slot="label">
                        <span class="">{{item.createTime}}</span>
                    </template>
                </van-cell>
            </van-tab>
            <van-tab>
                <div slot="title">往期答题</div>
                <van-cell size="large" v-for='item in listData' :key='item.id'>
                    <template slot="title">
                        <span class="custom-title">{{item.answerTitle}}&nbsp;&nbsp;|&nbsp;&nbsp;{{item.score}}分&nbsp;&nbsp;|&nbsp;&nbsp;<span><a rel="noopenner noreferrer" :href="downLoadUrl + item.id + '/' + downLoadToken" target="_blank">下载证书</a></span></span>
                    </template>
                    <template slot="label">
                        <span class="">{{item.createTime}}</span>
                    </template>
                </van-cell>
            </van-tab>
            <van-tab>
                <div slot="title">行政审批服务大厅</div>
                <van-cell size="large" v-for='item in listData' :key='item.id'>
                    <template slot="title">
                        <span class="custom-title"><span><a style="color:#666666" rel="noopenner noreferrer" :href="item.detailURL" target="_blank">{{item.name}}</a></span>&nbsp;&nbsp;【{{item.approvalName}}】</span>
                    </template>
                    <template slot="label">
                        <span class="">{{item.applyDate}}</span>
                    </template>
                </van-cell>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
  import * as $t from '../../utils/tools'
  export default {
    name: 'MyService',
    components: {},
    data() {
      return {
        activeName: 0,
        pageInfo: {
          pageNum: 1,
          pageSize: 20
        },
        downLoadToken: $t.getLocalStorage('tokenParams') ? $t.getLocalStorage('tokenParams').token : '',
        downLoadUrl: window.localHost + '/pdf/certificate/',
        listData: []
      }
    },
    props: {},
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        vm.clickTabs()
        // vm.initCategoryOpt()
      })
    },
    methods: {
      onClickLeft() {

      },
      clickTabs(name, title) {
        this.listData = []
        let sentUrl = ''
        if (this.activeName === 0) {
          sentUrl = this.$API.SLB_POST_CONSULTATION_LIST
        } else if (this.activeName === 1) {
          sentUrl = this.$API.SLB_POST_ANSWER_LIST
        } else if (this.activeName === 2) {
          sentUrl = this.$API.SLB_POST_APPROVAL_LIST
        }
        this.$http.post(sentUrl, this.pageInfo).then(res => {
          this.listData = res.result.list
          if (this.activeName === 0) {
            for (let item of this.listData) {
              if (item.content && item.content.length > 13) {
                item.content = item.content.substring(0, 20) + '...'
              }
              if (item.replyContentURL.endsWith('.html')) {
                item.sendUrl = item.replyContentURL
                item.targetLi = '_blank'
              } else {
                item.sendUrl = 'javascript:void(0)'
                item.targetLi = ''
              }
              if (item.content.startsWith('<p>')) {
                item.content = item.content.substring(3, item.content.length)
              }
              if (item.content.endsWith('</p>')) {
                item.content = item.content.substring(0, item.content.length - 4)
              }
            }
          }
        }).catch((e) => {
        })
      },
      onClickRight() {
        this.$router.go(-1)
      }
    },
    computed: {},
    created() {
      // this.clickTabs()
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
    .my-service{
        .van-nav-bar__title{
            color: #fff;
        }
        .custom-title{
            font-size: 14px;
        }
        .del-btn{
            float: right;
            /* vertical-align: middle; */
            margin-top: 6px;
        }
    }
</style>
