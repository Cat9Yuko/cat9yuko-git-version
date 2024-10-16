<template>
    <base-page class="approve-task-wrap" :loading="isShowLoading">
        <van-nav-bar right-arrow title="审批工单" @click-left="onClickLeft">
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
                <van-field
                        v-if="formData.curNodeLevel === -1"
                        v-model="formData.applyTime"
                        readonly
                        required
                        label="报送时间"
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
        <van-field
                        v-if="formData.curNodeLevel === -1"
                        v-model="formData.updateTime"
                        readonly
                        required
                        label="审批时间"
                        placeholder="请选择"
                />
                <van-field name="uploader" label="上传附件">
                    <template slot='input'>
                        <van-uploader v-if="(formData.proposeColumn === 3 && ((formData.flowId === 'DF7C6E52EBBC4085BF660ED7A63F5BB1' && formData.curNodeLevel === 3) || (formData.flowId === 'B329AC09A26F44B7B4EFC85D34038D28' && formData.curNodeLevel === 2))) || ((formData.proposeColumn === 1 || formData.proposeColumn === 2) && formData.curNodeLevel === 1)" v-model="uploader" @click-preview="clickPreview" accept="file"
                                      :delete="deleteRead" :before-delete="beforeDel" :before-read="beforeRead"
                                      :after-read="onRead"
                                      max-count='1'>
                            <template #preview-cover="{ fileItem }" v-if="uploader.length">
                                <!--                                <div class="preview-cover van-ellipsis">`{ fileItem.name }`</div>-->
                            </template>
                        </van-uploader>
                        <van-uploader v-else v-model="uploader" @click-preview="clickPreview" max-count='1' disabled
                                      :deletable='false'>
                            <template #preview-cover="{file}">
                                <!--                <div class="preview-cover van-ellipsis">111</div>-->
                            </template>
                        </van-uploader>
                    </template>
                    <template slot='extra'>
                        <label disabled>{{uploader.length}}/1</label>
                    </template>
                </van-field>
                <van-field
                        v-model="approvalComments"
                        rows="2"
                        autosize
                        label="填写意见"
                        type="textarea"
                        maxlength="50"
                        placeholder="请输入"
                        show-word-limit
                />
                <div style="margin: 16px;" class="twoBtn" v-if="formData.curNodeLevel * 1 === -1">
                    <van-button type="info" round @click='onSubmitOver' :disabled='isOk'>确认发布</van-button>
                    <van-button type="info" @click='onCancelForm' round :disabled='isOk'>拒绝</van-button>
                </div>
                <div style="margin: 16px;" class="twoBtn" v-else>
                    <van-button type="info" @click='onSubmit' round :disabled='isOk'>同意</van-button>
                    <van-button type="info" @click='onCancelForm' round :disabled='isOk'>拒绝</van-button>
                </div>
            </van-form>
        </div>
    </base-page>
</template>

