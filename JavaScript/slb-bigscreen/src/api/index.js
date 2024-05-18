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


export const jsonAjax = (data) => {
    return $getJson('./JSON/ZSCD.json')// 政声传递
}
export const follow = (data) => {
    return $getJson('./JSON/ZGZ.json') // 政关注
}
export const attention = (params) => {
    return $getJson('./JSON/ZYLFP.json') // 注意类分配
}
export const focused = (params) => {
    return $getJson('./JSON/ZDGZ.json', params) // 重点关注
}
export const focusing = (params) => {
    return $getJson('./JSON/ZMJJ.json', params) // 政民聚焦
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
export const siteTraffic = (params) => {
    return $getJson('./JSON/ZDLL.json', params) // 站点流量
}
export const recent = (params) => {
    return $getJson('./JSON/JRGX.json', params) // 近日更新
}
export const articles = (params) => {
    return $getJson('./JSON/RMWZ.json', params) // 热门文章
}
