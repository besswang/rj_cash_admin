import React, { Component } from 'react'
import { Breadcrumb, Tabs, Button } from 'element-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectIdCardByUserId, selectPhoneDateByUserId, emergency, bankInfo, selectReportMail } from './action'
import Detailtable from '@components/detailTable'
import { BANK, ADDRESS, CALL_LOG } from '@meta/columns'
import '@styles/detail.less'
import timeDate from '@global/timeDate'
import filter from '@global/filter'
class Detail extends Component{
  static propTypes = {
    listInfo: PropTypes.object,
    idCardInfo: PropTypes.object,
    selectIdCardByUserId: PropTypes.func.isRequired,
    selectPhoneDateByUserId: PropTypes.func.isRequired,
    emergency:PropTypes.func.isRequired,
    bankInfo: PropTypes.func.isRequired,
    selectReportMail:PropTypes.func.isRequired
	}
	constructor(props){
		super(props)
		this.state = {

		}
	}
	componentWillMount() {
    // this.props.selectIdCardByUserId({userId: 12})
    // this.props.selectPhoneDateByUserId({userId: 12})
    // this.props.emergency({userId: 12})
    // this.props.bankInfo({userId: 12})
    // this.props.selectReportMail({userId:1,page:1,limit:10})
	}
	componentDidMount() {

  }
  tabChange = (e) => {
    const userId = this.props.listInfo.id
    switch (e) {
      case '2':{ // 身份证信息
        return this.props.selectIdCardByUserId({userId: userId})
      }
      case '3':{ // 手机认证
        return this.props.selectPhoneDateByUserId({userId: userId})
      }
      case '4':{ // 紧急联系人
        return this.props.emergency({userId: userId})
      }
      case '5':{ // 银行卡信息
        return this.props.bankInfo({userId: userId})
      }
      case '6':{ // 通讯录
        return this.props.selectReportMail({userId:userId})
      }
      default:
        return ''
    }
  }
  text = obj => {
    if(obj){
      const t = JSON.parse(obj)
      return t.living_attack === '0' ? '未检测到活体攻击' : '存在活体攻击风险'
    }
  }
	render(){
    const { listInfo, idCardInfo } = this.props
		return(
			<div>
				<Breadcrumb separator="/">
					{/* <Breadcrumb.Item>会员管理</Breadcrumb.Item> */}
					<Breadcrumb.Item>
						<Link to="/member/mlist">
							{'会员列表'}
						</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item>{'详情'}</Breadcrumb.Item>
				</Breadcrumb>
        <Tabs activeName="1" onTabClick={ tab => this.tabChange(tab.props.name) }>
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
                <p>{'最后登陆时间：'}{ timeDate.time(listInfo.upt, 'yyyy-MM-dd hh:mm:ss') }</p>
                <p>{'登陆IP地址：'}{ listInfo.loginIp }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'注册时间：'}{ timeDate.time(listInfo.gmt, 'yyyy-MM-dd hh:mm:ss') }</p>
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
                <p>{'姓名：'}{ idCardInfo.realName }</p>
                <p>{'性别：'}{ idCardInfo.gender }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'身份证号：'}{ idCardInfo.idNumber}</p>
                <p>{'家庭住址：'}{ idCardInfo.address }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'签发机关：'}{ idCardInfo.issuingAuthority }</p>
                <p>{'有效期：'}{ idCardInfo.validityPeriod }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'实名认证结果：'}{ filter.verifyStatus(idCardInfo.verifyStatus) }</p>
                <p>{'风险标签：'}{ this.text(idCardInfo.riskTag) }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'认证日期：'}{ timeDate.time(idCardInfo.gmt, 'yyyy-MM-dd hh:mm:ss') }</p>
                <p>{'商户唯一订单号：'}{ idCardInfo.partnerOrderId }</p>
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
                <p>{'认证时间：'}{ timeDate.time(idCardInfo.gmt, 'yyyy-MM-dd hh:mm:ss') }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'认证状态：'}{ filter.personalType(idCardInfo.mobileType) }</p>
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
                <p>{'亲属姓名：'}{ idCardInfo.relativesName }</p>
                <p>{'亲属关系：'}{ idCardInfo.relatives }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'亲属电话：'}{ idCardInfo.relativesPhone }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'社会姓名：'}{ idCardInfo.sociologyName }</p>
                <p>{'社会关系：'}{ idCardInfo.sociology }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'社会电话：'}{ idCardInfo.sociologyPhone }</p>
              </li>
              <li className="flex flex-direction_row info-li">
                <p>{'认证状态：'}{ filter.personalType(idCardInfo.personalType) }</p>
                <p>{'认证时间：'}{ timeDate.time(idCardInfo.gmt, 'yyyy-MM-dd hh:mm:ss') }</p>
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
	const { listInfo, idCardInfo } = state
	return { listInfo, idCardInfo }
}
const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators({ selectIdCardByUserId, selectPhoneDateByUserId, emergency, bankInfo, selectReportMail }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)
