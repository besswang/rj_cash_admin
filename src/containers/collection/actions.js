import api from '@api/index'
import { requestPosts, receivePosts, failurePosts, shouldFetch } from '@redux/actions'
import { MessageBox, Message } from 'element-react'
// 催收管理--逾期列表
export const selectOverdueByParam = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetch(getState())
    const data = await api.selectOverdueByParamApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
  }
}

// 催收管理--催收列表
export const selectCollectionByParam = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetch(getState())
    const data = await api.selectCollectionByParamApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
  }
}

// 催收管理--个人对账
export const selectthePersion = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetch(getState())
    // const trans = Object.assign({}, searchAll, {typeId: 0}, {typeName: ''})
    const data = await api.selectthePersionApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
  }
}

// 添加黑名单
export const addUserBlack = subreddit => {
  return dispatch => {
    MessageBox.confirm('将该用户添加至黑名单, 是否继续?', '提示', {
      type: 'warning'
    }).then(async () => {
      dispatch(requestPosts())
      const data = await api.addUserBlackApi(subreddit)
      if (data.success) {
        dispatch(selectOverdueByParam())
        Message.success(data.msg)
      } else {
        dispatch(failurePosts(data))
      }
    }).catch(() => {
      Message.info('已取消操作')
    })
  }
}
// 移除黑名单
export const removeUserBlack = subreddit => {
  return dispatch => {
    MessageBox.confirm('将该用户添从黑名单移除, 是否继续?', '提示', {
      type: 'warning'
    }).then(async () => {
      dispatch(requestPosts())
      const data = await api.removeUserBlackApi(subreddit)
      if (data.success) {
        dispatch(selectOverdueByParam())
        Message.success('从黑名单移除成功')
      } else {
        dispatch(failurePosts(data))
      }
    }).catch(() => {
      Message.info('已取消操作')
    })
  }
}
