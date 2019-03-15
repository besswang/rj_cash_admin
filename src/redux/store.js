// Store 就是把它们联系到一起的对象。 Store 有以下职责：
// 维持应用的 state；
// 提供 getState() 方法获取 state；
// 提供 dispatch(action) 方法更新 state；
// 通过 subscribe(listener) 注册监听器;
// 通过 subscribe(listener) 返回的函数注销监听器
// import {createStore} from 'redux';
// import todoApp from './reducers'
// let store = createStore(todoApp)
import {
  createStore
} from 'redux'
import reducers from './reducers/index'
const store = createStore(reducers)
export default store
