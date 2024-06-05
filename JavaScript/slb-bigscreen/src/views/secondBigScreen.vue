<template>
    <div class="bg-[url('/img/bs-mainbg.jpg')] bg-cover bg-center min-h-screen">
        <header class="h-[76px] bg-[url('/img/bs-headerbg.png')] bg-cover bg-center text-white text-center text-[32px] leading-[71px] font-bold">水利部网站数据分析系统平台</header>
        <main class="flex h-[957px] justify-evenly">
          <section class="flex-none basis-[500px] ">
            <div class="bg-[url('/img/bs-bgh300.png')] h-[300px] mt-[20px]">
                <channel-title>站群发布</channel-title>
                <bar-left/>
            </div>
            <div class="bg-[url('/img/bs-bgh300.png')] h-[300px] mt-[20px]">
                <channel-title>热点关注</channel-title>
                <word-cloud/>
            </div>
            <div class="bg-[url('/img/bs-bgh300.png')] h-[300px] mt-[20px]">
                <channel-title>最新文章</channel-title>
                <roll-table-3/>
            </div>
          </section>

          <section class="flex-none basis-[800px] ">
            <div class="bg-[url('/img/bs-mainbg800-2.png')] h-[932px]">
              <center-channel-title>互动服务</center-channel-title>

              <div class="flex justify-around">
              
              <div class="flex-none basis-[385px] h-[285px]">
                <small-channel-title>网上答题</small-channel-title>
                <center-two-line/>
              </div>
              <div class="flex-none basis-[385px] h-[285px]">
                <small-channel-title>公众咨询</small-channel-title>
                <bar-center/>
              </div>
            </div>

            <div class="flex justify-around mt-5">
              
              <div class="flex-none basis-[385px] h-[285px]">
                <small-channel-title>在线访谈</small-channel-title>
                <center-line/>
              </div>
              <div class="flex-none basis-[385px] h-[285px]">
                <small-channel-title>征求意见</small-channel-title>
                <center-two-line-smooth/>
              </div>
            </div>

            <div class="flex justify-around">
              
              <div class="flex-none basis-[385px] h-[285px]">
                <small-channel-title>网上投票</small-channel-title>
                <stack-bar/>
              </div>
              <div class="flex-none basis-[385px] h-[285px]">
                <small-channel-title>政务服务</small-channel-title>
                <two-line/>
              </div>
            </div>

            </div>
          </section>

          <section class="flex-none basis-[500px]">
            <div class="bg-[url('/img/bs-bgh300.png')] h-[300px] mt-[20px]">
                <channel-title>政民聚焦</channel-title>
                <bar-right-2/>
            </div>
            <div class="bg-[url('/img/bs-bgh300.png')] h-[300px] mt-[20px]">
                <channel-title>全国来信趋势</channel-title>
                <right-line/>
            </div>
            <div class="bg-[url('/img/bs-bgh300.png')] h-[300px] mt-[20px]">
                <channel-title>最新来信</channel-title>
                <roll-table-4/>
            </div>
          </section>
        </main>
    </div>
</template>

<script>
import channelTitle from '@/components/channelTitle.vue'
import centerChannelTitle from '@/components/centerChannelTitle.vue'
import BarLeft from '@/components/barLeft.vue'
import WordCloud from '@/components/WordCloud.vue'
import RollTable3 from '@/components/rollTable3.vue'
import SmallChannelTitle from '@/components/smallChannelTitle.vue'
import Radar from '@/components/Radar.vue'
import CenterTwoLine from '@/components/centerTwoLine.vue'
import BarCenter from '@/components/barCenter.vue'
import CenterLine from '@/components/centerLine.vue'
import CenterTwoLineSmooth from '@/components/centerTwoLineSmooth.vue'
import StackBar from '@/components/stackBar.vue'
import BarRight2 from '@/components/barRight2.vue'
import RightLine from '@/components/rightLine.vue'
import RollTable4 from '@/components/rollTable4.vue'
import TwoLine from '@/components/twoLine.vue'
export default {
    components:{channelTitle,centerChannelTitle,BarLeft, WordCloud,RollTable3,SmallChannelTitle,Radar,CenterTwoLine,BarCenter, CenterLine, CenterTwoLineSmooth, StackBar, BarRight2,
      RightLine, RollTable4,
        TwoLine
    }
}
    
</script>
