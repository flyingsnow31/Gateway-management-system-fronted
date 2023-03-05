// 系统监控 路由 ，分割路由

import Layout from '@/layout'

const monitorRouter = {
  path: '/monitor',
  component: Layout,
  redirect: '/monitor/info',
  name: 'Monitor',
  meta: {
    title: '系统监控',
    icon: 'chart'
  },
  children: [
    {
      path: 'info',
      // component: () => import('@/views/dashboard'),
      component: () => import('@/views/monitor/info'),
      name: 'Info',
      meta: { title: '基本信息', noCache: true }
    },
    // 系统监视
    // 流量监视
    // 系统状态
    // 网络接口信息
    {
      path: 'connection',
      component: () => import('@/views/monitor/connection'),
      name: 'Connection',
      meta: { title: '会话连接', noCache: true }
    }
  ]
}

export default monitorRouter
