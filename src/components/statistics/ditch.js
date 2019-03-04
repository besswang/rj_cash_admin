import React, {Component} from 'react';
import {Table, Button, Form, Pagination } from 'element-react'
import {Link} from 'react-router-dom';
import Time from '../common/setime'
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
          prop: "time",
          width:180
				}, {
				  label: "注册人数",
				  prop: "num"
				}, {
				  label: "个人信息",
				  prop: "self"
				}, {
				  label: "身份认证",
				  prop: "approve"
				}, {
				  label: "手机认证",
				  prop: "tel"
				}, {
				  label: "银行认证",
				  prop: "bank"
				}, {
				  label: "申请单数",
				  prop: "applynum"
				}, {
				  label: "申请率",
				  prop: "apply"
				}, {
				  label: "放款人数",
				  prop: "moneynum"
				}, {
				  label: "放款率",
				  prop: "money"
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
          time: '2019-12-22 12:23:33',
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