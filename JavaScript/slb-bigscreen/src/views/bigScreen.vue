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
              <pie-4/>
            </div>
          </section>
          <section class="flex-none basis-[800px] ">
            <div class="bg-[url('/img/bs-mainbg-800.png')] h-[593px]">
              <center-channel-title>流量分布</center-channel-title>
              <map-horizontal-bar/>
            </div>
            <div class="flex justify-around mt-8">
              <div class="flex-none basis-[385px] h-[310px] bg-[url('/img/bs-mainbg-385.png')]">
                <center-small-channel-title>站点流量</center-small-channel-title>
                <bar/>
              </div>
              <div class="flex-none basis-[385px] h-[310px] bg-[url('/img/bs-mainbg-385.png')]">
                <center-small-channel-title>近日更新</center-small-channel-title>
                <Line/>
              </div>
            </div>
          </section>
          <section class="flex-none basis-[500px]">
            <div class="bg-[url('/img/bs-bgh215.png')] h-[215px] bg-[100%] mt-[20px]">
              <channel-title>网站总体访问量情况</channel-title>
              <roll-table/>
            </div>
            <div class="bg-[url('/img/bs-bgh215.png')] h-[215px] bg-[100%] mt-[16px]">
              <channel-title>主站访问量情况</channel-title>
              <pie-2/>
            </div>
            <div class="bg-[url('/img/bs-bgh215.png')] h-[215px] bg-[100%] mt-[16px]">
              <channel-title>主站主要栏目访问量排行</channel-title>
              <bar-right/>
            </div>
            <div class="bg-[url('/img/bs-bgh245.png')] h-[245px] bg-[100%] mt-[16px]">
              <channel-title>热门文章</channel-title>
              <roll-table-2/>
            </div>
          </section>
        </main>
    </div>
</template>

<script>
import basicData from '@/components/basicData.vue'
import channelTitle from '@/components/channelTitle.vue'
import SmallChannelTitle from '@/components/smallChannelTitle.vue'
import Pie from '@/components/Pie.vue'
import HorizontalBar from '@/components/horizontalBar.vue'
import TwoLine from '@/components/twoLine.vue'
import CenterChannelTitle from '@/components/centerChannelTitle.vue'
import MapHorizontalBar from '@/components/mapHorizontalBar.vue'
import CenterSmallChannelTitle from '@/components/centerSmallChannelTitle.vue'
import Bar from '@/components/Bar.vue'
import Line from '@/components/Line.vue'
import RollTable from '@/components/rollTable.vue'
import Pie2 from '@/components/Pie2.vue'
import BarRight from '@/components/barRight.vue'
import RollTable2 from '@/components/rollTable2.vue'
import LeftBar from '@/components/LeftBar.vue'
import Pie4 from '@/components/Pie4.vue'
    export default {
    components: { basicData,channelTitle, SmallChannelTitle, Pie,HorizontalBar,TwoLine, CenterChannelTitle, MapHorizontalBar,CenterSmallChannelTitle,Bar,Line, RollTable, Pie2, BarRight, RollTable2,LeftBar,Pie4 }
    }

</script>