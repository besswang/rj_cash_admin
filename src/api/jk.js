export default {
  'managelogin': 'api/login/managelogin', // 用户登陆
  'verifycode': 'api/login/verifycode', // 获取验证码
  'logout': 'api/logout', // 登出
  'channellogin': 'api/login/channellogin', // 渠道登陆
  // 欢迎页
  'selectQu': 'api/chart/selectQu', // 渠道统计-饼图
  'selectLoanRepayment': 'api/chart/selectLoanRepayment', // 放/还款统计-折线
  'selectTotalLogByTime': 'api/order/selectTotalLogByTime', // 查询
  // 会员管理
  'selectUserBySeach': 'api/user/selectUserBySeach', // 会员列表
  'selectIdCardByUserId': 'api/idCard/selectIdCardByUserId', // 会员详情-身份证信息
  'selectPhoneReportByUserId': 'api/phone/selectPhoneReportByUserId', //会员详情-手机认证
  'selectEmergencyByUserId': 'api/emergency/selectEmergencyByUserId', // 会员详情-紧急联系人
  'selectBankByUserId': 'api/bank/selectBankByUserId', // 会员详情-银行卡信息
  'updateUserType': 'api/user/updateUserType', // 修改用户禁用状态
  'addUserBlack': 'api/user/addUserBlack', // 添加黑名单
  'removeUserBlack': 'api/user/removeUserBlack', // 移除黑名单
  'selectUserNotApply': 'api/user/selectUserNotApply', // 注册未申请
  'selectUserNoLoan': 'api/user/selectUserNoLoan', // 正常还款未借
  // 借款管理-待审核
  'selectOrderByParam': 'api/order/selectOrderByParam', // 待审核列表
  'updataState': 'api/order/updataState', // 操作-通过/拒绝
  // 报表统计
  'pageChannelCount': 'api/reportForm/pageChannelCount', // 渠道统计
  'pageOverdueCount': 'api/reportForm/pageOverdueCount', // 逾期统计
  'selectDataCheckCount': 'api/reportForm/selectDataCheckCount' // 数据看版
}