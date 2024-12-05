<template>
    <base-page class="new-task-wrap" :loading="isShowLoading">
        <van-nav-bar right-arrow title="新建审核单" @click-left="onClickLeft">
            <van-icon name="icon iconfont icon-ai207" slot="left"/>
        </van-nav-bar>
        <div class="patrol-list">
            <van-form v-model='formData'>
                <van-field
                        v-model="formData.proposeColumnName"
                        required
                        label="拟入栏目"
                        placeholder="请选择"
                        readonly
                        clickable
                        name="picker"
                        :value="formData.proposeColumn"
                        @click="showProposeColumnPicker = true"
                />
                <van-popup v-model="showProposeColumnPicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="proposeColumnOpt"
                            value-key='itemName'
                            @confirm="onProposeColumnConfirm"
                            @cancel="showProposeColumnPicker = false"
                    />
                </van-popup>
                <van-field
                        v-model="formData.columnName"
                        required
                        label="栏目名称"
                        v-if="formData.proposeColumnName === '其他'"
                        placeholder="请输入"
                />
                <van-field
                        v-model="formData.involveLeaderName"
                        required
                        :label="formData.proposeColumnName + '涉及领导'"
                        v-if="formData.proposeColumnName === '水利要闻'"
                        placeholder="请选择"
                        readonly
                        clickable
                        name="picker"
                        :value="formData.involveLeader"
                        @click="showInvolveLeaderPicker = true"
                />
                <van-popup v-model="showInvolveLeaderPicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="involveLeaderOpt"
                            value-key='itemName'
                            @confirm="onInvolveLeaderConfirm"
                            @cancel="showInvolveLeaderPicker = false"
                    />
                </van-popup>
                <!-- 不可修改 -->
                <van-field
                        v-model="formData.publicYearName"
                        required
                        placeholder="请选择"
                        v-if="formData.noChangePublicYear"
                        label="对外公开期限"
                        readonly
                        :value="formData.publicYearValue"
                />
                <!-- 可修改 -->
                <van-field
                        v-model="formData.publicYearName"
                        required
                        v-if="formData.changePublicYear"
                        label="对外公开期限"
                        placeholder="请选择"
                        readonly
                        clickable
                        name="picker"
                        :value="formData.publicYearValue"
                        @click="changePublicYearTip"
                />
                <van-popup v-model="showPublicYearPicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="publicYear"
                            @confirm="onPublicYearConfirm"
                            @cancel="showPublicYearPicker = false"
                    />
                </van-popup>
                <van-field
                        v-model="formData.publicYearSelectTime"
                        required
                        readonly
                        label="请选择对外公开期限"
                        v-if="formData.publicYearName === '到期即撤'"
                        placeholder="请选择"
                        @click="showPublicYearSelectTime = true"
                />
                <!-- <van-calendar :default-date="defcalendarValue"  
                class="publicYearSelectTime" color="#3366cc" v-model="showPublicYearSelectTime"
                 @confirm="publicYearSelectTimeConfirm" :max-date="new Date(2034,11,31)"
                 /> -->
                 <van-popup v-model="showPublicYearSelectTime" position="bottom">
                 <van-datetime-picker v-model="currentDate" type="date" title="选择年月日" :min-date="minDate" :max-date="maxDate"
                 @confirm="publicYearSelectTimeConfirm" @cancel="showPublicYearSelectTime = false" />
                </van-popup>

                <van-field
                        v-model="formData.publicYearInputTime"
                        required
                        label="请输入对外公开期限"
                        v-if="formData.publicYearName === '其他'"
                        placeholder="请输入"
                        @input="publicYearInputTime"
                />

                <van-field
                        v-model="formData.submitDeptName"
                        required
                        label="报送单位"
                        placeholder="请选择"
                        readonly
                        clickable
                        name="picker"
                        :value="formData.submitDept"
                        @click="showSubmitDeptPicker = true"
                />
                <van-popup v-model="showSubmitDeptPicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="submitDeptOpt"
                            @confirm="onSubmitDeptConfirm"
                            @cancel="showSubmitDeptPicker = false"
                    />
                </van-popup>
                <van-field
                        v-model="formData.directlyDeptName"
                        v-if='formData.submitDept'
                        required
                        :label="formData.submitDeptName"
                        placeholder="请选择"
                        readonly
                        clickable
                        name="picker"
                        :value="formData.directlyDept"
                        @click="showDirectlyDeptPicker = true"
                />
                <van-popup v-model="showDirectlyDeptPicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="directlyDeptOpt"
                            value-key='itemName'
                            @confirm="onDirectlyDeptConfirm"
                            @cancel="showDirectlyDeptPicker = false"
                    />
                </van-popup>

                <van-field
                        v-model="formData.submittedBy"
                        required
                        readonly
                        label="报送人"
                        placeholder="请输入"
                />
                <van-field
                        v-model="formData.offices"
                        label="所在处室"
                        required
                        readonly
                        placeholder="请输入"
                />
                <van-field
                        v-model="formData.officePhone"
                        label="办公电话"
                        required
                        placeholder="请输入"
                />
                <!-- <van-field
                        v-model="formData.telephone"
                        label="联系方式"
                        required
                        readonly
                        placeholder="请输入"
                /> -->
                <van-field
                        v-model="formData.sourceName"
                        label="信息来源"
                        placeholder="请选择"
                        readonly
                        required
                        clickable
                        name="picker"
                        :value="formData.source"
                        @click="showSourcePicker = true"
                />
                <van-popup v-model="showSourcePicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="sourceOpt"
                            value-key='text'
                            @confirm="onSourceConfirm"
                            @cancel="showSourcePicker = false"
                    />
                </van-popup>
                <van-field
                        v-if='formData.sourceName === "转载"'
                        v-model="formData.reprintContent"
                        label="转载来源"
                        required
                        placeholder="请输入"
                />
                <van-field
                        v-model="formData.title"
                        label="信息标题"
                        required
                        placeholder="请输入"
                />
                <van-field
                        v-model="formData.isSecretName"
                        required
                        label="是否涉密"
                        placeholder="请选择"
                        readonly
                        clickable
                        name="picker"
                        :value="formData.isSecret"
                        @click="showSfPicker = true"
                />
                <van-popup v-model="showSfPicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="sfOpt"
                            value-key='text'
                            @confirm="onSfConfirm"
                            @cancel="showSfPicker = false"
                    />
                </van-popup>
                <van-field
                        v-model="formData.isOpenName"
                        label="是否政务公开"
                        placeholder="请选择"
                        readonly
                        required
                        clickable
                        name="picker"
                        :value="formData.isOpen"
                        @click="showSfZwPicker = true"
                />
                <van-popup v-model="showSfZwPicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="sfOpt"
                            value-key='text'
                            @confirm="onIsOpenConfirm"
                            @cancel="showSfZwPicker = false"
                    />
                </van-popup>
                <van-field
                        v-model="formData.isLegalAuthorizationName"
                        required
                        label="是否获得合法授权"
                        placeholder="请选择"
                        readonly
                        clickable
                        name="picker"
                        :value="formData.isLegalAuthorization"
                        @click="showPicker = true"
                />
                <van-popup v-model="showPicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="sfOpt"
                            @confirm="onConfirm"
                            @cancel="showPicker = false"
                    />
                </van-popup>
                <van-field
                        v-model="formData.isEncroachInfoName"
                        required
                        label="是否存在侵害个人信息权益风险"
                        placeholder="请选择"
                        readonly
                        clickable
                        name="picker"
                        :value="formData.isEncroachInfo"
                        @click="showEiPicker = true"
                />
                <van-popup v-model="showEiPicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="sfOpt"
                            @confirm="onIsOpenEiConfirm"
                            @cancel="showEiPicker = false"
                    />
                </van-popup>
                <van-field
                        v-model="formData.directlyLeader"
                        v-if="formData.proposeColumnName !=='时政要闻'"
                        required
                        label="您所在司局或单位主要负责同志"
                        placeholder="请选择"
                        readonly
                        clickable
                        name="picker"
                        :value="formData.directlyLeaderMobileKey"
                        @click="showDirectlyPicker = true"
                />
                <van-popup v-model="showDirectlyPicker" position="bottom">
                    <van-tabs v-model="active" animated @click='checkOrg'>
                        <van-tab title='按用户'>
                            <van-search
                                    v-model="searchKey"
                                    placeholder="请输入姓名"
                                    @input='filterOpt'
                            />
                            <van-picker
                                    show-toolbar
                                    toolbar-position='bottom'
                                    :columns="newUserList"
                                    value-key='showName'
                                    @confirm="onSearchUserName"
                                    @cancel="showDirectlyPicker = false"
                            />
                        </van-tab>
                        <van-tab title='按部门'>
                            <div class='dh-wrapper'>
                                <span v-for='item in showText' :key='item.id + "dh"' @click='getNextOrg(item)'><a
                                        href='javascript: void(0)'
                                        style="text-decoration: underline;color: #000;font-weight: 500;font-size: 14px;">{{item.name}}&nbsp;/&nbsp;</a></span>
                            </div>
                            <van-list>
                                <van-cell v-for='item in orgList.orgStructList' :key='item.id' :title='item.name'
                                          icon='cluster' @click='getNextOrg(item)'>
                                </van-cell>
                                <van-cell v-for='item in orgList.orgMemberList' :key='item.mobile' :title='item.name'
                                          icon='manager' @click='setUser(item)'></van-cell>
                            </van-list>
                        </van-tab>
                    </van-tabs>
                </van-popup>
                <van-field
                        v-model="formData.isDirectlyLeaderName"
                        v-if="formData.proposeColumnName !=='时政要闻'"
                        required
                        label="请确认所选人是否为您所在司局或单位主要负责同志"
                        placeholder="请选择"
                        readonly
                        clickable
                        name="picker"
                        :value="formData.isDirectlyLeader"
                        @click="showIsDirectlyLeaderPicker = true"
                />
                <van-popup v-model="showIsDirectlyLeaderPicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="sfOpt"
                            @confirm="onIsDirectlyLeader"
                            @cancel="showIsDirectlyLeaderPicker = false"
                    />
                </van-popup>
                <!-- v-if="formData.isDirectlyLeaderName ==='否'" -->
                <van-field
                        label="非所在司局或单位主要负责同志审核情况说明"
                        rows="1"
                        v-if="formData.isDirectlyLeaderName ==='否'"
                        v-model="formData.notMainLeaderAuditDesc"
                        autosize
                        type="textarea"
                        placeholder="已报知本单位主要负责同志________审阅同意。或本单位主要负责同志_______授权_______同志审签"

                        required>
              </van-field>
                <!--                <van-field label="说明" value="移动端目前只支持图片上传" disabled />-->
                <van-field name="uploader" label="上传附件">
                    <template slot='input'>
                        <van-uploader v-model="uploader" @click-preview="clickPreview" accept="file"
                                      :delete="deleteRead" :before-delete="beforeDel" :before-read="beforeRead" :after-read="onRead"
                                      max-count='1'>
                            <template #preview-cover="{ fileItem }" v-if="uploader.length">
