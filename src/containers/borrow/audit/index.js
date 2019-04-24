import React, { Component } from 'react'
import { Button, Table, Loading } from 'element-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { handelSearch, handelAudit } from './action'
import SelectSearch from '@components/SelectSearch'
import MyPagination from '@components/MyPagination'
import { AUDIT_SELECT } from '@meta/select'
import { AUDIT_FAILURE, PENDING_LOAN } from '@meta/state'
class Audit extends Component{
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		list: PropTypes.object.isRequired
	}
	constructor(props) {
		super(props)
		this.state = {
			columns: [{
						type: 'index',
						fixed: 'left'
				}, {
					label: '订单号',
					prop: 'orderNumber',
					width: 100,
					fixed: 'left'
				}, {
					label: '渠道名称',
					prop: 'channelName'
				}, {
					label: '真实姓名',
					prop: 'realName'
				}, {
					label: '风控分数',
					prop: 'riskNum'
				}, {
					label: '手机号码',
					prop: 'phone'
				}, {
					label: '身份证号',
					prop: 'idcardNumber'
				}, {
					label: '申请金额',
					prop: 'applyMoney'
				}, {
					label: '申请期限',
					prop: 'applyTerm'
				}, {
					label: '服务费',
					prop: 'serviceMoney'
				}, {
					label: '借款次数',
					prop: 'loanTerm'
				}, {
					label: '新老客户',
					prop: 'zip'
				}, {
					label: '申请时间',
					prop: 'finalDate'
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
										onClick={ this.handelAudit.bind(this,row.id, PENDING_LOAN) }
									>
										{'通过'}
									</Button>
									<Button className="margin_right10" type="danger" size="mini"
										onClick={ this.handelAudit.bind(this,row.id, AUDIT_FAILURE) }
									>
										{'拒绝'}
									</Button>
									<Link to="/borrow/auddetail">
										<Button type="text" size="small">{'用户详情'}</Button>
									</Link>
								</div>
							)
					}
      }]
		}
	}
	componentWillMount() {
		this.props.dispatch(initSearch())
	}
  componentDidMount() {
		this.props.dispatch(handelSearch())
  }
	handelAudit(id,state) {
		const trans = {
			id:id,
			state:state,
			admin:'admin'
		}
		console.log(trans)
		this.props.dispatch(handelAudit(trans))
	}
	handleSearch = e => {
		e.preventDefault()
		this.props.dispatch(handelSearch())
	}
	sizeChange = e => {
		this.props.dispatch(sizeChange(e))
		this.props.dispatch(handelSearch())
	}
	onCurrentChange = e => {
		this.props.dispatch(currentChange(e))
		this.props.dispatch(handelSearch())
	}
	render() {
		const { list } = this.props
		return (
			<div>
				<SelectSearch options={ AUDIT_SELECT }>
					<Button onClick={ this.handleSearch } type="primary">{'搜索'}</Button>
				</SelectSearch>
				<Loading loading={ list.loading }>
					<Table
						style={ { width: '100%' } }
						columns={ this.state.columns }
						data={ list.data }
						border
					/>
				</Loading>
				<MyPagination
					total={ list.total }
					onSizeChange={ this.sizeChange }
					onCurrentChange={ this.onCurrentChange }
				/>
			</div>
		)
	}
}
const mapStateToProps = state => {
	const { list } = state
	return { list }
}
export default connect(mapStateToProps)(Audit)