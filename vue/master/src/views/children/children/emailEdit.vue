<template>
    <div class="email-edit">
        <van-nav-bar right-arrow title="邮箱修改" @click-left="onClickLeft" @click-right="onClickRight">
            <van-icon name="wap-home" slot="left" />
            <van-icon name="icon iconfont icon-ai207" slot="right" />
        </van-nav-bar>
        <van-form validate-first @failed="onFailed" @submit="onSubmit">
            <van-field
                    v-model="newEmail"
                    name="validator"
                    label="邮箱地址"
                    placeholder="邮箱地址"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    保存
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
  import { Dialog, Toast } from 'vant'
  export default {
    name: 'emailEdit',
    components: { Dialog, Toast },
    data() {
      return {
        pageInfo: {
          pageNum: 1,
          pageSize: 20
        },
        newEmail: '',
        listData: []
      }
    },
    props: {},
    methods: {
      // validator(val) {
      //   return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(val)
      // },
      onClickLeft() {

      },
      onSubmit(values) {
        console.log('submit', values)
        let sendParams = {}
        sendParams.email = this.newEmail
        this.$http.post(this.$API.SLB_POST_UPDATE_USER_INFO, sendParams).then(res => {
          if (res.returncode === 0) {
            Toast.success('修改成功')
            setTimeout(() => {
              this.$router.go(-1)
            }, 1000)
          }
        }).catch((e) => {
          // console.log(e)
        })
      },
      onFailed(errorInfo) {
        // console.log('failed', errorInfo);
      },
      onClickRight() {
        this.$router.go(-1)
      }
    },
    computed: {},
    created() {
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
    .email-edit{
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
