import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
//路由操作
class  MainRouter extends Component {
  render() {
    return(
        <Switch>
          <Route exact path="/" />
          <Route exact path="/member/mlist"/>
          <Route exact path="/member/mlist/detail"/>
          <Route exact path="/member/apply"/>
          <Route exact path="/member/normal"/>
        </Switch>
    )
  }
}
export default MainRouter;