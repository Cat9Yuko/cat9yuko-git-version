<template>
    <div class="flex flex-wrap justify-between gap-y-2 pt-[33px]">
        <div class="bg-[url('/img/bs-itemlistbg.png')] w-[155px] h-[62px] relative pl-[75px] cursor-pointer" @click="showSite">
            <img class="absolute left-[30px] top-[13px]" src="/img/bs-icon1.png" alt="">
            <p class="font-bold text-white text-[18px] overflow-hidden">{{jbqk.siteNum}}</p>
            <p class="text-[12px] text-[rgb(14,208,228)] overflow-hidden">站点数量</p>
        </div>
        <div class="bg-[url('/img/bs-itemlistbg.png')] w-[155px] h-[62px] relative pl-[75px]">
            <img class="absolute left-[31px] top-[11px]" src="/img/bs-icon2.png" alt="">
            <p class="font-bold text-white text-[18px] overflow-hidden">{{jbqk.channelNum}}</p>
            <p class="text-[12px] text-[#0ed0e4] overflow-hidden">栏目数量</p>
        </div>
        <div class="bg-[url('/img/bs-itemlistbg.png')] w-[155px] h-[62px] relative pl-[75px]">
            <img class="absolute left-[31px] top-[13px]" src="/img/bs-icon3.png" alt="">
            <p class="font-bold text-white text-[18px] overflow-hidden">{{jbqk.ztNum}}</p>
            <p class="text-[12px] text-[#0ed0e4] overflow-hidden">专题数量</p>
        </div>
        <div class="bg-[url('/img/bs-itemlistbg.png')] w-[155px] h-[62px] relative pl-[75px]">
            <img class="absolute left-[31px] top-[10px]" src="/img/bs-icon4.png" alt="">
            <p class="font-bold text-white text-[18px] overflow-hidden">{{jbqk.recordNum}}</p>
            <p class="text-[12px] text-[#0ed0e4] overflow-hidden">记录数量</p>
        </div>
        <div class="bg-[url('/img/bs-itemlistbg.png')] w-[155px] h-[62px] relative pl-[75px]">
            <img class="absolute left-[31px] top-[11px]" src="/img/bs-icon5.png" alt="">
            <p class="font-bold text-white text-[18px] overflow-hidden">{{jbqk.templateNum}}</p>
            <p class="text-[12px] text-[#0ed0e4] overflow-hidden">模板数量</p>
        </div>
        
        <div class="bg-[url('/img/bs-itemlistbg.png')] w-[155px] h-[62px] relative pl-[75px]">
            <img class="absolute left-[34px] top-[11px]" src="/img/bs-icon8.png" alt="">
            <p class="font-bold text-white text-[18px] overflow-hidden">{{jbqk.serverNum}}</p>
            <p class="text-[12px] text-[#0ed0e4] overflow-hidden">服务器数量</p>
        </div>
        <div class="bg-[url('/img/bs-itemlistbg.png')] w-[155px] h-[62px] relative pl-[75px]">
            <img class="absolute left-[32px] top-[11px]" src="/img/bs-icon9.png" alt="">
            <p class="font-bold text-white text-[18px] overflow-hidden">{{jbqk.storageNum}}</p>
            <p class="text-[12px] text-[#0ed0e4] overflow-hidden">占用存储量</p>
        </div>
        <div class="bg-[url('/img/bs-itemlistbg.png')] w-[155px] h-[62px] relative pl-[75px]">
            <img class="absolute left-[29px] top-[10px]" src="/img/bs-icon6.png" alt="">
            <p class="font-bold text-white text-[18px] overflow-hidden">{{jbqk.yearVisitorNum}}</p>
            <p class="text-[12px] text-[#0ed0e4] overflow-hidden">年访客数</p>
        </div>
        <div class="bg-[url('/img/bs-itemlistbg.png')] w-[155px] h-[62px] relative pl-[75px]">
            <img class="absolute left-[31px] top-[11px]" src="/img/bs-icon7.png" alt="">
            <p class="font-bold text-white text-[18px]">{{jbqk.yearViewsNum}}</p>
            <p class="text-[12px] text-[#0ed0e4] overflow-hidden">年浏览量</p>
        </div>
    </div>
    <el-dialog
    class="mydialog"
    v-model="dialogVisible"
    width="90%"
    :before-close="handleClose"
  >
    <div class="flex flex-wrap justify-between gap-y-2 sitelist">
        <div class="w-[20%] text-[14px] text-white" v-for="item in jbqk.siteList">{{ item }}</div>
    </div>
    
  </el-dialog>
</template>

<script>
    import {jbqk} from '@/api/'
    export default {
        data() {
            return {
                jbqk: {},
                dialogVisible: false
            }
        },
        mounted() {
            jbqk().then(res => {
                this.jbqk = res
            }) 
        },
        methods: {
            showSite() {
                this.dialogVisible = true
            }
        }
    }
</script>

<style lang="scss">
    .el-dialog.mydialog {
        background: none;
        background-image: url('/img/bs-mainbg-800.png');
        background-size: 100% 100%;
    }
    
</style>