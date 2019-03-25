import React, { Component } from 'react'
import { Button, Table, Pagination, Message, MessageBox, Loading } from 'element-react'
import TypeSearch from '@components/common/search/typeSearch'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auditRefuseList } from '@redux/actions'
import PropTypes from 'prop-types'
class AuditRefuse extends Component{
	constructor(props) {
		super(props)
		this.state = {
			searchType: 1,
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
					prop: 'gmt',
					width: 100,
					fixed: 'left'
				},{
					label: '渠道名称',
					prop: 'configKey'
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
									<Button className="margin_right10" type="success" size="mini"
										onClick={ this.openUsingMessage.bind(this) }
									>
										{'开放申请'}
									</Button>
									{/* <Button type="text" size="small" onClick={this.deleteRow.bind(this, index)}>会员详情</Button> */}
									<Link to="/borrow/auddetail">
										<Button type="text" size="small">{'用户详情'}</Button>
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
	componentWillMount() {
		console.log(this.props)
		const { dispatch } = this.props
		const trans = {
			typeid: 0,
			typename:'',
			state: -1,
			thetime: 0,
			page: 1,
			limit: 10,
		}
		dispatch(auditRefuseList(trans))
	}
  componentDidMount() {

  }
	openBlackListMessage(type) {
		// console.log(type)
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
		console.log(this.props)
		const { list, loading } = this.props
		const { searchType } = this.state
		return (
			<div>
				<TypeSearch searchType={ searchType }/>
				<Loading loading={ loading }>
					<Table
						style={ { width: '100%' } }
						columns={ this.state.columns }
						data={ list }
						border
						maxHeight={ 500 }
					/>
				</Loading>
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
//取redux里默认list列表
const mapStateToProps = state => (state.redAuditRefuse)
AuditRefuse.propTypes = {
	list: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	dispatch: PropTypes.func.isRequired
}
export default connect(mapStateToProps)(AuditRefuse)