import React, { Component } from 'react'
import { Form, Button, Table, Loading } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch, saveTime } from '@redux/actions'
import { applySearch } from './actions'
import Time from '@components/Settime'
import MyPagination from '@components/MyPagination'
import { APPLY_COLUMNS } from '@meta/columns'

class Apply extends Component {
	static propTypes = {
		list: PropTypes.object.isRequired,
		time: PropTypes.array,
		sizeChange: PropTypes.func.isRequired,
		currentChange: PropTypes.func.isRequired,
		initSearch: PropTypes.func.isRequired,
		saveTime: PropTypes.func.isRequired,
		applySearch: PropTypes.func.isRequired,
	}
	componentWillMount() {
		this.props.initSearch()
	}
	componentDidMount() {
		this.props.applySearch()
	}
	handleSearch = e => {
		e.preventDefault()
		this.props.applySearch()
	}
	sizeChange = e => {
		this.props.sizeChange(e)
		this.props.applySearch()
	}
	onCurrentChange = e => {
		this.props.currentChange(e)
		this.props.applySearch()
	}
	render(){
		const { list, time } = this.props
		return(
			<div>
				<Form inline>
					<Form.Item label="注册时间">
						<Time
							value={ time }
							onChange={ val => this.props.saveTime(val) }
						/>
					</Form.Item>
					<Form.Item>
						<Button onClick={ this.handleSearch } type="primary">{'搜索'}</Button>
					</Form.Item>
				</Form>
				<Loading loading={ list.loading }>
					<Table
						style={ { width: '100%' } }
						columns={ APPLY_COLUMNS }
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
	const { list, time } = state
	return { list, time }
}
const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators({sizeChange, currentChange, initSearch, saveTime, applySearch}, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Apply)