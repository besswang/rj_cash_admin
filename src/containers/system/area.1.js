import React, { Component } from 'react'
import { Table, Button } from 'element-react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { area } from '../../mock/system/area'
import api from '@api/index'
class Backup extends Component {
	static propTypes = {

  }
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}
	componentWillMount() {
		// this.selectAreas()

  }
  componentDidMount() {
		console.log(area[0].data)
	}
	selectAreas = async () => {
		const data = await api.selectAreasApi()
		console.log(data)
	}
	render() {
		// const { data } = this.state
		return (
			<div>
					<Table
						style={ { width: '100%' } }
						data={ area[0].data }
						border
					>
						<Table.Column label="地名" render={ row => {
								return (
									<div>
										<i className="el-icon-plus" />
										{ row.areaname }
									</div>
								)
						} }
						/>
						<Table.Column label="状态" prop="state" render={ row => {
							return row.state === 1 ? '正常' : '禁用'
						} }
						/>
						<Table.Column label="操作" render={ row => {
							return (
									<div>
										<Button type="primary" size="mini">{'启用'}</Button>
									</div>
								)
							} }
						/>
					</Table>
			</div>
		)
	}
}

// const mapStateToProps = state => {
// 	const {} = state
// 	return {}
// }
// const mapDispatchToProps = dispatch => {
// 	return {
// 		...bindActionCreators({}, dispatch)
// 	}
// }
export default connect()(Backup)
