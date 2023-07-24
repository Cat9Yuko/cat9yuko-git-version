<template>
    <transition name="fadeIn">
        <div v-if="showAside" class="aside-menu-wrap">
            <div @click.stop.prevent="showAsideMenu" class="mask"></div>
            <div class="aside">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<script>
  export default {
    name: 'BaseAside',
    props: {
      showAside: Boolean,
      append: String
    },
    data() {
      return {}
    },
    mounted() {
      if (this.append) {
        let container = document.querySelector(this.append)
        if (container) {
          container.appendChild(this.$el)
        }
      }
    },
    methods: {
      showAsideMenu() {
        if (this.showAside) {
          this.$emit('update:showAside', false)
        } else {
          this.$emit('update:showAside', true)
        }
      }
    }
  }
</script>
<style lang="less" scoped>
    .fadeIn-enter-active {
        transition: all .4s ease-in;
    }

    .fadeIn-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .fadeIn-enter, .fadeIn-leave-active {
        transform: translateX(250px);
        opacity: 0;
    }

    .aside-menu-wrap {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        z-index: 99;
        .aside {
            position: relative;
            flex: 0 1 85%;
            background-color: #fff;
        }
        .mask {
            flex: 0 1 15%;
            background-color: rgba(0, 0, 0, .5);
        }
    }
</style>
