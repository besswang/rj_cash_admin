import * as type from '../actionTypes'
import { Notification } from 'element-react'
//初始化列表数据
const initList = {
  loading: false,
  total: 0,
  pageSizes: [5, 10, 20, 30],
  data: []
}
const list = (state = {
  ...initList
}, action) => {
  switch (action.type) {
    case type.REQUEST_POSTS:
      return {...state, loading: true}
    case type.RECEIVE_POSTS:
      return {
        ...state,
        data: action.posts.list,
        total: action.posts.total,
        loading: false
      }
    case type.FAILURE_POSTS:{
      Notification.warning(action.posts.msg)
      return {...state, loading: false}
    }
    default:
      return state
  }
}
export default list
