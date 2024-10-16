<template>
  <base-page class="look-history-wrapper" :loading="isShowLoading">
    <van-nav-bar right-arrow title="审批记录" @click-left="onClickLeft">
      <van-icon name="icon iconfont icon-ai207" slot="left"/>
    </van-nav-bar>
    <div class="patrol-list">
      <van-form v-model='formData'>
        <van-field
                v-model="formData.proposeColumnName"
                required
                readonly
                label="拟入栏目"
                placeholder="司局直属"
        />
        <van-field
                v-if="formData.proposeColumnName === '其他'"
                v-model="formData.columnName"
                required
                readonly
                label="其他拟入栏目名称"
                placeholder=""
        />
        <van-field
                v-model="formData.involveLeaderName"
                required
                :label="formData.proposeColumnName + '涉及领导'"
                v-if="formData.proposeColumnName === '水利要闻'"
                placeholder="请选择"
                readonly
        />
        <van-field
                v-model="formData.submitDeptName"
                readonly
                required
                label="报送单位"
                placeholder="请选择"
        />
        <van-field
                v-model="formData.directlyDeptName"
                readonly
                required
                :label="formData.submitDeptName"
                placeholder="请选择"
        />
        <van-field
                v-model="formData.submittedBy"
                readonly
                required
                label="报送人"
                placeholder="请选择"
        />
        <van-field label="所在处室" :value="formData.offices" readonly/>
        <van-field
                v-model="formData.officePhone"
                readonly
                required
                label="办公电话"
                placeholder="请输入"
        />
        <!-- <van-field
                v-model="formData.telephone"
                readonly
                required
                label="联系电话"
                placeholder="请输入"
        /> -->
        <van-field
                v-model="formData.sourceName"
                readonly
                required
                label="信息来源"
                placeholder="请输入"
        />
        <van-field
                v-model="formData.reprintContent"
                v-if="formData.sourceName === '转载'"
                readonly
                required
                label="转载来源"
                placeholder="请输入"
        />
        <van-field
                v-model="formData.title"
                readonly
                required
                label="信息标题"
                placeholder="请输入"
        />
        <van-field
                v-model="formData.isSecretName"
                readonly
                required
                label="是否涉密"
                placeholder="请选择"
        />
        <van-field
                v-model="formData.isOpenName"
                readonly
                required
                label="是否政务公开"
                placeholder="请选择"
        />
        <van-field
                v-model="formData.isLegalAuthorizationName"
                readonly
                required
                label="是否获得合法授权"
        />
        <van-field
                v-model="formData.isEncroachInfoName"
                readonly
                required
                label="是否存在侵害个人信息权益风险"
        />
        <van-field
                v-model="formData.directlyLeader"
                v-if="formData.proposeColumnName !=='时政要闻'"
                required
                readonly
                label="您所在司局或单位主要负责同志"
                placeholder="请选择"
        />
        <van-field
                v-model="formData.isDirectlyLeaderName"
                v-if="formData.proposeColumnName !=='时政要闻'"
                required
                label="请确认所选人是否为您所在司局或单位主要负责同志"
                placeholder="请选择"
                readonly
        />
        <van-field
                  label="非所在司局或单位主要负责同志审核情况说明"
                  rows="1"
                  v-if="formData.isDirectlyLeader * 1 === 0"
                  v-model="formData.notMainLeaderAuditDesc"
                  autosize
                  readonly
                  type="textarea"
                  placeholder=""

                  required>
        </van-field>
        <van-field name="uploader" label="上传附件">
          <template slot='input'>
            <van-uploader v-model="uploader" @click-preview="clickPreview" max-count='1' disabled :deletable='false'>
              <template #preview-cover="{file}">
                <!--                <div class="preview-cover van-ellipsis">111</div>-->
              </template>
            </van-uploader>
          </template>
          <template slot='extra'>
            <label disabled>{{uploader.length}}/1</label>
          </template>
        </van-field>
          <!-- 新增撤销按钮 -->
          <div class="center-button" v-if="formData.status == 0 && formData.telephone == userInfo.mobile"><van-button round type="info" @click="onCancelForm()">撤销</van-button></div>

      </van-form>
      <van-steps direction="vertical" :active="6">
        <van-step>
          <h5>{{formData.nodeName}}({{formData.submittedBy}})提交了该工单</h5>
          <br/>
          <p>{{formData.applyTime}}</p>
        </van-step>
        <van-step v-for="item in historyList" :key="item.updateTime">
          <div v-if='item.approvalStatus * 1 === 0  && item.approvalLevel !== -1'>
            <h5>待{{item.nodeName}}({{item.approvalUserName}})审批
            </h5>
            <br/>
            <p>{{item.updateTime}}</p>
          </div>
          <div v-if='item.approvalStatus * 1 !== 0 && item.approvalStatus * 1 !== 3 && item.approvalLevel !== -1'>
            <h5>{{item.nodeName}}({{item.approvalUserName}})审批完毕，结果为{{item.approvalStatusName}}<span v-if="item.approvalComments">，意见为：{{item.approvalComments}}</span>
            </h5>
            <br/>
            <p>{{item.updateTime}}</p>
          </div>
          <div v-if='item.approvalLevel === -1 && item.approvalStatus === 0'>
            <h5>待{{item.nodeName}}({{item.approvalUserName}})确认发布
            </h5>
            <br/>
            <p>{{item.updateTime}}</p>
          </div>
          <div v-if='item.approvalLevel === -1 && item.approvalStatus !== 3  && item.approvalStatus !== 0'>
            <h5>{{item.nodeName}}({{item.approvalUserName}})审批完毕，结果为{{item.approvalStatusName}}<span v-if="item.approvalComments">，意见为：{{item.approvalComments}}</span>
            </h5>
            <br/>
            <p>{{item.updateTime}}</p>
          </div>
          <div v-if='item.approvalLevel === -1 && item.approvalStatus === 3'>
            <h5>{{item.nodeName}}({{item.approvalUserName}})确认发布完毕
            </h5>
            <br/>
            <p>{{item.updateTime}}</p>
          </div>
        </van-step>
      </van-steps>
    </div>
  </base-page>
