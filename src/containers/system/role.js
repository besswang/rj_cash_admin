import React, { Component } from 'react'
import { Button, Loading, Table, Dialog,Form, Input } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { pageRole, deleteRole } from './actions'
import MyPagination from '@components/MyPagination'
// import filter from '@global/filter'
class BlackUser extends Component {
	static propTypes = {
    list: PropTypes.object.isRequired,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
		pageRole: PropTypes.func.isRequired,
		deleteRole: PropTypes.func.isRequired,
		btnLoading: PropTypes.bool.isRequired
  }
	constructor(props) {
		super(props)
		this.state = {
			sort: null,
			id: null,
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
								<Button type="primary" size="mini">{'权限设置'}</Button>
								<Button type="danger" size="mini" onClick={ this.props.deleteRole.bind(this, row) }>{'删除'}</Button>
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
			sort: e
		})
	}
	openDialog = e => {
    e.preventDefault()
		this.setState({
			dialogVisible: true,
			sort: null
		})
	}
	saveContent = e => {
		e.preventDefault()
		// this.props.updateSort({
		// 	sort: this.state.sort,
		// 	id: this.state.id
		// })
		this.setState({
			dialogVisible: false
		})
	}
	render() {
		const { list, btnLoading } = this.props
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
					title="添加期限"
					visible={ this.state.dialogVisible }
					onCancel={ () => this.setState({ dialogVisible: false }) }
				>
					<Dialog.Body>
						<Form>
							<Form.Item label="额度" labelWidth="120">
								<Input type="number" value={ this.state.sort } onChange={ e => this.onChange(e) } />
							</Form.Item>
							<Form.Item label="期限" labelWidth="120">
								<Input type="number" value={ this.state.sort } onChange={ e => this.onChange(e) } />
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
		...bindActionCreators({sizeChange, currentChange, initSearch, pageRole, deleteRole }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(BlackUser)
