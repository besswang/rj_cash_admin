// 催收管理-当日到期
import React, { Component } from 'react'
import { Button, Loading, Table, Dialog, Form, Input } from 'element-react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { selectTheDayLoan, insertRemarks } from './actions'
import Search from '@components/Search'
import MyPagination from '@components/MyPagination'
import filter from '@global/filter'
class WaitHuan extends Component {
	static propTypes = {
		btnLoading: PropTypes.bool.isRequired,
    list: PropTypes.object.isRequired,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
		selectTheDayLoan: PropTypes.func.isRequired,
		insertRemarks: PropTypes.func.isRequired
  }
	constructor(props) {
		super(props)
		this.state = {
			dialogVisible: false,
			content: '',
			orderNumber: '',
			orderId: null,
			columns: [
				{
					type: 'selection'
				}, {
					type: 'index',
					fixed: 'left'
				}, {
					label: '单号',
					prop: 'orderNumber'
				}, {
					label: '备注信息',
					prop: 'content'
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
					label: '已放金额', // 到账金额
					prop: 'loanMoney'
				}, {
					label: '应还金额', // 到期应还金额
					prop: 'repaymentMoney'
				}, {
					label: '借款次数',
					prop: 'loanTerm'
				}, {
					label: '申请时间',
					prop: 'nextApplyTime'
				}, {
					label: '放款时间',
					prop: 'loanDate'
				}, {
					label: '约定还款日',
					prop: 'repaymentDate'
				}, {
					label: '打款方式',
					prop: 'loanMode',
					render: row => {
						const t = filter.payType(row.loanMode)
						return t
					}
				}, {
					label: '借款类型',
					prop: 'loanType',
					render: row => {
						const t = filter.loanType(row.loanType)
						return t
					}
				}, {
					label: '银行名称',
					prop: 'bankName'
				}, {
					label: '银行卡号',
					prop: 'bankNumber'
				}, {
					label: '操作',
					fixed: 'right',
					render: row => {
							return (
								<div className="flex flex-direction_row">
									<Button className="margin_right10" type="primary" size="mini" onClick={ this.openDialog.bind(this, row) }>
										{'备注'}
									</Button>
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
    this.props.selectTheDayLoan()
	}
	openDialog = r => {
		this.setState({
			dialogVisible: true,
			content: r.content,
			orderNumber: r.orderNumber,
			orderId: r.id
		})
	}
  handleSearch = e => {
    e.preventDefault()
    this.props.selectTheDayLoan()
  }
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.selectTheDayLoan()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.selectTheDayLoan()
	}
	onChange = e => {
		this.setState({
			content: e
		})
	}
	saveContent = e => {
		e.preventDefault()
		this.props.insertRemarks({
			content: this.state.content,
			orderId: this.state.orderId
		})
		this.setState({
			dialogVisible: false
		})
	}
	render() {
		const { list, btnLoading } = this.props
		return (
			<div>
				<Search showSelect2 showSelectClient showAllotType showSelectTime2>
					<div>
						<Button onClick={ this.handleSearch } type="primary">{'搜索'}</Button>
						<Button type="primary">{'分配'}</Button>
					</div>
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
				<Dialog
					title="修改备注"
					visible={ this.state.dialogVisible }
					onCancel={ () => this.setState({ dialogVisible: false }) }
				>
					<Dialog.Body>
						<Form>
							<Form.Item label="订单号" labelWidth="120">
								<p>{ this.state.orderNumber }</p>
							</Form.Item>
							<Form.Item label="备注信息" labelWidth="120">
								<Input type="textarea" value={ this.state.content } onChange={ e => this.onChange(e) } />
							</Form.Item>
						</Form>
					</Dialog.Body>
					<Dialog.Footer className="dialog-footer">
						<Button onClick={ () => this.setState({ dialogVisible: false }) }>{'取 消'}</Button>
						<Button type="primary" onClick={ this.saveContent } loading={ btnLoading }>{'确 定'}</Button>
					</Dialog.Footer>
				</Dialog>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { list, btnLoading } = state
	return { list, btnLoading }
}
const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators({sizeChange, currentChange, initSearch, selectTheDayLoan, insertRemarks }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(WaitHuan)
