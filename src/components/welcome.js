import React from 'react'
import { Button } from 'element-react'
import Echart from '../components/common/echarts'
import Time from '../components/common/setime'
import '../styles/welcome.less'
class Welcome extends React.Component{
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	componentWillMount() {
		console.log(this.props)
	}
	componentDidMount() {

	}
	componentWillReceiveProps(nextProps) {

	}
	render(){

		return(
			<div>
				<div className="section">
					<Time />
					<Button type="primary" className="margin_left15">{'查询'}</Button>
				</div>
				 <div className="section">
						<h1 className="title">{'统计'}</h1>
						<ul className="flex flex-direction_row justify-content_flex-center wel-ul">
							<li>
								<p>{'逾期数'}</p>
								<span>{'3'}</span>
							</li>
							<li>
								<p>{'申请贷款数'}</p>
								<span>{'34637467'}</span>
							</li>
							<li>
								<p>{'审核失败数'}</p>
								<span>{'34637467'}</span>
							</li>
							<li>
								<p>{'注册app数'}</p>
								<span>{'34637467'}</span>
							</li>
							<li>
								<p>{'认证信息数'}</p>
								<span>{'34637467'}</span>
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