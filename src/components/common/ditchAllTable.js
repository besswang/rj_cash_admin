import React, { Component } from 'react'
import { Table } from 'element-react'
import num from '../../global/num'
import PropTypes from 'prop-types'
export default class AllTable extends Component {
  render() {
    const [ ...arrObj ] = this.props.data
    return (
      <Table
        style={ { width: '100%' } }
        data={ arrObj }
        border
      >
        <Table.Column label="序号" type="index" />
        <Table.Column label="渠道名称" prop="daiName" />
        <Table.Column label="日注册量" prop="register"
          render = {
            (row) => {
              return (row.register ? row.register : '0')
            }
          }
        />
        <Table.Column label="日申请量" prop="apply"
          render = {
            (row) => {
              return (row.apply ? row.apply : '0')
            }
          }
        />
        <Table.Column label="日申请率"
          render = {
            (row) => {
              // 日申请率 = 日申请量/日注册量
              if (row.apply && row.register){
                const applynum = parseInt(row.apply) / parseInt(row.register)
                return (num.toDecimal(applynum))
              }else{
                return ('0.00%')
              }
            }
          }
        />
        <Table.Column label="日下单量" prop="loanNum"
          render = {
            (row) => {
              return (row.loanNum ? row.loanNum : '0')
            }
          }
        />
        <Table.Column label="日转化率"
          render = {
            (row) => {
              // 日转化率 = 日下单量/日注册量
              if (row.loanNum && row.register) {
                const loanConversion = parseInt(row.loanNum) / parseInt(row.register)
                return (num.toDecimal(loanConversion))
              } else {
                return ('0.00%')
              }
            }
          }
        />
        <Table.Column label="总注册量" prop="zregister"
          render={
            (row) => {
              return (row.zregister ? row.zregister : '0')
            }
          }
        />
        <Table.Column label="总申请量" prop="zapply"
          render={
            (row) => {
              return (row.zapply ? row.zapply : '0')
            }
          }
        />
        <Table.Column label="总申请率"
        render={
          (row) => {
            // 总申请率 = 总申请量/总注册量
            if (row.zapply && row.zregister) {
              const zapplyConversion = parseInt(row.zapply) / parseInt(row.zregister)
              return (num.toDecimal(zapplyConversion))
            }else{
              return ('0.00%')
            }
          }
        }
        />
        <Table.Column label="总下单量" prop="zloanNum"
          render={
            (row) => {
              return (row.zloanNum ? row.zloanNum : '0')
            }
          }
        />
        <Table.Column label="总转化率"
          render = {
            (row) => {
              //总转化率 = 总下单量/总注册量
              if (row.zloanNum && row.zregister) {
                const zloanConversion = parseInt(row.zloanNum) / parseInt(row.zregister)
                return (num.toDecimal(zloanConversion))
              } else {
                return ('0.00%')
              }
            }
          }
        />
      </Table>
    )
  }
}
AllTable.propTypes = {
  tabName: PropTypes.string,
  data: PropTypes.array
}