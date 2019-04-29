// 催收管理-个人对账
import React, { Component } from 'react'
import { Button, Loading, Table } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch, saveTime } from '@redux/actions'
import { selectOrderCompleted } from './actions'
import MostSearch from '@components/MostSearch'
import MyPagination from '@components/MyPagination'
import filter from '@global/filter'
class AlreadyWan extends Component {
	static propTypes = {
    list: PropTypes.object.isRequired,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
    saveTime: PropTypes.func.isRequired,
		selectOrderCompleted: PropTypes.func.isRequired
  }
	constructor(props) {
		super(props)
		this.state = {
			columns: [{
					type: 'index',
					fixed: 'left'
				}, {
					label: '渠道名称',
					prop: 'channelName'
				}, {
					label: '新老客户',
					prop: 'loanTerm', // 等于0 为新客  大于0 为老客
					render: row => {
						const data = filter.loanTerm(row.loanTerm)
						return data
					}
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
					label: '待放金额',
					prop: 'loanMoney'
				}, {
					label: '借款次数',
					prop: 'loanTerm'
				}, {
					label: '申请时间',
					prop: 'nextApplyTime'
				}, {
					label: '审核客服',
					prop: 'examineCustomer'
				}, {
					label: '审核时间',
					prop: 'examineDate'
				}, {
					label: '打款状态',
					prop: 'payStatus',
					render: row => {
						const data = filter.payStatus(row.payStatus)
						return data
					}
				}, {
					label: '申请单号',
					prop: 'orderNumber'
				}, {
					label: '银行名称',
					prop: 'bankName'
				}, {
					label: '银行卡号',
					prop: 'bankNumber'
				}]
		}
	}
	componentWillMount() {
    this.props.initSearch()
  }
  componentDidMount() {
    this.props.selectOrderCompleted()
  }
  search = e => {
    e.preventDefault()
    this.props.selectOrderCompleted()
  }
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.selectOrderCompleted()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.selectOrderCompleted()
	}
	render() {
		const { list } = this.props
		return (
			<div>
				<MostSearch showSelect2>
					<Button onClick={ this.search } type="primary">{'搜索'}</Button>
				</MostSearch>
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
		...bindActionCreators({sizeChange, currentChange, initSearch, saveTime, selectOrderCompleted }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(AlreadyWan)
