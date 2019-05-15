import * as type from '@redux/actionTypes'
import { Notification } from 'element-react'
//初始化列表数据
const initTree = {
  loading: false,
  defaultExpandedKeys:[], // 展开的项
  defaultCheckedKeys:[], // 选中的项
  data: [],
  options: {
    children: 'children',
    label: 'text'
  }
}
const treeData = (state = initTree, action) => {
  switch (action.type) {
    case type.MENU_REQUEST_POSTS:
      return {...state, loading: true}
    case type.MENU_RECEIVE_POSTS:{
      // const a = action.posts.map(item => item.id+','+item.pid+','+item.zid)
      // console.log(a)
      // const keys = action.posts.map(item => {
      //     let id = null
      //     if(item.state1 !== null){
      //       if (item.state1 === '1') {
      //         id = item.id
      //       }
      //     }
      //     return id
      // })
      const b = action.posts.filter(item => {
        let data = null
        if (item.pid === 0){
          item['children'] = []
          data = item
        }
        return data
      })
      const keys = []
      for(let i=0;i<action.posts.length;i++){
        for(let j=0;j<b.length;j++){
          if (action.posts[i].pid === b[j].zid){
            b[j].children.push(action.posts[i])
          }
        }
        if (action.posts[i].state1 === '1'){
          keys.push(action.posts[i].id)
        }
      }
      return {
        ...state, data: b, loading: false, defaultCheckedKeys:keys
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
