// 上网管理 路由 ，分割路由
import Layout from '@/layout'

const logRouter = {
  path: '/log',
  component: Layout,
  redirect: '/log/gateway',
  name: 'Log',
  alwaysShow: true,
  meta: {
    title: '日志中心',
    icon: 'chart'
  },
  children: [
    // 日志总览
    // 网关日志
    {
      path: 'gateway',
      component: () => import('@/views/log/gateway'),
      name: 'Gateway-log',
      meta: { title: '网关日志', noCache: true }
    },
    // 用户日志
    {
      path: 'user',
      component: () => import('@/views/log/user'),
      redirect: '/log/user/login',
      alwaysShow: true,
      name: 'User-log',
      meta: { title: '用户日志', noCache: true },
      children: [
        {
          path: 'login',
          component: () => import('@/views/log/user/login'),
          name: 'Login-log',
          meta: { title: '登录日志', noCache: true }
        }
      ]
    },
    // 操作日志
    {
      path: 'operation',
      component: () => import('@/views/log/operation'),
      name: 'Pperation-log',
      meta: { title: '操作日志', noCache: true }
    },
    // 日志配置
    {
      path: 'config',
      component: () => import('@/views/log/config'),
      name: 'Config-log',
      alwaysShow: true,
      redirect: '/log/config/storage',
      meta: { title: '日志配置', noCache: true },
      children: [
        {
          // 存储配置
          path: 'storage',
          component: () => import('@/views/log/config/storage'),
          name: 'Storage-config',
          meta: { title: '存储配置', noCache: true }
        }
        // {
        //   // 导出与查询
        //   path: 'export',
        //   component: () => import('@/views/log/config/export'),
        //   name: 'Export-config',
        //   meta: { title: '导出与查询', noCache: true }
        // },
        // // 日志归档
        // {
        //   path: 'archive',
        //   component: () => import('@/views/log/config/archive'),
        //   name: 'Archive-config',
        //   meta: { title: '日志归档', noCache: true }
        // }
      ]
    }
  ]
}

export default logRouter
