import React, { Component } from 'react'
import { Button, Table, MessageBox, Message, Pagination, Tabs, Breadcrumb } from 'element-react'
import { Link } from 'react-router-dom'
class Auddetail extends Component{
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
				}, {
					label: '渠道名称',
					prop: 'tel'
				}, {
					label: '真实姓名',
					prop: 'idcard'
				}, {
					label: '风控分数',
					prop: 'ditch'
				}, {
					label: '手机号码',
					prop: 'zip'
				}, {
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
		}
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
				})
			}).catch(() => {
				Message({
					type: 'info',
					message: '已取消删除'
				})
			})
		}else{
			MessageBox.confirm('将该用户拉入黑名单, 是否继续?', '提示', {
				type: 'warning'
			}).then(() => {
				Message({
					type: 'success',
					message: '拉黑成功!'
				})
			}).catch(() => {
				Message({
					type: 'info',
					message: '已取消拉黑'
				})
			})
		}
	}
	openUsingMessage() {
		MessageBox.confirm('将该用户禁用, 是否继续?', '提示', {
			type: 'warning'
		}).then(() => {
			Message({
				type: 'success',
				message: '禁用成功!'
			})
		}).catch(() => {
			Message({
				type: 'info',
				message: '已取消禁用'
			})
		})
	}
	deleteRow(index) {
		const {
			data
		} = this.state
		data.splice(index, 1)
		this.setState({
			data: [...data]
		})
	}
	render() {
		return (
			<div>
				<Breadcrumb separator="/">
					<Breadcrumb.Item>
						<Link to="/borrow/audit">
              {'待审核'}
            </Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item>{'审核详情'}</Breadcrumb.Item>
				</Breadcrumb>
				<div className="flex flex-direction_row justify-content_flex-end">
					<Button type="success">{'通过'}</Button>
					<Button type="danger">{'拒绝'}</Button>
				</div>
				<Tabs activeName="1" onTabClick={ (tab) => console.log(tab.props.name) }>
					<Tabs.Pane label="申请信息" name="1"></Tabs.Pane>
					<Tabs.Pane label="身份证信息" name="2">

					</Tabs.Pane>
					<Tabs.Pane label="手机认证" name="3">{'角色管理'}</Tabs.Pane>
					<Tabs.Pane label="支付宝认证" name="4">{'定时补偿任务'}</Tabs.Pane>
					<Tabs.Pane label="紧急联系人" name="5">{'用户管理'}</Tabs.Pane>
					<Tabs.Pane label="银行卡信息" name="6">{'配置管理'}</Tabs.Pane>
					<Tabs.Pane label="芝麻信用" name="7">{'角色管理'}</Tabs.Pane>
					<Tabs.Pane label="通讯录" name="8">{'定时补偿任务'}</Tabs.Pane>
					<Tabs.Pane label="通话记录" name="9">{'定时补偿任务'}</Tabs.Pane>
				</Tabs>

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
export default Auddetail