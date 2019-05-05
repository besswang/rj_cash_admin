import Mlist from '@containers/member/mlist/index'
import Apply from '@containers/member/apply'
import Welcome from '@containers/welcome'
// hideInMenu : 在菜单中不显示
export const CHILD_ROUTES = [{
  id: 1,
  path: '/home',
  name: '首页',
  exact: true,
  hideInMenu: true,
  main: Welcome
}, {
  name: '会员管理',
  path: '/member',
  children:[
     {
      name: '会员列表',
      path: '/member/mlist',
      exact: true,
      main: Mlist
    }, {
      name: '注册未申请',
      path: '/member/apply',
      exact: true,
      main: Apply
    },
  ]
}]
