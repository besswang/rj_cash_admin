import React from 'react';
import {Form,Button,Table,Pagination} from 'element-react'
import Time from '../common/setime'
import { NORMAL_COLUMNS } from '../meta/columns'

class Apply extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			total:25,
			pageSizes:[5,10,20,30],
			pageSize:5,
			currentPage:1,
			data: [{
				name: 'xl24',
				realname: '王立娟',
				tel: '15057187176',
				idcard:'549584043840385749483',
				time: '2019-11-12 12:34:56',
				lasttime: '2019-11-12 12:34:56',
				num:3
			}]
		}
	}
	render(){
		return(
			<div>
				<Form inline={true}>
					<Form.Item label="注册时间">
						<Time></Time>
					</Form.Item>
					<Form.Item label="最后还款日">
						<Time></Time>
					</Form.Item>
					<Form.Item>
						<Button nativeType="submit" type="primary">查询</Button>
					</Form.Item>
				</Form>
				<Table
					style={{width: '100%'}}
					columns={NORMAL_COLUMNS}
					data={this.state.data}
					border={true}>
				</Table>
				<div className="pagination-con flex flex-direction_row justify-content_flex-center">
					<Pagination
					layout="total, sizes, prev, pager, next, jumper"
					total={this.state.total}
					pageSizes={this.state.pageSizes}
					pageSize={this.state.pageSize}
					currentPage={this.state.currentPage}/>
				</div>
			</div>
		);
	}
}
export default Apply;