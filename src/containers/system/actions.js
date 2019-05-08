import api from '@api/index'
import * as type from '@redux/actionTypes'
import { requestPosts, receivePosts, failurePosts, shouldFetchPosts } from '@redux/actions'
import { MessageBox, Message } from 'element-react'

// 请求loading的开始状态
const menuRequestPosts = () => ({
  type: type.MENU_REQUEST_POSTS
})
// 请求成功后的存储方法
const menuReceivePosts = json => ({
  type: type.MENU_RECEIVE_POSTS,
  posts: json
})
// 请求失败后的方法
const menuFailurePosts = json => ({
  type: type.MENU_FAILURE_POSTS,
  posts: json
})
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
// 角色添加
export const addRole = (obj) => {
  return async dispatch => {
    const data = await api.addRoleApi(obj)
    if (data.success) {
      Message.success('添加成功')
      dispatch(pageRole())
    }
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

// 角色-权限
export const selectRolemenus = (obj) => {
  return async dispatch => {
    dispatch(menuRequestPosts())
    const data = await api.selectRolemenusApi(obj)
    if (data.success) {
      dispatch(menuReceivePosts(data.data))
    }else{
      dispatch(menuFailurePosts(data))
    }
    console.log(data)
  }
}

// 角色-权限-提交
export const updateRolemenus = (obj) => {
  return async dispatch => {
    // dispatch(menuRequestPosts())
    const data = await api.updateRolemenusApi(obj)
    // if (data.success) {
    //   dispatch(menuReceivePosts(data.data))
    // } else {
    //   dispatch(menuFailurePosts(data))
    // }
    console.log(data)
  }
}