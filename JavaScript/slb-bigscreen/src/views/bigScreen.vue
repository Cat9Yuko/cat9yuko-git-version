<template>
    <div class="bg-[url('/img/bs-mainbg.jpg')] bg-cover bg-center min-h-screen">
        <header class="h-[76px] bg-[url('/img/bs-headerbg.png')] bg-cover bg-center text-white text-center text-[32px] leading-[71px] font-bold">水利部网站数据分析系统平台</header>
        <main class="flex h-[957px] justify-evenly">
          <section class="flex-none basis-[500px] ">
            <basic-data/>
            <div class="bg-[url('/img/bs-bgh718.png')] h-[718px]">
              <channel-title>资源分布</channel-title>
              <small-channel-title>信息发布</small-channel-title>
              <pie/>
              <small-channel-title>互动交流</small-channel-title>
              <horizontal-bar/>
              <small-channel-title>政务服务</small-channel-title>
              <two-line/>
            </div>
          </section>
          <section class="flex-none basis-[800px] ">
            <div class="bg-[url('/img/bs-mainbg-800.png')] h-[593px]">
              <center-channel-title>流量分布</center-channel-title>
              <map-horizontal-bar/>
            </div>
            <div class="flex justify-around mt-7">
              <div class="flex-none basis-[385px] h-[310px] bg-[url('/img/bs-mainbg-385.png')]">

              </div>
              <div class="flex-none basis-[385px] h-[310px] bg-[url('/img/bs-mainbg-385.png')]"></div>
            </div>
          </section>
          <section class="flex-none bg-slate-500 basis-[500px] ">
            
          </section>
        </main>
    </div>
</template>

<script>
import basicData from '@/components/basicData.vue'
import channelTitle from '@/components/channelTitle.vue'
import SmallChannelTitle from '@/components/smallChannelTitle.vue'
import Pie from '@/components/pie.vue'
import HorizontalBar from '@/components/horizontalBar.vue'
import TwoLine from '@/components/twoLine.vue'
import CenterChannelTitle from '@/components/centerChannelTitle.vue'
import MapHorizontalBar from '@/components/mapHorizontalBar.vue'
    export default {
    components: { basicData,channelTitle, SmallChannelTitle, Pie,HorizontalBar,TwoLine, CenterChannelTitle, MapHorizontalBar }
        
    }

</script>