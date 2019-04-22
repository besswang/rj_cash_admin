import React, { Component } from 'react'
import { Input, Form, Button, Table, MessageBox, Message, Pagination, Loading } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import 'whatwg-fetch'
import { selectSubreddit, saveTime, selectSearchText, handelSearch, sizeChange, currentChange, updateUserType, exportUser } from '../../redux/actions/member'
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
		memberList: PropTypes.object.isRequired,
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
						 if(row.blackType === 1){
							 return (
								 <Button type="text" size="mini" onClick={ this.openBlackListMessage.bind(this,row.blackType) }>{'删除'}</Button>
							 )
						 }else{
								return (
									<Button type="text" size="mini" onClick={ this.openBlackListMessage.bind(this) }>{'添加'}</Button>
								)
						 }
					 }
				},{
					label: '操作',
					fixed: 'right',
					width:120,
					render: row => {
						return (
							<div className="flex flex-direction_row">
								<DisableBtn value={ row.type } onClick={ this.updateUserType.bind(this, row) } />
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
		// console.log(this.props)
		this.props.dispatch(handelSearch(this.props.searchAll))
	}
	componentDidMount() {
		// console.log(this.props)
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
		console.log(val)
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
		// this.props.dispatch(exportUser())
		fetch('/rjwl/api/user/exportUser', {
			method: 'POST',
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			responseType: 'blob',
			body: JSON.stringify(this.props.searchAll)
		}).then(function (response) {
			console.log(response)
		}).catch(function (err) {
			// 出错了;等价于 then 的第二个参数,但这样更好用更直观 :(
		})
	}
	render() {
		console.log(this.props)
		const { selectedSubreddit,time, memberSearchText, memberList, searchAll } = this.props
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
						{/* <a className="el-button el-button--primary" href="api/user/exportUser" download="会员列表">{'a导出'}</a> */}
						{/* <a className="el-button el-button--primary" href={ this.exportFn }>{'a导出'}</a> */}
					</Form.Item>
				</Form>
				<Loading loading={ memberList.loading }>
					<Table
					style= { { width: '100%' } }
					columns= { this.state.columns }
					data= { memberList.data }
					border
					/>
				</Loading>

				<div className="pagination-con flex flex-direction_row justify-content_flex-center">
					<Pagination
					layout="total, sizes, prev, pager, next, jumper"
					total={ memberList.total }
					pageSizes={ memberList.pageSizes }
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
		memberList
	} = state
	return {
		selectedSubreddit,
		searchAll,
		time,
		memberSearchText,
		memberList
	}
}

export default connect(mapStateToProps)(Mlist)
