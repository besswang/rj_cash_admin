// 财务管理-已完成
import React, { Component } from 'react'
import { Button, Loading, Table, Upload, Message } from 'element-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sizeChange, currentChange, initSearch } from '@redux/actions'
import { selectblackphone, deleteBlackphone, download } from './actions'
import Search from '@components/Search'
import MyPagination from '@components/MyPagination'
class BlackUser extends Component {
	static propTypes = {
    list: PropTypes.object.isRequired,
    sizeChange: PropTypes.func.isRequired,
    currentChange: PropTypes.func.isRequired,
    initSearch: PropTypes.func.isRequired,
		selectblackphone: PropTypes.func.isRequired,
		deleteBlackphone: PropTypes.func.isRequired,
		download: PropTypes.func.isRequired,
  }
	constructor(props) {
		super(props)
		this.state = {
			columns: [{
					type: 'index',
					fixed: 'left'
				}, {
					label: '真实姓名',
					prop: 'realName'
				}, {
					label: '手机号码',
					prop: 'phone'
				}, {
					label: '身份证号',
					prop: 'idCard'
				}, {
					label: '操作',
					render: row => {
						return (
							<Button type="danger" size="mini"
								onClick={ this.delete.bind(this, row.id) }
							>
								{'删除'}
							</Button>
						)
					}
      }]
		}
	}
	componentWillMount() {
    this.props.initSearch()
  }
  componentDidMount() {
    this.props.selectblackphone()
	}
	delete(id) {
		console.log(id)
		this.props.deleteBlackphone({id:id})
	}
  handleSearch = e => {
    e.preventDefault()
    this.props.selectblackphone()
  }
  sizeChange = e => {
    this.props.sizeChange(e)
    this.props.selectblackphone()
  }
  onCurrentChange = e => {
    this.props.currentChange(e)
    this.props.selectblackphone()
	}
	submitUpload() {
		this.upload.submit()
	}
	handleSuccess = res => {
		if(res.success){
			Message.success('上传成功')
			this.props.selectblackphone()
			this.upload.clearFiles()
		}
	}
	fileChang = e => {
		// console.log(e)
	}
	fileChange = f => {
		// console.log(f)
	}
	onPreview = f => {
		console.log(f)
	}
	render() {
		const { list } = this.props
		return (
			<div>
				{/* <Input ref={ e => {this.file = e} } type="file" onChange={ this.fileChang.bind(this) } /> */}
				<Search showSelect2>
					<div>
						<Button onClick={ this.handleSearch } type="primary">{'搜索'}</Button>
						<Button onClick={ this.props.download } type="primary">{'模版下载'}</Button>
					</div>
				</Search>
				<Upload
					className = "margin-bottom15"
					ref={ e => {this.upload = e} }
					action = "/rjwl/api/blackPhone/importExcel"
					onSuccess={ (response) => this.handleSuccess(response) }
					onPreview = { file => { this.onPreview(file)} }
					onChange={ file => { this.fileChange(file)} }
					limit={ 1 }
					accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
					autoUpload={ false }
					tip={ <div className="el-upload__tip">{'只能上传xlsx/xls文件'}</div> }
					trigger={ <Button size="small" type="primary">{'选取文件'}</Button> }
				>
					<Button style={ { marginLeft: '10px'} } size="small" type="success" onClick={ () => this.submitUpload() }>{'上传到服务器'}</Button>
				</Upload>
				<Loading loading={ list.loading }>
					<Table
						style={ { width: '100%' } }
						columns={ this.state.columns }
						data={ list.data }
						border
					/>
				</Loading>
        <MyPagination
          total={ list.total }
          onSizeChange={ this.sizeChange }
          onCurrentChange={ this.onCurrentChange }
        />
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { list } = state
	return { list }
}
const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators({sizeChange, currentChange, initSearch, selectblackphone, deleteBlackphone, download }, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(BlackUser)
