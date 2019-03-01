import React from 'react';
import { Input,Form,Button,Table,MessageBox,Message,Pagination } from 'element-react';
import Time from '../common/setime'
import {Link} from 'react-router-dom';
// import { MLIST_SELECT } from '../meta/select'
class Mlist extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			total:25,
			pageSizes:[5,10,20,30],
			pageSize:5,
			currentPage:1,
			value: '',
			columns: [{
						type: 'index',
						fixed: 'left'
				}, {
					label: "真实姓名",
					prop: "name",
					width:100,
					fixed: 'left'
				},{
					label: "手机号码",
					prop: "tel"
				},{
					label: "身份证号",
					prop: "idcard"
				},
				{
					label: "渠道名称",
					prop: "ditch"
				},
				{
					label: "授信额度",
					prop: "zip"
				},
				{
					label: "认证参数",
					prop: "zip"
				}, {
					label: "借款次数",
					prop: "zip"
				}, {
					label: "性别",
					prop: "zip"
				}, {
					label: "注册时间",
					prop: "zip"
				}, {
					label: "登陆IP",
					prop: "zip"
				}, {
					label: "IP城市",
					prop: "zip"
				}, {
					label: "登陆次数",
					prop: "zip"
				},{
				 	label: "黑名单",
				 	prop: "blackType",
					fixed:'right',
					 render: (row,column,index) => {
						 if(row.blackType===1){
							 return (
								 <Button type="text" size="mini" onClick={this.openBlackListMessage.bind(this,row.blackType)}>删除</Button>
							 )
						 }else{
								return (
									<Button type="text" size="mini" onClick={this.openBlackListMessage.bind(this)}>添加</Button>
								)
						 }
					 }
				},{
					label: "操作",
					fixed: 'right',
					width:120,
					render: (row, column, index)=>{
						if(row.using === 1){
							return (
								<div className="flex flex-direction_row">
									<Button className="margin_right10" type="primary" size="mini" onClick={this.openUsingMessage.bind(this)}>启用</Button>
									{/* <Button type="text" size="small" onClick={this.deleteRow.bind(this, index)}>会员详情</Button> */}
									<Link to="/member/mlist/detail">
										<Button type="text" size="small">会员详情</Button>
									</Link>
								</div>
							)
						}else{
							return (
								<div className="flex flex-direction_row">
									<Button className="margin_right10" type="danger" size="mini" onClick={this.openUsingMessage.bind(this)}>禁用</Button>
									{/* <Button type="text" size="small" onClick={this.deleteRow.bind(this, index)}>会员详情</Button> */}
									<Link to="/member/mlist/detail">
										<Button type="text" size="small">会员详情</Button>
									</Link>
								</div>
							)
						}
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
	openBlackListMessage(type) {
		console.log(type)
		if(type===1){
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
				<Form inline={true}>
					{/* <Form.Item>
						<Select value={this.state.value} clearable={true} placeholder="请选择类型">
							{
								MLIST_SELECT.map(el => {
									return <Select.Option key={el.value} label={el.label} value={el.value} />
								})
							}
						</Select>
					</Form.Item>
					<Form.Item>
						<Input placeholder="请输入内容" />
					</Form.Item> */}
					<Form.Item>
						<Input placeholder="请输入会员姓名" />
					</Form.Item>
					<Form.Item>
						<Input placeholder="请输入手机号码" />
					</Form.Item>
					<Form.Item>
						<Input placeholder="请输入身份证号" />
					</Form.Item>
					<Form.Item>
						<Time></Time>
					</Form.Item>
					<Form.Item>
						<Button nativeType="submit" type="primary">搜索</Button>
					</Form.Item>
					<Form.Item>
						<Button nativeType="submit" type="primary">导出列表</Button>
					</Form.Item>
				</Form>
				<Table
					style={{width: '100%'}}
					columns={this.state.columns}
					data={this.state.data}
					border={true}
					maxHeight={250}>
						{/* <Table.Column label="操作"
						render={
							(row, column, index) => {
								return (<span><Button type="text" size="small" onClick={this.deleteRow.bind(this, index)}>移除</Button></span>)
							}
						}>
						</Table.Column> */}
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
		)
	}
}
export default Mlist;