import React, { Component } from 'react'
import { Dropdown } from 'element-react'
import '@styles/header.less'
import api from '../api/index'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
class Header extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  }
  handleCommand = async e => {
    if(e === '0'){
      console.log('tui')
      console.log(this.props)
      console.log(this.context)
      return false
      this.props.history.push('/login')
      const res = await api.logoutApi()
      if(res.success){
        this.props.history.push('/login')
      }
    }
  }
  render() {
    return (
      <ul className= "header-ul flex flex-direction_row justify-content_flex-justify align-items_center" >
        <li className="flex flex-direction_row">
          <h4>{'管理系统'}</h4>
          <span>{'欢迎王立娟'}</span>
        </li>
        <li>
          <Dropdown onCommand={ this.handleCommand } menu={ (
            <Dropdown.Menu>
              <Dropdown.Item command="1">{'修改'}<i className="el-icon-edit el-icon--right" /></Dropdown.Item>
              <Dropdown.Item command="0">{'退出'}</Dropdown.Item>
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
Header.propTypes = {
  propsData: PropTypes.object,
  propsDataHistory: PropTypes.object
}
const mapStateToProps = state => (state.user)
export default connect(mapStateToProps)(Header)
