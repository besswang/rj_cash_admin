// 催收管理-个人对账
import React, { Component } from 'react'
import { Button, Loading, Table } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch, saveTime } from '@redux/actions'
import { selectthePersion } from './actions'
import MostSearch from '@components/MostSearch'
import MyPagination from '@components/MyPagination'
import filter from '@global/filter'
class Self extends Component {
	static propTypes = {
    list: PropTypes.object.isRequired,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
    saveTime: PropTypes.func.isRequired,
		selectthePersion: PropTypes.func.isRequired
  }
	constructor(props) {
		super(props)
		this.state = {
			columns: [{
					type: 'index',
					fixed: 'left'
				}, {
					label: '申请单号',
					prop: 'orderNumber'
				}, {
					label: '真实姓名',
					prop: 'realName'
				}, {
					label: '手机号码',
					prop: 'phone'
				}, {
					label: '身份证号',
					prop: 'idcardNumber'
				}, {
					label: '借款金额',
					prop: 'applyMoney'
				}, {
					label: '应还金额',
					prop: 'repaymentMoney' // 到期应还金额
				}, {
					label: '支付方式',
					prop: 'loanMode', // 默认 0 支付宝 1微信 2 银行卡 3 线下
					render: row => {
						 const data = filter.loanMode(row.loanMode)
						 return data
					}
				}, {
					label: '到账金额',// 已放金额
					prop: 'loanMoney'
				}, {
					label: '催收催回金额',
					prop: ''
				}, {
					label: '逾期天数',
					prop: 'overdueNumber'
				}, {
					label: '分单时间',
					prop: 'fendanDate'
				}, {
					label: '催回时间',
					prop: 'realRepaymentDate'
				}, {
					label: '催回催收人',
					prop: 'tracker'
				}, {
					label: '订单类型',
					prop: 'loanType', // 默认  0 正常 1 延期   2逾期
					render: row => {
						const data = filter.loanType(row.loanType)
						return data
					}
				}]
		}
	}
	componentWillMount() {
    this.props.initSearch()
  }
  componentDidMount() {
    this.props.selectthePersion()
  }
  search = e => {
    e.preventDefault()
    this.props.selectthePersion()
  }
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.selectthePersion()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.selectthePersion()
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
		...bindActionCreators({sizeChange, currentChange, initSearch, saveTime, selectthePersion }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Self)
