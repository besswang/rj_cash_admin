import api from '@api/index'
import { requestPosts, receivePosts, failurePosts, shouldFetch } from '@redux/actions'
// import { MessageBox, Message } from 'element-react'
// 待放款
export const selectPendingLoan = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetch(getState())
    const data = await api.selectPendingLoanApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}

// 待还款
export const selectPendingRepay = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetch(getState())
    const data = await api.selectPendingRepayApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}

// 已完成
export const selectOrderCompleted = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetch(getState())
    const data = await api.selectOrderCompletedApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}
