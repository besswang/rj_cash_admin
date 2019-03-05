// 报表统计-放款统计
import React, {Component} from 'react';
import {Button, Form, Pagination } from 'element-react'
import Time from '../common/setime'
import Loantable from '../common/loanTable'
class Ditch extends Component {
  constructor(props){
    super(props)
    this.state = {
      total:15,
      pageSize:5,
      pageSizes:[5,10,15],
      currentPage:1,
      data: [
        {
          theDate: '2019-12-22',
          orderMoney: 57485,
          newOrderNumber: 343,
          newOrderMoney: 58457
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
        <Loantable data={this.state.data}/>
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