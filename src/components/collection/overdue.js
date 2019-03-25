// 催收管理-逾期列表
import React, { Component } from 'react'
import { Button,Table, Pagination } from 'element-react'
import { Link } from 'react-router-dom'
import Collsearch from '../common/search/collectionSearch'
class Mlist extends Component{
	constructor(props) {
		super(props)
		this.state = {
			total:25,
			pageSizes: [ 5, 10, 20, 30 ],
			pageSize:5,
			currentPage:1,
			value: '',
			columns: [
				{
					type: 'selection'
				}, {
					type: 'index',
					fixed: 'left'
				}, {
					label: '备注信息',
					prop: '',
					fixed: 'left'
				},{
					label: '单号',
					prop: '',
					fixed: 'left'
				},{
					label: '渠道名称',
					prop: ''
				},
				{
					label: '客户名称',
					prop: ''
				},
				{
					label: '手机号码',
					prop: ''
				},
				{
					label: '身份证号',
					prop: ''
				}, {
					label: '申请金额',
					prop: ''
				}, {
					label: '申请期限',
					prop: ''
				}, {
					label: '服务费',
					prop: ''
				}, {
					label: '已放金额',
					prop: ''
				}, {
					label: '银行名称',
					prop: ''
				}, {
					label: '银行账号',
					prop: ''
				}, {
					label: '约定还款日',
					prop: ''
				}, {
					label: '应还金额',
					prop: ''
				}, {
					label: '逾期天数',
					prop: ''
				}, {
					label: '逾期金额',
					prop: ''
				}, {
					label: '借款次数',
					prop: ''
				}, {
					label: '新老客户',
					prop: ''
				}, {
					label: '申请时间',
					prop: ''
				}, {
					label: '审核时间',
					prop: ''
				}, {
					label: '放款时间',
					prop: ''
				}, {
					label: '打款单号',
					prop: ''
				}, {
					label: '打款方式',
					prop: ''
				}, {
					label: '跟单人',
					prop: ''
				}, {
					label: '催收状态',
					prop: ''
				}, {
					label: '操作',
					fixed: 'right',
					align: 'center',
					width:180,
					render: () => {
						return (
							<div className="flex flex-direction_row">
								<Button className="margin_right10" type="danger" size="mini">{'拉入黑名单'}</Button>
								<Link to="/member/mlist/detail">
									<Button type="text" size="small">{'会员详情'}</Button>
								</Link>
							</div>
						)
					}
      }],
			data: [{
				id:1
			}]
		}
	}
	componentDidMount() {
		console.log(this.props)
	}
	render() {
		return (
			<div>
				<Collsearch searchType={ 2 } />
				<Table
				style= { { width: '100%' } }
				columns= { this.state.columns }
				data= { this.state.data }
				border
				maxHeight= { 250 }
				/>
				<Button type="primary">{'批量分配'}</Button>
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
export default Mlist