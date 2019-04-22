//存放分发的 action函数
// 使用 action 来描述“ 发生了什么”
import * as type from '../actionTypes'
import api from '@api/index'
import { MessageBox, Message } from 'element-react'
// import {push} from 'react-router-redux'
// 搜索类型（0:全部，1:渠道名称，2:会员姓名，3:手机号码，4:身份证号）
export const selectSubreddit = typeId => ({
  type: type.SELECT_SUBREDDIT,
  typeId
})

// 搜索类型下的输入内容
export const selectSearchText = text => ({
  type: type.SELECT_SEARCH_TEXT,
  text
})

// 搜索日期范围
export const saveTime = time => ({
  type: type.SAVE_TIME,
  time
})

// 分页-每页条数
export const sizeChange = pageSize => ({
  type: type.SIZE_CHANGE,
  pageSize
})

// 分页-当前页
export const currentChange = pageNum => ({
  type: type.CURRENT_CHANGE,
  pageNum
})

// 请求loading的开始状态
export const requestPosts = () => ({
  type: type.REQUEST_POSTS
})
// 请求成功后的存储方法
export const receivePosts = json => ({
  type: type.RECEIVE_POSTS,
  posts: json
})
// 请求失败后的方法
export const failurePosts = json => ({
  type: type.FAILURE_POSTS,
  posts: json
})
// 会员管理-会员列表
export const handelSearch = subreddit => {
  return async dispatch => {
    dispatch(requestPosts())
    const data = await api.selectUserBySeachApi(subreddit)
    if(data.success){
      dispatch(receivePosts(data.data))
    }else{
      dispatch(failurePosts(data))
      // dispatch(push('/login'))
    }
    console.log(data)
  }
}

const shouldFetchPosts = (state) => {
  const posts = state.searchAll
  return posts
}
const text = t => {
  if(t === 0){
    return '启用'
  } else {
    return '禁用'
  }
}
// 会员管理-禁用/启用
export const updateUserType = subreddit => {
    const t = text(subreddit.type)
    return (dispatch, getState) => {
      MessageBox.confirm(`将该用户${ t }, 是否继续?`, '提示', {
        type: 'warning'
      }).then(async () => {
        dispatch(requestPosts())
        const searchAll = shouldFetchPosts(getState())
        const data = await api.updateUserTypeApi(subreddit)
        if (data.success) {
          dispatch(handelSearch(searchAll))
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
          message: '已取消禁用'
        })
      })
    }
}

// 导出
export const exportUser = () => {
  return async (dispatch, getState) => {
    console.log('333')
    const data = shouldFetchPosts(getState())
    await api.exportUserApi(data)
    // const a = document.createElement('a')
    // a.setAttribute('download', '')
    // a.setAttribute('href', 'http://47.94.142.215:8081/rjwl/api/user/exportUser')
    // a.click()
  }
}
