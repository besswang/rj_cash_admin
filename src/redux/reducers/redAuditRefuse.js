//存放单个的 reducer
// 使用 reducers 来根据 action 更新 state 的用法。
//reducer 就是一个纯函数， 接收旧的 state 和 action， 返回新的 state。
// 现在只需要谨记 reducer 一定要保持纯净。 只要传入参数相同， 返回计算得到的下一个 state 就一定相同。 没有特殊情况、 没有副作用， 没有 API 请求、 没有变量修改， 单纯执行计算。

//初始化列表数据
const auditRefuseListState = {
  loading: false,
  list:[]
}
const redAuditRefuse = (state = {...auditRefuseListState}, action) => {
  switch (action.type) {
    case 'REQUEST_POSTS':
      // return Object.assign({}, state, {
      //   loading: true
      // })
      return {...state,loading:true}
    case 'AUDIT_REFUSE_LIST':
      // return Object.assign({}, state, {list: action.payload},{loading:false})
      return {...state,list:action.payload,loading:false}
    default:
      return state
  }
}

export default redAuditRefuse