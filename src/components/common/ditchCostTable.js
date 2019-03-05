import React,{ Component } from 'react';
import {Table} from 'element-react'
import num from '../../global/num'
export default class CostTable extends Component {
  render() {
    let [...arrObj] = this.props.data
    return (
      <Table
        style={{width: '100%'}}
        data={arrObj}
        border={true}>
        <Table.Column label="序号" type="index"/>
        <Table.Column label="渠道名称" prop='daiName'/>
        <Table.Column label="日注册量" prop='register'
          render = {
            (row) => {
              return (row.register ? row.register : '0')
            }
          }
        />
        <Table.Column label="日结算量" prop='settlementDay'
          render = {
            (row) => {
              return (row.settlementDay ? row.settlementDay : '0')
            }
          }
        />
        <Table.Column label="累计结算量" prop='settlementAll'
          render = {
            (row) => {
              return (row.settlementAll ? row.settlementAll : '0')
            }
          }
        />
        <Table.Column label="推广方式" prop='channelWay'/>
        <Table.Column label="结算价格" prop='settlementPrice'
          render = {
            (row) => {
              return (row.settlementPrice ? row.settlementPrice : '0')
            }
          }
        />
        <Table.Column label="日结算金额"
          render = {
            (row) => {
              // 日结算金额 = 结算价格*日结算量
              if (row.settlementPrice && row.settlementDay) {
                let setConversion = parseInt(row.settlementPrice) / parseInt(row.settlementDay)
                return (num.toDecimal(setConversion,1))
              } else {
                return ('0.00')
              }
            }
          }
        />
        <Table.Column label="累计结算金额"
          render = {
            (row) => {
              // 累计结算金额 = 累计结算量*结算价格
              if (row.settlementAll && row.settlementPrice) {
                let allConversion = parseInt(row.settlementAll) / parseInt(row.settlementPrice)
                return (num.toDecimal(allConversion,1))
              } else {
                return ('0.00')
              }
            }
          }
        />
      </Table>
    )
  }
}