//存放单个的 reducer
// 使用 reducers 来根据 action 更新 state 的用法。
//reducer 就是一个纯函数， 接收旧的 state 和 action， 返回新的 state。
// 现在只需要谨记 reducer 一定要保持纯净。 只要传入参数相同， 返回计算得到的下一个 state 就一定相同。 没有特殊情况、 没有副作用， 没有 API 请求、 没有变量修改， 单纯执行计算。
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import list from './list'
import * as type from '../actionTypes'
import { PAGE_SIZE, CURRENT_PAGE } from '@meta/state'

// 搜索方式
const typeId = (state = 0, action) => {
  switch (action.type) {
    case type.SELECT_SUBREDDIT:{
      if ( action.typeId !=='' ){
        return action.typeId
      } else {
        return 0
      }
    }
    case type.CLEAR_SEARCH_ALL:
      return 0
    default:
      return state
  }
}

// 新老客户
const selectClient = (state = 0, action) => {
  switch (action.type) {
    case type.SELECT_CLIENT:{
      if ( action.id !== ''){
        return action.id
      } else {
        return 0
      }
    }
    case type.CLEAR_SEARCH_ALL:
      return 0
    default:
      return state
  }
}

// 日期搜索方式
const selectTime = (state = 0, action) => {
  switch (action.type) {
    case type.SELECT_TIME_TYPE:{
      if (action.id !== '') {
        return action.id
      } else {
        return 0
      }
    }
    case type.CLEAR_SEARCH_ALL:
      return 0
    default:
      return state
  }
}

const memberSearchText = (state = '', action) => {
  switch (action.type){
    case type.SELECT_SEARCH_TEXT:
      return action.text
    case type.CLEAR_SEARCH_ALL:
      return action.data.typeName
    default:
      return state
  }
}
const time = (state = [], action) => {
  switch (action.type) {
    case type.SAVE_TIME:
      return action.time
    case type.CLEAR_SEARCH_ALL:
      return []
    default:
      return state
  }
}
const regTime = (state = [], action) => {
  switch(action.type){
    case type.REGISTER_TIME:
      return action.time
    case type.CLEAR_SEARCH_ALL:
      return []
    default:
      return state
  }
}
const payTime = (state = [], action) => {
  switch (action.type) {
    case type.END_REPAY_TIME:
      return action.time
    case type.CLEAR_SEARCH_ALL:
      return []
    default:
      return state
  }
}

const search = {
  typeName: '',
  startTime: '',
  endTime: '',
  pageNum: CURRENT_PAGE,
  pageSize: PAGE_SIZE,
  typeId: typeId,
  newClient: 0,
  timeType: 0
}
const searchAll = (state = search, action) => {
  switch (action.type) {
    case type.SELECT_SUBREDDIT:{
      let id = ''
      if (action.typeId !== ''){
        id = action.typeId
      } else {
        id = 0
      }
      return {...state, typeId: id}
    }
    case type.SELECT_CLIENT: {
      let newClient = ''
      if (action.id !== ''){
        newClient = action.id
      } else {
        newClient = 0
      }
      return { ...state, newClient: newClient }
    }
    case type.SELECT_TIME_TYPE: {
      let timeType = ''
      if (action.id !== ''){
        timeType = action.id
      } else {
        timeType = 0
      }
      return { ...state, timeType: timeType }
    }
    case type.SAVE_TIME: {
      let startTime = ''
      let endTime = ''
      if (action.time !== null) {
        startTime = Math.round(action.time[0])
        endTime = Math.round(action.time[1])
      }
      return { ...state, startTime, endTime, pageNum:1 }
    }
    case type.REGISTER_TIME: {
      let beginTime = ''
      let endTime = ''
      if (action.time !== null) {
        beginTime = Math.round(action.time[0])
        endTime = Math.round(action.time[1])
      }
      return { ...state, beginTime, endTime, pageNum:1 }
    }
    case type.END_REPAY_TIME: {
      let beginTime1 = ''
      let endTime1 = ''
      if (action.time !== null) {
        beginTime1 = Math.round(action.time[0])
        endTime1 = Math.round(action.time[1])
      }
      return { ...state, beginTime1, endTime1, pageNum:1 }
    }
    case type.SELECT_SEARCH_TEXT:
      return { ...state, typeName: action.text }
    case type.SIZE_CHANGE:
      return { ...state, pageSize: action.size }
    case type.CURRENT_CHANGE:
      return { ...state, pageNum: action.pageNum }
    case type.CLEAR_SEARCH_ALL:
      return { ...state, ...action.data }
    default:
      return state
  }
}
const listInfo = (state = {}, action) => {
  switch (action.type) {
    case type.SAVE_LIST_INFO:
      return action.data
    default:
      return state
  }
}
export default combineReducers({
  routerReducer,
  user,
  typeId,
  searchAll,
  time,
  regTime,
  payTime,
  memberSearchText,
  list,
  listInfo,
  selectClient,
  selectTime
})
