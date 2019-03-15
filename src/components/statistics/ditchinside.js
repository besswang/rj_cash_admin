import React, { Component } from 'react'
import {
  Pagination,
  Tabs,
  Breadcrumb
} from 'element-react'
import { Link } from 'react-router-dom'
// import Time from '../common/setime'
// import Tabtable from '../common/tabtable'
import Todaytable from '../common/ditchTodayTable'
import Alltable from '../common/ditchAllTable'
import Costtable from '../common/ditchCostTable'
class Ditchinside extends Component {
  constructor(props){
    super(props)
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
    }
    this.tabChange = this.tabChange.bind(this)
  }
  tabChange(e){
    console.log(e.props.name)
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
      })
      break
      case '2':
      this.setState({
        data: [{
          daiName: '2345',
          dayregister: '11',
          apply: '457485',
          dayapplycount: '23%',
          dayorder: 3,
          bank: '11%',
          zregister: 33,
          zapply: 84574,
          applycount: '33%',
          zloanNum: 78,
          zloanNumcount: '12%'
        }]
      })
      break
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
       })
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
            <Link to="/statistics/ditch">
              {'渠道统计'}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{'当天'}</Breadcrumb.Item>
        </Breadcrumb>
        <Tabs activeName={ this.state.activeName } onTabClick={ this.tabChange }>
          <Tabs.Pane label="当天" name="1">
            <Todaytable data={ this.state.data } />
          </Tabs.Pane>
          <Tabs.Pane label="总转化" name="2">
            <Alltable data={ this.state.data } />
          </Tabs.Pane>
          <Tabs.Pane label="渠道费用" name="3">
            <Costtable data={ this.state.data } />
          </Tabs.Pane>
        </Tabs>
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
export default Ditchinside