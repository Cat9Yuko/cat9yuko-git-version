<template>
    <div class="van-nav-bar" style="z-index: 1;">
        <div class="van-nav-bar__left">
            <i class="van-icon van-icon-arrow van-nav-bar__arrow"></i>
            <span class="van-nav-bar__text" @click="goDay('before')">前一天</span>
        </div>
        <div class="van-ellipsis van-nav-bar__title" @click="onSelectDay">{{selectedDay}}</div>
        <div v-if="selectedDay < $T.parseTime(new Date(), '{y}-{m}-{d}')" class="van-nav-bar__right">
            <span class="van-nav-bar__text" @click="goDay('after')">后一天</span>
            <i class="van-icon van-icon-arrow"></i>
        </div>
        <div v-else class="van-nav-bar__right">
            <span class="van-nav-bar__text no-click">后一天</span>
            <i class="van-icon van-icon-arrow no-click"></i>
        </div>
        <van-popup v-model="showPopup" position="bottom" get-container="body">
            <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    @confirm="onConfirm"
                    @cancel="onCancel"
                    :max-date="new Date()"
            ></van-datetime-picker>
        </van-popup>

    </div>
</template>

<script>
  const TimeFormat = '{y}-{m}-{d}'
  export default {
    name: 'BaseDaySelector',
    props: {
      msg: String
    },
    data() {
      return {
        selectedDay: this.$T.parseTime(new Date(), TimeFormat),
        currentDate: '',
        showPopup: false
      }
    },
    watch: {
      selectedDay: function(newData, oldData) {
        if (newData) {
          this.$emit('on-selected-day', newData)
        }
      }
    },
    created() {
      this.$emit('on-selected-day', this.selectedDay)
    },
    methods: {
      onSelectDay() {
        this.currentDate = new Date(this.selectedDay)
        if (!this.showPopup) {
          this.showPopup = true
        } else {
          this.showPopup = false
        }
      },
      onConfirm() {
        this.showPopup = false
        this.selectedDay = this.$T.parseTime(this.currentDate, '{y}-{m}-{d}')
      },
      onCancel() {
        this.showPopup = false
      },
      goDay(state) {
        if (state === 'before') {
          this.selectedDay = this.$T.subDate(this.selectedDay, 1, TimeFormat)
        } else {
          this.selectedDay = this.$T.addDate(this.selectedDay, 1, TimeFormat)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
    @import '../../styles/variable';

    .van-nav-bar {
        border-top: 1px solid @border-color-base;
        border-bottom: 1px solid @border-color-base;
        background-color: @day-select-background-color;
        color: @primary-color;
        .van-icon, .van-nav-bar__text {
          color: @primary-color;
        }
        .no-click {
          color: #999;
          cursor: not-allowed;
        }
    }
</style>
