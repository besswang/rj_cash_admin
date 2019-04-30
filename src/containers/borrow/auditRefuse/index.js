import React, { Component } from 'react'
import { Button, Table, Loading } from 'element-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { handelSearch } from './action'
import MyPagination from '@components/MyPagination'
import Search from '@components/Search'
class AuditRefuse extends Component{
	static propTypes = {
		list: PropTypes.object.isRequired,
		sizeChange: PropTypes.func.isRequired,
		currentChange: PropTypes.func.isRequired,
		initSearch: PropTypes.func.isRequired,
		handelSearch: PropTypes.func.isRequired,
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
									<Button className="margin_right10" type="success" size="mini">
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
		this.props.initSearch()
	}
	componentDidMount() {
		this.props.handelSearch()
	}
	handleSearch = e => {
		e.preventDefault()
		this.props.handelSearch()
	}
	sizeChange = e => {
		this.props.sizeChange(e)
		this.props.handelSearch()
	}
	onCurrentChange = e => {
		this.props.currentChange(e)
		this.props.handelSearch()
	}
	render() {
		const { list } = this.props
		return (
			<div>
				<Search showSelect2 showTime>
					<Button onClick={ this.handleSearch } type="primary">{'搜索'}</Button>
				</Search>
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
const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators({ sizeChange, currentChange, initSearch, handelSearch }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(AuditRefuse)