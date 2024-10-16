<template>
    <div class="dept-edit">
        <van-nav-bar right-arrow title="单位修改" @click-left="onClickLeft" @click-right="onClickRight">
            <van-icon name="wap-home" slot="left" />
            <van-icon name="icon iconfont icon-ai207" slot="right" />
        </van-nav-bar>
        <van-form validate-first @submit="onSubmit">
            <van-field
                    v-model="dept"
                    name="validator"
                    label="单位"
                    placeholder="单位名称"
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
    name: 'deptEdit',
    components: { Dialog, Toast },
    data() {
      return {
        dept: ''
      }
    },
    props: {},
    methods: {
      onClickLeft() {

      },
      onSubmit(values) {
        console.log('submit', values)
        let sendParams = {}
        sendParams.dept = this.dept
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
    .dept-edit{
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
