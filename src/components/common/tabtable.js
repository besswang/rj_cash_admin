import React,{ Component } from 'react';
import {Table} from 'element-react'
//当天
import { TODAY_DITCH } from '../meta/columns'
//总下单量
import { ALL_DITCH } from '../meta/columns'
export default class Tabtable extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabvalue:'',
      columns:[],
      data: []
    }
  }
  componentDidMount() {
    this.tick()
  }
  tick() {
    this.setState({
      tabvalue : this.props.tabvalue
    })
    if (this.props.tabvalue === '1') {
      this.setState({
        columns: TODAY_DITCH,
        data : [
          {
            time: '2019-12-22 12:23:33',
            num: '11',
            self: '457485',
            approve: '343',
            tel: 58457,
            bank: 787,
            applynum: 5475,
            apply: 84574,
            moneynum: 475,
            money: 78
          }
        ]
      })
    }else if(this.props.tabvalue === '2'){
      this.setState({
        columns: ALL_DITCH,
        data:[
          {
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
            zloanNumcount:'12%'
          }
        ]
      })
    }
  }
  render() {
    console.log(this.props.tabvalue)
    return (
      <Table
        style={{width: '100%'}}
        columns={this.state.columns}
        data={this.state.data}
        border={true}>
        		{/* <Table.Column label="操作"
						render={
							(row, column, index) => {
								return (<span><Button type="text" size="small" onClick={this.deleteRow.bind(this, index)}>移除</Button></span>)
							}
						}>
						</Table.Column> */}
        </Table>
    )
  }
}