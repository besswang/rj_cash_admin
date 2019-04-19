import React from 'react'
import Welcome from '@containers/welcome'
// 会员管理-会员列表
import Mlist from '@containers/member/mlist'
// 会员管理-会员列表
import Detail from '@containers/member/detail'
// 会员管理-注册未申请
import Apply from '@containers/member/apply'
// 会员管理-正常还款未借
import Normal from '@containers/member/normal'
// 报表统计-渠道统计
import Ditch from '@containers/statistics/ditch'
// 报表统计-渠道统计-当天/总转化/渠道费用
import Ditchinside from '@containers/statistics/ditchinside'
// 报表统计-逾期统计
import Overdue from '@containers/statistics/overdue'
// 报表统计-放款统计
import Loan from '@containers/statistics/loan'
// 报表统计-还款统计
import Repayment from '@containers/statistics/repayment'
// 报表统计-还款统计-查看
import Repayinside from '@containers/statistics/repayinside'
// 报表统计-消耗费用
import Consume from '@containers/statistics/consume'
// 报表统计-进出账
import Turnover from '@containers/statistics/turnover'
// 报表统计-数据看版
import Look from '@containers/statistics/look'
// 借款管理-待审核
import Audit from '@containers/borrow/audit'
// 借款管理-待审核-详情
import Auddetail from '@containers/borrow/auddetail'
// 借款管理-审核拒绝
import Auditrefuse from '@containers/borrow/auditRefuse'
// 催收管理-逾期列表
import Colloverdue from '@containers/collection/overdue'
export const CHILD_ROUTES = [{
  id: 1,
  path: '/home',
  exact: true,
  main: () => <Welcome />
}, {
  id: 2,
  path: '/member/mlist',
  // path: `${match.url}`,
  exact: true,
  main: () => <Mlist />
}, {
  id: 3,
  path: '/member/mlist/detail',
  exact: true,
  main: () => <Detail />
}, {
  id: 4,
  path: '/member/apply',
  exact: true,
  main: () => <Apply />
}, {
  id: 5,
  path: '/member/normal',
  exact: true,
  main: () => <Normal />
}, {
  id: 6,
  path: '/statistics/ditch',
  exact: true,
  main: () => <Ditch />
}, {
  id: 7,
  path: '/statistics/ditch/ditchinside',
  exact: true,
  main: () => <Ditchinside />
}, {
  id: 8,
  path: '/statistics/overdue',
  exact: true,
  main: () => <Overdue />
}, {
  id: 9,
  path: '/statistics/loan',
  exact: true,
  main: () => <Loan />
}, {
  id: 10,
  path: '/statistics/repayment/:tabName',
  exact: true,
  main: () => <Repayment />
}, {
  id: 11,
  path: '/statistics/repayinside/:tabName/:id',
  exact: true,
  main: () => <Repayinside />
}, {
  id: 12,
  path: '/statistics/consume',
  exact: true,
  main: () => <Consume />
}, {
  id: 13,
  path: '/statistics/turnover',
  exact: true,
  main: () => <Turnover />
}, {
  id: 14,
  path: '/statistics/look',
  exact: true,
  main: () => <Look />
}, {
  id: 15,
  path: '/borrow/audit',
  exact: true,
  main: () => <Audit />
}, {
  id: 16,
  path: '/borrow/auddetail',
  exact: true,
  main: () => <Auddetail />
},{
  id: 17,
  path: '/borrow/auditrefuse',
  exact: true,
  main: () => <Auditrefuse />
}, {
  id: 18,
  path: '/collection/overdue',
  exact: true,
  main: () => <Colloverdue />
}]