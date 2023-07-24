<template>
    <div class="profession-edit">
        <van-nav-bar right-arrow title="职业修改" @click-left="onClickLeft" @click-right="onClickRight">
            <van-icon name="wap-home" slot="left" />
            <van-icon name="icon iconfont icon-ai207" slot="right" />
        </van-nav-bar>
        <van-form validate-first @submit="onSubmit">
            <van-field
                    readonly
                    clickable
                    name="picker"
                    :value="professionName"
                    label="职业"
                    placeholder="点击选择职业"
                    @click="showPicker = true"
            />
            <van-popup v-model="showPicker" position="bottom">
                <van-picker
                        show-toolbar
                        :columns="zyOption"
                        @confirm="onConfirm"
                        @cancel="showPicker = false"
                />
            </van-popup>
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
    name: 'professionEdit',
    components: { Dialog, Toast },
    data() {
      return {
        professionName: '',
        professionValue: 0,
        profession: '',
        showPicker: false,
        zyOption: [{
          value: 1,
          text: '工人'
        }, {
          value: 2,
          text: '农民'
        }, {
          value: 3,
          text: '学生'
        }, {
          value: 4,
          text: '教师'
        }, {
          value: 5,
          text: '医生'
        }, {
          value: 6,
          text: '律师'
        }, {
          value: 7,
          text: '事业单位工作人员'
        }, {
          value: 8,
          text: '专业技术人员'
        }, {
          value: 9,
          text: '企业管理人员'
        }, {
          value: 10,
          text: '文体员工'
        }, {
          value: 11,
          text: '现役军人'
        }, {
          value: 12,
          text: '自由职业者'
        }, {
          value: 13,
          text: '无业人员'
        }, {
          value: 14,
          text: '退（离）休人员'
        }]
      }
    },
    props: {},
    methods: {
      onConfirm(value) {
        this.professionName = value.text
        this.professionValue = value.value
        this.showPicker = false
      },
      onClickLeft() {

      },
      onSubmit(values) {
        // console.log('submit', values)
        let sendParams = {}
        sendParams.profession = this.professionValue
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
    .profession-edit{
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
