// 催收管理-个人对账
import React, { Component } from 'react'
import { Button, Loading, Table, Dialog, Form, Input } from 'element-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { selectPendingRepay } from './actions'
import Search from '@components/Search'
import MyPagination from '@components/MyPagination'
import filter from '@global/filter'
import timeDate from '@global/timeDate'
class WaitHuan extends Component {
	static propTypes = {
		list: PropTypes.object.isRequired,
		btnLoading: PropTypes.bool.isRequired,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
		selectPendingRepay: PropTypes.func.isRequired
  }
	constructor(props) {
		super(props)
		this.state = {
			dialogVisible: false,
			form: {
				channelName: '', // 渠道名称,
				daiName: '', // 贷超名称,
				price: null, // 单价,
				type: '', // 类型,
				machineScore: null, // 机审分数,
				userScore: null, // 人工分数
				remake: '', // 备注,
			},
			rules: {
				channelName: [{required: true,message: '请输入渠道名称',trigger: 'blur'}],
				daiName: [{required: true,message: '请输入超贷名称',trigger: 'blur'}],
				price: [{
						required:true,
						validator: (rule, value, callback) => {
							if (value === '' || value === null) {
								callback(new Error('请输入单价'))
							} else {
								callback()
							}
						}
					}
				]
			},
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
					prop: 'nextApplyTime',
					width: 120,
					render: row => {
						const date = timeDate.time(row.nextApplyTime, 'yyyy-MM-dd hh:mm:ss')
						return date
					}
				}, {
					label: '审核客服',
					prop: 'examineCustomer'
				}, {
					label: '审核时间',
					prop: 'examineDate',
					width:120,
					render: row => {
						const date = timeDate.time(row.examineDate, 'yyyy-MM-dd hh:mm:ss')
						return date
					}
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
				}, {
					label: '操作',
					fixed: 'right',
					width:180,
					render: row => {
							return (
								<div className="flex flex-direction_row">
									<Button className="margin_right10" type="primary" size="mini">
										{'还款'}
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
    this.props.initSearch()
  }
  componentDidMount() {
    this.props.selectPendingRepay()
  }
  handleSearch = e => {
    e.preventDefault()
    this.props.selectPendingRepay()
  }
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.selectPendingRepay()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.selectPendingRepay()
	}
	render() {
		const { list, btnLoading } = this.props
		const { columns, dialogVisible, form, rules, id } = this.state
		return (
			<div>
				<Search showSelect2 showLoanType showSelectClient showSelectTime showTime>
					<Button onClick={ this.handleSearch } type="primary">{'搜索'}</Button>
				</Search>
				<Loading loading={ list.loading }>
					<Table
						style={ { width: '100%' } }
						columns={ columns }
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
					title="线下还款"
					visible={ dialogVisible }
					onCancel={ () => this.setState({ dialogVisible: false }) }
				>
					<Dialog.Body>
						<Form labelWidth="120" ref={ e => {this.form=e} } model={ form } rules={ rules }>
							<Form.Item label="渠道名称" prop="channelName">
								<Input disabled={ id ? true : false } value={ form.channelName } onChange={ this.onChange.bind(this, 'channelName') } />
							</Form.Item>
							<Form.Item label="贷超名称" prop="daiName">
								<Input value={ form.daiName } onChange={ this.onChange.bind(this, 'daiName') } />
							</Form.Item>
							<Form.Item label="单价" prop="price">
								<Input type="number" value={ form.price } onChange={ this.onChange.bind(this, 'price') } />
							</Form.Item>
							<Form.Item label="推广方式" prop="type">
								{/* <SelectPicker
									stringValue={ form.type }
									onChange={ this.onChange.bind(this, 'type') }
									optionsArr={ PROMOTION_TYPE }
									placeholder={ '选择方式' }
								/> */}
							</Form.Item>
							<Form.Item label="机审分数" prop="machineScore">
								<Input type="number" value={ form.machineScore } onChange={ this.onChange.bind(this, 'machineScore') } />
							</Form.Item>
							<Form.Item label="人工审核分数" prop="userScore">
								<Input type="number" value={ form.userScore } onChange={ this.onChange.bind(this, 'userScore') } />
							</Form.Item>
							<Form.Item label="备注" prop="remake">
								<Input value={ form.remake } onChange={ this.onChange.bind(this, 'remake') } />
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
		...bindActionCreators({sizeChange, currentChange, initSearch, selectPendingRepay }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(WaitHuan)
