// 报表统计-消耗费用
import React, { Component } from 'react'
import { Table, Button, Form, Pagination, Loading } from 'element-react'
import Time from '../common/setime'
import { CONSUME } from '../meta/columns'
class Consume extends Component {
  constructor(props){
    super(props)
    this.state = {
      total: 15,
      pageSize: 5,
      pageSizes: [ 5, 10, 15 ],
      currentPage: 1,
      data: []
    }
  }
  render(){
    return (
      <div>
      	<Form inline>
					<Form.Item>
            <Time></Time>
          </Form.Item>
          <Form.Item>
            <Button nativeType="submit" type="primary">搜索</Button>
          </Form.Item>
        </Form>
        <Loading>
          <Table
          style={ { width: '100%' } }
          columns={ CONSUME }
          data={ this.state.data }
          border
          />
        </Loading>
        <div className="pagination-con flex flex-direction_row justify-content_flex-center">
          <Pagination
          layout="total, sizes, prev, pager, next, jumper"
          total={this.state.total}
          pageSizes={this.state.pageSizes}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          />
        </div>
      </div>
    )
  }
}
export default Consume