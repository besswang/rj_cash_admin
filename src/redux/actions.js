//存放分发的 action函数
// 使用 action 来描述“ 发生了什么”
import * as type from './actionTypes'
import { PAGE_SIZE, CURRENT_PAGE } from '@meta/state'

export const initSearch = () => ({
  type: type.CLEAR_SEARCH_ALL,
  data:{
    beginTime: '',
    beginTime1: '',
    endTime1: '',
    typeName: '',
    startTime: '',
    endTime: '',
    pageNum: CURRENT_PAGE,
    pageSize: PAGE_SIZE,
    typeId: '0'
  }
})
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
export const sizeChange = size => ({
  type: type.SIZE_CHANGE,
  size
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

export const shouldFetchPosts = (state) => {
  const params = state.searchAll
  const pam = {}
  for (const i in params) {
    if (params[i]) {
      pam[i] = params[i]
    }
  }
  return pam
}

// 用户详情
export const saveList = data => ({
  type: type.SAVE_LIST_INFO,
  data
})
