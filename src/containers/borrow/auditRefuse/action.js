import api from '@api/index'
import { AUDIT_FAILURE } from '@meta/state'
import { requestPosts, receivePosts, failurePosts } from '@redux/actions'
// 会员管理-会员列表
const shouldFetchPosts = (state) => {
  const posts = state.searchAll
  return posts
}
export const handelSearch = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const trans = Object.assign({}, searchAll, {state: AUDIT_FAILURE})
    const data = await api.selectOrderByParamApi(trans)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}
