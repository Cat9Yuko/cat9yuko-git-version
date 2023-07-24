<template>
    <base-page class="home-wrap">
        <van-uploader v-model="fileList">
            <template #preview-cover="{ file }">
                <div class="preview-cover van-ellipsis">{{ file.name }}</div>
            </template>
        </van-uploader>
    </base-page>
</template>

<script>
  import MixinAuthority from '../utils/MixinAuthority'
  import MyWorks from './MyWorks'
  import HistoryList from './HistoryList'
  import * as $t from '../utils/tools'
  export default {
    name: 'homeWrapper',
    mixins: [MixinAuthority],
    components: { MyWorks, HistoryList },
    data() {
      return {
        fileList: [
          {
            url: 'https://img.yzcdn.cn/vant/leaf.jpg',
            name: 'aaa'
          },
          {
            url: 'https://img.yzcdn.cn/vant/tree.jpg',
            name: 'bbb'
          },
        ]
      }
    },
    // beforeRouteEnter(to, from, next) {
    //   next(vm => {
    //     if (from.name === 'ApproveTask') {
    //       vm.active = '1'
    //     }
    //     vm.$nextTick(() => {
    //       if (vm.$refs.workRef) {
    //         vm.$refs.workRef.initTable()
    //       }
    //       if (vm.$refs.historyList) {
    //         vm.$refs.historyList.initTable()
    //       }
    //     })
    //   })
    // },
    created() {
      // this.userPage = this.userType === 0 ? 'UserInfo' : 'LegalUserInfo'
    },
    methods: {
      // onClickRight() {
      //   this.$router.push({ name: 'NewTask' })
      // }
    }
  }
</script>

<style lang="less">
    @import '../styles/variable';

    .home-wrap {
        .van-nav-bar__title{
            color: #fff;
        }
        .patrol-list {
            .van-icon{
                font-size: 18px;
                position: relative;
                top: 3px;
                right: 1px;
            }
            position: absolute;
            top: 1.22667rem;
            left: 0;
            right: 0;
            /*bottom: 0;*/
            overflow: auto;
            .van-cell{
                padding: 0.36667rem 0.4rem !important;
                color: #333333;
                font-size: 0.40333rem;
            }
        }
    }
</style>
