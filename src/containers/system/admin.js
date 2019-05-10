import React, { Component } from 'react'
import { Button, Loading, Table, Dialog,Form, Input, Radio } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { pageAdmin } from './actions'
import MyPagination from '@components/MyPagination'
import DisableBtn from '@components/DisableBtn'
import Search from '@components/Search'
import SelectPicker from '@components/SelectPicker'
// import filter from '@global/filter'
class BlackUser extends Component {
	static propTypes = {
    list: PropTypes.object.isRequired,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
		pageAdmin: PropTypes.func.isRequired,
		btnLoading: PropTypes.bool.isRequired,
		roleList: PropTypes.array
  }
	constructor(props) {
		super(props)
		this.state = {
			form:{
				adminName:'',
				nickName:'',
				roleId: null,
				adminState: 1, // 用户状态
				distribution: 1, // 是否分配
			},
			rules: {
				adminName: [
					{ required: true, message: '请输入登陆手机号', trigger: 'blur' }
				],
				nickName: [
					{ required: true, message: '请输入昵称', trigger: 'blur' }
				],
				roleId: [{
					required: true,
					validator: (rule, value, callback) => {
						if (value === '' || value === null) {
							callback(new Error('请选择角色'))
						} else {
							callback()
						}
					}
				}]
			},
			value: 1,
			sort: null,
			id: null,
			dialogVisible: false,
			columns: [{
					type: 'index',
					fixed: 'left'
				}, {
					label: '用户账号',
					prop: 'adminName'
				}, {
					label: '用户昵称',
					prop: 'nickName'
				}, {
					label: '用户角色',
					prop: 'roleName',
					render: row => {
						let text = ''
						this.props.roleList.find(item => {
							if(item.id === row.id){
								text = item.roleName
							}
							return text
						})
						return text
					}
				}, {
					label: '用户状态',
					prop: 'adminState',
					render: row => {
						return row.adminState === 1 ? '启用':'禁用'
					}
				}, {
					label: '分配状态',
					prop: 'distribution',
					render: row => {
						return row.distribution === 1 ? '正常分配' : '未分配'
					}
				}, {
          label: '操作',
          render: row => {
            return (
							<div>
								<Button type="primary" size="mini">{'编辑'}</Button>
								<DisableBtn value={ row.admindistribution } result={ 0 } text={ ['正常分配','不分配'] } />
								<DisableBtn value={ row.adminState } result={ 0 } text={ ['启用','禁用'] } />
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
    this.props.pageAdmin()
	}
	handleSearch = e => {
		e.preventDefault()
		this.props.pageAdmin()
	}
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.pageAdmin()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.pageAdmin()
	}
	onChange(key, value) {
		this.setState({
			form: Object.assign({}, this.state.form, { [key]: value })
		})
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
		console.log(this.state.form)
		this.form.validate((valid) => {
			if (valid) {
				alert('submit!')
				this.setState({
					dialogVisible: false
				})
				console.log(this.state.form)
			} else {
				console.log('error submit!!')
				return false
			}
		})
	}
	onRadioChange(value) {
		this.setState({ value })
	}
	render() {
		const { list, btnLoading, roleList } = this.props
		const { form, rules } = this.state
		return (
			<div>
				<Search showRole showAdminName>
					<div>
						<Button onClick={ this.handleSearch } type="primary">{'搜索'}</Button>
						<Button type="primary" onClick={ e => this.openDialog(e) }>{'添加'}</Button>
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
					title="添加期限"
					visible={ this.state.dialogVisible }
					onCancel={ () => this.setState({ dialogVisible: false }) }
				>
					<Dialog.Body>
						<Form labelWidth="120" model={ form } ref={ e => {this.form = e} } rules={ rules }>
							<Form.Item label="登录手机号" prop="adminName">
								<Input type="number" value={ form.adminName } onChange={ this.onChange.bind(this, 'adminName') } />
							</Form.Item>
							<Form.Item label="昵称" prop="nickName">
								<Input value={ form.nickName } onChange={ this.onChange.bind(this, 'nickName') } />
							</Form.Item>
							<Form.Item label="角色" prop="roleId">
								<SelectPicker value={ form.roleId } options={ roleList } onChange={ this.onChange.bind(this, 'roleId') } />
							</Form.Item>
							<Form.Item label="用户状态">
								<Radio.Group value={ form.adminState } onChange={ this.onChange.bind(this, 'adminState') } >
									<Radio value={ 1 }>{'启用'}</Radio>
									<Radio value={ 0 }>{'禁用'}</Radio>
								</Radio.Group>
							</Form.Item>
							<Form.Item label="是否分配">
								<Radio.Group value={ form.distribution } onChange={ this.onChange.bind(this, 'distribution') }>
									<Radio value={ 1 }>{'是'}</Radio>
									<Radio value={ 0 }>{'否'}</Radio>
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
	const { list, btnLoading, roleList } = state
	return { list, btnLoading, roleList }
}
const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators({sizeChange, currentChange, initSearch, pageAdmin }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(BlackUser)
