//存放分发的 action函数
// 使用 action 来描述“ 发生了什么”
import * as type from './actionTypes'
import { PAGE_SIZE, CURRENT_PAGE } from '@meta/state'
import timeDate from '@global/timeDate'

export const initSearch = () => ({
  type: type.CLEAR_SEARCH_ALL,
  data:{
    beginTime: '',
    beginTime1: '',
    endTime1: '',
    startTime: '',
    endTime: '',
    pageNum: CURRENT_PAGE,
    pageSize: PAGE_SIZE,
    newClient: 0,
    timeType: 0,
    typeId: 0,
    typeName: '',
    realName: ''
  }
})
// select下搜索类型
export const selectSubreddit = typeId => ({
  type: type.SELECT_SUBREDDIT,
  typeId
})

// 搜索类型下的输入内容
export const selectSearchText = text => ({
  type: type.SELECT_SEARCH_TEXT,
  text
})
// 搜索真实姓名
export const saveRealName = text => ({
  type: type.SAVE_REAL_NAME,
  text
})
// select新老客户
export const changeClient = id => ({
  type: type.SELECT_CLIENT,
  id
})

// select 日期搜索方式
export const changeTimeType = id => ({
  type: type.SELECT_TIME_TYPE,
  id
})

// 日期范围 startTime-endTime
export const saveTime = time => ({
  type: type.SAVE_TIME,
  time
})
// 日期范围 beginTime-endTime
export const registerTime = time => ({
  type: type.REGISTER_TIME,
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
// 按钮请求loading的开始状态
export const btnRequestPosts = () => ({
  type: type.BTN_REQUEST_POSTS
})
// 按钮的请求成功
export const btnReceivePosts = () => ({
  type: type.BTN_RECEIVE_POSTS
})

// 按钮的请求失败
export const btnFailurePosts = () => ({
  type: type.BTN_FAILURE_POSTS
})

// 不过滤搜索
export const shouldFetch = (state) => {
  const params = state.searchAll
  return params
}
// 搜索去空带时间戳的过滤
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

// 搜索去空带时间格式yyyy-MM-dd hh:mm:ss的过滤
export const shouldFetchPostsDate = (state) => {
  const params = state.searchAll
  const pam = {}
  for (const i in params) {
    if (params[i]) {
      pam[i] = params[i]
      if (i === 'startTime') {
        pam[i] = timeDate.time(params[i], 'yyyy-MM-dd hh:mm:ss')
      }
      if (i === 'endTime') {
        pam[i] = timeDate.time(params[i], 'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
  return pam
}

// 用户详情
export const saveList = data => ({
  type: type.SAVE_LIST_INFO,
  data
})

// menu选中状态
export const menuActive = defaultActive => ({
  type: type.MENU_ACTIVE,
  defaultActive
})
