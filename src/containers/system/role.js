import React, { Component } from 'react'
import { Button, Loading, Table, Dialog,Form, Input, Tree } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { pageRole, deleteRole, addRole, selectRolemenus, updateRolemenus } from './actions'
import MyPagination from '@components/MyPagination'
// import filter from '@global/filter'
class BlackUser extends Component {
	static propTypes = {
		list: PropTypes.object.isRequired,
		treeData: PropTypes.object.isRequired,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
		pageRole: PropTypes.func.isRequired,
		deleteRole: PropTypes.func.isRequired,
		addRole: PropTypes.func.isRequired,
		selectRolemenus: PropTypes.func.isRequired,
		updateRolemenus: PropTypes.func.isRequired,
		btnLoading: PropTypes.bool.isRequired
  }
	constructor(props) {
		super(props)
		this.state = {
			treeKey: '',
			roleId: null,
			options: {
				children: 'children',
				label: 'text'
			},
			roleName: null,
			dialogVisible: false,
			columns: [{
					type: 'index',
					fixed: 'left'
				}, {
					label: '角色名称',
					prop: 'roleName'
				}, {
          label: '操作',
          render: row => {
            return (
							<div>
								<Button type="primary" size="mini" onClick={ this.openRules.bind(this,row.id) }>{'权限设置'}</Button>
								<Button type="danger" size="mini" onClick={ this.props.deleteRole.bind(this, {roleId:row.id, state: 1}) }>{'删除'}</Button>
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
    this.props.pageRole()
	}
	componentWillUnmount() {
		// this.ztreeObj.destory();
		console.log('销毁')
	}
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.pageRole()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.pageRole()
	}
	onChange = e => {
		this.setState({
			roleName: e
		})
	}
	openDialog = e => {
    e.preventDefault()
		this.setState({
			dialogVisible: true,
			roleName: null
		})
	}
	openRules = roleId => {
		this.renderTree()
		this.props.selectRolemenus({roleId:roleId})
		this.setState({
			roleId: roleId
		})
	}
	renderTree = () => {
		this.setState({
			treeKey: +new Date()
		})
	}
	saveContent = e => {
		e.preventDefault()
		this.props.addRole({
			roleName: this.state.roleName,
		})
		this.setState({
			dialogVisible: false
		})
	}
	getCheckedKeys = e => {
		e.preventDefault()
		console.log(this.tree)

		console.log(this.tree.getCheckedKeys(true))
		// console.log(this.tree.getCheckedNodes())
		const brr = this.tree.getCheckedKeys(true)
		const arr = []
		for(let i=0;i<brr.length;i++){
			arr.push({menuId:brr[i], roleId: this.state.roleId})
		}
		console.log(arr)

		this.props.updateRolemenus(arr)
	}
	render() {
		const { list, btnLoading, treeData } = this.props
		const { options, treeKey } = this.state
		return (
			<div>
        <Button className="margin-bottom15" type="primary" onClick={ e => this.openDialog(e) }>{'添加'}</Button>
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
					title="添加角色"
					visible={ this.state.dialogVisible }
					onCancel={ () => this.setState({ dialogVisible: false }) }
				>
					<Dialog.Body>
						<Form labelWidth="40">
							<Form.Item label="角色">
								<Input value={ this.state.roleName } onChange={ e => this.onChange(e) } />
							</Form.Item>
						</Form>
					</Dialog.Body>
					<Dialog.Footer className="dialog-footer">
						<Button onClick={ () => this.setState({ dialogVisible: false }) }>{'取 消'}</Button>
						<Button type="primary" onClick={ this.saveContent } loading={ btnLoading }>{'确 定'}</Button>
					</Dialog.Footer>
				</Dialog>
				<Loading loading={ treeData.loading }>
					<Tree
						ref={ e => {this.tree = e} }
						data={ treeData.data }
						options={ options }
						key={ treeKey }
						isShowCheckbox
						highlightCurrent
						nodeKey="id"
					/>
				</Loading>
				<Button type="primary" onClick={ this.saveTree } loading={ btnLoading }>{'确 定'}</Button>
				<Button type="primary" onClick={ this.getCheckedKeys }>{'通过 key 获取'}</Button>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { list, btnLoading, treeData } = state
	return { list, btnLoading, treeData }
}
const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators({sizeChange, currentChange, initSearch, pageRole, deleteRole, addRole, selectRolemenus, updateRolemenus }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(BlackUser)
