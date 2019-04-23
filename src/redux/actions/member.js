//存放分发的 action函数
// 使用 action 来描述“ 发生了什么”
import api from '@api/index'
import { MessageBox, Message } from 'element-react'
// import {push} from 'react-router-redux'
import { requestPosts, receivePosts, failurePosts } from './index'
// 会员管理-会员列表
export const handelSearch = subreddit => {
  return async dispatch => {
    dispatch(requestPosts())
    const data = await api.selectUserBySeachApi(subreddit)
    if(data.success){
      dispatch(receivePosts(data.data))
    }else{
      dispatch(failurePosts(data))
      // dispatch(push('/login'))
    }
    console.log(data)
  }
}

const shouldFetchPosts = (state) => {
  const posts = state.searchAll
  return posts
}
const text = t => {
  if(t === 0){
    return '启用'
  } else {
    return '禁用'
  }
}
// 会员管理-禁用/启用
export const updateUserType = subreddit => {
    const t = text(subreddit.type)
    return (dispatch, getState) => {
      MessageBox.confirm(`将该用户${ t }, 是否继续?`, '提示', {
        type: 'warning'
      }).then(async () => {
        dispatch(requestPosts())
        const searchAll = shouldFetchPosts(getState())
        const data = await api.updateUserTypeApi(subreddit)
        if (data.success) {
          dispatch(handelSearch(searchAll))
          Message({
            type: 'success',
            message: data.msg
          })
        } else {
          dispatch(failurePosts(data))
        }
      }).catch(() => {
        Message({
          type: 'info',
          message: `已取消${ t }`
        })
      })
    }
}

// 会员管理-添加黑名单
export const addUserBlack = subreddit => {
  const t = text(subreddit.type)
  return (dispatch, getState) => {
    MessageBox.confirm(`将该用户${ t }, 是否继续?`, '提示', {
      type: 'warning'
    }).then(async () => {
      dispatch(requestPosts())
      const searchAll = shouldFetchPosts(getState())
      const data = await api.addUserBlackApi(subreddit)
      if (data.success) {
        dispatch(handelSearch(searchAll))
        Message({
          type: 'success',
          message: data.msg
        })
      } else {
        dispatch(failurePosts(data))
      }
    }).catch(() => {
      Message({
        type: 'info',
        message: '已取消操作'
      })
    })
  }
}

// 导出
const formdate = (state) => {
  const params = state.searchAll
  const arr = []
  for (var name in params) {
    // if (params[name]) {
    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(params[name]))
    // }
  }
  return arr.join('&')
}
export const exportUser = () => {
  return (dispatch, getState) => {
    const data = formdate(getState())
		const url = `${ process.env.PUBLIC_URL }/api/user/exportUser?${ data }`
		const a = document.createElement('a')
		a.setAttribute('download', '')
		a.setAttribute('href', url)
		a.click()
		console.log(url)
  }
}