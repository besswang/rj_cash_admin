import React, { Component } from 'react';
import { Button, Form, Input } from 'element-react';
import { Redirect } from 'react-router-dom'
// import api from '../api/index'
import http from '../axios/index'
import history from '../routes/history'
import '../styles/login.less'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginSuccess:false,//登陆状态
      form1: {
        username: '',
        password: '',
      },
      form2: {
        tel: '',
        code: '',
      },
      tab:[
        {id:0,text:'密码登陆'},
        {id:1,text:'验证码登陆'}
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
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      },
      rules2: {
        tel: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        }, {
          validator: (rule, value, callback) => {
            let reg = /^1[34578]\d{9}$/
            setTimeout(() => {
              if (!reg.test(this.state.form2.tel)) {
                callback(new Error('请输入有效的手机号'));
              } else {
                callback();
              }
            }, 1000);
          },
          trigger: 'change'
        }],
        code: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        }]
      }
    };
  }
  tabChoiced = (id) => {
    //tab切换到方法
    this.setState({
      currentIndex: id
    });
  }
  async axiosFn(){
    const res = await http.get('/globalconfig/selectGlobalconfig')
    console.log(res)
  }
  loginFn(e){
    e.preventDefault();
    // history.push('/');
    // let x = api.a()
    // console.log(x)
    this.axiosFn()
    return false
    console.log(this.state.currentIndex)
    if (this.state.currentIndex===0){
      this.refs.form1.validate((valid) => {
        if (valid) {
          // alert('submit!');
          // console.log(this.state.form1)
          history.push('/');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }else{
      this.refs.form2.validate((valid) => {
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
        [key]: value
      }),
      form2: Object.assign({}, this.state.form2, {
        [key]: value
      })
    });
  }
  render() {
    let that = this;
    let show1 = this.state.currentIndex === 0 ? 'block' : 'none';
    let show2 = this.state.currentIndex === 1 ? 'block' : 'none';
    if (this.state.loginSuccess) {
      return (<Redirect to='/' />)
    } else {
      return (
        <div className="login-con">
          <div className="form-con">
            <ul className="tab-con flex flex-direction_row">
              {this.state.tab.map((item, index) => {
                return (
                  <li className={["flex_auto", index === this.state.currentIndex ? "active" : ""].join(' ')} key={index} onClick={this.tabChoiced.bind(that, item.id)}>{item.text}</li>
                )
              })}
            </ul>
            <Form style={{ "display": show1 }} ref="form1" model={this.state.form1} rules={this.state.rules1}>
              <Form.Item prop="username">
                <Input value={this.state.form1.username} placeholder="请输入用户名"
                  onChange={this.onChange.bind(this, 'username')}></Input>
              </Form.Item>
              <Form.Item prop="password">
                <Input value={this.state.form1.password} placeholder="请输入密码"
                  onChange={this.onChange.bind(this, 'password')}></Input>
              </Form.Item>
            </Form>
            <Form style={{ "display": show2 }} ref="form2" model={this.state.form2} rules={this.state.rules2}>
              <Form.Item prop="tel">
                <Input value={this.state.form2.tel} placeholder="请输入手机号"
                  onChange={this.onChange.bind(this, 'tel')}></Input>
              </Form.Item>
              <div className="flex flex-direction_row">
                <Form.Item prop="code">
                  <Input value={this.state.form2.code} placeholder="请输入验证码"
                    onChange={this.onChange.bind(this, 'code')}></Input>
                </Form.Item>
                <Form.Item className="flex_1">
                  <Button type="text">获取验证码</Button>
                </Form.Item>
              </div>
            </Form>
            <Button type="primary" size="large" className="login-btn"
              onClick={this.loginFn.bind(this)}>登陆</Button>
          </div>
        </div>
      )
    }
  }
}
export default Login;
