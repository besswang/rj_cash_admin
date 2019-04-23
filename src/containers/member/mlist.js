import React, { Component } from 'react'
import { Input, Form, Button, Table, Pagination, Loading } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSubreddit, saveTime, selectSearchText, sizeChange, currentChange } from '@redux/actions/index'
import { handelSearch, updateUserType, exportUser, addUserBlack } from '@redux/actions/member'
import { Link } from 'react-router-dom'
import { MLIST_SELECT } from '@meta/select'
import SelectPicker from '@components/SelectPicker'
import DisableBtn from '@components/DisableBtn'
import Time from '@components/Settime'
class Mlist extends Component{
	static propTypes = {
		selectedSubreddit: PropTypes.string,
		time: PropTypes.array,
		dispatch: PropTypes.func.isRequired,
		searchAll: PropTypes.object.isRequired,
		list: PropTypes.object.isRequired,
		memberSearchText: PropTypes.string
	}
	constructor(props) {
		super(props)
		this.state = {
			columns: [{
						type: 'index',
						fixed: 'left'
				}, {
					label: '真实姓名',
					prop: 'realName',
					width:100,
					fixed: 'left'
				},{
					label: '手机号码',
					prop: 'phone'
				},{
					label: '身份证号',
					prop: 'idNumber'
				},
				{
					label: '渠道名称',
					prop: 'channelName'
				},
				{
					label: '授信额度',
					prop: 'loanQuota'
				},
				{
					label: '认证参数',
					prop: 'certification'
				}, {
					label: '借款次数',
					prop: 'loanNum'
				}, {
					label: '注册时间',
					prop: 'gmt'
				}, {
					label: '登陆IP',
					prop: 'loginIp'
				}, {
					label: '登陆次数',
					prop: 'loanNum'
				},{
				 	label: '黑名单',
				 	prop: 'blackType',
					fixed:'right',
					 render: row => {
						 return (
							 <DisableBtn
									value={ row.blackStatus }
									onClick={ this.addUserBlack.bind(this, row) }
									text={ ['添加','移除'] }
								/>
						 )
					 }
				},{
					label: '操作',
					fixed: 'right',
					width:120,
					render: row => {
						return (
							<div className="flex flex-direction_row">
								<DisableBtn
									value={ row.type }
									onClick={ this.updateUserType.bind(this, row) }
									text={ ['启用','禁用'] }
								/>
								<Link to="/member/mlist/detail">
									<Button type="text" size="small">{'会员详情'}</Button>
								</Link>
							</div>
						)
					}
      }],
			data: []
		}
	}
	componentWillMount() {
		this.props.dispatch(saveTime([]))
		this.props.dispatch(selectSearchText(''))
		this.props.dispatch(selectSubreddit('0'))
		this.props.dispatch(handelSearch(this.props.searchAll))
	}
	componentDidMount() {
		// console.log(this.props)
	}
	addUserBlack(r) {
		console.log(r)
	}
	updateUserType(r) {
		this.props.dispatch(updateUserType({id: r.id, type: r.type}))
	}
	handleSelectChange = nextSubreddit => {
		this.props.dispatch(selectSubreddit(nextSubreddit))
	}
	handleTimeChange = val => {
		this.props.dispatch(saveTime(val))
	}
	handleTextChange = val => {
		this.props.dispatch(selectSearchText(val))
	}
	handleSearch = e => {
		e.preventDefault()
		this.props.dispatch(handelSearch(this.props.searchAll))
	}
	sizeChange = e => {
		this.props.dispatch(sizeChange(e))
		this.props.dispatch(handelSearch(this.props.searchAll))
	}
	onCurrentChange = e => {
		this.props.dispatch(currentChange(e))
		this.props.dispatch(handelSearch(this.props.searchAll))
	}
	exportUser = () => {
		this.props.dispatch(exportUser())
	}
	render() {
		console.log(this.props)
		const { selectedSubreddit,time, memberSearchText, list, searchAll } = this.props
		return (
			<div>
				<Form inline>
					<Form.Item>
						<SelectPicker
							value={ selectedSubreddit }
							onChange={ this.handleSelectChange }
							options={ MLIST_SELECT }
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
					<Form.Item>
						<Button onClick={ this.exportUser } type="primary">{'导出列表'}</Button>
						{/* <a className="el-button el-button--primary" href={ process.env.PUBLIC_URL+'/api/user/exportUser?'+ this.formdate() } download="会员列表">{'a导出'}</a> */}
					</Form.Item>
				</Form>
				<Loading loading={ list.loading }>
					<Table
					style= { { width: '100%' } }
					columns= { this.state.columns }
					data= { list.data }
					border
					/>
				</Loading>

				<div className="pagination-con flex flex-direction_row justify-content_flex-center">
					<Pagination
					layout="total, sizes, prev, pager, next, jumper"
					total={ list.total }
					pageSizes={ list.pageSizes }
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
		selectedSubreddit,
		searchAll,
		time,
		memberSearchText,
		list
	} = state
	return {
		selectedSubreddit,
		searchAll,
		time,
		memberSearchText,
		list
	}
}

export default connect(mapStateToProps)(Mlist)
