//存放分发的 action函数
// 使用 action 来描述“ 发生了什么”
import * as type from '../actionTypes'
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
