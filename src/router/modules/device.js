// 设备配置 路由 ，分割路由
import Layout from '@/layout'

const deviceRouter = {
  path: '/device',
  component: Layout,
  redirect: '/device/rename',
  name: 'Device',
  alwaysShow: true,
  meta: {
    title: '设备配置',
    icon: 'chart'
  },
  children: [
    // 设备命名
    {
      path: 'rename',
      component: () => import('@/views/device/rename'),
      name: 'Rename-device',
      meta: { title: '设备命名', noCache: true }
    },
    // 接口管理
    {
      path: 'interface',
      name: 'Interface-management',
      component: () => import('@/views/device/interface'),
      redirect: '/device/interface/physical',
      meta: { title: '接口管理', noCache: true },
      children: [
        {
          path: 'physical',
          component: () => import('@/views/device/interface/physical'),
          name: 'Physical-interface-management',
          meta: { title: '物理接口', noCache: true }
        },
        {
          path: 'virtual',
          component: () => import('@/views/device/interface/virtual'),
          name: 'Virtual-interface-management',
          meta: { title: '虚拟接口', noCache: true }
        }
      ]
    },
    // 防火墙配置
    {
      path: 'firewall',
      name: 'Firewall',
      redirect: '/device/firewall/nat',
      component: () => import('@/views/device/firewall'),
      meta: { title: '防火墙配置', noCache: true },
      children: [
        {
          path: 'nat',
          component: () => import('@/views/device/firewall/nat'),
          name: 'NAT',
          meta: { title: 'NAT规则', noCache: true }
        },
        {
          path: 'acl',
          component: () => import('@/views/device/firewall/acl'),
          name: 'ACL',
          meta: { title: 'ACL规则', noCache: true }
        }
      ]
    },
    // 路由管理
    {
      path: 'route',
      name: 'Route',
      redirect: '/device/route/gateway',
      component: () => import('@/views/device/route'),
      meta: { title: '路由管理', noCache: true },
      children: [
        {
          path: 'gateway',
          component: () => import('@/views/device/route/gateway'),
          name: 'Gateway',
          meta: { title: '网关配置', noCache: true }
        },
        {
          path: 'routetable',
          component: () => import('@/views/device/route/routetable'),
          name: 'Routetable',
          meta: { title: '路由表', noCache: true }
        }
      ]
    },
    // 联动IP配置
    {
      path: 'linkage',
      component: () => import('@/views/device/linkage'),
      name: 'Linkage',
      meta: { title: '联动IP配置', noCache: true }
    }
    // 命令行配置
    // 用户空间配置
    // 双机热备
  ]
}

export default deviceRouter
