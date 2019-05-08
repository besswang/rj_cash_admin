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
  removeUserBlackApi: params => Fetch(jk.removeUserBlack, {method: 'delete', data: params}),
  selectOrderByParamApi: params => Fetch(jk.selectOrderByParam, {method: 'get', data: params}),
  updataStateApi: params => Fetch(jk.updataState, {method: 'get', data: params}),
  selectUserNotApplyApi: params => Fetch(jk.selectUserNotApply, {method: 'post', body: params}),
  selectUserNoLoanApi: params => Fetch(jk.selectUserNoLoan, {method: 'post', body: params}),
  pageChannelCountApi: params => Fetch(jk.pageChannelCount, {method: 'post', body: params}),
  pageOverdueCountApi: params => Fetch(jk.pageOverdueCount, {method: 'post', body: params}),
  selectIdCardByUserIdApi: params => Fetch(jk.selectIdCardByUserId, {method: 'get', data: params}),
  selectPhoneReportByUserIdApi: params => Fetch(jk.selectPhoneReportByUserId, {method: 'get', data: params}),
  selectEmergencyByUserIdApi: params => Fetch(jk.selectEmergencyByUserId, {method: 'get', data: params} ),
  selectBankByUserIdApi: params => Fetch(jk.selectBankByUserId, {method: 'get', data: params}),
  selectReportMailApi: params => Fetch(jk.selectReportMail, {method: 'get', data: params}),
  pageLoanCountApi: params => Fetch(jk.pageLoanCount, {method: 'post', body: params}),
  pageRepaymentCountApi: params => Fetch(jk.pageRepaymentCount, {method: 'post', body: params}),
  pageCostCountApi: params => Fetch(jk.pageCostCount, {method: 'post', body: params}),
  pageInoutCountApi: params => Fetch(jk.pageInoutCount, {method: 'post', body: params}),
  selectDataCheckCountApi: () => Fetch(jk.selectDataCheckCount, {method: 'get'}),
  selectOverdueByParamApi: params => Fetch(jk.selectOverdueByParam, {method: 'post', body: params}),
  selectCollectionByParamApi: params => Fetch(jk.selectCollectionByParam, {method: 'post', body: params}),
  selectthePersionApi: params => Fetch(jk.selectthePersion, {method: 'post', body: params}),
  selectPendingLoanApi: params => Fetch(jk.selectPendingLoan, {method: 'post', body: params}),
  updateStateLoanApi: params => Fetch(jk.updateStateLoan, {method: 'put', body: params}),
  selectPendingRepayApi: params => Fetch(jk.selectPendingRepay, {method: 'post', body: params}),
  selectOrderCompletedApi: params => Fetch(jk.selectOrderCompleted, {method: 'post', body: params}),
  selectBillApi: params => Fetch(jk.selectBill, {method: 'post', body: params}),
  selectTheDayLoanApi: params => Fetch(jk.selectTheDayLoan, {method: 'post', body: params}),
  selectblackphoneApi: params => Fetch(jk.selectblackphone, {method: 'get', data: params}),
  deleteBlackphoneApi: params => Fetch(jk.deleteBlackphone, {method: 'delete', data: params}),
  selectEmergencyApi: params => Fetch(jk.selectEmergency, {method: 'post', body: params}),
  deleteEmergencyApi: params => Fetch(jk.deleteEmergency, {method: 'get', data: params}),
  selectPhoneDateApi: params => Fetch(jk.selectPhoneDate, {method: 'post', body: params}),
  deletePhoneReportApi: params => Fetch(jk.deleteEmergency, {method: 'get', data: params}),
  selectBankApi: params => Fetch(jk.selectBank, {method: 'post', body: params}),
  deleteBankByUserIdApi: params => Fetch(jk.deleteBankByUserId, {method: 'get', data: params}),
  selectIdCardApi: params => Fetch(jk.selectIdCard, {method: 'post', body: params}),
  deleteIdCardApi: params => Fetch(jk.deleteIdCard, {method: 'get', data: params}),
  insertRemarksApi: params => Fetch(jk.insertRemarks, {method: 'post', body: params}),
  selectAuthenticationApi: params => Fetch(jk.selectAuthentication, {method: 'post', body: params}),
  updateStatusApi: params => Fetch(jk.updateStatus, {method: 'get', data: params}),
  updateLoanTypeApi: params => Fetch(jk.updateLoanType, {method: 'get', data: params}),
  updateSortApi: params => Fetch(jk.updateSort, {method: 'get', data: params}),
  pageLoantermApi: params => Fetch(jk.pageLoanterm, {method: 'post', body: params}),
  pageRoleApi: params => Fetch(jk.pageRole, {method: 'post', body: params}),
  deleteRoleApi: params => Fetch(jk.deleteRole, {method: 'delete', data: params}),
  addRoleApi: params => Fetch(jk.addRole, {method: 'post', body: params}),
  selectRolemenusApi: params => Fetch(jk.selectRolemenus, {method: 'get', data: params}),
  updateRolemenusApi: params => Fetch(jk.updateRolemenus, {method: 'post', body: params}),
}