<script>
  // import MixinAuthority from '../utils/MixinAuthority'
  import MixinAuthority from '../utils/MixinAuthority'
  import * as $t from '../utils/tools'
  import { Toast } from 'vant'
  import {endsWith} from 'lodash'
  export default {
    name: 'ApproveTask',
    mixins: [MixinAuthority],
    components: { Toast },
    data() {
      return {
        isOk: true,
        approvalComments: '',
        isShowLoading: false,
        parentParams: {},
        formData: {},
        uploader: [],
        columns: ['是', '否'],
        showPicker: false,
        userInfo: {},
        oldUrls: []
      }
    },
    // beforeRouteEnter(to, from, next) {
    //   next(vm => {
    //
    //   })
    // },
    activated() {
      Toast.setDefaultOptions({ duration: 3000 });
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
      onClickLeft() {
        // this.$router.go(-1)
        this.$router.push({ name: 'Home' })
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
      beforeRead(file) {
        if (endsWith(file.name, '.exe')) {
          Toast.fail('不可上传exe文件')
          return false
        }
        this.oldUrls = JSON.parse(JSON.stringify(this.uploader))
        return true
      },
      beforeDel(file) {
        let index = this.uploader.findIndex((item, index, arr) => {
          return item.url === file.url
        })
        if (index > -1) {
          this.uploader.splice(index, 1)
          this.formData.attachments.splice(index, 1)
        }
        return true
      },
      deleteRead(file) {
        console.log(file)
      },
      onRead(file) {
        let formData = new FormData() // 构造一个 FormData，把后台需要发送的参数添加
        formData.append('file', file.file) // 接口需要传的参数
        this.$http.post1(this.$API.SLB_POST_UPLOAD, formData).then(res => {
          let resData = res.result
          this.formData.attachments.push({
            url: resData.imageURL,
            fileName: resData.fileName,
            showName: resData.showName
          })
          this.uploader = this.formData.attachments.map(item => {
            return {
              url: item.url,
              name: item.showName,
              file: {
                name: item.showName
              }
            }
          })
        }).catch((e) => {
          this.uploader = JSON.parse(JSON.stringify(this.oldUrls))
        })
      },
      onSubmitOver() {
        let params = {
          formId: this.parentParams.id,
          approvalStatus: 3,
          approvalComments: this.approvalComments,
          approvalUserId: this.userInfo.mobile,
          attachments: this.formData.attachments
        }
        // console.log(saveData)
        this.isShowLoading = true
        this.$http.post1(this.$API.SLB_GET_WORK_APPROVE, params).then((res) => {
          this.isShowLoading = false
          Toast.success('提交成功')
          // this.$router.go(-1)
          this.$router.push({ name: 'Home' })
        }).catch((e) => {
          this.isShowLoading = false
          // console.log(e)
        })
      },
      onSubmit() {
        let params = {
          formId: this.parentParams.id,
          approvalStatus: 1,
          approvalComments: this.approvalComments,
          approvalUserId: this.userInfo.mobile
        }
        // console.log(saveData)
        this.isShowLoading = true
        this.$http.post1(this.$API.SLB_GET_WORK_APPROVE, params).then((res) => {
          this.isShowLoading = false
          Toast.success('提交成功')
          // this.$router.go(-1)
          this.$router.push({ name: 'Home' })
        }).catch((e) => {
          this.isShowLoading = false
          // console.log(e)
        })
      },
      onCancelForm() {
        let params = {
          formId: this.parentParams.id,
          approvalStatus: 2,
          approvalComments: this.approvalComments,
          approvalUserId: this.userInfo.mobile
        }
        // console.log(saveData)
        this.isShowLoading = true
        this.$http.post1(this.$API.SLB_GET_WORK_APPROVE, params).then((res) => {
          this.isShowLoading = false
          Toast.success('提交成功')
          // this.$router.go(-1)
          this.$router.push({ name: 'Home' })
        }).catch((e) => {
          this.isShowLoading = false
          // console.log(e)
        })
      },
      getApproveTask() {
        this.isShowLoading = true
        this.$http.get(this.$API.SLB_GET_WORK_BYID, {
          id: this.parentParams.id
        }).then(res => {
          this.isOk = false
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
          this.oldUrls = JSON.parse(JSON.stringify(this.uploader))
          if (this.parentParams && !this.parentParams.isGet) {
            let getParams = {
              formId: this.parentParams.id,
              approvalUserId: this.userInfo.mobile
            }
            this.$http.post1(this.$API.SLB_POST_IS_OK, getParams).then((res) => {
              if (res.returncode * 1 === 0) {
                this.isOk = false
              } else {
                Toast.success(res.message)
                this.isOk = true
              }
            }).catch((e) => {
              this.isOk = true
              // console.log(e)
            })
          }
          this.isShowLoading = false
        }).catch((e) => {
          this.isOk = true
          this.isShowLoading = false
          // this.uploader = oldUrls
        })
      }
    }
  }
</script>

<style lang="less">
    @import '../styles/variable';

    .approve-task-wrap {
        .preview-cover {
            position: absolute;
            box-sizing: border-box;
            bottom: 0;
            width: 100%;
            /*padding: 4px;*/
            color: #fff;
            font-size: 12px;
            text-align: center;
            /*background: rgba(0, 0, 0, 0.3);*/
        }

        .twoBtn {
            .van-button--normal {
                width: 50%;
            }
        }

        .one-btn {
            .van-button--normal {
                width: 100%;
            }
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
