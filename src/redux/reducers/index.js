//存放单个的 reducer
// 使用 reducers 来根据 action 更新 state 的用法。
//reducer 就是一个纯函数， 接收旧的 state 和 action， 返回新的 state。
// 现在只需要谨记 reducer 一定要保持纯净。 只要传入参数相同， 返回计算得到的下一个 state 就一定相同。 没有特殊情况、 没有副作用， 没有 API 请求、 没有变量修改， 单纯执行计算。
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import router from './router'
import user from '@containers/user/reducer'
import list from './list'
import * as type from '../actionTypes'
import { PAGE_SIZE, CURRENT_PAGE } from '@meta/state'
import treeData from '@containers/system/reducers'

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

const typeName = (state = '', action) => {
  switch (action.type){
    case type.SELECT_SEARCH_TEXT:
      return action.text
    case type.CLEAR_SEARCH_ALL:
      return ''
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
// 非列表的loading状态
const btnLoading = (state = false, action) => {
  switch (action.type) {
    case type.BTN_REQUEST_POSTS:
      return true
    case type.BTN_RECEIVE_POSTS:
      return false
    case type.BTN_FAILURE_POSTS:
      return false
    default:
      return state
  }
}
const realName = (state = '', action) => {
  switch (action.type) {
    case type.SAVE_REAL_NAME:
      return action.text
    case type.CLEAR_SEARCH_ALL:
      return ''
    default:
      return state
  }
}
const search = {
  startTime: '',
  endTime: '',
  pageNum: CURRENT_PAGE,
  pageSize: PAGE_SIZE,
  newClient: 0,
  timeType: 0,
  typeId: 0,
  typeName: '',
  realName: ''
}
const searchAll = (state = search, action) => {
  switch (action.type) {
    case type.SELECT_CHANNEL_NAME:
      return {...state, channelName: action.data}
    case type.SAVE_REAL_NAME:
      return { ...state, realName: action.text }
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
const channelList = (state = [], action) => {
    switch (action.type) {
      case type.SAVE_CHANNEL_NAME:{
        // const data = action.data.filter(item => {
        //   item['value'] = item.channelName
        //   return item
        // })
        return action.data
      }

      default:
        return state
    }
}

// 渠道名称
const channelName = (state = '', action) => {
  switch (action.type) {
    case type.SELECT_CHANNEL_NAME:
      return action.data
    case type.CLEAR_SEARCH_ALL:
      return ''
    default:
      return state
  }
}
export default combineReducers({
  routerReducer, user, typeId, typeName, searchAll, time, regTime, payTime, list, listInfo, selectClient, selectTime, router,
  btnLoading, realName, treeData, channelList, channelName
})
