import React from 'react'
import { Button } from 'element-react'
import Echart from '@components/echarts'
import Time from '@components/setime'
import api from '@api/index'
import '@styles/welcome.less'
class Welcome extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			time: {},
			overdueCount: 0, // 逾期数
			loanCount: 0, // 申请贷款数
			auditFailureCount: 0, // 审核失败数
			register: 0, // 注册app数
			authenticationCount: 0 // 认证信息数
		}
	}
	componentWillMount() {
		this.initData()
	}
	componentDidMount() {

	}
	search = () => {
		this.initData()
	}
	initData = async () => {
		const res = await api.selectTotalLogByTimeApi(this.state.time)
		console.log(res)
		if(res.success){
			this.setState({
				overdueCount:res.overdueCount,
				loanCount: res.loanCount,
				auditFailureCount: res.auditFailureCount,
				register: res.register,
				authenticationCount: res.authenticationCount
			})
		}
	}
	render(){
		return(
			<div>
				<div className="section">
					<Time handleTime={ data => this.setState({ time: data }) }/>
					<Button type="primary" className="margin_left15" onClick={ this.search }>{'查询'}</Button>
				</div>
				 <div className="section">
						<h1 className="title">{'统计'}</h1>
						<ul className="flex flex-direction_row justify-content_flex-center wel-ul">
							<li>
								<p>{'逾期数'}</p>
								<span>{ this.state.overdueCount }</span>
							</li>
							<li>
								<p>{'申请贷款数'}</p>
								<span>{ this.state.loanCount }</span>
							</li>
							<li>
								<p>{'审核失败数'}</p>
								<span>{ this.state.auditFailureCount }</span>
							</li>
							<li>
								<p>{'注册app数'}</p>
								<span>{ this.state.register }</span>
							</li>
							<li>
								<p>{'认证信息数'}</p>
								<span>{ this.state.authenticationCount }</span>
							</li>
						</ul>
				 </div>
				 <div className="section">
					<Echart/>
				 </div>
			</div>
		)
	}
}
export default Welcome