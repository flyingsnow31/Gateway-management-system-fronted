/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const systemRouter = {
  path: '/system',
  component: Layout,
  redirect: 'noRedirect',
  name: 'System-config',
  meta: {
    title: '系统配置',
    icon: 'chart'
  },
  children: [
    // 版本信息
    {
      path: 'version',
      component: () => import('@/views/system/version'),
      name: 'Version',
      meta: { title: '版本信息', noCache: true }
    },
    // 管理员配置
    {
      path: 'admin',
      component: () => import('@/views/system/admin'),
      name: 'Admin-config',
      meta: { title: '管理员配置', noCache: true }
    },
    // 权限配置
    {
      path: 'permission',
      component: () => import('@/views/system/permission'),
      name: 'Permission-config',
      meta: { title: '权限配置', noCache: true },
      redirect: '/system/permission/role',
      alwaysShow: true,
      children: [
        {
          path: 'role',
          component: () => import('@/views/system/permission/role'),
          name: 'Role',
          meta: { title: '角色管理', noCache: true }
        }
      ]
    },
    // 授权信息
    {
      path: 'authorization',
      component: () => import('@/views/system/authorization'),
      name: 'Authorization',
      meta: { title: '授权信息', noCache: true }
    },
    // 系统更新
    {
      path: 'update',
      component: () => import('@/views/system/update'),
      name: 'Update',
      redirect: '/system/update/upgrade',
      alwaysShow: true,
      meta: { title: '系统更新', noCache: true },
      children: [
        // 系统升级
        {
          path: 'system-upgrade',
          component: () => import('@/views/system/update/system-upgrade.vue'),
          name: 'System-Upgrade',
          meta: { title: '系统升级', noCache: true }
        }
      ]
    },
    // 系统维护
    {
      path: 'maintenance',
      component: () => import('@/views/system/maintenance'),
      name: 'Maintenance',
      redirect: '/system/maintenance/reboot-config',
      alwaysShow: true,
      meta: { title: '系统维护', noCache: true },
      children: [
        // 重启时间配置
        {
          path: 'reboot-config',
          component: () => import('@/views/system/maintenance/reboot-config'),
          name: 'Reboot-config',
          meta: { title: '重启时间配置', noCache: true }
        }
      ]
    }
  ]
}

export default systemRouter
