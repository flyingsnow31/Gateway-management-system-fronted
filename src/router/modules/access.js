// 上网管理 路由 ，分割路由
import Layout from '@/layout'

const accessRouter = {
  path: '/access',
  component: Layout,
  redirect: '/access/strategy',
  name: 'Access',
  alwaysShow: true,
  meta: {
    title: '上网管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'strategy',
      component: () => import('@/views/access/strategy'),
      redirect: '/access/strategy/manage',
      alwaysShow: true,
      name: 'Strategy',
      meta: { title: '应用控制策略', noCache: true },
      children: [
        {
          path: 'manage',
          component: () => import('@/views/access/strategy/manage'),
          name: 'StrategyManage',
          meta: { title: '应用管理', noCache: true }
        }
      ]
    }
    // 黑白名单
    // 行为审计
  ]
}

export default accessRouter
