import React,{ Component } from 'react'
import { Form, Button, Table, Loading } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { normalSearch, registerTime, endPayTime } from './actions'
import Time from '@components/Settime'
import MyPagination from '@components/MyPagination'
import { NORMAL_COLUMNS } from '@meta/columns'

class Apply extends Component{
	static propTypes = {
		list: PropTypes.object.isRequired,
		regTime: PropTypes.array,
		payTime: PropTypes.array,
		sizeChange: PropTypes.func.isRequired,
		currentChange: PropTypes.func.isRequired,
		initSearch: PropTypes.func.isRequired,
		registerTime: PropTypes.func.isRequired,
		endPayTime: PropTypes.func.isRequired,
		normalSearch: PropTypes.func.isRequired,
	}
	componentWillMount() {
		this.props.initSearch()
	}
	componentDidMount() {
		this.props.normalSearch()
	}
	handleSearch = e => {
		e.preventDefault()
		this.props.normalSearch()
	}
	sizeChange = e => {
		this.props.sizeChange(e)
		this.props.normalSearch()
	}
	onCurrentChange = e => {
		this.props.currentChange(e)
		this.props.normalSearch()
	}
	t1 = e => {
		return
	}
	t2 = e => {
		return
	}
	render(){
		const { list, regTime, payTime } = this.props
		return(
			<div>
				<Form inline>
					<Form.Item label="注册时间">
						<Time
							t={ e => this.t1(e) }
							value={ regTime }
							onChange={ val => this.props.registerTime(val) }
						/>
					</Form.Item>
					<Form.Item label="最后还款日">
						<Time
							t={ e => this.t2(e) }
							value={ payTime }
							onChange={ val => this.props.endPayTime(val) }
						/>
					</Form.Item>
					<Form.Item>
						<Button onClick={ this.handleSearch } type="primary">{'搜索'}</Button>
					</Form.Item>
				</Form>
				<Loading loading={ list.loading }>
					<Table
						style={ { width: '100%' } }
						columns={ NORMAL_COLUMNS }
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
	const { list, regTime, payTime } = state
	return { list, regTime, payTime }
}
const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators({sizeChange, currentChange, initSearch, normalSearch, registerTime, endPayTime}, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Apply)