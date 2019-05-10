import api from '@api/index'
import { requestPosts, receivePosts, failurePosts, shouldFetchPosts } from '@redux/actions'
import { MessageBox, Message } from 'element-react'
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
      Message.success('添加成功')
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
      Message.success('保存成功')
      dispatch(selectChannel())
    }
    console.log(data)
  }
}

// 渠道管理-禁用
export const prohibitChannel = obj => {
  const t = obj.state === 0 ? '禁用':'启用'
  return dispatch => {
    MessageBox.confirm(`${ t }该渠道会员, 是否继续?`, '提示', {
      type: 'warning'
    }).then(async () => {
      const data = await api.prohibitChannelApi(obj)
      if (data.success) {
        dispatch(selectChannel())
        Message({
          type: 'success',
          message: data.msg
        })
      }
    }).catch(() => {
      Message({
        type: 'info',
        message: '已取消禁用'
      })
    })
  }
}
