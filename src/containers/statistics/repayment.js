// 报表统计-还款统计
import React, { Component } from 'react'
import { Button, Form, Loading, Table } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch, saveTime } from '@redux/actions'
import { pageRepaymentCount } from './actions'
import Time from '@components/Settime'
import MyPagination from '@components/MyPagination'
class RepayMent extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired,
    time: PropTypes.array,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
    saveTime: PropTypes.func.isRequired,
    pageRepaymentCount: PropTypes.func.isRequired,
  }
  constructor(props){
    console.log('constructor()')
    super(props)
    this.state = {
      column:[
        {
          label:'序号',
          type:'index'
        }, {
          label:'日期',
          prop: 'date'
        }, {
          label: '还款表现',
          prop: 'repaymentRate'
        }, {
          label: '新还款表现',
          prop: 'newRepaymentRate'
        }, {
          label: '应还单数',
          prop: 'shouldReturnNum'
        }, {
          label: '应还金额',
          prop: 'shouldReturnAmount'
        }, {
          label: '已还单数',
          prop: 'alreadyReturnNum'
        }, {
          label: '已还金额',
          prop: 'alreadyReturnAmount'
        }, {
          label: '新应还单数',
          prop: 'newShouldReturnNum'
        }, {
          label: '新应还金额',
          prop: 'newShouldReturnAmount'
        }, {
          label: '延期单数',
          prop: 'delayNum'
        }, {
          label: '全款还款单数',
          prop: 'fullRepaymentNum'
        }
      ]
    }
  }
  componentWillMount() {
    this.props.initSearch()
  }
  componentDidMount() {
    this.props.pageRepaymentCount()
  }
  search = e => {
    e.preventDefault()
    this.props.pageRepaymentCount()
  }
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.pageRepaymentCount()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.pageRepaymentCount()
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
            columns={ this.state.column }
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
		...bindActionCreators({sizeChange, currentChange, initSearch, saveTime, pageRepaymentCount}, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(RepayMent)
