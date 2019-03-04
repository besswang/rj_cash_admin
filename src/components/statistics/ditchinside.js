import React, {Component} from 'react';
import {
  Pagination,
  Tabs,
  Breadcrumb
} from 'element-react'
import {Link} from 'react-router-dom'
// import Time from '../common/setime'
import Tabtable from '../common/tabtable'
class Ditchinside extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeName:'1',
      total:15,
      pageSize:5,
      pageSizes:[5,10,15],
      currentPage:1
    }
  }
  render(){
    return (
      <div>
      	{/* <Form inline={true}>
					<Form.Item>
            <Time></Time>
          </Form.Item>
          <Form.Item>
            <Button nativeType="submit" type="primary">搜索</Button>
          </Form.Item>
        </Form> */}
        <Breadcrumb separator="/">
					<Breadcrumb.Item>
						<Link to='/statistics/ditch'>
							渠道统计
						</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item>当天</Breadcrumb.Item>
				</Breadcrumb>
        <Tabs activeName={this.state.activeName}>
          <Tabs.Pane label="当天" name='1'></Tabs.Pane>
          <Tabs.Pane label="总转化" name='2'>总转化</Tabs.Pane>
          <Tabs.Pane label="渠道费用" name='3'>渠道费用</Tabs.Pane>
        </Tabs>
				{/* <Table
					style={{width: '100%'}}
					columns={this.state.columns}
					data={this.state.data}
					border={true}>
					</Table> */}
          <Tabtable tabvalue={this.state.activeName}></Tabtable>
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
export default Ditchinside;