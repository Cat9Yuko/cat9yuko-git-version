<template>
    <div class="my-message">
        <van-nav-bar right-arrow title="消息" @click-left="onClickLeft" @click-right="onClickRight">
            <van-icon name="wap-home" slot="left" />
            <van-icon name="icon iconfont icon-ai207" slot="right" />
        </van-nav-bar>
        <van-cell size="large"  icon="volume" v-for='item in listData' :key='item.id'>
            <template slot="title">
                <span class="custom-title" :title='item.content'>{{item.sourceName}}：{{item.content}}</span>
            </template>
            <template slot="label">
                <span class="">{{item.createTime}}</span>
                <span class="del-btn" @click='delItem(item.id)'><van-icon name="cross" /></span>
            </template>
        </van-cell>
    </div>
</template>

<script>
  import { Dialog, Toast } from 'vant'
  export default {
    name: 'MyMessage',
    components: { Dialog, Toast },
    data() {
      return {
        pageInfo: {
          pageNum: 1,
          pageSize: 20
        },
        listData: []
      }
    },
    props: {},
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        vm.renderTaskList()
      })
    },
    methods: {
      onClickLeft() {

      },
      renderTaskList(args = {}) {
        this.$http.post(this.$API.SLB_POST_NEW_LIST, this.pageInfo).then((res) => {
          this.listData = res.result.list
          for (let item of this.listData) {
            if (item.content && item.content.length > 15) {
              item.content = item.content.substr(0, 13) + '...'
            }
          }
        })
      },
      delItem(id) {
        Dialog.confirm({
          title: '删除',
          message: '是否确认删除'
        }).then(() => {
          this.$http.post(this.$API.SLB_POST_NEW_DEL, { id: id }).then(res => {
            Toast.success('删除成功')
            this.renderTaskList()
          }).catch((e) => {
            // console.log(e)
          })
        }).catch(() => {
          // on cancel
        })
      },
      onClickRight() {
        this.$router.go(-1)
      }
    },
    computed: {},
    created() {},
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
    .my-message{
        .van-nav-bar__title{
            color: #fff;
        }
        .custom-title{
            font-size: 14px;
        }
        .del-btn{
            float: right;
        }
    }
</style>
