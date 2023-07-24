<template>
    <div class="my-suggest">
        <van-nav-bar right-arrow title="推荐" @click-left="onClickLeft" @click-right="onClickRight">
            <van-icon name="wap-home" slot="left" />
            <van-icon name="icon iconfont icon-ai207" slot="right" />
        </van-nav-bar>
        <van-cell size="large" v-for='item in listData' :key='item.id'>
            <template slot="title">
                <span class="custom-title"><a style="color:#666666" rel="noopenner noreferrer" :href="item.detailURL" target="_blank">{{item.docTitle}}</a></span>
            </template>
            <template slot="label">
                <span class="">{{item.issuedDate}}</span>
                <span class="del-btn" @click="delItem(item.id)"><van-icon name="cross" /></span>
            </template>
        </van-cell>
    </div>
</template>

<script>
  import { Dialog, Toast } from 'vant'
  export default {
    name: 'MySuggest',
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
        // vm.initCategoryOpt()
      })
    },
    methods: {
      onClickLeft() {

      },
      renderTaskList(args = {}) {
        this.$http.post(this.$API.SLB_POST_RECOMMEND_LIST, this.pageInfo).then((res) => {
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
          this.$http.post(this.$API.SLB_POST_RECOMMEND_DEL, { id: id }).then(res => {
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
    created() {
      // this.renderTaskList()
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
    .my-suggest{
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
