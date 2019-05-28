import React, { Component } from 'react'
import { Button } from 'element-react'
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
	show = item => {
		console.log(item)
		return 2233
	}
	render() {
		// const { data } = this.state
		return (
			<div>
					<ul>
						{
							area[0].data.map( item => {
								const type = item.level === 1 ? 'block' : 'none'
								return (
									<li style={ { display: type} } key={ item.id } className="flex flex-direction_column">
										<div onClick={ this.show.bind(this,item) } style={ {display:'inline'} }>
											<i className="el-icon-plus" />
											{ item.areaname }
										</div>
										{ item.state === 1 ? '正常' : '禁用' }
										<Button type="primary" size="mini">{'启用'}</Button>
									</li>
								)
							})
						}
					</ul>
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
