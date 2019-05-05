import { CHILD_ROUTES } from '../../routes/childRoutes'
const recursion = (arr, result = []) => {
  arr.map((item) => {
    if (item.children && item.children.length && !item.hideChildren) {
      return recursion(item.children, result)
    } else {
      if (item.children && item.children.length && item.hideChildren) {
        result.push(item)
        return recursion(item.children, result)
      } else {
        return result.push(item)
      }
    }
  })
  return result
}
const distributeRouter = () => {
  const defaultRouter = []
  recursion(CHILD_ROUTES).map(item => {
      return defaultRouter.push(item)
  })
  return defaultRouter
}
const router = (state = {
    routerArr: CHILD_ROUTES,
    defaultActive:'',
    routerName: [],
    defaultRouter: distributeRouter()
  }, action) => {
    return state
  }
  export default router