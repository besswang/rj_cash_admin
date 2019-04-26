// api文件存放接口文件夹
import Fetch from '../fetch/index'
import jk from './jk'
export default {
  manageloginApi: params => Fetch(jk.managelogin, {method: 'post', body: params}),
  verifycodeApi: params => Fetch(jk.verifycode, {method: 'get', data: params}),
  logoutApi: () => Fetch(jk.logout, {method: 'get'}),
  selectQuApi: () => Fetch(jk.selectQu, {method: 'get'}),
  channelloginApi: params => Fetch(jk.channellogin, {method: 'post', body: params}),
  selectLoanRepaymentApi: params => Fetch(jk.selectLoanRepayment, {method: 'get', data: params}),
  selectTotalLogByTimeApi: params => Fetch(jk.selectTotalLogByTime, {method: 'get', data: params}),
  selectUserBySeachApi: params => Fetch(jk.selectUserBySeach, {method: 'post', body: params}),
  updateUserTypeApi: params => Fetch(jk.updateUserType, {method: 'get', data: params}),
  addUserBlackApi: params => Fetch(jk.addUserBlack, {method:'post', body: params}),
  removeUserBlackApi: params => Fetch(jk.removeUserBlack, {method: 'delete', body: params}),
  selectOrderByParamApi: params => Fetch(jk.selectOrderByParam, {method: 'get', data: params}),
  updataStateApi: params => Fetch(jk.updataState, {method: 'put', body: params}),
  selectUserNotApplyApi: params => Fetch(jk.selectUserNotApply, {method: 'post', body: params}),
  selectUserNoLoanApi: params => Fetch(jk.selectUserNoLoan, {method: 'post', body: params}),
  pageChannelCountApi: params => Fetch(jk.pageChannelCount, {method: 'post', body: params}),
  pageOverdueCountApi: params => Fetch(jk.pageOverdueCount, {method: 'post', body: params}),
  selectDataCheckCountApi: params => Fetch(jk.selectDataCheckCount, {method: 'get', data: params}),
  selectIdCardByUserIdApi: params => Fetch(jk.selectIdCardByUserId, {method: 'get', data: params}),
  selectPhoneReportByUserIdApi: params => Fetch(jk.selectPhoneReportByUserId, {method: 'get', data: params}),
  selectEmergencyByUserIdApi: params => Fetch(jk.selectEmergencyByUserId, {method: 'get', data: params} ),
  selectBankByUserIdApi: params => Fetch(jk.selectBankByUserId, {method: 'get', data: params} ),
}
