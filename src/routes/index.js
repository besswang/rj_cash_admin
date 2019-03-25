import React, { Component } from 'react'
import { BrowserRouter as Router,Route, Switch, Redirect } from 'react-router-dom'
// 你如果不想访问到后端， 应该使用HashRouter
// import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from '@components/login'
import Home from '@components/home'
import { CHILD_ROUTES } from './childRoutes'

import { Provider } from 'react-redux'
import store from '../redux/store'
//路由操作
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loginSuccess:false
    }
  }
  render() {
    const { loginSuccess } = this.state
    console.log(loginSuccess)
    // console.log(`${match.url}`)
    return(
      <Provider store={ store }>
        <Router>
          <Switch>
            <Route exact path="/"
              render={ () => {
                  if(loginSuccess){ //判断是否已经登陆
                    return <Redirect to="/home" />
                  }else{
                    return <Redirect to = "/login" />
                  }
                }
              }
            />
            <Route exact path="/login" component={ Login } />
            <Home>
              { CHILD_ROUTES.map(item => {
                return <Route key={ item.id } path={ item.path } component={ item.main } />
              }) }
            </Home>
          </Switch>
        </Router>
      </Provider>
    )
  }
}
export default App