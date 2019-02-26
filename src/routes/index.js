import React, { Component } from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import history from './history';
import Login from '../components/login';
import Home from '../components/home';
//路由操作
class SetRouter extends Component {
  render() {
    return(
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </Router>
    )
  }
}
export default SetRouter;