import React, { Component } from 'react'
import { Tree, Button, Checkbox } from 'element-react'
import PropTypes from 'prop-types'
export default class Juris extends Component {
	static propTypes = {
		JurisArr: PropTypes.arrayOf(
			PropTypes.object.isRequired
		),
		options: PropTypes.object.isRequired,
		defaultCheckedKeys: PropTypes.array
  }
	append(store, data) {
		store.append({ id: this.id++, label: '新增权限', children: [] }, data)
	}

	remove(store, data) {
		store.remove(data)
	}
  // handleCheckChange(checked){
  // 	this.props.nodeModel.setChecked(checked, true)
  // }
	renderContent(nodeModel, data, store) {
		console.log(nodeModel)
		return (
			<span>
				<Checkbox checked={ data.state1 === '1' ? true : false} />
				{/* <Checkbox
					checked={ nodeModel.checked }
					// onChange={ e = this.check(this, true) }
					// indeterminate={ nodeModel.indeterminate }
					// onClick={ this.handleUserClick.bind(this) }
				/> */}
				<span>
					<span>{ data.text }</span>
				</span>
				{/* <span style={ { float: 'right', marginRight: '20px' } }>
					<Button size="mini" onClick={ () => this.append(store, data) }>
						{ '添加' }
					</Button>
					<Button size="mini" onClick={ () => this.remove(store, data) }>
						{ '删除' }
					</Button>
				</span> */}
			</span>
		)
	}

	render() {
		const { JurisArr, options, defaultCheckedKeys } = this.props
		return (
			<div className="admin__user__juris">
				<Tree
					data={ JurisArr }
					options={ options }
					defaultCheckedKeys={ [2,3,4,5] }
					// isShowCheckbox
					nodeKey="id"
					defaultExpandedKeys={ [1] }
					renderContent={ (...args) => this.renderContent(...args) }
				/>
			</div>
		)
	}
}
