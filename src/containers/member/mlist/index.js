import React, { Component } from 'react'
import { Button, Table, Loading } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { handelSearch, updateUserType, exportUser, addUserBlack, removeUserBlack } from './action'
import { Link } from 'react-router-dom'
import DisableBtn from '@components/DisableBtn'
import SelectSearch from '@components/SelectSearch'
import MyPagination from '@components/MyPagination'
import { MLIST_SELECT } from '@meta/select'
class Mlist extends Component{
	static propTypes = {
		selectedSubreddit: PropTypes.string,
		time: PropTypes.array,
		dispatch: PropTypes.func.isRequired,
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
									onClick={ this.userBlack.bind(this, row) }
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
		this.props.dispatch(initSearch())
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
	exportUser = () => {
		this.props.dispatch(exportUser())
	}
	updateUserType(r) {
		this.props.dispatch(updateUserType({id: r.id, type: r.type}))
	}
	// 黑名单 idCard，phone,realName
	userBlack(r){
		if(r.blackStatus === 0){ // 添加
			const trans = {
				idCard: r.idNumber,
				phone: r.phone,
				realName: r.realName
			}
			this.props.dispatch(addUserBlack(trans))
		} else { // 移除
			this.props.dispatch(removeUserBlack({phone: r.phone}))
		}
	}
	render() {
		const { list } = this.props
		return (
			<div>
				<SelectSearch options={ MLIST_SELECT }>
					<div>
						<Button onClick={ this.handleSearch } type="primary">{'搜索'}</Button>
						<Button onClick={ this.exportUser } type="primary">{'导出列表'}</Button>
					</div>
				</SelectSearch>
				<Loading loading={ list.loading }>
					<Table
					style= { { width: '100%' } }
					columns= { this.state.columns }
					data= { list.data }
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

export default connect(mapStateToProps)(Mlist)