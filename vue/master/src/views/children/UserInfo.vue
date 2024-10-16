<template>
    <div class="user-info-mobile">
        <van-nav-bar right-arrow title="用户中心" @click-left="onClickLeft" @click-right="onClickRight">
            <van-icon name="wap-home" slot="left"/>
            <van-icon name="icon iconfont icon-ai207" slot="right"/>
        </van-nav-bar>
        <van-cell>
            <template slot="title">
                <p class="conent-pos name-wrapper">
                    <span class="lable-wrapper">姓名</span>
                    <span class="value-wrapper">{{formData.userName}}</span>
                </p>
            </template>
        </van-cell>
        <van-cell is-link>
            <template slot="title">
                <a href='http://yhfw.mwr.gov.cn:8050/tacs-uc/login/index' rel="noopenner noreferrer" target="_blank">
                    <p class="conent-pos name-wrapper">
                        <span class="lable-wrapper">账号密码</span>
                        <span class="value-wrapper">********</span>
                    </p>
                </a>
            </template>
        </van-cell>
        <van-cell is-link>
            <template slot="title">
                <a href='http://yhfw.mwr.gov.cn:8050/tacs-uc/login/index' rel="noopenner noreferrer" target="_blank">
                    <p class="conent-pos name-wrapper">
                        <span class="lable-wrapper">手机号</span>
                        <span class="value-wrapper">{{formData.telephone}}</span>
                    </p>
                </a>
            </template>
        </van-cell>
        <van-cell>
            <template slot="title">
                <p class="conent-pos name-wrapper">
                    <span class="lable-wrapper">身份证号</span>
                    <span class="value-wrapper">{{formData.identityCard}}</span>
                </p>
            </template>
        </van-cell>
        <van-cell is-link to="emailEdit">
            <template slot="title">
                <p class="conent-pos name-wrapper">
                    <span class="lable-wrapper">邮箱</span>
                    <span class="value-wrapper">{{formData.email}}</span>
                </p>
            </template>
        </van-cell>
        <van-cell is-link to="professionEdit">
            <template slot="title">
                <p class="conent-pos name-wrapper">
                    <span class="lable-wrapper">职业</span>
                    <span class="value-wrapper">{{professionName}}</span>
                </p>
            </template>
        </van-cell>
        <van-cell is-link to="deptEdit">
            <template slot="title">
                <p class="conent-pos name-wrapper">
                    <span class="lable-wrapper">单位</span>
                    <span class="value-wrapper">{{formData.dept}}</span>
                </p>
            </template>
        </van-cell>
        <van-cell is-link to="addressEdit">
            <template slot="title">
                <p class="conent-pos name-wrapper">
                    <span class="lable-wrapper">通讯地址</span>
                    <span class="value-wrapper">{{formData.address}}</span>
                </p>
            </template>
        </van-cell>
    </div>
</template>

<script>
  export default {
    name: 'UserInfo',
    components: {},
    data() {
      return {
        formData: {},
        professionName: '',
        zyOption: [{
          value: 1,
          label: '工人'
        }, {
          value: 2,
          label: '农民'
        }, {
          value: 3,
          label: '学生'
        }, {
          value: 4,
          label: '教师'
        }, {
          value: 5,
          label: '医生'
        }, {
          value: 6,
          label: '律师'
        }, {
          value: 7,
          label: '事业单位工作人员'
        }, {
          value: 8,
          label: '专业技术人员'
        }, {
          value: 9,
          label: '企业管理人员'
        }, {
          value: 10,
          label: '文体员工'
        }, {
          value: 11,
          label: '现役军人'
        }, {
          value: 12,
          label: '自由职业者'
        }, {
          value: 13,
          label: '无业人员'
        }, {
          value: 14,
          label: '退（离）休人员'
        }]
      }
    },
    props: {},
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        vm.initFormData()
      })
    },
    methods: {
      onClickLeft() {

      },
      onClickRight() {
        this.$router.go(-1)
      },
      initFormData(args = {}) {
        this.$http.post(this.$API.SLB_POST_USER_INFO, args).then((res) => {
          this.formData = res.result
          this.professionName = this.zyOption.find((item, index, arr) => {
            return item.value === this.formData.profession
          }).label
          this.formData = Object.assign(this.formData, { 'professionName': this.professionName })
        }).catch((e) => {
          // console.log(e)
        })
      }
    },
    computed: {},
    created() {
      // this.initFormData()
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
    .user-info-mobile {
        .van-cell {
            padding: 15px 15px;
        }

        .conent-pos {
            position: relative;
            left: 50%;
            transform: translate(-50%);
        }

        .name-wrapper {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #666666;
            letter-spacing: 0;

            .lable-wrapper {
                width: 100px;
                display: inline-block;
                float: left;
            }

            .value-wrapper {
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #333333;
                letter-spacing: 0;
                display: inline-block;
                width: 190px;
                float: left;
            }
        }
    }
</style>
