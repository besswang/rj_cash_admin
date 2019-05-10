import React, { Component } from 'react'
import { Button, Table, Loading } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch, saveList } from '@redux/actions'
import { handelSearch, updateUserType, exportUser, addUserBlack, removeUserBlack } from './action'
import { Link } from 'react-router-dom'
import DisableBtn from '@components/DisableBtn'
import MyPagination from '@components/MyPagination'
import Search from '@components/Search'
class Mlist extends Component{
	static propTypes = {
		list: PropTypes.object.isRequired,
		sizeChange: PropTypes.func.isRequired,
		currentChange: PropTypes.func.isRequired,
		initSearch: PropTypes.func.isRequired,
		handelSearch: PropTypes.func.isRequired,
		updateUserType: PropTypes.func.isRequired,
		exportUser: PropTypes.func.isRequired,
		addUserBlack: PropTypes.func.isRequired,
		removeUserBlack: PropTypes.func.isRequired,
		saveList: PropTypes.func.isRequired
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
					fixed:'right',
					 render: row => {
						 return (
							 <DisableBtn
									value={ row.blackStatus }
									result={ 0 }
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
									result={ 0 }
									onClick={ this.updateUserType.bind(this, row) }
									text={ ['启用','禁用'] }
								/>
								<Link to="/detail">
									<Button type="text" size="small" onClick={ this.props.saveList.bind(this, row) }>{'会员详情'}</Button>
								</Link>
							</div>
						)
					}
      }],
			data: []
		}
	}
	componentWillMount() {
		this.props.initSearch()
	}
	componentDidMount() {
		console.log('mlist')
		console.log(this.props)
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
	updateUserType(r) {
		this.props.updateUserType({id: r.id, type: r.type})
	}
	// 黑名单 idCard，phone,realName
	userBlack(r){
		if(r.blackStatus === 0){ // 添加
			const trans = {
				idCard: r.idNumber,
				phone: r.phone,
				realName: r.realName
			}
			this.props.addUserBlack(trans)
		} else { // 移除
			this.props.removeUserBlack({phone: r.phone})
		}
	}
	render() {
		const { list } = this.props
		return (
			<div>
				<Search showSelect1 showTime>
					<div>
						<Button onClick={ this.handleSearch } type="primary">{'搜索'}</Button>
						<Button onClick={ this.props.exportUser } type="primary">{'导出列表'}</Button>
					</div>
				</Search>
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
const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators({ sizeChange, currentChange, initSearch, handelSearch, updateUserType, exportUser, addUserBlack, removeUserBlack, saveList}, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Mlist)
