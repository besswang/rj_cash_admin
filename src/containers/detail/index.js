import React, { Component } from 'react'
import { Breadcrumb, Tabs, Button } from 'element-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { idCardInfo, phoneAuthentication, emergency, bankInfo } from './action'
import Detailtable from '@components/detailTable'
import { BANK, ADDRESS, CALL_LOG } from '@meta/columns'
import '@styles/detail.less'
class Detail extends Component{
  static propTypes = {
    listInfo: PropTypes.object,
    idCardInfo: PropTypes.func.isRequired,
    phoneAuthentication: PropTypes.func.isRequired,
    emergency:PropTypes.func.isRequired,
    bankInfo: PropTypes.func.isRequired
	}
	constructor(props){
		super(props)
		this.state = {

		}
	}
	componentWillMount() {
    // this.props.idCardInfo({userId: 12})
    // this.props.phoneAuthentication({userId: 12})
    // this.props.emergency({userId: 12})
    this.props.bankInfo({userId: 12})
	}
	componentDidMount() {

  }
  abChange = (e) => {
    console.log(e)
  }
	render(){
    const { listInfo } = this.props
    // console.log(listInfo)
		return(
			<div>
				<Breadcrumb separator="/">
					{/* <Breadcrumb.Item>会员管理</Breadcrumb.Item> */}
					<Breadcrumb.Item>
						<Link to="/member/mlist">
							{'会员列表2233'}
						</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item>{'会员详情'}</Breadcrumb.Item>
				</Breadcrumb>
        <Tabs activeName="1" onTabClick={ this.tabChange }>
          <Tabs.Pane label="申请信息" name="1">
            <ul className="flex flex-direction_column info-ul">
              <li className="flex flex-direction_row info-li">
                <p>{'真实姓名：'}{ listInfo.realName }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'注册手机：'}{ listInfo.phone }</p>
                <p>{'会员状态：'}{ listInfo.type === 0? '禁用':'启用' }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'最后登陆时间：'}{ listInfo.upt }</p>
                <p>{'登陆IP地址：'}{ listInfo.tloginIp }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'注册时间：'}{ listInfo.gmt }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'家庭住址：'}</p>
                <p>{'月收入：'}</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'单位名称：'}</p>
                <p>{'单位电话：'}</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'单位地址：'}</p>
                <p>{'职业：'}</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'QQ：'}</p>
                <p>{'微信：'}</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'昵称：'}</p>
                <p>{'性别：'}</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'借款次数：'}{ listInfo.loanNum }</p>
                <p>{'登陆次数：'}</p>
              </li>
            </ul>
          </Tabs.Pane>
          <Tabs.Pane label="身份证信息" name="2">
            <ul className="flex flex-direction_column info-ul">
              <li className="flex flex-direction_row info-li">
                <p>{'姓名：'}{ listInfo.realName }</p>
                <p>{'性别：'}</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'身份证号：'}</p>
                <p>{'家庭住址：'}</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'签发机关：'}</p>
                <p>{'有效期：'}</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'实名认证结果：'}</p>
                <p>{'风险标签：'}</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'认证日期：'}</p>
                <p>{'商户唯一订单号：'}</p>
              </li>
            </ul>
          </Tabs.Pane>
          <Tabs.Pane label="手机认证" name="3">
            <ul className="flex flex-direction_column info-ul">
              <li className="flex flex-direction_row info-li">
                <p>{'真实姓名：'}{ listInfo.realName }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'认证手机号：'}{ listInfo.phone }</p>
                <p>{'认证时间：'}</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'认证状态：'}{ listInfo.phone }</p>
              </li>
            </ul>
            <div className="flex flex-direction_row justify-content_flex-end">
              <Button size="small" type="primary" className="margin_top15">{'查看手机报表'}</Button>
            </div>
          </Tabs.Pane>
          <Tabs.Pane label="紧急联系人" name="4">
            <ul className="flex flex-direction_column info-ul">
              <li className="flex flex-direction_row info-li">
                <p>{'真实姓名：'}{ listInfo.realName }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'亲属姓名：'}</p>
                <p>{'亲属关系：'}</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'亲属电话：'}</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'社会姓名：'}</p>
                <p>{'社会关系：'}</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'社会电话：'}</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'认证状态：'}</p>
                <p>{'认证时间：'}</p>
              </li>
            </ul>
          </Tabs.Pane>
          <Tabs.Pane label="银行卡信息" name="5">
            <Detailtable columns={ BANK }/>
          </Tabs.Pane>
          <Tabs.Pane label="通讯录" name="6">
            <Detailtable columns={ ADDRESS }/>
          </Tabs.Pane>
          <Tabs.Pane label="通话记录" name="7">
            <Detailtable columns={ CALL_LOG }/>
          </Tabs.Pane>
        </Tabs>
			</div>
		)
	}
}
const mapStateToProps = state => {
	const { listInfo } = state
	return { listInfo }
}
const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators({ idCardInfo, phoneAuthentication, emergency, bankInfo }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)
