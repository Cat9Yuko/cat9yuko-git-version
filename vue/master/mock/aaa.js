// import $api from '../src/api/index'
const $api = require('../src/api/index.js')
// 引入mockjs
const Mock = require('mockjs')
// Mock.mock(RegExp($api.AAA_GET_USER_INFO + '.*'), () => {
//   return {
//     code: 200,
//     msg: 'Succeed!',
//     body: {
//       data: {
//         'userClass': '0',
//         'orderId': '0',
//         'crtUserDate': '2018-12-18 10:35:12',
//         'postionCode': '4340590',
//         'mntUserDate': '2018-12-18 14:00:25',
//         'userCode': 'tianjun7321',
//         'postionId': '1045',
//         'enabled': '1',
//         'orgUnitCode': '34860011',
//         'crtUserId': 'admin',
//         'orgUnitId': '106846',
//         'email': 'tianjun@pcitc.com',
//         'mntUserId': 'admin',
//         'postionName': '系统管理主管',
//         'crtUserName': 'admin',
//         'sex': '1',
//         'employeeId': '89757',
//         'isAdmin': '1',
//         'userName': '田军',
//         'userId': '2428',
//         'version': '3',
//         'mntUserName': 'admin',
//         'orgUnitViews': '[ ]',
//         'userType': '1',
//         'orgUnitName': '信息部',
//         'avator': 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1517899008&di=7592169ab49f67d360ea1cea8febaf5d&src=http://img3.redocn.com/tupian/20141217/zhongguoshihuabiaozhi_3709483.jpg',
//         'access': 1
//       }
//     }
//   }
// })

