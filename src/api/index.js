// api文件存放接口文件夹
import Fetch from '../fetch/fetch'
export default {
  // a: () => Fetch('/globalconfig/selectGlobalconfig', {method: 'get'}),
  a: async () => await Fetch('/globalconfig/selectGlobalconfig', { method: 'get' })
}

//fetch.1.js 写法 get 使用query传入字段，其他请求使用body,这里的get和body是请求参数对象
// let res = await this.Fetch('url', {method: 'get',query});

// a: async params => await Fetch('url', {method: 'post', body: params});
// loginApi: params => Fetch(jk.login, {method: 'post', body: params})