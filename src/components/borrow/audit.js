import React, { Component } from 'react'
import { Input, Form, Button, Table, MessageBox, Message, Pagination, Select } from 'element-react'
import Time from '../common/setime'
import { Link } from 'react-router-dom';
import { AUDIT_SELECT } from '../meta/select'
class Audit extends Component{
	constructor(props) {
		super(props)
		this.state = {
			total:25,
			pageSizes: [5,10,20,30],
			pageSize:5,
			currentPage:1,
			value: '',
			columns: [{
						type: 'index',
						fixed: 'left'
				}, {
					label: '订单号',
					prop: 'name',
					width: 100,
					fixed: 'left'
				},{
					label: '渠道名称',
					prop: 'tel'
				},{
					label: '真实姓名',
					prop: 'idcard'
				},
				{
					label: '风控分数',
					prop: 'ditch'
				},
				{
					label: '手机号码',
					prop: 'zip'
				},
				{
					label: '身份证号',
					prop: 'zip'
				}, {
					label: '申请金额',
					prop: 'zip'
				}, {
					label: '申请期限',
					prop: 'zip'
				}, {
					label: '服务费',
					prop: 'zip'
				}, {
					label: '催款次数',
					prop: 'zip'
				}, {
					label: '新老客户',
					prop: 'zip'
				}, {
					label: '申请时间',
					prop: 'zip'
				}, {
					label: '审核建议',
					prop: 'zip'
				}, {
					label: '操作',
					fixed: 'right',
					width:180,
					render: row => {
							return (
								<div className="flex flex-direction_row">
									<Button className="margin_right10" type="success" size="mini" onClick={ this.openUsingMessage.bind(this) }>通过</Button>
									<Button className="margin_right10" type="danger" size="mini" onClick={ this.openUsingMessage.bind(this) }>拒绝</Button>

									{/* <Button type="text" size="small" onClick={this.deleteRow.bind(this, index)}>会员详情</Button> */}
									<Link to="/borrow/auddetail">
										<Button type="text" size="small">用户详情</Button>
									</Link>
								</div>
							)
					}
      }],
			data: [{
				name: '王立娟',
				tel: '15057187176',
				idcard: '24456646773388783',
				ditch: 'xl24',
				zip: 200333,
				blackType:1,//1:在黑名单，0:不在黑明单
				using: 1 //1:启用状态；0:禁用状态
			}, {
				name: '百香果',
				tel: '15057187176',
				idcard: '24456646773388783',
				ditch: 'xl24',
				zip: 200333,
				blackType: 0, //1:在黑名单，0:不在黑明单
				using:0 //1:启用状态；0:禁用状态
			}]
		};
	}
	componentWillMount() {
		console.log(this.props)
	}
  componentDidMount() {

  }
	openBlackListMessage(type) {
		console.log(type)
		if (type === 1) {
			MessageBox.confirm('将用户从黑明单删除, 是否继续?', '提示', {
				type: 'warning'
			}).then(() => {
				Message({
					type: 'success',
					message: '删除成功!'
				});
			}).catch(() => {
				Message({
					type: 'info',
					message: '已取消删除'
				});
			});
		}else{
			MessageBox.confirm('将该用户拉入黑名单, 是否继续?', '提示', {
				type: 'warning'
			}).then(() => {
				Message({
					type: 'success',
					message: '拉黑成功!'
				});
			}).catch(() => {
				Message({
					type: 'info',
					message: '已取消拉黑'
				});
			});
		}
	}
	openUsingMessage() {
		MessageBox.confirm('将该用户禁用, 是否继续?', '提示', {
			type: 'warning'
		}).then(() => {
			Message({
				type: 'success',
				message: '禁用成功!'
			});
		}).catch(() => {
			Message({
				type: 'info',
				message: '已取消禁用'
			});
		});
	}
	deleteRow(index) {
		const {
			data
		} = this.state;
		data.splice(index, 1);
		this.setState({
			data: [...data]
		})
	}
	render() {
		return (
			<div>
				<Form inline>
					<Form.Item>
						<Select value={ this.state.value } clearable placeholder="搜索类型">
							{
								AUDIT_SELECT.map(el => {
									return <Select.Option key={ el.value } label={ el.label } value={ el.value } />
								})
							}
						</Select>
					</Form.Item>
					<Form.Item>
						<Input placeholder="请输入内容" />
					</Form.Item>
					<Form.Item>
						<Time />
					</Form.Item>
					<Form.Item>
						<Button nativeType="submit" type="primary">搜索</Button>
					</Form.Item>
				</Form>
				<Table
					style={ { width: '100%' } }
					columns={ this.state.columns }
					data={ this.state.data }
					border
					maxHeight={ 250 }
				/>
				<div className="pagination-con flex flex-direction_row justify-content_flex-center">
					<Pagination
					layout="total, sizes, prev, pager, next, jumper"
					total={ this.state.total }
					pageSizes={ this.state.pageSizes }
					pageSize={ this.state.pageSize }
					currentPage={ this.state.currentPage }
					/>
				</div>
			</div>
		)
	}
}
export default Audit