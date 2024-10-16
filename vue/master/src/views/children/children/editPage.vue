<template>
    <div class="edit-page">
        <van-nav-bar right-arrow title="信息修改" @click-left="onClickLeft" @click-right="onClickRight">
            <van-icon name="wap-home" slot="left" />
            <van-icon name="icon iconfont icon-ai207" slot="right" />
        </van-nav-bar>
        <div>
            <iframe src="http://yhfw.mwr.gov.cn:8050/tacs-uc/login/index" frameborder='0'></iframe>
        </div>
    </div>
</template>

<script>
  import { Dialog, Toast } from 'vant'
  export default {
    name: 'EditPage',
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
    methods: {
      onClickLeft() {

      },
      renderTaskList(args = {}) {
        this.$http.post(this.$API.SLB_POST_RECOMMEND_LIST, this.pageInfo).then((res) => {
          this.listData = res.result.list
        })
      },
      delItem(id) {
        Dialog.confirm({
          title: '删除',
          message: '是否确认删除'
        }).then(() => {
          this.$http.post(this.$API.SLB_POST_RECOMMEND_DEL, { id: id }).then(res => {
            Toast.success('删除成功')
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
      this.renderTaskList()
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
    .edit-page{
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
