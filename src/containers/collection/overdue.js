// 催收管理-逾期列表
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Loading, Table } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { selectOverdueByParam, addUserBlack, removeUserBlack } from './actions'
import Search from '@components/Search'
import MyPagination from '@components/MyPagination'
import DisableBtn from '@components/DisableBtn'
import filter from '@global/filter'
class Overdue extends Component{
	static propTypes = {
    list: PropTypes.object.isRequired,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
		selectOverdueByParam: PropTypes.func.isRequired,
		addUserBlack: PropTypes.func.isRequired,
		removeUserBlack: PropTypes.func.isRequired
  }
	constructor(props) {
		super(props)
		this.state = {
			columns: [
				{
					type: 'selection'
				}, {
					type: 'index',
					fixed: 'left'
				},{
					label: '订单号',
					prop: 'orderNumber',
					fixed: 'left'
				},{
					label: '渠道名称',
					prop: 'channelName'
				},
				{
					label: '真实姓名',
					prop: 'realName'
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
					label: '到账金额',// 已放金额
					prop: 'loanMoney'
				}, {
					label: '银行名称',
					prop: 'bankName'
				}, {
					label: '银行账号',
					prop: 'bankNumber'
				}, {
					label: '约定还款日',
					prop: 'repaymentDate'
				}, {
					label: '应还金额',
					prop: 'repaymentMoney'
				}, {
					label: '逾期天数',
					prop: 'overdueNumber'
				}, {
					label: '逾期费用', // 逾期金额
					prop: 'overdueMoney'
				}, {
					label: '借款次数',
					prop: 'loanTerm'
				}, {
					label: '新老客户',
					prop: 'loanTerm', // 等于0 为新客  大于0 为老客
					render: row => {
						const data = filter.loanTerm(row.loanTerm)
						return data
					 }
				}, {
					label: '申请时间',
					prop: 'nextApplyTime'
				}, {
					label: '审核时间',
					prop: 'examineDate'
				}, {
					label: '放款时间',
					prop: 'loanDate'
				}, {
					label: '打款单号',
					prop: 'loanNumber'
				}, {
					label: '打款方式',
					prop: 'loanMode'
				}, {
					label: '跟单人',
					prop: 'tracker'
				}, {
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
				}, {
					label: '操作',
					fixed: 'right',
					align: 'center',
					render: () => {
						return (
							<div className="flex flex-direction_row">
								<Link to="/member/mlist/detail">
									<Button type="text" size="small">{'会员详情'}</Button>
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
    this.props.selectOverdueByParam()
  }
  handleSearch = e => {
    e.preventDefault()
    this.props.selectOverdueByParam()
  }
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.selectOverdueByParam()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.selectOverdueByParam()
	}
		// 黑名单 idCard，phone,realName
	userBlack(r){
		if(r.blackStatus === 0){ // 添加
			const trans = {
				idCard: r.idcardNumber,
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
				<Search showSelect2 showSelectClient showSelectTime showTime>
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
				<Button type="primary">{'批量分配'}</Button>
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
		...bindActionCreators({sizeChange, currentChange, initSearch, selectOverdueByParam, addUserBlack, removeUserBlack }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Overdue)
