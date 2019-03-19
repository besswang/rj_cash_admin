//存放分发的 action函数
// 使用 action 来描述“ 发生了什么”
import * as type from '../actionTypes'
import api from '@api/index'
const list = data => ({
  type: type.AUDIT_LIST,
  loading: false,
  payload: data
})
const refuseList = data => ({
  type: type.AUDIT_REFUSE_LIST,
  loading: false,
  payload: data
})
// 借款管理-待审核
export const auditList = () => {
  return async dispatch => {
    const l = await api.auditList()
    dispatch(list(l))
  }
}
// 借款管理-审核拒绝
export const auditRefuseList = (data) => {
  return async dispatch => {
    const li = await api.auditRefuseList(data)
    dispatch(refuseList(li))
  }
}
// 借款管理-审核拒绝-开放申请

