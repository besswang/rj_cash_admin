//存放单个的 reducer
// 使用 reducers 来根据 action 更新 state 的用法。
//reducer 就是一个纯函数， 接收旧的 state 和 action， 返回新的 state。
// 现在只需要谨记 reducer 一定要保持纯净。 只要传入参数相同， 返回计算得到的下一个 state 就一定相同。 没有特殊情况、 没有副作用， 没有 API 请求、 没有变量修改， 单纯执行计算。

//初始化验证码
// state初始值
const initState = {
  redirectTo: '', // 完成之后跳到哪里
  username: '', // 账号
  pwd: '', // 密码
  pwdConfirm: '', // 确认密码
  type: '', // 用户类型
  msg: '', // 错误消息
  isLogin: false // 是否登录
}
const user = (state = initState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      // return Object.assign({}, state, {
      //   loading: true
      // })
      return {
        ...state,
        ...action.data,
        msg: '',
        redirectTo: '/welcome'
      }
    case 'AUDIT_LIST':
      // return Object.assign({}, state, {list: action.payload},{loading:false})
      return {
        ...state,
        msg: action.msg
      }
    default:
      return state
  }
}

export default user