// Mock.mock(RegExp($api.AAA_GET_PAGES_RESOURCE + '.*'), () => {
//   return {
//     code: 200,
//     msg: 'Succeed!',
//     body: {
//       data: 'add,delete,edit,query,import,export,start,stop'
//     }
//   }
// })
// Mock.mock($api.SLB_POST_GETBYPARAMS, 'post', () => {
//   return {
//     'returncode': 0,
//     'message': 'ok',
//     'result': [
//       {
//         'itemCode': '4',
//         'itemName': '司局直属'
//       },
//       {
//         'itemCode': '5',
//         'itemName': '地方水事'
//       },
//       {
//         'itemCode': '6',
//         'itemName': '通知公告'
//       }
//       ,
//       {
//         'itemCode': '7',
//         'itemName': '政策解读'
//       }
//       ,
//       {
//         'itemCode': '8',
//         'itemName': '人事信息'
//       }
//       ,
//       {
//         'itemCode': '9',
//         'itemName': '媒体之声'
//       }
//       ,
//       {
//         'itemCode': '10',
//         'itemName': '其他'
//       }
//     ]
//   }
// })
// Mock.mock($api.SLB_POST_UPLOAD, 'post', () => {
//   return {
//     'returncode': 0,
//     'message': 'ok',
//     'result': {
//       'imageURL': 'XXXX.jpg',
//       'fileName': '202007071209000087.jpg',
//       'showName': 'test.html'
//     }
//   }
// })
// Mock.mock(RegExp($api.SLB_GET_USER_LOGIN + '.*'), () => {
//   return {
//     'returncode': 0,
//     'message': 'ok',
//     'result': {
//       'id': 0,
//       'name': '李勇强',
//       'email': null,
//       'mobile': '15134128328',
//       'path': null,
//       'parentId': 0,
//       'orgName': '运维部',
//       'company': null
//     }
//   }
// })
// Mock.mock($api.SLB_GET_SEARCH_LIST,'post', {
//     'returncode': 0,
//     'message': 'ok',
//     'result': {
//       'list|20':[
//         {
//           'id': '@id(32)',
//           'proposeColumn|1': ['水利要闻','时政要闻'],
//           'statusStr|1': function() {
//             // ['已回撤','草稿','待审批','已完成','已拒绝','已发布']
//             // console.log(this.status);
//             // console.log('indexOf'+[-2,-1,0,1,2,3].indexOf(this.status))
//             return ['已回撤','草稿','待审批','已完成','已拒绝','已发布'][[-2,-1,0,1,2,3].indexOf(this.status)];
//           },
//           'title': '@ctitle(30,36)',
//           'status|1': [-2,-1,0,1,2,3], // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '@date("yyyy-MM-dd HH:mm:ss")'
//         }
//       ],
//       'pageNum': 1,
//       'pageSize': 15,
//       'total': 1137,
//       'pages': 1
//     }
// });
// Mock.mock($api.SLB_GET_WORK_LIST, 'post', () => {
//   return {
//     'returncode': 0,
//     'message': 'ok',
//     'result': {
//       'list': [
//         {
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         },{
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '水利要闻',
//           'statusStr': '草稿',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'status': 0, // 0-待审批 1-已完成 2-已拒绝
//           'applyTime': '2020-09-09 13:00:00'
//         }
//       ],
//       'pageNum': 1,
//       'pageSize': 15,
//       'total': 50,
//       'pages': 2
//     }
//   }
// })
// Mock.mock($api.SLB_POST_TODO_LIST, 'post', () => {
//   return {
//     'returncode': 0,
//     'message': 'ok',
//     'result': {
//       'list': [
//         {
//           'id': '5f9f5355908441b38077f3d96c8266dc',
//           'proposeColumn': '1',
//           'title': '信息发布审核报送单信息发布审核报送单信息发布审核报送单信息发布审核报送单',
//           'statusStr': '待审批',
//           'status': 0, // 0-待审批
//           'applyTime': 1594287114000
//         }
//       ],
//       'pageNum': 1,
//       'pageSize': 15,
//       'total': 1,
//       'pages': 1
//     }
//   }
// })
// Mock.mock($api.SLB_POST_ORG, 'post', () => {
//   return {
//     'returncode': 0,
//     'message': 'ok',
//     'result': {
//       'orgStructList': [
//         {
//           'id': 123,
//           'name': '信息技术中心'
//         },
//         {
//           'id': 1213,
//           'name': '信息技术中心1'
//         }, {
//           'id': 1232,
//           'name': '信息技术中心2'
//         }, {
//           'id': 1233,
//           'name': '信息技术中心3'
//         }, {
//           'id': 1234,
//           'name': '信息技术中心4'
//         }
//       ],
//       'orgMemberList': [
//         {
//           'name': '张三',
//           'mobile': '13390900990',
//           'orgName': '办公厅'
//         }
//       ]
//     }
//   }
// })
// Mock.mock($api.SLB_POST_MEMBER, 'post', () => {
//   return {
//     'returncode': 0,
//     'message': 'ok',
//     'result': {
//       'list': [
//         {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhangsan',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': '999',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': '888',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': '777',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': '666',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': '555',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': '444',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': '333',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': '222',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': '111',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'zhaoliu',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'wangwu',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }, {
//           'name': 'lisi',
//           'mobile': '13309090909',
//           'orgName': '信息技术中心'
//         }
//       ],
//       'pageNum': 1,
//       'pageSize': 15,
//       'total': 1,
//       'pages': 1
//     }
//   }
// })
// Mock.mock($api.SLB_POST_IS_OK, 'post', () => {
//   return {
//     'returncode': 2,
//     'message': 'ok',
//     'result': null
//   }
// })
// Mock.mock($api.SLB_GET_WORK_APPROVE, 'post', () => {
//   return {
//     'returncode': 0,
//     'message': 'ok',
//     'result': null
//   }
// })
// Mock.mock(RegExp($api.SLB_GET_WORK_BYID + '.*'), () => {
//   return {
//     'returncode': 0,
//     'message': 'ok',
//     'result': {
//       'curNodeLevel': 1,
//       'id': '5f9f5355908441b38077f3d96c8266dc',
//       'proposeColumn': '水利要闻',
//       'involveLeader': '张三',
//       'isOpen': 1,
//       'submitDept': '机关司局',
//       'directlyDept': '办公厅',
//       'submittedBy': '李四',
//       'offices': '信息一处',
//       'officePhone': '010-55880901',
//       'telephone': '13309090909',
//       'source': 1,
//       'sourceName': '转载',
//       'reprintContent': '摘自新华网XXX',
//       'title': '信息发布审核报送单',
//       'isSecret': 0,
//       'isLegalAuthorization': 1,
//       'directlyLeader': '王小明',
//       'isDirectlyLeader': 1,
//       'status': 0,
//       'statusName': '待审批',
//       'publicTimeLimit':'其他2024-11-01',
//       'applyTime': '2020-07-09 17:31:54',
//       'flowId': null,
//       'attachments': [
//         {
//           'id': '6f9f5355908441b38077f3d96c8256dc',
//           'formId': '5f9f5355908441b38077f3d96c8266dc',
//           'fileName': '批复件扫描件.jpg',
//           'imageURL': 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1598844121&di=84e84b48451e0abb0370dad40c16092d&src=http://a2.att.hudong.com/36/48/19300001357258133412489354717.jpg',
//           'attachType': 1,
//           'status': 0,
//           'uploadTime': '2020-07-09 11:00:00'
//         }
//       ],
//       'approves': [
//         {
//           'curNodeLevel': -1,
//           'id': '6f9f5355908441b38077f3d96c8266dc',
//           'createTime': '2020-07-09 11:00:00',
//           'updateTime': '2020-07-09 01:00:00',
//           'formId': '5f9f5355908441b38077f3d96c8266dc',
//           'approvalLevel': 1,
//           'approvalStatus': 1,
//           'approvalUserName': '陈宇',
//           'approvalUserId': '13399998807',
//           'approvalComments': '同意'
//         }
//       ]
//     }
//   }
// })