//存放分发的 action函数
// 使用 action 来描述“ 发生了什么”
import * as type from '../actionTypes'
import api from '@api/index'

// const list = data => ({
//   type: type.AUDIT_LIST,
//   payload: data
// })
// const refuseList = data => ({
//   type: type.AUDIT_REFUSE_LIST,
//   payload: data
// })
// // 请求的loading开始状态
// const requestPosts = () => ({
//     type: type.REQUEST_POSTS
// })
// 借款管理-待审核
// export const auditList = (data) => {
//   return async dispatch => {
//     dispatch(requestPosts())
//     const l = await api.auditList(data)
//     dispatch(list(l))
//   }
// }
// // 借款管理-审核拒绝
// export const auditRefuseList = (data) => {
//     return async dispatch => {
//       dispatch(requestPosts())
//       const li = await api.auditRefuseList(data)
//       dispatch(refuseList(li))
//     }
// }
