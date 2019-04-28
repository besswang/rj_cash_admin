// 报表统计-进出账
import React, { Component } from 'react'
import { Button, Form, Loading, Table } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch, saveTime } from '@redux/actions'
import { pageInoutCount } from './actions'
import Time from '@components/Settime'
import MyPagination from '@components/MyPagination'
import { TURNOVER } from '@meta/columns'
class Turnover extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired,
    time: PropTypes.array,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
    saveTime: PropTypes.func.isRequired,
    pageInoutCount: PropTypes.func.isRequired
  }
  componentWillMount() {
    this.props.initSearch()
  }
  componentDidMount() {
    this.props.pageInoutCount()
  }
  search = e => {
    e.preventDefault()
    this.props.pageInoutCount()
  }
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.pageInoutCount()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.pageInoutCount()
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
            columns={ TURNOVER }
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
		...bindActionCreators({sizeChange, currentChange, initSearch, saveTime, pageInoutCount}, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Turnover)
