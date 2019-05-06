import React, { Component } from 'react'
import { Form, Input } from 'element-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { selectSubreddit, selectSearchText,saveRealName, saveTime, registerTime, initSearch, changeClient, changeTimeType } from '@redux/actions'
import SelectPicker from '@components/SelectPicker'
import Time from '@components/Settime'
import { MLIST_SELECT, AUDIT_SELECT, AUDIT_SELECT_LESS, CUSTOMER_SELECT, TIME_SELECT, TIME_SELECT_LESS, LOAN_TYPE, LOAN_MODE,ALLOT_TYPE } from '@meta/select'
class Search extends Component {
  static propTypes = {
    showRealName: PropTypes.bool,
    showSelectClient: PropTypes.bool,
    showSelectTime: PropTypes.bool,
    showSelectTime2: PropTypes.bool,
    showTime: PropTypes.bool,
    showBeginTime: PropTypes.bool,
    showSelect1: PropTypes.bool,
    showSelect2: PropTypes.bool,
    showSelect3: PropTypes.bool,
    showLoanType: PropTypes.bool,
    showLoanMode: PropTypes.bool,
    showAllotType: PropTypes.bool,
    typeId: PropTypes.number,
    selectClient: PropTypes.number,
    selectTime: PropTypes.number,
    typeName: PropTypes.string,
    realName: PropTypes.string,
    time: PropTypes.array,
    regTime: PropTypes.array,
    children: PropTypes.object.isRequired,
    selectSubreddit: PropTypes.func.isRequired,
    selectSearchText: PropTypes.func.isRequired,
    saveRealName: PropTypes.func.isRequired,
    saveTime: PropTypes.func.isRequired,
    registerTime: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
    changeClient: PropTypes.func.isRequired,
    changeTimeType: PropTypes.func.isRequired
  }
  componentWillMount() {
    // 查询表单的初始化
    this.props.initSearch()
	}
  render() {
    const { typeId, typeName, realName, time, regTime, selectClient, selectTime, showSelectClient, showSelectTime, showSelectTime2, showTime, showSelect1, showSelect2, showSelect3, showLoanType, showLoanMode, showBeginTime,showAllotType, showRealName } = this.props
    return (
      <Form inline>
        {
          showLoanMode &&
          <Form.Item>
            <SelectPicker
              value={ selectClient }
              onChange={ e => this.props.changeClient(e) }
              options={ LOAN_MODE }
              placeholder={ '选择支付方式' }
            />
          </Form.Item>
        }
        {
          showSelect1 &&
          <Form.Item>
            <SelectPicker
              value={ typeId }
              onChange={ e => this.props.selectSubreddit(e) }
              options={ MLIST_SELECT }
            />
          </Form.Item>
        }
        {
          showSelect2 &&
          <Form.Item>
            <SelectPicker
              value={ typeId }
              onChange={ e => this.props.selectSubreddit(e) }
              options={ AUDIT_SELECT }
            />
          </Form.Item>
        }
        {
          showSelect3 &&
          <Form.Item>
            <SelectPicker
              value={ typeId }
              onChange={ e => this.props.selectSubreddit(e) }
              options={ AUDIT_SELECT_LESS }
            />
          </Form.Item>
        }
        {
          (showSelect1 || showSelect2 || showSelect3) &&
          <Form.Item>
            <Input
              value={ typeName }
              onChange={ val => this.props.selectSearchText(val) }
              placeholder="请输入内容"
              clearable="true"
            />
          </Form.Item>
        }
        {
          showRealName &&
          <Form.Item>
            <Input
              value={ realName }
              onChange={ val => this.props.saveRealName(val) }
              placeholder="请输入真实姓名"
              clearable="true"
            />
          </Form.Item>
        }
        {
          showLoanType &&
          <Form.Item>
            <SelectPicker
              value={ selectClient }
              onChange={ e => this.props.changeClient(e) }
              options={ LOAN_TYPE }
              placeholder={ '选择借贷类型' }
            />
          </Form.Item>
        }
        { showSelectClient &&
          <Form.Item>
            <SelectPicker
              value={ selectClient }
              onChange={ e => this.props.changeClient(e) }
              options={ CUSTOMER_SELECT }
              placeholder={ '选择客户类型' }
            />
          </Form.Item>
        }
         { showAllotType &&
          <Form.Item>
            <SelectPicker
              value={ selectClient }
              onChange={ e => this.props.changeClient(e) }
              options={ ALLOT_TYPE }
              placeholder={ '选择分配状态' }
            />
          </Form.Item>
        }
        {
          showSelectTime &&
          <Form.Item>
            <SelectPicker
              value={ selectTime }
              onChange={ e => this.props.changeTimeType(e) }
              options={ TIME_SELECT }
              placeholder={ '选择日期类型' }
            />
          </Form.Item>
        }
        {
          showSelectTime2 &&
          <Form.Item>
            <SelectPicker
              value={ selectTime }
              onChange={ e => this.props.changeTimeType(e) }
              options={ TIME_SELECT_LESS }
              placeholder={ '选择日期类型' }
            />
          </Form.Item>
        }
        {
          showTime &&
          <Form.Item>
            <Time
              value={ time }
              onChange={ val => this.props.saveTime(val) }
            />
          </Form.Item>
        }
        {
          showBeginTime &&
          <Form.Item>
            <Time
              value={ regTime }
              onChange={ val => this.props.registerTime(val) }
            />
          </Form.Item>
        }
        <Form.Item>
          { this.props.children }
        </Form.Item>
      </Form>
    )
  }
}
const mapStateToProps = state => {
	const {
		typeId, typeName, time, regTime, selectClient, selectTime, realName
	} = state
	return {
		typeId, typeName, time, regTime, selectClient, selectTime, realName
	}
}
const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators({ selectSubreddit, selectSearchText, saveRealName, saveTime, registerTime, initSearch, changeClient, changeTimeType }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
