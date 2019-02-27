import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
//路由操作
class  MainRouter extends Component {
  render() {
    return(
        <Switch>
          <Route exact path="/" />
          <Route exact path="/member/l/mist"/>
          <Route exact path="/member/l/apply"/>
        </Switch>
    )
  }
}
export default MainRouter;