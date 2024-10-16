<template>
    <base-page class="my-works-wrap">
        <van-nav-bar right-arrow title="搜索" @click-left="onClickLeft">
            <van-icon name="icon iconfont icon-ai207" slot="left"/>
        </van-nav-bar>
        <div class="patrol-list">
            <van-form>
                <van-field v-model="searchTitle" label="标题" :placeholder="'请输入'" :rules="[{ required: false }]" />
                <van-field v-model="submittedBy" label="报送人" :placeholder="'请输入'" :rules="[{ required: false }]" />

                <van-field v-model="proposeColumnName" label="拟入栏目" :placeholder="'请选择'" input-align="right" readonly right-icon="arrow" :value="proposeColumn" @click="showProposeColumnPicker = true" />
                <van-popup v-model="showProposeColumnPicker" position="bottom">
                    <van-picker show-toolbar :columns="proposeColumnOpt" value-key='itemName'  @confirm="onProposeColumnConfirm" @cancel="showProposeColumnPicker = false" />
                </van-popup>

                <van-field v-model="submitDeptName" label="报送单位" :placeholder="'请选择'" input-align="right" readonly right-icon="arrow" @click="showSubmitDeptPicker = true" />
                <van-popup v-model="showSubmitDeptPicker" position="bottom">
                    <van-picker show-toolbar :columns="submitDeptOpt" @confirm="onConfirm2" @cancel="onCancelDept2" />
                </van-popup>
                
                <van-field v-model="directlyDeptName" v-if='submitDept' :label="submitDeptName" placeholder="请选择" input-align="right" readonly right-icon="arrow" clickable name="picker" :value="directlyDept" @click="showDirectlyDeptPicker = true" />
                <van-popup v-model="showDirectlyDeptPicker" position="bottom">
                    <van-picker show-toolbar :columns="directlyDeptOpt" value-key='itemName' @confirm="onDirectlyDeptConfirm" @cancel="showDirectlyDeptPicker = false" />
                </van-popup>

                <van-field v-model="bgDate" label="开始时间" :placeholder="'请选择'" input-align="right" readonly right-icon="arrow" @click="showBeginDate" />
                <van-field v-model="endDate" label="结束时间" :placeholder="'请选择'" input-align="right" readonly right-icon="arrow" @click="showEndDate" />
                <div class="center-button"><van-button round type="info" @click="toSearch()">搜索</van-button></div>
                <van-popup v-model="showPickerDate" position="bottom" >
                <van-datetime-picker v-model="currentDate" type="date" @cancel="onCancelDate" @confirm="onConfirmDate" :min-date="minDate" :max-date="maxDate" :formatter="formatter" />
                </van-popup>
                <van-popup v-model="showPickerDate1" position="bottom">
                <van-datetime-picker v-model="currentDate1" type="date" @cancel="onCancelDate1" @confirm="onConfirmDate1" :min-date="minDate1" :max-date="maxDate1" :formatter="formatter" />
                </van-popup>
            </van-form>

            <div class="search-list-warp">
              <van-list 
            v-model="isShowLoading"
            :finished="finished"
            :immediate-check="false"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <van-cell size="large" v-for='item in tableData' :key='item.id' @click='lookHistoryTask(item)'>
                <template slot="title">
                    <div class='left-msg'>
                        <span><van-icon name='checked'></van-icon></span>
                        <span>{{item.title}}</span>
                    </div>
                    <div class='right-msg'>
                        <!--                    <span><van-tag type="warning">低</van-tag></span>-->
                        <span>{{item.statusStr}}</span>
                    </div>
                </template>
                <template slot="label">
                    <div><span class="label-style">{{item.proposeColumn}}</span></div>
                    <div><span class="label-style">{{item.applyTime}}</span></div>
                </template>
            </van-cell>
            </van-list>
            </div>

        </div>

    </base-page>
</template>

