import api from '@api/index'
import { requestPosts, receivePosts, failurePosts, shouldFetchPostsDate } from '@redux/actions'

export const handleSearch = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPostsDate(getState())
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
