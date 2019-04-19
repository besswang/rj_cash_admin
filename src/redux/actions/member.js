//存放分发的 action函数
// 使用 action 来描述“ 发生了什么”
import * as type from '../actionTypes'
import api from '@api/index'

export const selectSubreddit = typeId => ({
  type: type.SELECT_SUBREDDIT,
  typeId
})
export const saveTime = time => ({
  type: type.SAVE_TIME,
  time
})
export const selectSearchText = text => ({
  type: type.SELECT_SEARCH_TEXT,
  text
})
// 请求loading的开始状态
export const requestPosts = () => ({
  type: type.REQUEST_POSTS
})
// 请求成功后的存储方法
export const receivePosts = (json) => ({
  type: type.RECEIVE_POSTS,
  posts: json
})
// 会员管理-会员列表
export const handelSearch = subreddit => {
  console.log('1')
  return async dispatch => {
    dispatch(requestPosts())
    const data = await api.selectUserBySeachApi(subreddit)
    console.log(data)
    console.log('2')
    // dispatch(receivePosts(data))
  }
}
