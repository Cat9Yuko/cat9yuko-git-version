<template>
    <div class="legal-user-info-mobile">
        <van-nav-bar right-arrow title="用户中心" @click-left="onClickLeft" @click-right="onClickRight">
            <van-icon name="wap-home" slot="left"/>
            <van-icon name="icon iconfont icon-ai207" slot="right"/>
        </van-nav-bar>
        <van-cell>
            <template slot="title">
                <p class="conent-pos name-wrapper">
                    <span class="lable-wrapper">法人类型</span>
                    <span class="value-wrapper">企业法人</span>
                </p>
            </template>
        </van-cell>
        <van-cell is-link size='large'>
            <template slot="title">
                <a href='http://yhfw.mwr.gov.cn:8050/tacs-uc/login/index' rel="noopenner noreferrer" target="_blank">
                    <div class="conent-pos name-wrapper">
                        <div class="lable-wrapper">企业名称</div>
                        <span class="value-wrapper">{{formData.corporationName}}</span>
                    </div>
                </a>
            </template>
        </van-cell>
        <van-cell is-link>
            <template slot="title">
                <a href='http://yhfw.mwr.gov.cn:8050/tacs-uc/login/index' rel="noopenner noreferrer" target="_blank">
                    <p class="conent-pos name-wrapper">
                        <span class="lable-wrapper">统一社会信用代码</span>
                        <span class="value-wrapper">{{formData.socialCreditCode}}</span>
                    </p>
                </a>
            </template>
        </van-cell>
        <van-cell is-link>
            <template slot="title">
                <a href='http://yhfw.mwr.gov.cn:8050/tacs-uc/login/index' rel="noopenner noreferrer" target="_blank">
                    <p class="conent-pos name-wrapper">
                        <span class="lable-wrapper">法定代表人姓名</span>
                        <span class="value-wrapper">{{formData.legalPersonName}}</span>
                    </p>
                </a>
            </template>
        </van-cell>
        <van-cell is-link>
            <template slot="title">
                <a href='http://yhfw.mwr.gov.cn:8050/tacs-uc/login/index' rel="noopenner noreferrer" target="_blank">
                    <p class="conent-pos name-wrapper">
                        <span class="lable-wrapper">身份证号</span>
                        <span class="value-wrapper">{{formData.identityCard}}</span>
                    </p>
                </a>
            </template>
        </van-cell>
        <van-cell is-link>
            <template slot="title">
                <a href='http://yhfw.mwr.gov.cn:8050/tacs-uc/login/index' rel="noopenner noreferrer" target="_blank">
                    <p class="conent-pos name-wrapper">
                        <span class="lable-wrapper">法定代表人手机号</span>
                        <span class="value-wrapper">{{formData.telephone}}</span>
                    </p>
                </a>
            </template>
        </van-cell>
        <van-cell is-link>
            <template slot="title">
                <a href='http://yhfw.mwr.gov.cn:8050/tacs-uc/login/index' rel="noopenner noreferrer" target="_blank">
                    <p class="conent-pos name-wrapper">
                        <span class="lable-wrapper">密码</span>
                        <span class="value-wrapper">********</span>
                    </p>
                </a>
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
    name: 'LegalUserInfo',
    components: {},
    data() {
      return {
        formData: {}
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
          // this.formData = Object.assign(this.formData, { 'professionName': this.professionName })
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
    .legal-user-info-mobile {
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
                width: 120px;
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
                // margin-left: 124px;
            }
        }
    }
</style>
