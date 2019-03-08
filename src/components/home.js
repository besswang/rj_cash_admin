import React, { Component } from 'react'
import Header from './common/header'
import Sidebar from './common/sidebar'
import '../styles/home.less'
class Home extends Component {
	render() {
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
							{this.props.children}
						</div>
					</li>
				</ul>
			</div>
		)
	}
}
export default Home