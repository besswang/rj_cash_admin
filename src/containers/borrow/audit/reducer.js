import * as type from '@redux/actionTypes'
//初始化列表数据
const auditListState = {
  loading: false,
  list: []
}
const audit = (state = {
  ...auditListState
}, action) => {
  switch (action.type) {
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        loading: true
      })
    case 'AUDIT_LIST':
      return Object.assign({}, state, {
        list: action.payload
      }, {
        loading: false
      })
    default:
      return state
  }
}

export default audit
