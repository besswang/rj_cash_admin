import api from '@api/index'
import * as type from '@redux/actionTypes'
import { requestPosts, receivePosts, failurePosts, shouldFetchPosts } from '@redux/actions'
import { MessageBox, Message } from 'element-react'
// 数据备份列表
export const pageBackup = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const data = await api.pageBackupApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}
// 备份
export const backup = obj => {
  return async dispatch => {
    const data = await api.backupApi(obj)
    if (data.success) {
      Message.success(data.msg)
    }
  }
}
// 用户列表
export const pageAdmin = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const data = await api.pageAdminApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}

// 用户-添加
export const addAdmin = obj => {
  return async dispatch => {
    const data = await api.addAdminApi(obj)
    if (data.success) {
      Message.success('添加成功')
      dispatch(pageAdmin())
    }
  }
}
// 用户-编辑
export const updateAdmin = (obj, t) => {
  return async dispatch => {
    if (t === 'distribution' || t === 'adminState') {
      const text = t === 'distribution' ? '分配状态' : '用户状态'
			MessageBox.confirm(`修改${ text }, 是否继续?`, '提示', {
				type: 'warning'
			}).then(async () => {
        const data = await api.updateAdminApi(obj)
        if (data.success) {
          Message.success('修改成功')
          dispatch(pageAdmin())
        }
			}).catch(() => {
        Message.info('取消操作')
			})
    }else{
      const data = await api.updateAdminApi(obj)
      if (data.success) {
        Message.success('保存成功')
        dispatch(pageAdmin())
      }
    }

  }
}
// 请求loading的开始状态
const menuRequestPosts = () => ({
  type: type.MENU_REQUEST_POSTS
})
// 请求成功后的存储方法
const menuReceivePosts = json => ({
  type: type.MENU_RECEIVE_POSTS,
  posts: json
})
// 请求失败后的方法
const menuFailurePosts = json => ({
  type: type.MENU_FAILURE_POSTS,
  posts: json
})
// 借款额度管理列表
export const pageQuota = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const data = await api.pageQuotaApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}
// 借款额度管理-添加
export const addQuota = obj => {
  return async dispatch => {
    const data = await api.addQuotaApi(obj)
    if (data.success) {
      Message.success(data.msg)
      dispatch(pageQuota())
    }
  }
}
// 借款额度管理-删除
export const deleteQuota = obj => {
  return async dispatch => {
    const data = await api.deleteQuotaApi(obj)
    if (data.success) {
      Message.success(data.msg)
      dispatch(pageQuota())
    }
  }
}
// 角色列表
export const pageRole = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const data = await api.pageRoleApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}
// 角色添加
export const addRole = (obj) => {
  return async dispatch => {
    const data = await api.addRoleApi(obj)
    if (data.success) {
      Message.success('添加成功')
      dispatch(pageRole())
    }
  }
}
// 角色-删除
export const deleteRole = subreddit => {
  return dispatch => {
    MessageBox.confirm('删除该角色, 是否继续?', '提示', {
      type: 'warning'
    }).then(async () => {
      dispatch(requestPosts())
      const data = await api.deleteRoleApi(subreddit)
      if (data.success) {
        dispatch(pageRole())
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
        message: '已取消删除'
      })
    })
  }
}

// 角色-权限
export const selectRolemenus = (obj) => {
  return async dispatch => {
    dispatch(menuRequestPosts())
    const data = await api.selectRolemenusApi(obj)
    if (data.success) {
      dispatch(menuReceivePosts(data.data))
    }else{
      dispatch(menuFailurePosts(data))
    }
    console.log(data)
  }
}

// 角色-权限-提交
export const updateRolemenus = (obj) => {
  return async dispatch => {
    // dispatch(menuRequestPosts())
    const data = await api.updateRolemenusApi(obj)
    // if (data.success) {
    //   dispatch(menuReceivePosts(data.data))
    // } else {
    //   dispatch(menuFailurePosts(data))
    // }
    console.log(data)
  }
}

// 帮助中心列表
export const pageGlobalconfig = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const data = await api.pageGlobalconfigApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
    console.log(data)
  }
}
// 帮助中心-编辑
export const updateGlobalConfig = (obj) => {
  return async dispatch => {
    const data = await api.updateGlobalConfigApi(obj)
    if (data.success) {
      Message.success(data.msg)
      dispatch(pageGlobalconfig())
    }
  }
}

// 轮播图管理-列表
export const pageRotationChart = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const data = await api.pageRotationChartApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
  }
}
// 轮播图管理-删除
export const deleteRotationChart = subreddit => {
  return dispatch => {
    MessageBox.confirm('删除该图片, 是否继续?', '提示', {
      type: 'warning'
    }).then(async () => {
      dispatch(requestPosts())
      const data = await api.deleteRotationChartApi(subreddit)
      if (data.success) {
        dispatch(pageRotationChart())
        Message.success('删除成功')
      } else {
        dispatch(failurePosts(data))
      }
    }).catch(() => {
      Message.info('取消删除')
    })
  }
}

// 轮播图管理-上/下架
export const updateRotationChart = subreddit => {
  const t = subreddit.status === 1 ? '上架' : '下架'
  return dispatch => {
    MessageBox.confirm(`${ t }该图片, 是否继续?`, '提示', {
      type: 'warning'
    }).then(async () => {
      dispatch(requestPosts())
      const data = await api.updateRotationChartApi(subreddit)
      if (data.success) {
        dispatch(pageRotationChart())
        Message.success(`${ t }成功`)
      } else {
        dispatch(failurePosts(data))
      }
    }).catch(() => {
      Message.info('取消操作')
    })
  }
}

// 提额管理
export const pageuserQuota = () => {
  return async (dispatch, getState) => {
    dispatch(requestPosts())
    const searchAll = shouldFetchPosts(getState())
    const data = await api.pageuserQuotaApi(searchAll)
    if (data.success) {
      dispatch(receivePosts(data.data))
    } else {
      dispatch(failurePosts(data))
    }
  }
}
