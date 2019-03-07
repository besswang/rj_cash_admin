import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
//路由操作
class MainRouter extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" />
        <Route exact path="/member/mlist" />
        <Route exact path="/member/mlist/detail" />
        <Route exact path="/member/apply" />
        <Route exact path="/member/normal" />
        <Route exact path = "/statistics/ditch" />
        <Route exact path = "/statistics/ditch/ditchinside" />
        <Route exact path = "/statistics/overdue" />
        <Route exact path = "/statistics/loan" />
        <Route exact path = "/statistics/repayment" />
        <Route exact path = "/statistics/repayment/repayinside" />
        <Route exact path = "/statistics/consume" />
        <Route exact path = "/statistics/turnover" />
        <Route exact path = "/statistics/look" />
        <Route exact path = "/borrow/audit" />
      </Switch>
    )
  }
}
export default MainRouter