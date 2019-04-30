// 财务管理-已完成
import React, { Component } from 'react'
import { Button, Loading, Table } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { selectblackphone, deleteBlackphone } from './actions'
import Search from '@components/Search'
import MyPagination from '@components/MyPagination'
class BlackUser extends Component {
	static propTypes = {
    list: PropTypes.object.isRequired,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
		selectblackphone: PropTypes.func.isRequired,
		deleteBlackphone: PropTypes.func.isRequired
  }
	constructor(props) {
		super(props)
		this.state = {
			columns: [{
					type: 'index',
					fixed: 'left'
				}, {
					label: '真实姓名',
					prop: 'realName'
				}, {
					label: '手机号码',
					prop: 'phone'
				}, {
					label: '身份证号',
					prop: 'idCard'
				}, {
					label: '操作',
					render: row => {
						return (
							<Button type="danger" size="mini"
								onClick={ this.delete.bind(this, row.id) }
							>
								{'删除'}
							</Button>
						)
					}
      }]
		}
	}
	componentWillMount() {
    this.props.initSearch()
  }
  componentDidMount() {
    this.props.selectblackphone()
	}
	delete(id) {
		console.log(id)
		this.props.deleteBlackphone({id:id})
	}
  handleSearch = e => {
    e.preventDefault()
    this.props.selectblackphone()
  }
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.selectblackphone()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.selectblackphone()
	}
	render() {
		const { list } = this.props
		return (
			<div>
				<Search showSelect2>
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
		...bindActionCreators({sizeChange, currentChange, initSearch, selectblackphone, deleteBlackphone }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(BlackUser)
