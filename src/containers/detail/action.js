import api from '@api/index'
// import * as type from '@redux/actionTypes'
import { requestPosts, receivePosts, failurePosts } from '@redux/actions'

// 身份证信息
export const idCardInfo = id => {
  return async dispatch => {
    dispatch(requestPosts())
    const data = await api.selectIdCardByUserIdApi(id)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}

// 手机认证
export const phoneAuthentication = id => {
  return async dispatch => {
    dispatch(requestPosts())
    const data = await api.selectPhoneReportByUserIdApi(id)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}

// 紧急联系人
export const emergency = id => {
  return async dispatch => {
    dispatch(requestPosts())
    const data = await api.selectEmergencyByUserIdApi(id)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}
// 银行卡信息
export const bankInfo = id => {
  return async dispatch => {
    dispatch(requestPosts())
    const data = await api.selectBankByUserIdApi(id)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}

// 通讯录
export const selectReportMail = posts => {
  return async dispatch => {
    dispatch(requestPosts())
    const data = await api.selectReportMailApi(posts)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}
