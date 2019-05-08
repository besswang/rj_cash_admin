import * as type from '@redux/actionTypes'
import { Notification } from 'element-react'
//初始化列表数据
const initTree = {
  loading: false,
  defaultExpandedKeys:[], // 展开的项
  defaultCheckedKeys:[], // 选中的项
  data: []
}
const treeData = (state = initTree, action) => {
  switch (action.type) {
    case type.MENU_REQUEST_POSTS:
      return {...state, loading: true}
    case type.MENU_RECEIVE_POSTS:{
      // const a = action.posts.map(item => item.id+','+item.pid+','+item.zid)
      // console.log(a)
      // const defaultCheckedKeys = action.posts.filter(item => item)
      const b = action.posts.filter(item => {
        let data = null
        if (item.pid === 0){
          item['children'] = []
          data = item
        }
        return data
      })
      for(let i=0;i<action.posts.length;i++){
        for(let j=0;j<b.length;j++){
          if (action.posts[i].pid === b[j].zid){
            b[j].children.push(action.posts[i])
          }
        }
      }
      return {
        ...state, data: b, loading: false
      }
    }


    case type.MENU_FAILURE_POSTS:{
      Notification.warning(action.posts.msg)
      return {...state, loading: false, data: []}
    }
    default:
      return state
  }
}
export default treeData
