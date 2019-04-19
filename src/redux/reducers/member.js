import * as type from '../actionTypes'
//初始化列表数据
const list = {
  text: '2233',
  loading: false,
  data: []
}
const memberList = (state = {
  ...list
}, action) => {
  switch (action.type) {
    case type.REQUEST_POSTS:
      return {...state, loading: true}
    case type.RECEIVE_POSTS:
      return {
        ...state,
        data: action.posts,
        loading: false
      }
    default:
      return state
  }
}
export default memberList
