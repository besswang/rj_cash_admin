import React, { Component } from 'react'
import { Form, Input } from 'element-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { selectSubreddit, selectSearchText, saveTime, initSearch, changeClient, changeTimeType } from '@redux/actions'
import SelectPicker from '@components/SelectPicker'
import Time from '@components/Settime'
import { AUDIT_SELECT, CUSTOMER_SELECT, TIME_SELECT } from '@meta/select'
class MostSearch extends Component {
  static propTypes = {
    selectedSubreddit: PropTypes.string,
		memberSearchText: PropTypes.string,
    time: PropTypes.array,
    children: PropTypes.object.isRequired,
    selectSubreddit: PropTypes.func.isRequired,
    selectSearchText: PropTypes.func.isRequired,
    saveTime: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
    changeClient: PropTypes.func.isRequired,
    selectClient: PropTypes.string,
    selectTime: PropTypes.string,
    changeTimeType: PropTypes.func.isRequired
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
    const { selectedSubreddit, memberSearchText, time, selectClient, selectTime } = this.props
    return (
      <Form inline>
        <Form.Item>
          <SelectPicker
            value={ selectedSubreddit }
            onChange={ e => this.props.selectSubreddit(e) }
            options={ AUDIT_SELECT }
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
          <SelectPicker
            value={ selectClient }
            onChange={ e => this.props.changeClient(e) }
            options={ CUSTOMER_SELECT }
          />
        </Form.Item>
        <Form.Item>
          <SelectPicker
            value={ selectTime }
            onChange={ e => this.props.changeTimeType(e) }
            options={ TIME_SELECT }
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
		selectedSubreddit, memberSearchText, time, selectClient, selectTime
	} = state
	return {
		selectedSubreddit, memberSearchText, time, selectClient, selectTime
	}
}
const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators({ selectSubreddit, selectSearchText, saveTime, initSearch, changeClient, changeTimeType }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(MostSearch)
