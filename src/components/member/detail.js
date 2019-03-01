import React from 'react';
import {Breadcrumb} from 'element-react'
class Detail extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render(){
		return(
			<div>
				<Breadcrumb separator="/">
					<Breadcrumb.Item>会员管理</Breadcrumb.Item>
					<Breadcrumb.Item>会员列表</Breadcrumb.Item>
					<Breadcrumb.Item>会员详情</Breadcrumb.Item>
				</Breadcrumb>
			</div>
		);
	}
}
export default Detail;