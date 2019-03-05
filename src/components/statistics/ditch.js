// 报表统计-渠道统计
import React, {Component} from 'react';
import {Table, Button, Form, Pagination } from 'element-react'
import {Link} from 'react-router-dom';
import Time from '../common/setime'
import num from '../../global/num'
class Ditch extends Component {
  constructor(props){
    super(props)
    this.state = {
      total:15,
      pageSize:5,
      pageSizes:[5,10,15],
      currentPage:1,
      columns:[
        {
					type: 'index'
				}, {
					label: "日期",
          prop: "sjDate",
          width:150
				}, {
				  label: "注册人数",
				  prop: "register"
				}, {
				  label: "个人信息",
				  prop: "person"
				}, {
				  label: "身份认证",
				  prop: "idcard"
				}, {
				  label: "手机认证",
				  prop: "phone"
				}, {
				  label: "银行认证",
				  prop: "bank"
				}, {
				  label: "申请单数",
          prop: "apply"
				}, {
          label: "申请率",
          render: (row) => {
            // 申请率 = 申请单数/注册人数
            if (row.apply && row.register){
              let applyConversion = parseInt(row.apply) / parseInt(row.register)
              return (num.toDecimal(applyConversion))
            }else{
              return ('0.00%')
            }
          }
				}, {
				  label: "放款人数",
				  prop: "loanNum"
				}, {
				  label: "放款率",
          render: (row) => {
            // 放款率 = 放款人数/注册人数
            if (row.loanNum && row.register) {
              let loanConversion = parseInt(row.loanNum) / parseInt(row.register)
              return (num.toDecimal(loanConversion))
            } else {
              return ('0.00%')
            }
          }
				}, {
				  label: "操作",
          prop: "operate",
          width:180,
          fixed:"right",
          render: (row,columns,index) => {
            return (
              <Link to="/statistics/ditch/ditchinside">
                <Button type="text" size="mini">当天/总转化/渠道费用</Button>
              </Link>
            )
          }
				}
      ],
      data: [
        {
          time: '2019-12-22',
          num: '11',
          self: '457485',
          approve: '343',
          tel: 58457,
          bank: 787,
          applynum: 5475,
          apply:84574,
          moneynum:475,
          money:78
        }
      ]
    }
  }
  render(){
    return (
      <div>
      	<Form inline={true}>
					<Form.Item>
            <Time></Time>
          </Form.Item>
          <Form.Item>
            <Button nativeType="submit" type="primary">搜索</Button>
          </Form.Item>
        </Form>
				<Table
					style={{width: '100%'}}
					columns={this.state.columns}
					data={this.state.data}
					border={true}>
					</Table>
          <div className="pagination-con flex flex-direction_row justify-content_flex-center">
						<Pagination
						layout="total, sizes, prev, pager, next, jumper"
						total={this.state.total}
						pageSizes={this.state.pageSizes}
						pageSize={this.state.pageSize}
						currentPage={this.state.currentPage}/>
					</div>
      </div>
    )
  }
}
export default Ditch;