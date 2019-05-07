import api from '@api/index'
import { requestPosts, receivePosts, failurePosts, shouldFetchPosts } from '@redux/actions'
import { MessageBox, Message } from 'element-react'

// 期限列表
export const pageLoanterm = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const data = await api.pageLoantermApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}

// 角色列表
export const pageRole = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const data = await api.pageRoleApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}

// 角色-删除
export const deleteRole = subreddit => {
  return dispatch => {
    MessageBox.confirm('删除该角色, 是否继续?', '提示', {
      type: 'warning'
    }).then(async () => {
      dispatch(requestPosts())
      const data = await api.deleteRoleApi(subreddit)
      if (data.success) {
        dispatch(pageRole())
        Message({
          type: 'success',
          message: data.msg
        })
      } else {
        dispatch(failurePosts(data))
      }
    }).catch(() => {
      Message({
        type: 'info',
        message: '已取消删除'
      })
    })
  }
}
