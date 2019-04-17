import React,{ Component } from 'react'
import { Dropdown } from 'element-react'
import '../../styles/header.less'
export default class Header extends Component {
  handleCommand = () => {

  }
  render() {
    return (
      <ul className = "header-ul flex flex-direction_row justify-content_flex-justify align-items_center" >
        <li className="flex flex-direction_row">
          <h4>{'管理系统'}</h4>
          <span>{'欢迎王立娟'}</span>
        </li>
        <li>
          <Dropdown onCommand={ this.handleCommand } menu={ (
            <Dropdown.Menu>
              <Dropdown.Item>{'修改'}<i class="el-icon-edit el-icon--right" /></Dropdown.Item>
              <Dropdown.Item>{'退出'}</Dropdown.Item>
            </Dropdown.Menu>
            ) }
          >
            <span className="el-dropdown-link">{'设置'}<i className="el-icon-caret-bottom el-icon--right" /></span>
          </Dropdown>
        </li>
      </ul>
    )
  }
}