export default {
  // 支付方式：0 支付宝 1微信 2 银行卡 3 线下
  loanMode (x) {
    switch (x) {
      case 0:
        return '支付宝'
      case 1:
        return '微信'
      case 2:
        return '银行卡'
      case 3:
        return '线下'
      default:
        return '空值'
    }
  },

  // 订单类型 默认  0 正常 1 延期   2逾期
  loanType (x) {
    switch (x) {
      case 0:
        return '正常'
      case 1:
        return '延期'
      case 2:
        return '逾期'
      default:
        return '空值'
    }
  },

  // 新老客户 等于0 为新客  大于0 为老客
  loanTerm(x) {
    if (parseInt(x) === 0) {
      return '新客'
    } else {
      return '老客'
    }
  },

  // 打款状态
  payStatus(x) {
    switch (x) {
      case 'NO_MONEY_PAID':
        return '未打款'
      case 'FIGHT_MONEY':
        return '打款中'
      case 'FALSE':
        return '失败'
      case 'SUCCESS':
        return '成功'
      default:
        return '空值'
    }
  }
}
