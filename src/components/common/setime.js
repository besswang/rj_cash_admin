// 开始-结束时间组建
import React from 'react';
import { DateRangePicker } from 'element-react'
export default class SetEndTime extends React.Component {
	constructor(props) {
	  super(props)
	  this.state = {
	    value2: null
	  }
  }
  render (){
    const {value2} = this.state
    return (
        <DateRangePicker
					value={value2}
					isShowTime={true}
					placeholder="选择日期范围"
					align="right"
					ref={e=>this.daterangepicker2 = e}
					onChange={date=>{
						console.debug('DateRangePicker2 changed: ', date)
						this.setState({value2: date})
					}}
					shortcuts={[{
						text: '最近一周',
						onClick: ()=> {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);

							this.setState({value2: [start, end]})
							this.daterangepicker2.togglePickerVisible()
						}
					}, {
						text: '最近一个月',
						onClick: ()=> {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);

							this.setState({value2: [start, end]})
							this.daterangepicker2.togglePickerVisible()
						}
					}, {
						text: '最近三个月',
						onClick: ()=> {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							this.setState({value2: [start, end]})
							this.daterangepicker2.togglePickerVisible()
						}
					}]}/>
    )
  }
}