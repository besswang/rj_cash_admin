import React, { Component } from 'react'
import { Button, Loading, Table, Dialog,Form, Input, Radio } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { pageLoanterm } from './actions'
import MyPagination from '@components/MyPagination'
// import filter from '@global/filter'
class BlackUser extends Component {
	static propTypes = {
    list: PropTypes.object.isRequired,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
		pageLoanterm: PropTypes.func.isRequired,
		btnLoading: PropTypes.bool.isRequired
  }
	constructor(props) {
		super(props)
		this.state = {
			value: 1,
			sort: null,
			id: null,
			dialogVisible: false,
			columns: [{
					type: 'index',
					fixed: 'left'
				}, {
					label: '期限',
					prop: 'term'
				}, {
          label: '操作',
          render: row => {
            return (
              <Button type="danger" size="mini">{'删除'}</Button>
            )
          }
        }]
		}
	}
	componentWillMount() {
    this.props.initSearch()
  }
  componentDidMount() {
    this.props.pageLoanterm()
	}
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.pageLoanterm()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.pageLoanterm()
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
	onRadioChange(value) {
		this.setState({ value })
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
							<Form.Item label="是否默认" labelWidth="120">
								<Radio.Group value={ this.state.value } onChange={ this.onRadioChange.bind(this) }>
									<Radio value="1">{'是'}</Radio>
									<Radio value="0">{'否'}</Radio>
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
		...bindActionCreators({sizeChange, currentChange, initSearch, pageLoanterm }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(BlackUser)
