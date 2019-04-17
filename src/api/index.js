// api文件存放接口文件夹
import Fetch from '../fetch/index'
import jk from './jk'
export default {
  // a: () => Fetch('/globalconfig/selectGlobalconfig', {method: 'get'}),
  // list: params => Fetch('/globalconfig/selectGlobalconfig', { method: 'post', body: params})
  manageloginApi: params => Fetch(jk.managelogin, {method: 'post', body: params}),
  verifycodeApi: params => Fetch(jk.verifycode, {method: 'get', data: params})
}

//fetch.1.js 写法 get 使用query传入字段，其他请求使用body,这里的get和body是请求参数对象
// let res = await this.Fetch('url', {method: 'get',query});

// a: async params => await Fetch('url', {method: 'post', body: params});
// loginApi: params => Fetch(jk.login, {method: 'post', body: params})
//  list: async params => await Fetch('/globalconfig/selectGlobalconfig', {
//    method: 'post',
//    body: params
//  }),