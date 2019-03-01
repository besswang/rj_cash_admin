import React from 'react';
import {Route, Switch} from 'react-router-dom';
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
import '../styles/home.less'
class Home extends React.Component{
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
							<Switch>
								<Route exact path="/" component={Welcome}></Route>
								<Route exact path="/member/mlist" component={Mlist}></Route>
								<Route exact path="/member/mlist/detail" component={Detail}></Route>
								<Route exact path="/member/apply" component={Apply}></Route>
								<Route exact path="/member/normal" component={Normal}></Route>
							</Switch>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}
export default Home;