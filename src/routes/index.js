import React, { Component } from 'react'
import { BrowserRouter as Router,Route, Switch, Redirect } from 'react-router-dom'
// 你如果不想访问到后端， 应该使用HashRouter
// import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Login from '@containers/login'
import Home from '@containers/home'
// import { CHILD_ROUTES } from './childRoutes'
//路由操作
class App extends Component {
  static propTypes = {
		router: PropTypes.object
	}
  constructor(props){
    super(props)
    this.state = {
      loginSuccess:false
    }
  }
  render() {
    const { loginSuccess } = this.state
    const { router } = this.props
    // console.log(loginSuccess)
    console.log(this.props)
    return(
        <Router>
          <Switch>
            <Route exact path="/"
              render={ () => {
                  if(loginSuccess){ //判断是否已经登陆
                    return <Redirect to="/home" />
                  }else{
                    return <Redirect to="/login" />
                  }
                }
              }
            />
            <Route exact path="/login" component={ Login } />
            {/* <Home>
              { router.routerArr.map(item => {
                return <Route key={ item.id } path={ item.path } component={ item.main } />
              }) }
            </Home> */}
            <Home>
              { router.defaultRouter.map(item => {
                return <Route key={ item.name } path={ item.path } component={ item.component } />
              }) }
            </Home>
          </Switch>
        </Router>
    )
  }
}
const mapStateToProps = state => {
	const { router } = state
	return { router }
}
export default connect(mapStateToProps)(App)