//存放单个的 reducer
// 使用 reducers 来根据 action 更新 state 的用法。
//reducer 就是一个纯函数， 接收旧的 state 和 action， 返回新的 state。
// 现在只需要谨记 reducer 一定要保持纯净。 只要传入参数相同， 返回计算得到的下一个 state 就一定相同。 没有特殊情况、 没有副作用， 没有 API 请求、 没有变量修改， 单纯执行计算。
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import redAuditRefuse from './redAuditRefuse'
import redBankDetail from './redBankDetail'
import user from './user'
import list from './list'
import * as type from '../actionTypes'


const selectedSubreddit = (state = '0', action) => {
  switch (action.type) {
    case type.SELECT_SUBREDDIT:
      return action.typeId
    default:
      return state
  }
}
const memberSearchText = (state = '', action) => {
  switch (action.type){
    case type.SELECT_SEARCH_TEXT:
      return action.text
    default:
      return state
  }
}
const time = (state = [], action) => {
  switch (action.type) {
    case type.SAVE_TIME:
      return action.time
    default:
      return state
  }
}

const search = {
  typeName: '',
  startTime: '',
  endTime: '',
  pageNum: 1,
  pageSize:10,
  typeId: '0'
}
const searchAll = (state = search, action) => {
  switch (action.type) {
    case type.SELECT_SUBREDDIT:{
      let typeId = ''
      if (action.typeId !== ''){
        typeId = action.typeId
      } else {
        typeId = '0'
      }
      return {...state, typeId: typeId}
    }
    case type.SAVE_TIME: {
      let startTime = ''
      let endTime = ''
      if (action.time !== null) {
        startTime = Math.round(action.time[0])
        endTime = Math.round(action.time[1])
      }
      return { ...state, startTime, endTime }
    }
    case type.SELECT_SEARCH_TEXT:
      return { ...state, typeName: action.text }
    case type.SIZE_CHANGE:
      return { ...state, pageSize: action.pageSize }
    case type.CURRENT_CHANGE:
      return { ...state, pageNum: action.pageNum }
    default:
      return state
  }
}
export default combineReducers({
  routerReducer,
  redAuditRefuse,
  redBankDetail,
  user,
  selectedSubreddit,
  searchAll,
  time,
  memberSearchText,
  list
})
