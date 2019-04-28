import React, { Component } from 'react'
import { Form, Input } from 'element-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SelectPicker from '@components/SelectPicker'
import Time from '@components/Settime'
import { selectSubreddit, selectSearchText, saveTime, initSearch } from '@redux/actions'
class SelectSearch extends Component {
  static propTypes = {
		dispatch: PropTypes.func.isRequired,
		selectedSubreddit: PropTypes.string,
		memberSearchText: PropTypes.string,
    time: PropTypes.array,
    children: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired
  }
  componentWillMount() {
    // 查询表单的初始化
    this.props.dispatch(initSearch())
	}
  handleSelectChange = e => {
    this.props.dispatch(selectSubreddit(e))
  }
  handleTextChange = val => {
		this.props.dispatch(selectSearchText(val))
  }
  handleTimeChange = val => {
    this.props.dispatch(saveTime(val))
  }
  render() {
    const { selectedSubreddit, memberSearchText, time, options } = this.props
    return (
      <Form inline>
        <Form.Item>
          <SelectPicker
            value={ selectedSubreddit }
            onChange={ this.handleSelectChange }
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
export default connect(mapStateToProps)(SelectSearch)
