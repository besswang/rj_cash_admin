import React, { Component } from 'react'
import { Button, Table, Loading } from 'element-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { handelSearch } from './action'
import SelectSearch from '@components/SelectSearch'
import MyPagination from '@components/MyPagination'
import { AUDIT_SELECT } from '@meta/select'
class AuditRefuse extends Component{
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		list: PropTypes.object.isRequired,
		searchAll: PropTypes.object.isRequired
	}
	constructor(props) {
		super(props)
		this.state = {
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
      }]
		}
	}
	componentWillMount() {
		this.props.dispatch(initSearch())
		console.log(this.props)
	}
	componentDidMount() {
		this.props.dispatch(handelSearch())
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
export default connect(mapStateToProps)(AuditRefuse)