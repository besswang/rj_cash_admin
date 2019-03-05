import React,{ Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {} from 'element-react';
import Header from './common/header';
import Sidebar from './common/sidebar';
import Welcome from '../components/welcome'
// 会员管理-会员列表
import Mlist from '../components/member/mlist'
// 会员管理-会员列表
import Detail from '../components/member/detail'
// 会员管理-注册未申请
import Apply from '../components/member/apply'
// 会员管理-正常还款未借
import Normal from '../components/member/normal'
// 报表统计-渠道统计
import Ditch from '../components/statistics/ditch'
// 报表统计-渠道统计-当天/总转化/渠道费用
import Ditchinside from '../components/statistics/ditchinside'
// 报表统计-逾期统计
import Overdue from '../components/statistics/overdue'
// 报表统计-放款统计
import Loan from '../components/statistics/loan'
// 报表统计-还款统计
import Repayment from '../components/statistics/repayment'
// 报表统计-还款统计-查看
import Repayinside from '../components/statistics/repayinside'

import history from '../routes/history'
import '../styles/home.less'
class Home extends Component{
	render(){
		return(
			<div className="flex flex-direction_column">
				<div className="header">
					<Header/>
				</div>
				<ul className="flex flex-diredtion_row container">
					<li className="sidebar">
						<Sidebar />
					</li>
					<li className="main">
						<div className="content">
							<Router history={history}>
								<Switch>
									<Route exact path="/" component={Welcome}/>
									<Route exact path="/member/mlist" component={Mlist}/>
									<Route exact path="/member/mlist/detail" component={Detail}/>
									<Route exact path="/member/apply" component={Apply}/>
									<Route exact path="/member/normal" component={Normal}/>
									<Route exact path="/statistics/ditch" component={Ditch}/>
									<Route exact path="/statistics/ditch/ditchinside" component={Ditchinside}/>
									<Route exact path="/statistics/overdue" component={Overdue}/>
									<Route exact path="/statistics/loan" component={Loan}/>
									<Route exact path="/statistics/repayment/:tabName" component={Repayment}/>
									<Route exact path="/statistics/repayment/repayinside/:tabName/:id" component={Repayinside}/>
								</Switch>
							</Router>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}
export default Home;