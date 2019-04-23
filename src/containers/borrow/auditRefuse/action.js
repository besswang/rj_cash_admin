import api from '@api/index'
import {
  MessageBox,
  Message
} from 'element-react'
import {
  requestPosts,
  receivePosts,
  failurePosts
} from '@redux/actions/index'
// 会员管理-会员列表
const shouldFetchPosts = (state) => {
  const posts = state.searchAll
  return posts
}
export const handelSearch = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const trans = Object.assign({}, searchAll, {
      state: 'AUDIT_FAILURE'
    })
    const data = await api.selcteOrderApi(trans)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
      // dispatch(push('/login'))
    }
    console.log(data)
  }
}
