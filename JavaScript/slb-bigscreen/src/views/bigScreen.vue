<template>
    <div class="bg-[url('assets/img/bs-mainbg.jpg')] bg-cover bg-center min-h-screen">
        <header class="h-[76px] bg-[url('assets/img/bs-headerbg.png')] bg-cover bg-center text-white text-center text-[32px] leading-[71px] font-bold">水利部网站数据分析系统平台</header>
        <main class="flex h-[957px] justify-evenly">
          <section class="flex-none basis-[500px] ">
            <basic-data/>
            <div class="bg-[url('assets/img/bs-bgh718.png')] h-[718px]">
              <channel-title>资源分布</channel-title>
              <small-channel-title>信息发布</small-channel-title>
              <pie/>
            </div>
          </section>
          <section class="flex-none bg-slate-500 basis-[800px] ">

          </section>
          <section class="flex-none bg-slate-500 basis-[500px] ">
            
          </section>
        </main>
    </div>
</template>

<script>
import basicData from '@/components/basicData.vue'
import channelTitle from '../components/channelTitle.vue'
import SmallChannelTitle from '../components/smallChannelTitle.vue'
import Pie from '../components/pie.vue'
    export default {
    components: { basicData,channelTitle, SmallChannelTitle, Pie },
        
    }
</script>

<style lang="scss" scoped>

</style>