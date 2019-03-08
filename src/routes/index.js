import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import history  from './history'
import Login from '../components/login'
import Home from '../components/home'
import { CHILD_ROUTES } from './childRoutes'
//路由操作
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginSuccess:true
    }
  }
  componentDidMount() {
    // console.log(this.props.match)
  }
  componentWillUnmount() {

  }
  render() {
    const { loginSuccess } = this.state
    return(
      // <HashRouter></HashRouter>
      <Router>
        <Switch>
          <Route exact path="/"
            render={ () => {
                if(loginSuccess){
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
    )
  }
}
export default App