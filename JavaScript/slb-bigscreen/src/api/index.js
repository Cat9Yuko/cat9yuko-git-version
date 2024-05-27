import {$getJson} from '@/utils/request.js'

export const jbqk = (params) => {
    return $getJson('./JSON/JBQK.json', params) // 基本情况
}
export const resources = (params) => {
    return $getJson('./JSON/XXFB.json', params) // 信息发布
}
export const hdjl = (data) => {
    return $getJson('./JSON/HDJL.json')// 互动交流
}
export const wwfw = (data) => {
    return $getJson('./JSON/ZWFW.json')// 政声传递
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
    return $getJson('./JSON/LMFWLPH.json', params) // 站点流量
}
export const articles = (params) => {
    return $getJson('./JSON/RMWZ.json', params) // 热门文章
}
export const zqgjfbl = (params) => {
    return $getJson('./JSON/ZQGJFBL.json', params) // 站群稿件发布量
}
export const focused = (params) => {
    return $getJson('./JSON/ZDGZ.json', params) // 重点关注
}
export const zxgjgz = (data) => {
    return $getJson('./JSON/ZXGJGZ.json')// 最新稿件关注
}
export const jsonAjax = (data) => {
    return $getJson('./JSON/ZSCD.json')// 政声传递
}
export const wzfb = (data) => {
    return $getJson('./JSON/WZFB.json')// 网站发布
}
export const wsdt = (data) => {
    return $getJson('./JSON/WSDT.json')// 网上答题
}
export const gzzx = (data) => {
    return $getJson('./JSON/GZZX.json')// 网上答题
}
export const zxft = (params) => {
    return $getJson('./JSON/ZXFT.json', params) // 在线访谈
}
export const zqyj = (params) => {
    return $getJson('./JSON/ZQYJ.json', params) // 征求意见
}


export const follow = (data) => {
    return $getJson('./JSON/ZGZ.json') // 政关注
}
export const attention = (params) => {
    return $getJson('./JSON/ZYLFP.json') // 注意类分配
}

export const letter = (params) => {
    return $getJson('./JSON/ZXLX.json', params) // 最新来信
}
export const letterCharts = (params) => {
    return $getJson('./JSON/QGLX.json', params) // 全国来信
}
export const daily = (params) => {
    return $getJson('./JSON/RCJC.json', params) // 日常监测
}

export const supervise = (params) => {
    return $getJson('./JSON/LYZFWZJG.json', params) // 流域政府网站监管 
}
