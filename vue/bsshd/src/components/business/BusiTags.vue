<template>
    <div class="busi-tags-flex-box" :style="style" v-if="isSingle">
        <div :class="['base-tags-flex-item',index===selectedTagIndex ? 'on' : 'off' ]"
             v-for="(item, index) in data"
             :key="index"
             @click="handleSelected(item, index)">
            {{item.itemName}}
        </div>
    </div>
    <div class="busi-tags-flex-box" v-else :style="style">
        <div :class="['base-tags-flex-item',(selectedTagIndexArr.indexOf(index) > -1) ? 'on' : 'off' ]"
             v-for="(item, index) in data"
             :key="index"
             @click="handleSelectedMulti(item, index)">
            {{item.itemName}}
        </div>
    </div>
</template>
<script>
  export default {
    name: 'BusiTags',
    props: {
      isSingle: {
        type: Boolean,
        default: function() {
          return true
        }
      },
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
        selectedTagIndexArr: [],
        selectedTagIndex: this.firstTagSelected ? 0 : ''
      }
    },
    mounted() {
    },
    methods: {
      handleSelected(item, index) {
        this.selectedTagIndex = index
        this.$emit('select-tag', item)
      },
      handleSelectedMulti(item, index) {
        let arrIndex = this.selectedTagIndexArr.indexOf(index)
        if (arrIndex > -1) {
          this.selectedTagIndexArr.splice(arrIndex, 1)
        } else {
          this.selectedTagIndexArr.push(index)
        }
        this.$emit('select-tag', item)
      },
      reset() {
        this.selectedTagIndex = this.firstTagSelected ? 0 : ''
        this.selectedTagIndexArr = []
        this.$emit('select-tag', {})
      }
    }
  }
</script>
<style lang="less">
    @import '../../styles/variable';

    .busi-tags-flex-box {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: center;
        padding: 10px;
        margin-bottom: -20px;
        .base-tags-flex-item {
            font-size: 14px;
            border: 1px solid @primary-color;
            padding: 0 15px;
            border-radius: 10em;
            height: 34px;
            line-height: 32px;
            margin-bottom: 10px;
            margin-left: 5px;
            color: @primary-color;
            &:last-child {
            }
            &.on {
                background-color: @primary-color;
                color: @color-white;
            }
            &.off {
                background-color: transparent;
                color: @primary-color;
            }
        }
    }
</style>
