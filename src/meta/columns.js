export const APPLY_COLUMNS = [
  {
    type:'index'
  },
  {
    label: '渠道名称',
    prop: 'name'
  },
  {
    label: '真实姓名',
    prop: 'realname'
  },
  {
    label: '手机号码',
    prop: 'tel'
  },
  {
    label: '注册时间',
    prop: 'time'
  }
]
export const NORMAL_COLUMNS = [
  {
    type: 'index'
  }, {
    label: '渠道名称',
    prop: 'name'
  }, {
    label: '真实姓名',
    prop: 'realname'
  }, {
    label: '手机号码',
    prop: 'tel'
  }, {
    label: '身份证号',
    prop: 'idcard'
  }, {
    label: '注册时间',
    prop: 'time'
  }, {
    label: '最后还款日期',
    prop: 'lasttime'
  }, {
    label: '借款次数',
    prop: 'num'
  },
]
export const TODAY_DITCH = [
  {
    type: 'index'
  }, {
    label: '渠道名称',
    prop: 'daiName'
  }, {
    label: '注册人数',
    prop: 'num'
  }, {
    label: '个人信息',
    prop: 'self'
  }, {
    label: '身份认证',
    prop: 'approve'
  }, {
    label: '手机认证',
    prop: 'tel'
  }, {
    label: '银行认证',
    prop: 'bank'
  }, {
    label: '申请单数',
    prop: 'applynum'
  }, {
    label: '申请率',
    prop: 'apply'
  }, {
    label: '放款人数',
    prop: 'moneynum'
  }, {
    label: '放款率',
    prop: 'money'
  }
]
export const ALL_DITCH = [
  {
    type: 'index'
  }, {
    label: '渠道名称',
    prop: 'daiName'
  }, {
    label: '日注册量',
    prop: 'dayregister'
  }, {
    label: '日申请量',
    prop: 'apply'
  }, {
    label: '日申请率',
    prop: 'dayapplycount'
  }, {
    label: '日下单量',
    prop: 'dayorder'
  }, {
    label: '日转化率',
    prop: 'bank'
  }, {
    label: '总注册量',
    prop: 'zregister'
  }, {
    label: '总申请量',
    prop: 'zapply'
  }, {
    label: '总申请率',
    prop: 'applycount'
  }, {
    label: '总下单量',
    prop: 'zloanNum'
  }, {
    label: '总转化率',
    prop: 'zloanNumcount'
  }
]
export const COST_DITCH = [
  {
    type: 'index'
  }, {
    label: '名称',
    prop: 'daiName'
  }, {
    label: '日注册量',
    prop: 'dayregister'
  }, {
    label: '日结算量',
    prop: 'daynum'
  }, {
    label: '累计结算量',
    prop: 'settlementAll'
  }, {
    label: '推广方式',
    prop: 'channelWay'
  }, {
    label: '结算价格',
    prop: 'settlementPrice'
  }, {
    label: '日结算金额',
    prop: 'dayPrice'
  }, {
    label: '累计结算金额',
    prop: 'addupPrice'
  }
]
export const OVERDUE = [
  {
    type: 'index'
  }, {
    label: '日期',
    prop: 'theDate'
  }, {
    label: '应还单数',
    prop: 'orderNumber'
  }, {
    label: '应还金额',
    prop: 'orderMoney'
  }, {
    label: '已还单数',
    prop: 'newOrderNumber'
  }, {
    label: '已还金额',
    prop: 'newOrderMoney'
  }
]
export const CONSUME = [
  {
    type: 'index'
  }, {
    label: '日期',
    prop: 'sj'
  }, {
    label: '总费用',
    prop: 'allMoney'
  }, {
    label: '短信条数',
    prop: 'messageNum'
  }, {
    label: '短信金额',
    prop: 'messageMoney'
  }, {
    label: '身份人数',
    prop: 'idcardNum'
  }, {
    label: '身份金额',
    prop: 'idcardMoney'
  }, {
    label: '手机人数',
    prop: 'phoneNum'
  }, {
    label: '手机金额',
    prop: 'phoneMoney'
  }, {
    label: '风控人数',
    prop: 'managementNum'
  }, {
    label: '风控金额',
    prop: 'managementMoney'
  }
]
export const TURNOVER = [
  {
    type: 'index'
  }, {
    label: '进账日期',
    prop: 'sj'
  }, {
    label: '总进账',
    prop: 'allIncome'
  }, {
    label: '微信',
    prop: ''
  }, {
    label: '支付宝',
    prop: 'alipayIncome'
  }, {
    label: '银联收款',
    prop: 'bankIncome'
  }, {
    label: '线下微信',
    prop: 'xxwxIncome'
  }, {
    label: '线下支付宝',
    prop: 'xxAlipayIncome'
  }, {
    label: '线下银联',
    prop: 'xxybank'
  }, {
    label: '出账日期',
    prop: 'theDate'
  }, {
    label: '银联出账',
    prop: 'bankExpend'
  }
]
export const BANK = [{
  type: 'index',
}, {
  label: '银行卡号',
  prop: ''
}, {
  label: '所属银行',
  prop: ''
}, {
  label: '开户行地址',
  prop: ''
}, {
  label: '预留号码',
  prop: ''
}, {
  label: '状态',
  prop: ''
}, {
  label: '认证时间',
  prop: ''
}]
export const ADDRESS = [{
  type: 'index',
}, {
  label: '姓名',
  prop: ''
}, {
  label: '电话',
  prop: ''
}, {
  label: '通话次数',
  prop: ''
}]
//通话记录
export const CALL_LOG = [{
  type: 'index',
}, {
  label: '通讯号码',
  prop: ''
}, {
  label: '通讯时间',
  prop: ''
}, {
  label: '通讯方式',
  prop: ''
}, {
  label: '通话时长/秒',
  prop: ''
}, {
  label: '通话地点',
  prop: ''
}]

