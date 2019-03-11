import React, { Component } from 'react'
import { Button, Form, Input } from 'element-react'
import { Redirect } from 'react-router-dom'
import api from '../api/index'
// import http from '../axios/index'
import '../styles/login.less'
import PropTypes from 'prop-types'
import history from '../routes/history'
class Login extends Component {
  static propTypes = {
    // match: PropTypes.object.isRequired,
    // location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      propsData:this.props,
      propsDataHistory:this.props.history,
      loginSuccess:false,//登陆状态
      form1: {
        username: '',
        password: '',
      },
      form2: {
        tel: '',
        code: '',
      },
      tab: [
        {
          id:0,
          text:'密码登陆'
        },{
          id:1,
          text:'验证码登陆'
        }
      ],
      currentIndex:0,
      rules1: {
        username: [
          {
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
          }
        ],
        password: [
          {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
          }
        ]
      },
      rules2: {
        tel: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          }, {
            validator: (rule, value, callback) => {
              const reg = /^1[34578]\d{9}$/
              setTimeout(() => {
                if (!reg.test(this.state.form2.tel)) {
                  callback(new Error('请输入有效的手机号'));
                } else {
                  callback();
                }
              }, 1000);
            },
            trigger: 'change'
          }
        ],
        code: [
            {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }
        ]
      }
    };
  }
  tabChoiced = (id) => {
    //tab切换到方法
    this.setState({
      currentIndex: id
    });
  }
  loginFn = e => {
    e.preventDefault();
    // api.a()
    // console.log(this.state.currentIndex)
    if (this.state.currentIndex===0){
      this.form1.validate((valid) => {
        if (valid) {
          // history.push('/home');
          this.props.history.push('/home')
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }else{
      this.form2.validate((valid) => {
        if (valid) {
          alert('submit!');
          console.log(this.state.form2)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
  onChange(key, value) {
    this.setState({
      form1: Object.assign({}, this.state.form1, {
        [ key ]: value
      }),
      form2: Object.assign({}, this.state.form2, {
        [ key ]: value
      })
    });
  }
  render() {
    const that = this;
    const show1 = this.state.currentIndex === 0 ? 'block' : 'none';
    const show2 = this.state.currentIndex === 1 ? 'block' : 'none';
    if (this.state.loginSuccess) {
      return (<Redirect to="/home" />)
    } else {
      return (
        <div className="login-con">
          <div className="form-con">
            <ul className="tab-con flex flex-direction_row">
              {this.state.tab.map((item, index) => {
                return (
                  <li className={ [ 'flex_auto', index === this.state.currentIndex ? 'active' : '' ].join(' ') } key={ item.id } onClick={ this.tabChoiced.bind(that, item.id) }>{ item.text }</li>
                )
              })}
            </ul>
            <Form style={ { 'display': show1 } } ref={ e => { this.form1 = e } } model={ this.state.form1 } rules={ this.state.rules1 }>
              <Form.Item prop="username">
                <Input placeholder="请输入用户名"
                value={ this.state.form1.username }
                onChange={ this.onChange.bind(this, 'username') }
                />
              </Form.Item>
              <Form.Item prop="password">
                <Input placeholder="请输入密码"
                value={ this.state.form1.password }
                onChange={ this.onChange.bind(this, 'password') }
                />
              </Form.Item>
            </Form>
            <Form style={ { 'display': show2 } } ref={ e => { this.form2 = e } } model={ this.state.form2 } rules={ this.state.rules2 }>
              <Form.Item prop="tel">
                <Input placeholder="请输入手机号"
                value={ this.state.form2.tel }
                onChange={ this.onChange.bind(this, 'tel') }
                />
              </Form.Item>
              <div className="flex flex-direction_row">
                <Form.Item prop="code">
                  <Input placeholder="请输入验证码"
                  value={ this.state.form2.code }
                  onChange={ this.onChange.bind(this, 'code') }
                  />
                </Form.Item>
                <Form.Item className="flex_1">
                  <Button type="text">获取验证码</Button>
                </Form.Item>
              </div>
            </Form>
            <Button type="primary" size="large" className="login-btn" onClick={ this.loginFn }>登陆</Button>
          </div>
        </div>
      )
    }
  }
}
export default Login;
Login.propTypes = {
  propsData:PropTypes.object,
  propsDataHistory: PropTypes.object
}
