// api文件存放接口文件夹
import Fetch from '../fetch/fetch'
export default {
  a: () => Fetch('/globalconfig/selectGlobalconfig', {method: 'get'}),
}