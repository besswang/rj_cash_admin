import api from '@api/index'
import { requestPosts, receivePosts, failurePosts, shouldFetchPosts } from '@redux/actions'
// 推广统计
export const selectPromotionStatistics = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const data = await api.selectPromotionStatisticsApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}

//渠道会员
export const selectChannelMember = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const data = await api.selectChannelMemberApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}

// 渠道管理
export const selectChannel = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const data = await api.selectChannelApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}

// 渠道管理-添加
export const insertChannel = obj => {
  return async dispatch => {
    const data = await api.insertChannelApi(obj)
    if (data.success) {
      dispatch(selectChannel())
    }
    console.log(data)
  }
}

// 渠道管理-编辑
export const updateChannel = obj => {
  return async dispatch => {
    const data = await api.updateChannelApi(obj)
    if (data.success) {
      dispatch(selectChannel())
    }
    console.log(data)
  }
}
