// 用户管理 路由 ，分割路由
import Layout from '@/layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/online',
  name: 'User',
  alwaysShow: true,
  meta: {
    title: '用户管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'online',
      component: () => import('@/views/user/online'),
      name: 'Online-user',
      meta: { title: '在线用户', noCache: true }
    }
    // 用户导入
    // 注册配置
    // 用户存储配置
  ]
}

export default userRouter