<!--                                <div class="preview-cover van-ellipsis">`{ fileItem.name }`</div>-->
                            </template>
                        </van-uploader>
                    </template>
                    <template slot='extra'>
                        <label disabled>{{uploader.length}}/1</label>
                    </template>
                </van-field>
                <div style="margin: 16px;">
                    <van-button round type="info" @click="submitForm">
                        提交
                    </van-button>
                    <van-button type="info" round @click='saveCz'>保存草稿</van-button>
                </div>
            </van-form>
        </div>
    </base-page>
</template>

<script>
  import MixinAuthority from '../utils/MixinAuthority'
  import * as $t from '../utils/tools'
  import { Toast, Calendar, Dialog,DatetimePicker   } from 'vant'
  import {trim, endsWith} from 'lodash'
  export default {
    name: 'NewTask',
    mixins: [MixinAuthority],
    components: { Toast,Calendar,DatetimePicker  },
    data() {
      return {
        zzStr: /(\d{3})\d{4}(\d{4})/,
        value1: '          ',
        value2: '          ',
        value3: '          ',
        searchKey: '',
        active: '',
        formData: {
          columnName: '', // 选择其他时拟入栏目名称
          involveLeaderName: '',
          involveLeader: '',
          attachments: [],
          status: 0,
          directlyLeaderMobile: '',
          directlyLeaderMobileKey: '',
          directlyLeader: '', // 选择司局领导
          isDirectlyLeader: '', // 是否您的司局领导
          isDirectlyLeaderName: '',
          isLegalAuthorizationName: '',
          isLegalAuthorization: '', // 是否获得合法授权
          isEncroachInfoName: '',
          isEncroachInfo: '', // 是否存在侵害个人信息权益风险
          isOpen: '',
          isOpenName: '', // 是否政务公开
          isSecret: '', // 是否涉密
          isSecretName: '',
          title: '', // 信息标题
          source: '', // 信息来源
          sourceName: '', // 信息来源名称
          reprintContent: '', // 转载来源
          telephone: '', // 申请人联系方式
          officePhone: '', // 办公电话
          offices: '', // 所在处室
          submittedBy: '', // 报送人
          submitDept: '', // 报送单位
          submitDeptName: '', // 报送单位名称
          proposeColumn: '', // 信息拟入栏目
          proposeColumnName: '',
          directlyDept: '', // 直属领导
          directlyDeptName: '',
          notMainLeaderAuditDesc: '',
          publicTimeLimit:'', // 对外公开期限
          publicYearValue: '',
          publicYearName:'',
          publicYearSelectTime:'',
          publicYearInputTime:'',
          changePublicYear:false,
          noChangePublicYear:false,
        },
        oldUrls: [],
        showDirectlyPicker: false,
        showInvolveLeaderPicker: false,
        showIsDirectlyLeaderPicker: false,
        showSfZwPicker: false,
        showEiPicker: false,
        showSfPicker: false,
        showSourcePicker: false, // 信息来源popup
        showSubmitDeptPicker: false,
        showDirectlyDeptPicker: false,
        showPublicYearPicker: false,
        showPublicYearSelectTime: false,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2050, 10, 1),
        currentDate: new Date(),
        isShowLoading: false,
        directlyDeptOpt: [],
        proposeColumnOpt: [],
        involveLeaderOpt: [],
        submitDeptOpt: [{
          code: '1',
          text: '机关司局'
        }, {
          code: '2',
          text: '直属单位'
        }, {
          code: '3',
          text: '地方水利'
        }],
        sourceOpt: [{
          code: 1,
          text: '单位供稿'
        }, {
          code: 2,
          text: '网站自采'
        }, {
          code: 3,
          text: '转载'
        }],
        publicYear:['长期','一年','三年','五年','到期即撤','其他'],
        sfOpt: [{ code: 1, text: '是' }, { code: 0, text: '否' }],
        showProposeColumnPicker: false,
        uploader: [],
        showPicker: false,
        userInfo: {},
        userList: [],
        newUserList: [],
        orgList: [],
        showText: [],
        parentParams: {}
      }
    },
    activated() {
      this.uploader = []
      this.userInfo = $t.getLocalStorage('tokenParamsSh')
      if (Array.isArray(Object.keys(this.userInfo)) && Object.keys(this.userInfo).length) {
        this.userInfo = $t.getLocalStorage('tokenParamsSh')
      } else {
        this.userInfo = {}
      }
      Toast.setDefaultOptions({ duration: 3000 });
      this.formData = {
        columnName: '',
        involveLeaderName: '',
        involveLeader: '',
        attachments: [],
        status: 0,
        directlyLeaderMobileKey: '',
        directlyLeaderMobile: '',
        directlyLeader: '', // 选择司局领导
        isDirectlyLeader: '', // 是否您的司局领导
        isDirectlyLeaderName: '',
        isLegalAuthorizationName: '',
        isLegalAuthorization: '', // 是否获得合法授权
        isEncroachInfoName: '',
        isEncroachInfo: '', // 是否存在侵害个人信息权益风险
        isOpen: '',
        isOpenName: '', // 是否政务公开
        isSecret: '', // 是否涉密
        isSecretName: '',
        title: '', // 信息标题
        source: '', // 信息来源
        sourceName: '', // 信息来源名称
        reprintContent: '', // 转载来源
        telephone: this.userInfo.mobile.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2"), // 申请人联系方式
        officePhone: '', // 办公电话
        offices: this.userInfo.orgName, // 所在处室
        submittedBy: this.userInfo.name, // 报送人
        submitDept: '', // 报送单位
        submitDeptName: '', // 报送单位名称
        proposeColumn: '', // 信息拟入栏目
        proposeColumnName: '',
        directlyDept: '', // 直属领导
        directlyDeptName: '',
        notMainLeaderAuditDesc: '',
        publicTimeLimit: '', // 对外公开期限
        noChangePublicYear: true // 默认显示对外公开期限
      }
      this.searchKey = ''
      this.showText = []
      this.initOpt()
      if (this.$route.query && this.$route.query.id) {
        this.parentParams = this.$route.query
        this.initCzData()
      } else {
        this.parentParams = {}
      }
    },
    created() {},
    methods: {
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
      initCzData() {
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

          // console.log(this.formData)
          if(resData.publicTimeLimit !=''){

            if(resData.publicTimeLimit.includes("到期即撤")) {
            this.formData.publicYearSelectTime = resData.publicTimeLimit.slice(4)
            this.formData.publicYearName = '到期即撤'
            this.currentDate = new Date(this.formData.publicYearSelectTime)
            } else if(resData.publicTimeLimit.includes("其他")) {
              this.formData.publicYearInputTime = resData.publicTimeLimit.slice(2)
              this.formData.publicYearName = '其他'
              console.log('其他')
            } else {
              this.formData.publicYearName = this.formData.publicTimeLimit
              this.formData.publicYearValue = this.formData.publicTimeLimit
            }

            if(resData.proposeColumnName === '司局直属' || resData.proposeColumnName === '地方水事') {
            // 不可修改
            this.formData.noChangePublicYear = true
            this.formData.changePublicYear = false

            } else if(resData.proposeColumnName === '政策解读') {
              // 不可修改
              this.formData.noChangePublicYear = true
              this.formData.changePublicYear = false
            } else if(resData.proposeColumnName === '媒体之声') {
              // 不可修改
              this.formData.noChangePublicYear = true
              this.formData.changePublicYear = false
            } else if(resData.proposeColumnName === '通知公告') {
              // 可修改
              this.formData.noChangePublicYear = false
              this.formData.changePublicYear = true
            } else if(resData.proposeColumnName === '人事信息') {
              // 可修改
              this.formData.noChangePublicYear = false
              this.formData.changePublicYear = true
            } else {
              // 其他 可修改
              this.formData.noChangePublicYear = false
              this.formData.changePublicYear = true
            }
          }
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
          this.isShowLoading = false
        }).catch((e) => {
          // console.log(e)
          this.isShowLoading = false
          // this.uploader = oldUrls
        })
      },
      onClickLeft() {
        this.$router.go(-1)
      },
      checkOrg() {
        if (this.active * 1 === 1) {
          // this.showText = []
        }
      },
      setUser(item) {
        this.formData.directlyLeader = item.name
        this.formData.directlyLeaderMobile = item.mobile
        this.showDirectlyPicker = false
      },
      getNextOrg(item) {
        let index = this.showText.findIndex((val, index, arr) => {
          return val.id === item.id
        })
        if (index > -1) {
          this.showText = this.showText.slice(0, index)
        }
        this.showText.push(item)
        this.$http.post(this.$API.SLB_POST_ORG, {
          orgId: item.id
        }).then((res) => {
          this.orgList = res.result
        }).catch((e) => {
          // console.log(e)
        })
      },
      filterOpt() {
        if (this.searchKey !== '') {
          this.newUserList = []
          this.$http.post1(this.$API.SLB_POST_MEMBER, {
            pageSize: 50,
            pageNum: 1,
            name: this.searchKey
          }).then((res) => {
            this.userList = res.result.list
            this.userList.forEach(item => {
              item.showName = item.name + '（' + item.orgName + '）'
            })
            this.newUserList = [...[], ...this.userList]
          }).catch((e) => {
            // console.log(e)
          })
        }
      },
      initOpt() {
        this.$http.post(this.$API.SLB_POST_GETBYPARAMS, {
          code: 'd_propose_column'
        }).then((res) => {
          this.proposeColumnOpt = res.result
        }).catch((e) => {
          // console.log(e)
        })
        this.$http.post1(this.$API.SLB_POST_MEMBER, {
          pageSize: 999,
          pageNum: 1
        }).then((res) => {
          this.userList = res.result.list
          this.userList.forEach(item => {
            item.showName = item.name + '（' + item.orgName + '）'
          })
          this.newUserList = [...[], ...this.userList]
        }).catch((e) => {
          // console.log(e)
        })
        this.$http.post(this.$API.SLB_POST_ORG, {
          orgId: 0
        }).then((res) => {
          this.orgList = res.result
        }).catch((e) => {
          // console.log(e)
        })
        this.$http.post(this.$API.SLB_POST_GETBYPARAMS, {
          code: 'd_involve_leader'
        }).then((res) => {
          this.involveLeaderOpt = res.result
        }).catch((e) => {
          // console.log(e)
        })
      },
      // 存草稿
      saveCz() {
        // 加载直属领导下拉框数据
        let saveData = {
          'id': this.parentParams.id ? this.parentParams.id : undefined,
          'columnName': this.formData.columnName,
          'proposeColumn': this.formData.proposeColumn,
          'involveLeader': this.formData.involveLeader,
          'isOpen': this.formData.isOpen,
          'submitDept': this.formData.submitDept,
          'directlyDept': this.formData.directlyDept,
          'submittedBy': this.formData.submittedBy,
          'offices': this.formData.offices,
          'officePhone': this.formData.officePhone,
          'telephone': this.formData.telephone,
          'source': this.formData.source,
          'reprintContent': this.formData.reprintContent,
          'title': this.formData.title,
          'isSecret': this.formData.isSecret,
          'isLegalAuthorization': this.formData.isLegalAuthorization,
          'isEncroachInfo': this.formData.isEncroachInfo,
          'directlyLeader': this.formData.directlyLeader,
          'directlyLeaderMobile': this.formData.directlyLeaderMobile,
          'isDirectlyLeader': this.formData.isDirectlyLeader,
          'status': -1,
          'attachments': this.formData.attachments,
          // 'mobile': this.userInfo.mobile,
          'notMainLeaderAuditDesc': this.formData.notMainLeaderAuditDesc,
          'publicTimeLimit': this.formData.publicTimeLimit
        }

        // console.log(saveData)
        if (this.formData.publicTimeLimit === '') {
          Toast.fail('请选择对外公开期限')
          return false
        }
        if (this.formData.proposeColumn === '') {
          Toast.fail('请选择拟入栏目')
          return false
        }
        if (this.formData.proposeColumnName === '其他' && this.formData.columnName === '') {
          Toast.fail('请填写拟入栏目名称')
          return false
        }
        
        if (this.formData.involveLeader === '' && this.formData.proposeColumnName === '水利要闻') {
          Toast.fail('请选择' + this.formData.proposeColumnName + '涉及领导')
          return false
        }
        if (this.formData.submitDept === '') {
          Toast.fail('请选择报送单位')
          return false
        }
        if (this.formData.directlyDeptName === '') {
          Toast.fail('请选择' + this.formData.submitDeptName)
          return false
        }
        if (this.formData.submittedBy === '') {
          Toast.fail('请输入报送人')
          return false
        }
        if (this.formData.directlyDeptName === '') {
          Toast.fail('请选择' + this.formData.submitDeptName)
          return false
        }
        if (this.formData.directlyLeader === '' && this.formData.proposeColumnName !== '时政要闻') {
          Toast.fail('请选择您所在司局或单位主要负责同志')
          return false
        }
        if (this.formData.officePhone === '') {
          Toast.fail('请填写办公电话')
          return false
        }
        if (this.formData.title === '') {
          Toast.fail('请填写信息标题')
          return false
        }
        if (this.formData.sourceName === '转载' && this.formData.reprintContent === '') {
          Toast.fail('请填写转载来源')
          return false
        }
        if (this.formData.source === '') {
          Toast.fail('请选择信息来源')
          return false
        }
        if (this.formData.isDirectlyLeader === '') {
          Toast.fail('请确认所选人是否为您所在司局或单位主要负责同志')
          return false
        }
        if (this.formData.isDirectlyLeaderName === '否' && trim(this.formData.notMainLeaderAuditDesc) === '' ) {
          Toast.fail('请填写非所在司局或单位主要负责同志审核情况说明')
          return false
        }
        if (this.formData.isLegalAuthorization === '') {
          Toast.fail('请选择是否获得合法授权')
          return false
        }
        if (this.formData.isEncroachInfo === '') {
          Toast.fail('请选择是否存在侵害个人信息权益风险')
          return false
        }
        if (this.formData.isEncroachInfo === 1) {
          Toast.fail('存在侵害个人信息权益风险，无法提交')
          return false
        }
        if (this.formData.isOpen === '') {
          Toast.fail('请选择是否政务公开')
          return false
        }
        if (this.formData.isSecret === '') {
          Toast.fail('请选择是否涉密')
          return false
        }
        if (this.formData.isLegalAuthorization * 1 === 0) {
          Toast.fail('未获得合法授权，无法提交')
          return false
        }
        if (this.formData.isSecret === 1) {
          Toast.fail('涉密信息，无法提交')
          return false
        }
        this.isShowLoading = true
        this.$http.post1(this.$API.SLB_POST_WORKFORM_ADD, saveData).then((res) => {
          this.isShowLoading = false
          Toast.success('新建成功')
          this.$router.go(-1)
        }).catch((e) => {
          this.isShowLoading = false
          // console.log(e)
        })
      },
      submitForm() {
        // 加载直属领导下拉框数据
        let saveData = {
          'id': this.parentParams.id ? this.parentParams.id : undefined,
          'columnName': this.formData.columnName,
          'proposeColumn': this.formData.proposeColumn,
          'involveLeader': this.formData.involveLeader,
          'isOpen': this.formData.isOpen,
          'submitDept': this.formData.submitDept,
          'directlyDept': this.formData.directlyDept,
          'submittedBy': this.formData.submittedBy,
          'offices': this.formData.offices,
          'officePhone': this.formData.officePhone,
          'telephone': this.formData.telephone,
          'source': this.formData.source,
          'reprintContent': this.formData.reprintContent,
          'title': this.formData.title,
          'isSecret': this.formData.isSecret,
          'isLegalAuthorization': this.formData.isLegalAuthorization,
          'isEncroachInfo': this.formData.isEncroachInfo,
          'directlyLeader': this.formData.directlyLeader,
          'directlyLeaderMobile': this.formData.directlyLeaderMobile,
          'isDirectlyLeader': this.formData.isDirectlyLeader,
          'status': 0,
          'attachments': this.formData.attachments,
          // 'mobile': this.userInfo.mobile,
          'notMainLeaderAuditDesc': this.formData.notMainLeaderAuditDesc,
          'publicTimeLimit': this.formData.publicTimeLimit
        }

        if (this.formData.proposeColumn === '') {
          Toast.fail('请选择拟入栏目')
          return false
        }
        if (this.formData.proposeColumnName === '其他' && this.formData.columnName === '') {
          Toast.fail('请填写拟入栏目名称')
          return false
        }
        if (this.formData.publicTimeLimit === '') {
          Toast.fail('请选择对外公开期限')
          return false
        }
        if (this.formData.involveLeader === '' && this.formData.proposeColumnName === '水利要闻') {
          Toast.fail('请选择' + this.formData.proposeColumnName + '涉及领导')
          return false
        }
        if (this.formData.submitDept === '') {
          Toast.fail('请选择报送单位')
          return false
        }
        if (this.formData.directlyDeptName === '') {
          Toast.fail('请选择' + this.formData.submitDeptName)
          return false
        }
        if (this.formData.submittedBy === '') {
          Toast.fail('请输入报送人')
          return false
        }
        if (this.formData.directlyDeptName === '') {
          Toast.fail('请选择' + this.formData.submitDeptName)
          return false
        }
        if (this.formData.directlyLeader === '' && this.formData.proposeColumnName !== '时政要闻') {
          Toast.fail('请选择您所在司局或单位主要负责同志')
          return false
        }
        if (this.formData.officePhone === '') {
          Toast.fail('请填写办公电话')
          return false
        }
        if (this.formData.title === '') {
          Toast.fail('请填写信息标题')
          return false
        }
        if (this.formData.sourceName === '转载' && this.formData.reprintContent === '') {
          Toast.fail('请填写转载来源')
          return false
        }
        if (this.formData.source === '') {
          Toast.fail('请选择信息来源')
          return false
        }
        if (this.formData.isDirectlyLeader === '') {
          Toast.fail('请确认所选人是否为您所在司局或单位主要负责同志')
          return false
        }
        if (this.formData.isDirectlyLeaderName === '否' && trim(this.formData.notMainLeaderAuditDesc) === '' ) {
          Toast.fail('请填写非所在司局或单位主要负责同志审核情况说明')
          return false
        }
        if (this.formData.isLegalAuthorization === '') {
          Toast.fail('请选择是否获得合法授权')
          return false
        }
        if (this.formData.isEncroachInfo === '') {
          Toast.fail('请选择是否存在侵害个人信息权益风险')
          return false
        }
        if (this.formData.isEncroachInfo === 1) {
          Toast.fail('存在侵害个人信息权益风险，无法提交')
          return false
        }
        if (this.formData.isOpen === '') {
          Toast.fail('请选择是否政务公开')
          return false
        }
        if (this.formData.isSecret === '') {
          Toast.fail('请选择是否涉密')
          return false
        }
        if (this.formData.isLegalAuthorization * 1 === 0) {
          Toast.fail('未获得合法授权，无法提交')
          return false
        }
        if (this.formData.isSecret === 1) {
          Toast.fail('涉密信息，无法提交')
          return false
        }
        // console.log(saveData)
        this.isShowLoading = true
        this.$http.post1(this.$API.SLB_POST_WORKFORM_ADD, saveData).then((res) => {
          this.isShowLoading = false
          Toast.success('新建成功')
          this.$router.go(-1)
        }).catch((e) => {
          this.isShowLoading = false
          // console.log(e)
        })
      },
      beforeRead(file) {
        console.log(file);
        if(file.size > 10 * 1024 * 1024) {
          Toast.fail('上传文件大小不能超过10M')
          return false
        }
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
          if (res.returncode * 1 !== 0) {
            $T.fail(res.message)
            return
          }
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
          if (res.returncode * 1 !== 0) {
            $T.fail(res.message)
            return
          }
        })
      },
      onSearchUserName(val) {
        this.formData.directlyLeader = val.name
        this.formData.directlyLeaderMobile = val.mobile
        this.showDirectlyPicker = false
      },
      onProposeColumnConfirm(val) {
        this.formData.proposeColumn = val.itemCode
        this.formData.proposeColumnName = val.itemName
        this.showProposeColumnPicker = false

        if(val.itemName === '司局直属' || val.itemName === '地方水事') {
          // 不可修改
          this.formData.publicTimeLimit = '一年'
          this.formData.publicYearName = this.formData.publicTimeLimit
          this.formData.publicYearValue = this.formData.publicTimeLimit
          this.formData.noChangePublicYear = true
          this.formData.changePublicYear = false
        } else if(val.itemName === '政策解读') {
          // 不可修改
          this.formData.publicTimeLimit = '长期'
          this.formData.publicYearName = this.formData.publicTimeLimit
          this.formData.publicYearValue = this.formData.publicTimeLimit
          this.formData.noChangePublicYear = true
          this.formData.changePublicYear = false
        } else if(val.itemName === '媒体之声') {
          // 不可修改
          this.formData.publicTimeLimit = '三年'
          this.formData.publicYearName = this.formData.publicTimeLimit
          this.formData.publicYearValue = this.formData.publicTimeLimit
          this.formData.noChangePublicYear = true
          this.formData.changePublicYear = false
        } else if(val.itemName === '通知公告') {
          // 可修改
          this.formData.publicTimeLimit = '一年'
          this.formData.publicYearName = this.formData.publicTimeLimit
          this.formData.publicYearValue = this.formData.publicTimeLimit
          this.formData.noChangePublicYear = false
          this.formData.changePublicYear = true
        } else if(val.itemName === '人事信息') {
          // 可修改
          this.formData.publicTimeLimit = '长期'
          this.formData.publicYearName = this.formData.publicTimeLimit
          this.formData.publicYearValue = this.formData.publicTimeLimit
          this.formData.noChangePublicYear = false
          this.formData.changePublicYear = true
        } else {
          // 其他 可修改
          this.formData.publicTimeLimit = ''
          this.formData.publicYearName = ''
          this.formData.publicYearValue = ''
          this.formData.noChangePublicYear = false
          this.formData.changePublicYear = true
        }
      },
      changePublicYearTip() {
        Dialog.confirm({
          title: '请确认',
          message: '是否修改默认对外公开期限？',
          // theme: 'round-button'
        })
          .then(() => {
            // on confirm
            this.showPublicYearPicker = true
          })
          .catch(() => {
            // on cancel
          });
        
      },
      onDirectlyDeptConfirm(val) {
        this.formData.directlyDept = val.itemCode
        this.formData.directlyDeptName = val.itemName
        this.showDirectlyDeptPicker = false
      },
      onSourceConfirm(val) {
        this.formData.source = val.code
        this.formData.sourceName = val.text
        this.showSourcePicker = false
      },
      onSfConfirm(val) {
        this.formData.isSecret = val.code
        this.formData.isSecretName = val.text
        this.showSfPicker = false
      },
      onIsOpenConfirm(val) {
        this.formData.isOpen = val.code
        this.formData.isOpenName = val.text
        this.showSfZwPicker = false
      },
      onIsOpenEiConfirm(val) {
        this.formData.isEncroachInfo = val.code
        this.formData.isEncroachInfoName = val.text
        this.showEiPicker = false
      },
      onInvolveLeaderConfirm(val) {
        this.formData.involveLeader = val.itemCode
        this.formData.involveLeaderName = val.itemName
        this.showInvolveLeaderPicker = false
      },
      onSubmitDeptConfirm(val) {
        this.formData.submitDeptName = val.text
        this.formData.submitDept = val.code
        this.showSubmitDeptPicker = false
        // 加载直属领导下拉框数据
        this.$http.post(this.$API.SLB_POST_GETBYPARAMS, {
          code: 'd_dept_submit',
          parentCode: val.code
        }).then((res) => {
          this.directlyDeptOpt = res.result
        }).catch((e) => {
          // console.log(e)
        })
      },
      formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
      onPublicYearConfirm(val) {
        this.formData.publicYearName = val
        this.formData.publicYearValue = val
        this.formData.publicYearSelectTime = ''
        this.formData.publicYearInputTime = ''
        if(val ==='到期即撤') {
          this.formData.publicTimeLimit = ''
          this.formData.publicYearValue = ''
          this.showPublicYearPicker = false
        } else if(val ==='其他') {
          this.formData.publicTimeLimit = ''
          this.formData.publicYearValue = ''
          this.showPublicYearPicker = false
        } else {
          this.formData.publicTimeLimit = val
          this.showPublicYearPicker = false
        }
        
      },
      publicYearSelectTimeConfirm(val) {
        val = this.formatDate(val)
        this.formData.publicTimeLimit = '到期即撤'+val
        this.formData.publicYearSelectTime = val
        this.formData.publicYearValue = val
        this.showPublicYearSelectTime = false
      },
      publicYearInputTime(val) {
        this.formData.publicTimeLimit = '其他' + val
        this.formData.publicYearValue = val
      },
      onIsDirectlyLeader(val) {
        this.formData.isDirectlyLeader = val.code
        this.formData.isDirectlyLeaderName = val.text
        this.showIsDirectlyLeaderPicker = false
      },
      onConfirm(value) {
        this.formData.isLegalAuthorization = value.code
        this.formData.isLegalAuthorizationName = value.text
        this.showPicker = false
      }
    }
  }
</script>

<style lang="less">
    @import "../styles/variable";

    .new-task-wrap {

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

        .van-search {
            height: 35px;
            margin-top: 15px;
        }

        .van-field {
            padding: 3px 10px !important;
        }

        .dh-wrapper {
            padding: 5px 10px;
        }

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
        .input-span{
          text-decoration: underline;
          width: 50px;
          display: inline-block;
          height: 30px;
          .van-cell{
            padding: 0 !important;
          }
        }
        .publicYearSelectTime .van-button {
          margin-left: auto;
          margin-right: auto;
        }
    }
</style>
