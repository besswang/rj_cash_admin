import api from '@api/index'
import { requestPosts, receivePosts, failurePosts, shouldFetchPostsDate } from '@redux/actions'

// 催收管理--逾期列表
export const selectOverdueByParam = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = selectOverdueByParamApi(getState())
    console.log(searchAll)
    const data = await api.pageOverdueCountApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}
