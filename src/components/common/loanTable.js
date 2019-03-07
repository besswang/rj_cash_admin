import React, { Component } from 'react'
import { Table } from 'element-react'
import num from '../../global/num'
import PropTypes from 'prop-types'
export default class AllTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      column:[
        {
          label:'序号',
          type:'index'
        },{
          label:'日期',
          prop: 'theDate'
        },{
          label:'总放款单数',
          prop: 'orderNumber',
          render:(row) => {
            return (row.orderNumber ? row.orderNumber:'0')
          }
        },{
          label:'总放款金额',
          prop: 'orderMoney',
          render: (row) => {
            return (row.orderMoney ? row.orderMoney : '0')
          }
        },{
          label:'新客单数',
          prop: 'newOrderNumber',
          render: (row) => {
            return (row.newOrderNumber ? row.newOrderNumber : '0')
          }
        },
        // {
        //   label: '新放金额',
        //   prop: 'newOrderMoney',
        //   render: (row) => {
        //     return (row.newOrderMoney ? row.newOrderMoney : '0')
        //   }
        // },
        {
          label: '老客单数',
          render: (row) => {
            // 老客单数 = 总放款单数 - 新客单数
            if (row.orderNumber && parseInt(row.orderNumber) > 0) {
              const oldorder = parseInt(row.orderNumber) - parseInt(row.newOrderNumber)
              return (oldorder)
            }else{
              return (0)
            }
          }
        }, {
          label: '新客放款率',
          render: (row) => {
            // 新客放款率 = 新客单数/总放款单数
            if (row.newOrderNumber && row.orderNumber){
              const conversion = parseInt(row.newOrderNumber)/parseInt(row.orderNumber)
              return (num.toDecimal(conversion))
            }else{
              return ('0.00%')
            }
          }
        }, {
          label: '老客放款率',
          render: (row) => {
            // 老客放款率 = 老客单数/总放款单数
            if (row.newOrderNumber && row.orderNumber) {
              const conversion = parseInt(row.newOrderNumber) / parseInt(row.orderNumber)
              return (num.toDecimal(conversion))
            }else{
              return ('0.00%')
            }
          }
        },{
          label:'续期单数',
          prop: 'renewalOrder'
        }
      ]
    }
  }
  render() {
    const [ ...arrObj ] = this.props.data
    return (
      <Table
        style={ { width: '100%' } }
        columns={ this.state.column }
        data={ arrObj }
        border
      />
    )
  }
}
AllTable.propTypes = {
  data: PropTypes.array
}