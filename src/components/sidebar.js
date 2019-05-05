import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'element-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { SIDE_BAR_TEXT } from '@meta/sidebarText'
// import { CHILD_ROUTES } from '../routes/childRoutes'
class Sidebar extends Component{
  static propTypes = {
		router: PropTypes.object
	}
  componentDidMount(){
    console.log(this.props)
  }
  recursion = arr => {
    const menu = arr.map((item) => {
        if (item.children && item.children.length) {
          return (
            <Menu.SubMenu
              index={ item.path }
              key={ item.name }
              title={
                <span>
                  {item.name}
                </span>
              }
            >
              <div>{ this.recursion(item.children) }</div>
            </Menu.SubMenu>
          )
        } else if (!item.hideInMenu) {
          return (
            <Link to={ item.path } key={ item.name }>
              <Menu.Item index={ item.path }>
                { item.name }
              </Menu.Item>
            </Link>
          )
        }
        return true
    })
    return menu
	}
  render(){
    const { router } = this.props
    return (
      <Menu theme="dark" style={ { width:230 } } defaultActive={ router.defaultActive }>
        {/* {SIDE_BAR_TEXT.map(item => {
          return (
            <Menu.SubMenu index={ item.subIndex } title={ <span>{ item.title }</span> } key={ item.title }>

              { item.menuItem.map((list) => {
                return (
                  <Link to={ `${ list.path }` } key={ list.title } style={ { block:'block' } }>
                    <Menu.Item index={ list.itemIndex }>
                      { list.title }
                    </Menu.Item>
                  </Link>
                )
              })}
            </Menu.SubMenu>
          )
        })} */}
        { this.recursion(router.routerArr) }
      </Menu>
    )
  }
}

const mapStateToProps = state => {
	const { router } = state
	return { router }
}
export default connect(mapStateToProps)(Sidebar)