import {$getJson} from '@/utils/request.js'

export const jbqk = (params) => {
    return $getJson('./JSON/JBQK.json', params) // 基本情况
}
export const sitelist = (params) => {
    return $getJson('./JSON/SITELIST.json', params) // 基本情况
}
export const resources = (params) => {
    return $getJson('./JSON/XXFB.json', params) // 信息发布
}
export const hdjl = (data) => {
    return $getJson('./JSON/HDJL.json')// 互动交流
}
export const wwfw = (data) => {
    return $getJson('./JSON/ZWFW.json')// 政务服务
}
export const distribute = (params) => {
    return $getJson('./JSON/LLFB.json', params) // 流量分布
}
export const chinamap = (params) => {
    return $getJson('./JSON/china.json', params) // 地图
}
export const siteTraffic = (params) => {
    return $getJson('./JSON/ZDLL.json', params) // 站点流量
}
export const recent = (params) => {
    return $getJson('./JSON/JRGX.json', params) // 近日更新
}
export const viewsNum = (params) => {
    return $getJson('./JSON/WZFWL.json', params) // 网站总体访问量
}
export const zzfwl = (params) => {
    return $getJson('./JSON/ZZFWL.json', params) // 主站访问量情况
}
export const lmfwlph = (params) => {
    return $getJson('./JSON/LMFWLPH.json', params) // 主站主要栏目访问量排行
}
export const articles = (params) => {
    return $getJson('./JSON/RMWZ.json', params) // 热门文章
}
export const zqgjfbl = (params) => {
    return $getJson('./JSON/ZQGJFBL.json', params) // 站群发布
}
export const focused = (params) => {
    return $getJson('./JSON/ZDGZ.json', params) // 热点关注
}
export const zxgjgz = (data) => {
    return $getJson('./JSON/ZXGJGZ.json')// 最新文章
}
export const wzfb = (data) => {
    return $getJson('./JSON/WZFB.json')// 政务服务2
}
export const wsdt = (data) => {
    return $getJson('./JSON/WSDT.json')// 网上答题
}
export const gzzx = (data) => {
    return $getJson('./JSON/GZZX.json')// 公众咨询
}
export const zxft = (params) => {
    return $getJson('./JSON/ZXFT.json', params) // 在线访谈
}
export const zqyj = (params) => {
    return $getJson('./JSON/ZQYJ.json', params) // 征求意见
}
export const wstp = (params) => {
    return $getJson('./JSON/WSTP.json', params) // 网上投票
}
export const zmjj = (params) => {
    return $getJson('./JSON/ZMJJ.json', params) // 主题分类
}
export const letterCharts = (params) => {
    return $getJson('./JSON/QGLX.json', params) // 来信趋势
}
export const letter = (params) => {
    return $getJson('./JSON/ZXLX.json', params) // 最新来信
}
