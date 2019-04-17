import React, { Component } from 'react'
import { Button, Form, Input,Layout, Checkbox } from 'element-react'
import api from '../api/index'
import '../styles/login.less'
import icon1 from '../images/login-from-icon1.png'
import icon2 from '../images/login-from-icon2.png'
import user from '../images/user.png'
import code from '../images/code.png'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { managelogin } from '@redux/actions'
class Login extends Component {
  static propTypes = {
    // match: PropTypes.object.isRequired,
    // location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  constructor(props){
    super(props)
    this.state = {
      type:1,
      form: {
        tel:null,

      }
    }
  }
	componentWillMount() {
	  // console.log(this.props)
	}
	componentDidMount() {

	}
  loginFn = async (e) => {
    e.preventDefault()
    await api.managelogin()
    // console.log(this.props)
    // const { dispatch } = this.props
    // let trans = {
    //   adminName: '',
    //   password: ''
    // }
    // dispatch(managelogin(trans))
    // this.props.history.push('/home')
  }
  onChange = val => {
    this.setState({
      form: Object.assign({},this.state.form, {[this]: val})
    })
  }
  Codeform = () => {
    const { type } = this.state
    if (type){
      return (
        <Form className="form-con" ref="form" model={ this.state.form } rules={ this.state.rules }>
          <Form.Item prop="tel">
            <Input value={ this.state.form.tel } onChange={ this.onChange('tel') } placeholder="请输入您的手机号" prepend={
                <img src={ user } alt="" />
              }
            />
          </Form.Item>
          <div className="code-con">
            <Form.Item>
              <Input placeholder="请输入您的验证码" prepend={
                  <img src={ code } alt="" />
                }
              />
            </Form.Item>
            <Form.Item className="flex_1 code-item">
              <Button type="text">{'获取验证码'}</Button>
            </Form.Item>
          </div>
          <Form.Item className="lastitem">
            <Checkbox label="记住用户名和密码" />
            <Button className="login-btn" type="primary" onClick={ this.loginFn }>{'登陆'}</Button>
          </Form.Item>
        </Form>
      )
    }else{
      return (
        <Form className="form-con">
          <Form.Item>
            <Input placeholder="请输入您的手机号/用户名" prepend={
                <img src={ user } alt="" />
              }
            />
          </Form.Item>
          <Form.Item>
            <Input placeholder="请输入您的密码" prepend={
                <img src={ code } alt="" />
              }
            />
          </Form.Item>
          <div className="code-con">
            <Form.Item>
              <Input placeholder="请输入右侧验证码" />
            </Form.Item>
            <Form.Item className="flex_1 code-item">
              <Button type="text">{'1234'}</Button>
            </Form.Item>
          </div>
          <Form.Item className="lastitem">
            <Checkbox label="记住用户名和密码" />
            <Button className="login-btn" type="primary">{'登陆'}</Button>
          </Form.Item>
        </Form>
      )
    }
  }
  render() {
      return (
        <div className="login-con">
          <Layout.Row type="flex" justify="center" align="middle" className="row-bg">
            <Layout.Col span="7" className="grid-content grid-left flex flex-direction_column justify-content_flex-center align-item_center">
              <img className="icon1" src={ icon1 } alt=""/>
              <div className="flex flex-direction_row borderb1 align-items_center">
                <h1 className="wel">{'欢迎来到'}</h1>
                <img className="icon2" src={ icon2 } alt=""/>
              </div>
              <h1 className="title">{'现金滴滴后台登陆系统'}</h1>
            </Layout.Col>
            <Layout.Col span="6" className="grid-content grid-right flex flex-direction_column justify-content_flex-center align-item_center">
            { this.Codeform() }
            </Layout.Col>
          </Layout.Row>
        </div>
      )
  }
}
// export default Login
Login.propTypes = {
  propsData:PropTypes.object,
  propsDataHistory: PropTypes.object
}
const mapStateToProps = state => (state.user)
export default connect(mapStateToProps)(Login)
