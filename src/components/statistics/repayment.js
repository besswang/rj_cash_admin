// 报表统计-还款统计
import React, {Component} from 'react';
import {
  Pagination,
  Tabs
} from 'element-react'
import Ordertable from '../common/repayOrderTable'
import Moneytable from '../common/repayMoneyTable'
class Ditchinside extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeName:'1',
      currentTab:'1',
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
    this.tabChange = this.tabChange.bind(this)
  }
  tabChange(e){
    this.props.history.push({
      pathname: "/statistics/repayment/" + e.props.name
    });
    this.setState({
      currentTab:e.props.name
    })
    switch(e.props.name){
      case '1':
      this.setState({
        data: [{
        daiName: 'a',
          register: 10,
          person: 4,
          idcard: 20,
          phone: 30,
          bank: 40,
          apply: 2,
          loanNum: 12
        }, {
          daiName: 'b',
          register: 10,
          person: 4,
          idcard: 20,
          phone: 30,
          bank: 40,
          apply: 2,
          loanNum: 12
        }]
      });
      break;
      default :
       this.setState({
        data: [{
          daiName: '2345',
          dayregister: '11',
          daynum: '0',
          settlementAll: '7825',
          channelWay: 'fdf',
          settlementPrice: '18',
          dayPrice: '33.00',
          addupPrice: '84574.00'
        }]
       });
    }
  }
  render(){
    console.log(this.props.match.params)
    return (
      <div>
        <Tabs activeName={this.state.activeName} onTabClick={this.tabChange}>
          <Tabs.Pane label="还款单分析" name='1'>
            <Ordertable data={this.state.data} tabName={this.state.currentTab}/>
          </Tabs.Pane>
          <Tabs.Pane label="还款金额分析" name='2'>
            <Moneytable data={this.state.data} tabName={this.state.currentTab}/>
          </Tabs.Pane>
        </Tabs>
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