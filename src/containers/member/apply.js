import React, { Component } from 'react'
import { Form, Button, Table } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Time from '@components/Settime'
import { sizeChange, currentChange, initSearch, saveTime } from '@redux/actions'
import { applySearch } from './actions'
import MyPagination from '@components/MyPagination'
import { APPLY_COLUMNS } from '@meta/columns'

class Apply extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		list: PropTypes.object.isRequired,
		time: PropTypes.array
	}
	componentWillMount() {
		this.props.dispatch(initSearch())
	}
	componentDidMount() {
		this.props.dispatch(applySearch())
	}
	handleSearch = e => {
		e.preventDefault()
		this.props.dispatch(applySearch())
	}
	sizeChange = e => {
		this.props.dispatch(sizeChange(e))
		this.props.dispatch(applySearch())
	}
	onCurrentChange = e => {
		this.props.dispatch(currentChange(e))
		this.props.dispatch(applySearch())
	}
	handleTimeChange = val => {
    this.props.dispatch(saveTime(val))
  }
	render(){
		const { list, time } = this.props
		return(
			<div>
				<Form inline>
					<Form.Item label="注册时间">
          <Time
            value={ time }
            onChange={ this.handleTimeChange }
          />
					</Form.Item>
					<Form.Item>
						<Button onClick={ this.handleSearch } type="primary">{'搜索'}</Button>
					</Form.Item>
				</Form>
				<Table
					style={ { width: '100%' } }
					columns={ APPLY_COLUMNS }
					data={ list.data }
					border
				/>
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
export default connect(mapStateToProps)(Apply)