import React, { Component } from 'react'
import { Input, Form, Button, Table, Pagination, Loading } from 'element-react'
import { Link } from 'react-router-dom'
import { AUDIT_SELECT } from '@meta/select'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Time from '@components/Settime'
import SelectPicker from '@components/SelectPicker'
import { selectSubreddit, saveTime, selectSearchText, sizeChange, currentChange } from '@redux/actions/index'
import { handelSearch, handelAudit } from './action'
class Audit extends Component{
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		list: PropTypes.object.isRequired,
		searchAll: PropTypes.object.isRequired,
		selectedSubreddit: PropTypes.string,
		memberSearchText: PropTypes.string,
		time: PropTypes.array
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
				},{
					label: '渠道名称',
					prop: 'channelName'
				},{
					label: '真实姓名',
					prop: 'realName'
				},
				{
					label: '风控分数',
					prop: 'riskNum'
				},
				{
					label: '手机号码',
					prop: 'phone'
				},
				{
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
										onClick={ this.handelAudit.bind(this,row.id,'PENDING_LOAN') }
									>
										{'通过'}
									</Button>
									<Button className="margin_right10" type="danger" size="mini"
										onClick={ this.handelAudit.bind(this,row.id,'AUDIT_FAILURE') }
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
		console.log(this.props)
		this.props.dispatch(sizeChange(10))
		this.props.dispatch(currentChange(1))
		this.props.dispatch(saveTime([]))
		this.props.dispatch(selectSearchText(''))
		this.props.dispatch(selectSubreddit('0'))
		this.props.dispatch(handelSearch())
	}
  componentDidMount() {

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
	handleTextChange = val => {
		this.props.dispatch(selectSearchText(val))
	}
	handleSelectChange = e => {
		this.props.dispatch(selectSubreddit(e))
	}
	handleTimeChange = val => {
		this.props.dispatch(saveTime(val))
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
		console.log(this.props)
		const { list, searchAll, selectedSubreddit, memberSearchText, time } = this.props
		return (
			<div>
				<Form inline>
					<Form.Item>
						<SelectPicker
							value={ selectedSubreddit }
							onChange={ this.handleSelectChange }
							options={ AUDIT_SELECT }
						/>
					</Form.Item>
					<Form.Item>
						<Input
							value={ memberSearchText }
							onChange={ this.handleTextChange }
							placeholder="请输入内容"
							clearable="true"
						/>
					</Form.Item>
					<Form.Item>
						<Time
							value={ time }
							onChange={ this.handleTimeChange }
						/>
					</Form.Item>
					<Form.Item>
						<Button onClick={ this.handleSearch } nativeType="submit" type="primary">{'搜索'}</Button>
					</Form.Item>
				</Form>
				<Loading loading={ list.loading }>
					<Table
						style={ { width: '100%' } }
						columns={ this.state.columns }
						data={ list.data }
						border
						maxHeight={ 250 }
					/>
				</Loading>
				<div className="pagination-con flex flex-direction_row justify-content_flex-center">
					<Pagination
					layout="total, sizes, prev, pager, next, jumper"
					total={ list.total }
					pageSizes={ searchAll.pageSizes }
					pageSize={ searchAll.pageSize }
					currentPage={ searchAll.pageNum }
					onSizeChange={ this.sizeChange }
					onCurrentChange={ this.onCurrentChange }
					/>
				</div>
			</div>
		)
	}
}
const mapStateToProps = state => {
	const {
		list, searchAll, selectedSubreddit, memberSearchText, time
	} = state
	return {
		list, searchAll, selectedSubreddit, memberSearchText, time
	}
}
export default connect(mapStateToProps)(Audit)