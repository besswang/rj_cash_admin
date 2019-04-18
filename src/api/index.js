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
  selectUserBySeachApi: params => Fetch(jk.selectUserBySeach, {method: 'post', body: params})
}
