<template>
    <div class="my-collection">
        <van-nav-bar right-arrow title="收藏" @click-left="onClickLeft" @click-right="onClickRight">
            <van-icon name="wap-home" slot="left"/>
            <van-icon name="icon iconfont icon-ai207" slot="right"/>
        </van-nav-bar>
        <van-tabs v-model="activeName" @click="onClick">
            <van-tab>
                <div slot="title" name="0">全部</div>
                <van-cell size="large" icon="volume" v-for='item in listData' :key='item.id'>
                    <template slot="title">
                        <span class="custom-title"><a style="color:#666666" rel="noopenner noreferrer" :href="item.detailURL" target="_blank">{{item.docTitle}}</a></span>
                        <span class="del-btn" @click="delItem(item.id)"><van-icon name="cross"/></span>
                    </template>
                    <template slot="label">
                        <span class="">{{ item.issuedDate }}</span>
                        <span class='class-sel'>
                            <van-dropdown-menu direction="up">
                              <van-dropdown-item v-model="item.categoryCode" :options="typeOpt" @change='changeCategory(item)'/>
                            </van-dropdown-menu>
                        </span>
                    </template>
                </van-cell>
            </van-tab>
            <van-tab>
                <div slot="title" name='1'>新闻</div>
                <van-cell size="large" icon="volume" v-for='item in listData' :key='item.id'>
                    <template slot="title">
                        <span class="custom-title"><a style="color:#666666" rel="noopenner noreferrer" :href="item.detailURL" target="_blank">{{item.docTitle}}</a></span>
                        <span class="del-btn" @click="delItem(item.id)"><van-icon name="cross"/></span>
                    </template>
                    <template slot="label">
                        <span class="">{{ item.issuedDate }}</span>
                        <span class='class-sel'>
                            <van-dropdown-menu direction="up">
                              <van-dropdown-item v-model="item.categoryCode" :options="typeOpt" @change='changeCategory(item)'/>
                            </van-dropdown-menu>
                        </span>
                    </template>
                </van-cell>
            </van-tab>
            <van-tab>
                <div slot="title" name='2'>政务</div>
                <van-cell size="large" icon="volume" v-for='item in listData' :key='item.id'>
                    <template slot="title">
                        <span class="custom-title"><a style="color:#666666" rel="noopenner noreferrer" :href="item.detailURL" target="_blank">{{item.docTitle}}</a></span>
                        <span class="del-btn" @click="delItem(item.id)"><van-icon name="cross"/></span>
                    </template>
                    <template slot="label">
                        <span class="">{{ item.issuedDate }}</span>
                        <span class='class-sel'>
                            <van-dropdown-menu direction="up">
                              <van-dropdown-item v-model="item.categoryCode" :options="typeOpt" @change='changeCategory(item)'/>
                            </van-dropdown-menu>
                        </span>
                    </template>
                </van-cell>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
  import { Dialog, Toast, DropdownMenu, DropdownItem } from 'vant'

  export default {
    name: 'MyCollection',
    components: { DropdownMenu, DropdownItem },
    data() {
      return {
        activeName: '0',
        pageInfo: {
          pageNum: 1,
          pageSize: 20
        },
        typeOpt: [],
        listData: []
      }
    },
    props: {},
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        vm.renderTaskList()
        vm.initCategoryOpt()
      })
    },
    methods: {
      onClickLeft() {

      },
      onClick(val) {
        this.renderTaskList()
      },
      changeCategory(item) {
        let changeParams = { id: item.id, categoryCode: item.categoryCode }
        this.$http
          .post(this.$API.SLB_POST_FAVORITES_MODIFY_CATEGORY, changeParams)
          .then(res => {
            Toast.success('修改成功')
          })
          .catch(e => {
            // console.log(e)
          })
      },
      initCategoryOpt() {
        this.$http
          .post(this.$API.SLB_POST_CATEGORY_FAVORITES_LIST)
          .then(res => {
            this.typeOpt = res.result
            for (let item of this.typeOpt) {
              // let newClass = {}
              if (item.name) {
                item.text = item.name
              }
              if (item.code || item.code === 0) {
                item.value = item.code
              }
              // item = Object.assign(newClass, item)
            }
          })
          .catch(e => {
            // console.log(e)
          })
      },
      renderTaskList(args = {}) {
        this.listData = []
        let category = {}
        if (this.activeName * 1 === 0) {
          category.categoryCode = null
        } else if (this.activeName * 1 === 2) {
          category.categoryCode = 2
        } else if (this.activeName * 1 === 1) {
          category.categoryCode = 1
        }
        this.$http.post(
          this.$API.SLB_POST_FAVORITES_LIST,
          Object.assign(category, this.pageInfo)
        ).then(res => {
          this.listData = res.result.list
          for (let item of this.listData) {
            if (item.content && item.content.length > 15) {
              item.content = item.content.substr(0, 13) + '...'
            }
          }
        })
          .catch(e => {
            this.pageLoading = false
            // console.log(e)
          })
      },
      delItem(id) {
        Dialog.confirm({
          title: '删除',
          message: '是否确认删除'
        }).then(() => {
          this.$http.post(this.$API.SLB_POST_FAVORITES_DEL, { id: id }).then(res => {
            Toast.success('删除成功')
            this.renderTaskList()
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
      // this.initCategoryOpt()
      // this.renderTaskList()
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
    .my-collection {
        .van-nav-bar__title {
            color: #fff;
        }

        .custom-title {
            font-size: 14px;
        }

        .class-sel {
            width: 100px;
            display: inline-block;
            height: 22px;
            padding: -12px;
            position: absolute;
            right: 17px;
            bottom: 6px;

            .van-dropdown-menu {
                height: 100%;
            }
        }

        .del-btn {
            float: right;
            color: #969799;
            /* vertical-align: middle; */
            margin-top: 6px;
        }
    }
</style>
