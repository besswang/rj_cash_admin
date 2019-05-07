import * as state from '@meta/state'
export default {
  // 还款类型
  moneyType(x) {
    switch (x) {
      case state.DELAY:
        return '延期'
      case state.PART_RPM_AMOUNT:
        return '部分还款'
      case state.NORMAL:
        return '正常'
      default:
        return '空值'
    }
  },
  // 支付方式：0 支付宝 1微信 2 银行卡 3 线下
  payType(x) {
    switch (x) {
      case state.WX:
        return '微信'
      case state.ALI:
        return '支付宝'
      case state.BANK:
        return '银行卡'
      case state.UTL_ALI:
        return '线下支付宝'
      case state.UTL_WX:
        return '线下微信'
      default:
        return '空值'
    }
  },
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
      case state.NO_MONEY_PAID:
        return '未打款'
      case state.FIGHT_MONEY:
        return '打款中'
      case state.FALSE:
        return '失败'
      case state.SUCCESS:
        return '成功'
      default:
        return '空值'
    }
  },
    // 认证状态
  personalType(x) {
    switch (x) {
      case state.PENDING_AUTH:
        return '待认证'
      case state.CERTITICATTON:
        return '认证中'
      case state.COMPLETED:
        return '认证完成'
      default:
        return '空值'
    }
  }
}

