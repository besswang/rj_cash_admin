import React,{ Component } from 'react';
import {Table} from 'element-react'
import num from '../../global/num'
export default class TodayTable extends Component {
  // constructor(props){
  //   super(props);
  //   // this.toDecimal = this.toDecimal.bind(this)
  // }
  // toDecimal(x) {
  //   let f = parseFloat(x);
  //   if (isNaN(f)) {
  //     return false;
  //   }
  //   let m = Math.round(x * 100) / 100;
  //   var s = m.toString();
  //   var rs = s.indexOf('.');
  //   if (rs < 0) {
  //     rs = s.length;
  //     s += '.';
  //   }
  //   while (s.length <= rs + 2) {
  //     s += '0';
  //   }
  //   return s+'%';
  // }
  render() {
    let [...arrObj] = this.props.data
    return (
      <Table
        style={{width: '100%'}}
        data={arrObj}
        border={true}>
        <Table.Column label="序号" type="index"/>
        <Table.Column label="渠道名称" prop='daiName'/>
        <Table.Column label="注册人数" prop='register'
          render = {
            (row) => {
              return (row.register ? row.register : '0')
            }
          }
        />
        <Table.Column label="个人信息" prop='person'
          render = {
            (row) => {
              return (row.person ? row.person : '0')
            }
          }
        />
        <Table.Column label="身份认证" prop="idcard"
          render = {
            (row) => {
              return (row.idcard ? row.idcard : '0')
            }
          }
        />
        <Table.Column label="手机认证" prop='phone'
          render = {
            (row) => {
              return (row.phone ? row.phone : '0')
            }
          }
        />
        <Table.Column label="银行认证" prop='bank'
          render = {
            (row) => {
              return (row.bank ? row.bank : '0')
            }
          }
        />
        <Table.Column label="申请单数" prop='apply'
          render={
            (row) => {
              return (row.apply ? row.apply:'0')
            }
          }
        />
        <Table.Column label="申请率"
        render={
          (row) => {
            if (row.apply && row.register){
              // 申请率 = 申请单数 / 注册人数
              let applynum = parseInt(row.apply) / parseInt(row.register)
              // return (this.toDecimal(applynum))
              return (num.toDecimal(applynum))
            }else{
              return ('0.00%')
            }
          }
        }/>
        <Table.Column label="放款人数" prop='loanNum'
          render={
            (row) => {
              return (row.loanNum ? row.loanNum:'0')
            }
          }
        />
        <Table.Column label="放款率"
          render = {
            (row) => {
              if (row.loanNum && row.register) {
                // 放款率 = 放款人数 / 注册人数
                let loanNumnum = parseInt(row.loanNum) / parseInt(row.register)
                // return (this.toDecimal(loanNumnum))
                return (num.toDecimal(loanNumnum))
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