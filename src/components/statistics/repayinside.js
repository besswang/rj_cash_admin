import React, {Component} from 'react';
import {
  Pagination,
  Breadcrumb
} from 'element-react'
import {Link} from 'react-router-dom'
class Ditchinside extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeName:'1',
      data: [{
        daiName: 'a',
        register: 10,
        person: 4,
        idcard: 20,
        phone: 30,
        bank: 40,
        loanNum: 12
      }, {
        daiName: 'b',
        register: 10,
        person: 4,
        idcard: 20,
        phone: 30,
        bank: 24,
        apply: 6
      }],
      tabValue:null,
      total:15,
      pageSize:5,
      pageSizes:[5,10,15],
      currentPage:1
    };

  }
  bread(){
    // console.log(this.props.match.params)
    // let {tabName,id} = this.props.match.params
    let tabName = this.props.match.params.tabName
    let url = '/statistics/repayment/' + tabName
    let text = (tabName === '1' ? '还款单分析' : '还款金额分析')
    return (
      <Link to={`${url}`}>
        {text}
      </Link>
    )
  }
  render(){
    return (
      <div>
        <Breadcrumb separator="/">
					<Breadcrumb.Item>
            {
              this.bread()
            }
					</Breadcrumb.Item>
					<Breadcrumb.Item>详情</Breadcrumb.Item>
				</Breadcrumb>
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