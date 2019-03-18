// 开始-结束时间组建
import React,{ Component } from 'react'
import { Input, Form, Button, Select, Notification} from 'element-react'
import { AUDIT_SELECT } from '@components/meta/select'
import Time from '@components/common/setime'
import PropTypes from 'prop-types'
export default class TypeSearch extends Component {
  static propTypes = {
    searchType: PropTypes.number
  }
  constructor(props){
    super(props)
    this.state = {
      form: {
        content:'',
        selectValue:null
      }
    }
  }
  TIME = () => {
    let TIME=null
    if (this.props.searchType === 2) {
      TIME = <Form.Item><Time /></Form.Item>
    }
    return TIME
  }
  onSubmit = e => {
    e.preventDefault()
    console.log(this.state.form)
    if(this.state.form.selectValue === "2"){//手机号码
      const tel = this.state.form.content
      /* eslint-disable */
      const regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/
      if(tel){
        if (!regex.test(tel)) {
          Notification({
            title: '警告',
            message: '请输入正确的手机号码',
            type: 'warning'
          })
        }
      }
    }
  }
  onChange(key, value) {
    this.setState({
      form: Object.assign(this.state.form, {
        [key]: value
      })
    })
  }
  render (){
    // let TIME = null
    // if (this.props.searchType === '2') {
    //   TIME = < Form.Item > < Time / > < /Form.Item>
    // }
    const { selectValue, content } = this.state.form
    return (
      <Form inline model={ this.state.form } onSubmit={ this.onSubmit }>
        <Form.Item>
          <Select value={ selectValue } clearable placeholder="搜索类型" onChange={ this.onChange.bind(this,'selectValue') }>
            {
              AUDIT_SELECT.map(el => {
                return <Select.Option key={ el.value } label={ el.label } value={ el.value } />
              })
            }
          </Select>
        </Form.Item>
        <Form.Item>
          <Input value={ content } placeholder="请输入内容" onChange={ this.onChange.bind(this,'content') } />
        </Form.Item>
        {this.TIME()}
        {/* {TIME} */}
        <Form.Item>
          <Button nativeType="submit" type="primary">{'搜索'}</Button>
        </Form.Item>
      </Form>
    )
  }
}