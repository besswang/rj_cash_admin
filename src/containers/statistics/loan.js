// 报表统计-放款统计
import React, { Component } from 'react'
import { Button, Form, Loading, Table } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch, saveTime } from '@redux/actions'
import { pageLoanCount } from './actions'
import Time from '@components/Settime'
import MyPagination from '@components/MyPagination'
class Loan extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired,
    time: PropTypes.array,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
    saveTime: PropTypes.func.isRequired,
    pageLoanCount: PropTypes.func.isRequired
  }
  constructor(props){
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
                label:'总放单数',
                prop: 'allLoanNum'
              }, {
                label: '总放金额',
                prop: 'allLoanAmount'
              }, {
                label: '总还金额',
                prop: 'allReturnAmount'
              }, {
                label: '新放单数',
                prop: 'newLoanNum'
              }, {
                label: '新放金额',
                prop: 'newLoanAmount'
              }, {
                label: '老放单数',
                prop: 'oldLoanNum'
              }, {
                label: '老放金额',
                prop: 'oldLoanAmount'
              }, {
                label: '新放款率',
                prop: 'newLoanRate'
              }
      ]
    }
  }
  componentWillMount() {
    this.props.initSearch()
  }
  componentDidMount() {
    this.props.pageLoanCount()
  }
  search = e => {
    e.preventDefault()
    this.props.pageLoanCount()
  }
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.pageLoanCount()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.pageLoanCount()
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
		...bindActionCreators({sizeChange, currentChange, initSearch, saveTime, pageLoanCount}, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Loan)
