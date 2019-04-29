import React, { Component } from 'react'
import { Form, Input } from 'element-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { selectSubreddit, selectSearchText, saveTime, initSearch } from '@redux/actions'
import SelectPicker from '@components/SelectPicker'
import Time from '@components/Settime'
class SelectSearch extends Component {
  static propTypes = {
		selectedSubreddit: PropTypes.number,
		memberSearchText: PropTypes.string,
    time: PropTypes.array,
    children: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    selectSubreddit: PropTypes.func.isRequired,
    selectSearchText: PropTypes.func.isRequired,
    saveTime: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired
  }
  componentWillMount() {
    // 查询表单的初始化
    this.props.initSearch()
	}
  handleTextChange = val => {
		this.props.selectSearchText(val)
  }
  handleTimeChange = val => {
    this.props.saveTime(val)
  }
  render() {
    const { selectedSubreddit, memberSearchText, time, options } = this.props
    return (
      <Form inline>
        <Form.Item>
          <SelectPicker
            value={ selectedSubreddit }
            onChange={ e => this.props.selectSubreddit(e) }
            options={ options }
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={ memberSearchText }
            onChange={ this.handleTextChange }
            placeholder="请输入内容"
            clearable="true"
          />
        </Form.Item>
        <Form.Item>
          <Time
            value={ time }
            onChange={ this.handleTimeChange }
          />
        </Form.Item>
        <Form.Item>
          { this.props.children }
        </Form.Item>
      </Form>
    )
  }
}

const mapStateToProps = state => {
	const {
		selectedSubreddit, memberSearchText, time
	} = state
	return {
		selectedSubreddit, memberSearchText, time
	}
}
const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators({ selectSubreddit, selectSearchText, saveTime, initSearch }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectSearch)
