//存放分发 action 的 type 常量。
export const REQUEST_POSTS = 'REQUEST_POSTS' // 请求loading的开始状态
export const RECEIVE_POSTS = 'RECEIVE_POSTS' // 请求成功后的存储
export const FAILURE_POSTS = 'FAILURE_POSTS' // 请求失败
// 按钮事件的请求状态
export const BTN_REQUEST_POSTS = 'BTN_REQUEST_POSTS' // 请求loading的开始状态
export const BTN_RECEIVE_POSTS = 'BTN_RECEIVE_POSTS' // 请求成功后的存储
export const BTN_FAILURE_POSTS = 'BTN_FAILURE_POSTS' // 请求失败
export const SAVE_USER = 'SAVE_USER' // 登陆成功后存储用户信息
export const CLEAR_USER = 'CLEAR_USER' // 退出后清除用户信息
// 角色权限
export const MENU_REQUEST_POSTS = 'MENU_REQUEST_POSTS'
export const MENU_RECEIVE_POSTS = 'MENU_RECEIVE_POSTS'
export const MENU_FAILURE_POSTS = 'MENU_FAILURE_POSTS'
//借款管理
export const AUDIT_REFUSE_LIST = 'AUDIT_REFUSE_LIST'
export const AUDIT_LIST = 'AUDIT_LIST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS' // 登陆成功
export const TODO_ERRSHOW = 'TODO_ERRSHOW' // 登陆失败
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT' //select
export const M_SEARCH = 'M_SEARCH' // 会员列表-列表
export const SAVE_TIME = 'SAVE_TIME' // 时间
export const SELECT_SEARCH_TEXT = 'SELECT_SEARCH_TEXT' // 搜索select 旁边的内容
export const SIZE_CHANGE = 'SIZE_CHANGE' // 分页-每页条数
export const CURRENT_CHANGE = 'CURRENT_CHANGE' // 分页-当前页
export const CLEAR_SEARCH_ALL = 'CLEAR_SEARCH_ALL' // 重置searchAll
export const REGISTER_TIME = 'REGISTER_TIME' // 正常还款未借-注册时间
export const END_REPAY_TIME = 'END_REPAY_TIME' // 正常还款未借-最后还款日
export const SAVE_LIST_INFO = 'SAVE_LIST_INFO' // 用户列表-当前用户row的信息
export const SELECT_CLIENT = 'SELECT_CLIENT' // 新老客户
export const SELECT_TIME_TYPE = 'SELECT_TIME_TYPE' // 日期搜索方式
export const MENU_ACTIVE = 'MENU_ACTIVE' // 左侧按钮选中状态 defaultActive
export const SAVE_REAL_NAME = 'SAVE_REAL_NAME' // 真实姓名
export const SAVE_CHANNEL_NAME = 'SAVE_CHANNEL_NAME' // 搜索渠道
export const SELECT_CHANNEL_NAME = 'SELECT_CHANNEL_NAME' // 下拉选中的渠道名称