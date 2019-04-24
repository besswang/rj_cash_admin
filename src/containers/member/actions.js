import api from '@api/index'
import { requestPosts, receivePosts, failurePosts } from '@redux/actions'

const shouldFetchPosts = (state) => {
  const params = state.searchAll
  // 传参去空
  // const arr = []
  // for (var name in params) {
  //   console.log(params[name])
  //   // if (params[name]) {
  //   //   arr.push()
  //   // }
  // }
  return params
}
// 注册未申请
export const applySearch = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const data = await api.selectUserNotApplyApi(searchAll)
    if(data.success){
      dispatch(receivePosts(data.data))
    }else{
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}
