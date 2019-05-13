import React, { Component } from 'react'
import { Button, Loading, Table } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { pageGlobalconfig } from './actions'
import MyPagination from '@components/MyPagination'
class Help extends Component {
	static propTypes = {
		list: PropTypes.object.isRequired,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
		pageGlobalconfig: PropTypes.func.isRequired
  }
	constructor(props) {
		super(props)
		this.state = {
			columns: [{
					type: 'index',
					fixed: 'left'
				}, {
					label: '标签',
					prop: 'title'
				}, {
					label: '内容',
					prop: 'configValue'
				}, {
					label: '操作',
					render: row => {
						return (
							<Button type="primary">{'编辑'}</Button>
						)
					}
				}]
		}
	}
	componentWillMount() {
    this.props.initSearch()
  }
  componentDidMount() {
    this.props.pageGlobalconfig()
	}
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.pageGlobalconfig()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.pageGlobalconfig()
	}
	render() {
		const { list } = this.props
		return (
			<div>
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
		...bindActionCreators({sizeChange, currentChange, initSearch, pageGlobalconfig }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Help)
