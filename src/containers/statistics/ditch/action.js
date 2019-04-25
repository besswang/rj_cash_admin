import api from '@api/index'
import { requestPosts, receivePosts, failurePosts } from '@redux/actions'
const shouldFetchPosts = (state) => {
  const params = state.searchAll
  const pam = {}
  for (const i in params) {
    if (params[i]) {
      pam[i] = params[i]
    }
  }
  return pam
}
export const handleSearch = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    console.log(searchAll)
    const data = await api.pageChannelCountApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}
