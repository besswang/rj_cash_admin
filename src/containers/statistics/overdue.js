// 报表统计-逾期统计
import React, { Component } from 'react'
import { Table, Button, Form, Loading } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch, saveTime } from '@redux/actions'
import { overSearch } from './actions'
import Time from '@components/Settime'
import MyPagination from '@components/MyPagination'
import { OVERDUE } from '@meta/columns'
class Overdue extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired,
    time: PropTypes.array,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
    saveTime: PropTypes.func.isRequired,
    overSearch: PropTypes.func.isRequired,
  }
  componentWillMount() {
    this.props.initSearch()
  }
  componentDidMount() {
    this.props.overSearch()
  }
  search = e => {
    e.preventDefault()
    this.props.overSearch()
  }
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.overSearch()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.overSearch()
  }
  render(){
    const { list, time } = this.props
    return (
      <div>
        <Form inline>
          <Form.Item>
            <Time
              value={ time }
              onChange={ val => this.props.saveTime(val) }
            />
          </Form.Item>
          <Form.Item>
            <Button onClick={ this.search } type="primary">{'搜索'}</Button>
          </Form.Item>
        </Form>
        <Loading loading={ list.loading }>
          <Table
          style={ { width: '100%' } }
          columns={ OVERDUE }
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
	const { list, time } = state
	return { list, time }
}
const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators({sizeChange, currentChange, initSearch, saveTime, overSearch}, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Overdue)
