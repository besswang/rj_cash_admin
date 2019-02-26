// api文件存放接口文件夹
import Fetch from '../fetch/fetch'
import jk from './jk'
export default {
  logoutApi: () => Fetch(jk.a, {
    method: 'get'
  }),
}