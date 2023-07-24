<template>
    <div class="busi-search-records-wrap">
        <form action="/">
            <van-search
                    v-model="searchContent"
                    placeholder="请输入搜索关键词"
                    show-action
            >
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </form>
        <div class="search-history-content">
            <p class="van-hairline--bottom">xxxx1</p>
            <p class="van-hairline--bottom">xxxx2</p>
            <p class="van-hairline--bottom">xxxx3</p>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'BusiSearchRecords',
    props: {
      value: Array,
      data: {
        type: Array,
        default: function() {
          return []
        }
      },
      firstTagSelected: Boolean,
      justifyContent: {
        type: String,
        default: function() {
          return 'flex-start'
        }
      }
    },
    computed: {
      style() {
        let style = {}
        if (this.justifyContent) {
          style['justify-content'] = this.justifyContent
        }
        return style
      }
    },
    data() {
      return {
        selected: false,
        selectedTagIndex: this.firstTagSelected ? 0 : ''
      }
    },
    mounted() {
    },
    methods: {
      handleSelected(item, index) {
        this.selectedTagIndex = index
        this.$emit('input', [item])
      },
      reset() {
        this.selectedTagIndex = this.firstTagSelected ? 0 : ''
        this.$emit('input', [])
      }
    }
  }
</script>
<style lang="less">
    @import '../../styles/variable';

    .busi-search-records-wrap {
        .search-history-content {

        }
    }
</style>
