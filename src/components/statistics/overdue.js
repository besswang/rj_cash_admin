// 报表统计-逾期统计
import React, { Component } from 'react'
import { Table, Button, Form, Pagination } from 'element-react'
import Time from '../common/setime'
import { OVERDUE } from '../meta/columns'
class Ditch extends Component {
  constructor(props){
    super(props)
    this.state = {
      total: 15,
      pageSize: 5,
      pageSizes:[ 5, 10, 15 ],
      currentPage: 1,
      data: [
        {
          theDate: '2019-12-22',
          orderNumber: 152,
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
        <Form inline>
          <Form.Item>
            <Time />
          </Form.Item>
          <Form.Item>
            <Button nativeType="submit" type="primary">搜索</Button>
          </Form.Item>
        </Form>
        <Table
        style={ { width: '100%' } }
        columns={ OVERDUE }
        data={ this.state.data }
        border
        />
        <div className="pagination-con flex flex-direction_row justify-content_flex-center">
          <Pagination
          layout="total, sizes, prev, pager, next, jumper"
          total={ this.state.total }
          pageSizes={ this.state.pageSizes }
          pageSize={ this.state.pageSize }
          currentPage={ this.state.currentPage }
          />
        </div>
      </div>
    )
  }
}
export default Ditch