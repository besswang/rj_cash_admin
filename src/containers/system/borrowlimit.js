import React, { Component } from 'react'
import { Button, Loading, Table, Dialog,Form, Input, Radio } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { pageQuota, deleteQuota, addQuota } from './actions'
import MyPagination from '@components/MyPagination'
// import filter from '@global/filter'
class BlackUser extends Component {
	static propTypes = {
    list: PropTypes.object.isRequired,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
		pageQuota: PropTypes.func.isRequired,
		deleteQuota: PropTypes.func.isRequired,
		addQuota: PropTypes.func.isRequired,
		btnLoading: PropTypes.bool.isRequired
  }
	constructor(props) {
		super(props)
		this.state = {
			form: {
				money: null,
				defaultValue: 0
			},
			rules: {
				money: [{required: true,message: '请输入额度',trigger: 'blur'}]
			},
			dialogVisible: false,
			columns: [{
					type: 'index',
					fixed: 'left'
				}, {
					label: '额度',
					prop: 'money'
				}, {
					label: '是否是默认值',
					prop: 'defaultValue',
					render: row => {
						 const data = row.defaultValue === 0 ? '是' : '否'
						 return data
					}
				}, {
          label: '操作',
          render: row => {
            return (
							<div>
							{
								row.defaultValue !==0 &&
								<Button type="primary" size="mini" onClick={ this.props.deleteQuota.bind(this,{id:row.id, defaultValue:0}) }>{'设为默认'}</Button>
							}
              <Button type="danger" size="mini" onClick={ this.props.deleteQuota.bind(this,{id:row.id}) }>{'删除'}</Button>
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
    this.props.pageQuota()
	}
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.pageQuota()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.pageQuota()
	}
	openDialog = e => {
		e.preventDefault()
		this.form.resetFields()
		this.setState({
			dialogVisible: true
		})
	}
	saveContent = e => {
		e.preventDefault()
		this.form.validate((valid) => {
			if (valid) {
				this.props.addQuota(this.state.form)
				this.setState({
					dialogVisible: false
				})
			} else {
				console.log('error submit!!')
				return false
			}
		})
	}
	onChange(key, value) {
		this.setState({
			form: Object.assign({}, this.state.form, { [key]: value })
		})
	}
	render() {
		const { list, btnLoading } = this.props
		const { form, rules } = this.state
		return (
			<div>
        {/* <Button className="margin-bottom15" type="primary" onClick={ e => this.openDialog(e) }>{'添加'}</Button> */}
				<Button className="margin-bottom15" type="primary" onClick={ this.openDialog.bind(this) }>{'添加'}</Button>
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
					title="添加期限"
					visible={ this.state.dialogVisible }
					onCancel={ () => this.setState({ dialogVisible: false }) }
				>
					<Dialog.Body>
						<Form labelWidth="120" ref={ e => {this.form=e} } model={ form } rules={ rules }>
							<Form.Item label="额度" prop="money">
								<Input type="number" value={ form.money } onChange={ this.onChange.bind(this,'money') } />
							</Form.Item>
							{/* <Form.Item label="期限">
								<Input type="number" value={ this.state.sort } onChange={ e => this.onChange(e) } />
							</Form.Item> */}
							<Form.Item label="是否默认">
								<Radio.Group value={ form.defaultValue } onChange={ this.onChange.bind(this,'defaultValue') }>
									<Radio value="0">{'是'}</Radio>
									<Radio value="1">{'否'}</Radio>
								</Radio.Group>
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
		...bindActionCreators({ sizeChange, currentChange, initSearch, pageQuota, deleteQuota, addQuota }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(BlackUser)
