import React,{ Component } from 'react'
import '../../styles/header.less'
export default class Header extends Component {
  render() {
    return (
      <ul className = "header-ul flex flex-direction_row justify-content_flex-justify align-items_center" >
        <li className="flex flex-direction_row">
          <h4>管理系统</h4>
          <span>欢迎王立娟</span>
        </li>
        <li>
          退出系统
        </li>
      </ul>
    )
  }
}