</template>

<script>
  import MixinAuthority from '../utils/MixinAuthority'
  import * as $t from '../utils/tools'
  import { Toast } from 'vant'

  export default {
    name: 'LookHistoryTask',
    mixins: [MixinAuthority],
    components: { Toast },
    data() {
      return {
        approvalComments: '',
        isShowLoading: false,
        parentParams: {},
        formData: {},
        uploader: [],
        columns: ['是', '否'],
        showPicker: false,
        userInfo: {},
        historyList: []
      }
    },
    activated() {
      this.parentParams = this.$route.query
      this.userInfo = $t.getLocalStorage('tokenParamsSh')
      if (Array.isArray(Object.keys(this.userInfo)) && Object.keys(this.userInfo).length) {
        this.userInfo = $t.getLocalStorage('tokenParamsSh')
      } else {
        this.userInfo = {}
      }
      this.getApproveTask()
    },
    created() {
      // this.userPage = this.userType === 0 ? 'UserInfo' : 'LegalUserInfo'
    },
    methods: {
      onCancelForm() {
        // 撤回文档
        let params = {
          id: this.parentParams.id,
        }
        // console.log(saveData)
        this.isShowLoading = true
        this.$http.get(this.$API.SLB_GET_CANCEL_APPROVE, params).then((res) => {
          this.isShowLoading = false
          Toast.success('撤销成功')
          // this.$router.go(-1)
          this.$router.push({ name: 'Home' })
        }).catch((e) => {
          this.isShowLoading = false
          // console.log(e)
        })
      },
      clickPreview(file, fileObj) {
        let u = navigator.userAgent
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
        let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        let dataUrl = this.uploader[fileObj.index].url
        if (isAndroid) {
          let a = document.createElement('a')
          a.setAttribute('href', dataUrl)
          a.setAttribute('target', '_blank')
          a.click()
        } else if (isIOS) {
          window.location.href = dataUrl
        } else {
          window.location.href = dataUrl
        }
      },
      onClickLeft() {
        this.$router.go(-1)
      },
      getApproveTask() {
        this.isShowLoading = true
        this.$http.get(this.$API.SLB_GET_WORK_BYID, {
          id: this.parentParams.id
        }).then(res => {
          let resData = res.result
          resData.isSecretName = resData.isSecret * 1 === 1 ? '是' : '否'
          resData.isOpenName = resData.isOpen * 1 === 1 ? '是' : '否'
          resData.isLegalAuthorizationName = resData.isLegalAuthorization * 1 === 1 ? '是' : '否'
          resData.isEncroachInfoName = resData.isEncroachInfo * 1 === 1 ? '是' : '否'
          resData.isDirectlyLeaderName = resData.isDirectlyLeader * 1 === 1 ? '是' : '否'
          this.formData = Object.assign({}, resData)
          this.uploader = resData.attachments.map(item => {
            return {
              url: item.imageURL,
              name: item.showName,
              message: '',
              status: '',
              file: {
                name: item.showName
              }
            }
          })
          resData.approves.forEach(item => {
            if (item.approvalStatus * 1 === 1) {
              item.approvalStatusName = '同意'
            } else if (item.approvalStatus * 1 === 0) {
              item.approvalStatusName = '待审批'
            } else if (item.approvalStatus * 1 === 2) {
              item.approvalStatusName = '拒绝'
            } else if (item.approvalStatus * 1 === 3) {
              item.approvalStatusName = '已发布'
            }
          })
          this.historyList = resData.approves
          this.isShowLoading = false
        }).catch((e) => {
          // console.log(e)
          this.isShowLoading = false
          // this.uploader = oldUrls
        })
      }
    }
  }
</script>

<style lang="less">
  @import '../styles/variable';

  .look-history-wrapper {
    .van-button--normal {
      width: 50%;
    }

    .van-field__label {
      width: 120px;
    }

    .van-cell {
      padding: 5px 15px !important;
    }

    .van-nav-bar__title {
      color: #fff;
    }

    .pull-out {
      width: 100%;
      position: absolute;
      top: 9.5rem;
      text-align: center;

      .van-cell__title {
        display: none;
      }

      .van-cell__value {
        text-align: center;
        width: 100%;
      }
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
