import React from 'react';
import { Select,Input,Form,Button } from 'element-react';
import Time from '../common/setime'
class Mlist extends React.Component{
	constructor(props) {
  super(props);
  this.state = {
    options: [{
      value: '1',
      label: '渠道名称'
    }, {
      value: '2',
      label: '会员姓名'
    }, {
      value: '3',
      label: '手机号码'
    }, {
      value: '4',
      label: '身份证号'
    }],
    value: ''
  };
}
render() {
  return (
		<div>
		  <Form inline={true}>
				<Form.Item>
					<Select value={this.state.value} clearable={true} placeholder="请选择类型">
						{
							this.state.options.map(el => {
								return <Select.Option key={el.value} label={el.label} value={el.value} />
							})
						}
					</Select>
				</Form.Item>
				<Form.Item>
					<Input placeholder="请输入内容" />
				</Form.Item>
				<Form.Item>
					<Time></Time>
				</Form.Item>
				<Form.Item>
					<Button nativeType="submit" type="primary">搜索</Button>
				</Form.Item>
				<Form.Item>
					<Button nativeType="submit" type="primary">导出列表</Button>
				</Form.Item>
			</Form>
		</div>

  )
}
}
export default Mlist;