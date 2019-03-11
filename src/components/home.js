import React, { Component } from 'react'
import Header from './common/header'
import Sidebar from './common/sidebar'
import '../styles/home.less'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
class Home extends Component {
	componentDidMount() {
		console.log(this.props)
		console.log(this.props.match)
	}
	render() {
		// console.log(this.props.children)
		const { children } = this.props
		return (
			<div className="flex flex-direction_column">
				<div className="header">
					<Header />
				</div>
				<ul className="flex flex-diredtion_row container">
					<li className="sidebar">
						<Sidebar />
					</li>
					<li className="main">
						<div className="content">
							{ children }
						</div>
					</li>
				</ul>
			</div>
		)
	}
}
Home.propTypes = {
	children: PropTypes.node.isRequired
};
export default withRouter(Home)