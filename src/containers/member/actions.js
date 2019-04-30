import api from '@api/index'
import * as type from '@redux/actionTypes'
import { requestPosts, receivePosts, failurePosts } from '@redux/actions'

// 最后还款日日期搜索
export const endPayTime = time => ({
  type: type.END_REPAY_TIME,
  time
})
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

// 正常还款未借
export const normalSearch = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const data = await api.selectUserNoLoanApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}
