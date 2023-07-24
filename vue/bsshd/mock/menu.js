import $api from '@/api'
// 引入mockjs
const Mock = require('mockjs')

// 获取菜单数据

/**
 *  菜单属性都必须存在，字符类型可以填空字符串，数组类型填写[]空数组
 *  src是iframe的地址，path是单页面路由地址，注意两者不能同时填写
 *  name 属性是一个唯一的标识
 *  主页的name 默认是home。如要更改 需更app.config（尽量不要修改）
 *
 */
Mock.mock($api.BASE_GET_MENU, () => {
  return {
    code: 200,
    msg: 'Succeed!',
    body: {
      data: [
        {
          title: 'slb',
          icon: 'el-icon-my-zujian',
          children: [
            // { name: 'DeviceRadars', title: '装置状态雷达图' },
            // { name: 'EquipmentRadars', title: '设备状态雷达图' },
            // { name: 'PointAnalyze', title: '测点指标分析' }
          ]
        }
      ]
    }
  }
})
