/**
 * 服务模块定义
 *
 */
const $HOST_PUBLIC_SERVICE = window.localHost
// const $HOST_PUBLIC_SERVICE = process.env.VUE_APP_PUBLIC_SERVICE
// 用户登入
export const SLB_GET_USER_LOGIN = $HOST_PUBLIC_SERVICE + '/api/authorize'
// ------------------------------------------------------------------------------------
// 获取拟入栏目栏目
export const SLB_POST_GETBYPARAMS = $HOST_PUBLIC_SERVICE + '/dict/items'
// 上传图片接口
export const SLB_POST_UPLOAD = $HOST_PUBLIC_SERVICE + '/fileupload/upload'
// 保存新增
export const SLB_POST_WORKFORM_ADD = $HOST_PUBLIC_SERVICE + '/workform/add'
// 获取待办
export const SLB_POST_TODO_LIST = $HOST_PUBLIC_SERVICE + '/todo/list'
// 获取单个待处理工单
export const SLB_GET_WORK_BYID = $HOST_PUBLIC_SERVICE + '/workform/getById'
// 提交审批工单
export const SLB_GET_WORK_APPROVE = $HOST_PUBLIC_SERVICE + '/workformApprove/approve'
// 获取审批记录
export const SLB_GET_WORK_LIST = $HOST_PUBLIC_SERVICE + '/workform/list'
// 获取用户列表
export const SLB_POST_MEMBER = $HOST_PUBLIC_SERVICE + '/member/search'
// 获取部门列表
export const SLB_POST_ORG = $HOST_PUBLIC_SERVICE + '/org/search'
// 获取部门列表
export const SLB_POST_IS_OK = $HOST_PUBLIC_SERVICE + '/workformApprove/isApproved'
// 获取搜索列表
export const SLB_POST_SEARCH_LIST = $HOST_PUBLIC_SERVICE + '/workform/search'
// 撤回审批单
export const SLB_GET_CANCEL_APPROVE = $HOST_PUBLIC_SERVICE + '/workform/withdraw'
