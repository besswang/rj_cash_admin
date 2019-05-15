import api from '@api/index'
// import * as type from '@redux/actionTypes'
import { requestPosts, receivePosts, failurePosts, saveIdCardInfo, shouldFetchPosts } from '@redux/actions'
import { Message } from 'element-react'

// 身份证信息
export const selectIdCardByUserId = id => {
  return async dispatch => {
    const data = await api.selectIdCardByUserIdApi(id)
    if (data.success) {
      dispatch(saveIdCardInfo(data.data))
    }
  }
}

// 手机认证
export const selectPhoneDateByUserId = id => {
  return async dispatch => {
    const data = await api.selectPhoneDateByUserIdApi(id)
    if (data.success) {
      if (data.data){
        dispatch(saveIdCardInfo(data.data))
      }else{
        Message.info('数据为空')
      }
    }
  }
}

// 紧急联系人
export const emergency = id => {
  return async dispatch => {
    const data = await api.selectEmergencyByUserIdApi(id)
    if (data.success) {
      if (data.data) {
        dispatch(saveIdCardInfo(data.data))
      } else {
        Message.info('数据为空')
      }
    }
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
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const trans = Object.assign({},searchAll,posts)
    const data = await api.selectReportMailApi(trans)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}