<script>
import { Toast } from 'vant'
  import MixinAuthority from '../utils/MixinAuthority'
  import * as $t from '../utils/tools'
  export default {
    name: 'MySearch',
    mixins: [MixinAuthority],
    components: {},
    data(){
        return {
      showPicker: false,
      minDate: new Date(2019, 0, 1),
      maxDate: new Date(),
      minDate1: new Date(2019, 0, 1),
      maxDate1: new Date(),
      currentDate: new Date(),
      currentDate1: new Date(),
      showPickerDate: false,
      showPickerDate1: false,
      showSubmitDeptPicker: false,
      showDirectlyDeptPicker:false,
      showProposeColumnPicker:false,
      searchTitle: '',
      logtype: '',
      submittedBy: '', // 报送人
      proposeColumn:'', // 拟入栏目code值
      proposeColumnName:'', //拟入栏目名称
      proposeColumnOpt: [],
      directlyDeptOpt:[],
      submitDeptName:'', // 报送单位名称
      submitDept:'', //报送单位code值
      directlyDept:'', // 二级栏目code值
      directlyDeptName:'', // 二级栏目名称
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
      bgDate: '', // 查询时间
      bgDate2: '', // 添加时分秒
      endDate: '',
      endDate2: '', // 添加时分秒
      // 数据
      tableData: [],
        total: 0,
        pages: 1,
        isShowLoading: false,
        active: '',
        finished: false,
        refreshing: false,
        pageInfo: {
          pageNum: 1,
          pageSize: 15
        }
    }
    },
    activated(){
      this.initData();
    },
    methods: {
      onConfirm2(val) {
        console.log(val.text);
        this.submitDeptName = val.text
        this.submitDept = val.code
        this.showSubmitDeptPicker = false     
        this.directlyDeptName = '' 
        this.directlyDept = ''

        // 获取报送单位
        this.$http.post(this.$API.SLB_POST_GETBYPARAMS, {
          code: 'd_dept_submit',
          parentCode: val.code
        }).then((res) => {
          this.directlyDeptOpt = res.result
        }).catch((e) => {
          // console.log(e)
        })
      },
      onCancelDept2() {
        this.showSubmitDeptPicker = false
      },
      onDirectlyDeptConfirm(val) {
        this.directlyDept = val.itemCode
        this.directlyDeptName = val.itemName
        this.showDirectlyDeptPicker = false
      },
      onProposeColumnConfirm(val) {
        this.proposeColumn = val.itemCode
        this.proposeColumnName = val.itemName
        this.showProposeColumnPicker = false

        
      },
      initData() {
        // 页面初始化载入信息
        // 获取你如栏目
        this.$http.post(this.$API.SLB_POST_GETBYPARAMS, {
          code: 'd_propose_column'
        }).then((res) => {
          this.proposeColumnOpt = res.result;
        }).catch((e) => {
          // console.log(e)
        })
      },
      toSearch(){
        if((this.searchTitle == "" && this.bgDate !=="" &&this.endDate!=="")||
        (this.submittedBy =="" && this.bgDate !=="" &&this.endDate!=="") ||
        (this.directlyDeptName =="" && this.bgDate !=="" &&this.endDate!=="") ||
        (this.proposeColumnName =="" && this.bgDate !=="" &&this.endDate!=="") ||
         (this.submitDeptName == "" && this.bgDate !=="" &&this.endDate!=="")) {
          // 开始和结束时间不为空
          console.log('开始和结束时间不为空');
          this.toSearchInit();
        } else if((this.searchTitle !=="" && this.bgDate =="" &&this.endDate=="")||
        (this.submittedBy !=="" && this.bgDate =="" &&this.endDate=="")||
        (this.directlyDeptName !=="" && this.bgDate =="" &&this.endDate=="")||
        (this.proposeColumnName !=="" && this.bgDate =="" &&this.endDate=="")||
         (this.submitDeptName !== "" && this.bgDate =="" &&this.endDate=="")) {
          // 开始和结束时间为空
          console.log('开始和结束时间为空');
          this.toSearchInit();
        } else if((this.searchTitle !=="" && this.bgDate!=="" && this.endDate !=="")||
        (this.submittedBy !=="" && this.bgDate!=="" && this.endDate !=="") ||
        (this.directlyDeptName !=="" && this.bgDate!=="" && this.endDate !=="") ||
        (this.proposeColumnName !=="" && this.bgDate!=="" && this.endDate !=="") ||
        (this.submitDeptName !=="" && this.bgDate!=="" && this.endDate !=="")){
          // 都不为空
          console.log('都不为空');
          this.toSearchInit()

        } else if(this.searchTitle =="" &&this.bgDate !=="" && this.endDate =="") {
          // 只有开始时间
          Toast.fail("请选择结束时间!");
        } else if(this.searchTitle =="" &&this.bgDate =="" && this.endDate !=="") {
          // 只有结束时间
          Toast.fail("请选择开始时间!");
        } else if(this.searchTitle !=="" && this.bgDate !=="" && this.endDate == "") {
          // 结束时间为空
          Toast.fail("请选择结束时间!");
        } else if(this.searchTitle !=="" &&this.bgDate =="" && this.endDate !=="") {
          // 开始时间为空
          Toast.fail("请选择开始时间!");
        } else if(this.searchTitle =="" && this.bgDate =="" && this.endDate ==""){
          Toast.fail("请填写标题、报送人、拟入栏目、报送单位或选择时间!");
        } else if (this.submitDeptName !== "" && this.directlyDeptName == "") {
          Toast.fail("请填写报送单位!");
        }
      },
      toSearchInit(){
        // 点击搜索
          // let userInfo = $t.getLocalStorage('tokenParamsSh')
          // this.searchTitle
          // this.bgDate
          // this.endDate
          this.isShowLoading = true;
          this.finished = false;
        let params = {
        title: this.searchTitle,
        startDate: this.bgDate2,
        endDate: this.endDate2,
        submitDept: this.submitDept,
        submittedBy: this.submittedBy,
        directlyDept: this.directlyDept,
        proposeColumn: this.proposeColumn
        }
        this.tableData = [];
        this.pageInfo.pageNum = 1;
        this.$http.post1(this.$API.SLB_POST_SEARCH_LIST, Object.assign(params, this.pageInfo)).then(res => {
          const rows = res.result.list
          if (rows === null || rows.length === 0) {
            // 加载结束
            console.log('加载结束');
            this.finished = true
            return
          }
          if (rows.length < this.pageInfo.pageSize) {
            // 最后一页不足10条的情况
            console.log('不足10条');
            this.finished = true
          }
          // 处理数据
          if (this.pageInfo.pageNum === 1) {
            this.tableData = rows
          } else {
            this.tableData = this.tableData.concat(rows)
          }
          // this.finished = true;

        }).catch((e) => {

        }).finally(() => {
          this.isShowLoading = false
          this.refreshing = false
          // console.log("finished:"+this.finished)
          // console.log("pageNum:"+this.pageInfo.pageNum);
          // console.log("isShowLoading:"+this.isShowLoading);
        })
        
      },
      searchList(){
        // 下拉加载
          // let userInfo = $t.getLocalStorage('tokenParamsSh')
          // this.searchTitle
          // this.bgDate
          // this.endDate
        let params = {
        title: this.searchTitle,
        startDate: this.bgDate2,
        endDate: this.endDate2,
        submitDept: this.submitDept,
        submittedBy: this.submittedBy,
        directlyDept: this.directlyDept,
        proposeColumn: this.proposeColumn
        }
        this.$http.post1(this.$API.SLB_POST_SEARCH_LIST, Object.assign(params, this.pageInfo)).then(res => {
          const rows = res.result.list
          if (rows === null || rows.length === 0) {
            // 加载结束
            console.log('加载结束');
            this.finished = true
            return
          }
          if (rows.length < this.pageInfo.pageSize) {
            // 最后一页不足10条的情况
            console.log('不足10条');
            this.finished = true
          }
          // 处理数据
          if (this.pageInfo.pageNum === 1) {
            this.tableData = rows
          } else {
            this.tableData = this.tableData.concat(rows)
          }
          // this.finished = true;

        }).catch((e) => {

        }).finally(() => {
          this.isShowLoading = false
          this.refreshing = false
          // console.log("finished:"+this.finished)
          // console.log("pageNum:"+this.pageInfo.pageNum);
          // console.log("isShowLoading:"+this.isShowLoading);
        })
        
      },
      onLoad() {
        this.finished = false;
        this.pageInfo.pageNum++
        this.searchList()
        // console.log('onload');
        // this.isShowLoading = true;
      },
      lookHistoryTask(item) {
        this.$router.push({ name: 'LookHistoryTask', query: Object.assign({}, item) })
      },
        onClickLeft() {
        // this.$router.go(-1)
        this.$router.push({ name: 'Home' })
        this.tableData = [];
        this.searchTitle = '';
        this.submittedBy = '';
        this.submitDeptName = '';
        this.bgDate = '';
        this.endDate = '';
        this.proposeColumn = '';
        this.proposeColumnName= '';
        this.finished = false;
        this.pageInfo.pageNum = 1;
      },
      // 显示查询日期
      showBeginDate () {
        this.showPickerDate = true
      },
      showEndDate () {
        this.showPickerDate1 = true
      },
      // 日期组件自定义格式
      formatter (type, value) {
        if (type === 'year') {
          this.value1 = value   // 可以拿到当前点击的数值
          return `${value}年`
        } else if (type === 'month') {
          this.value2 = value
          return `${value}月`
        }
        this.value3 = value
        return `${value}日`
      },
      onCancelDate () {
        this.showPickerDate = false
      },
      onConfirmDate () {
        console.log('开始时间',this.value1)  // 数值来自日期组件自定义格式的方法回调
        console.log('开始时间',this.value2)
        console.log('开始时间',this.value3)
        this.bgDate = `${this.value1}-${this.value2}-${this.value3}`  // 字符串拼接 结果入2020-07-03
        this.bgDate2 = `${this.value1}-${this.value2}-${this.value3} 00:00:00`
        this.onCancelDate()
      },
      onCancelDate1 () {
        this.showPickerDate1 = false
      },
      onConfirmDate1 () {
        console.log('结束时间',this.value1)  // 数值来自日期组件自定义格式的方法回调
        console.log('结束时间',this.value2)
        console.log('结束时间',this.value3)
        this.endDate = `${this.value1}-${this.value2}-${this.value3}`
        this.endDate2 = `${this.value1}-${this.value2}-${this.value3} 23:59:59`
        this.onCancelDate1()
      }
      
    }
  }
</script>

<style lang="less">
  @import '../styles/variable';

  .my-works-wrap {

        .van-pull-refresh {
            height: calc(100vh - 100px) !important;
            overflow: auto !important;
        }
        .search-list-warp {
          height: 66vh;
          overflow: hidden;
        }
        .van-list { 
        height: 100%!important;
        overflow: auto!important;
        }
        .van-nav-bar__title {
            color: #fff;
        }

        .left-msg {
            margin-right: 35px;
            .van-icon-checked {
                color: #55a532;
                margin-right: 10px;
                position: relative;
                top: 3px;
            }
        }

        .right-msg {
            position: absolute;
            right: 9px;
            top: 12px;
            font-size: 12px;
            color: #ff976a;

            .van-tag--warning {
                font-size: 8px;
                padding: 0 3px;
                background-color: #f7d8ca;
                margin-right: 5px;
                color: #63a35c;
            }
        }

        .label-style {
            line-height: 30px;
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
  .center-button {
    text-align: center;
    padding: 15px 0;
    background: #ffffff;
    button {
      width: 50%;
    }
    .van-toast {
      width: 5rem;
    }
  }
</style>
