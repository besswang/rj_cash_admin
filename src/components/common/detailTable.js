import React, { Component } from 'react'
import { Table, Pagination } from 'element-react'
import PropTypes from 'prop-types'
export default class Detailtable extends Component {
  constructor(props){
    super(props)
    this.state = {
			total:25,
			pageSizes: [5,10,20,30],
			pageSize:5,
			currentPage:1,
			data: [{id:1}]
    }
  }
  componentWillMount() {
    console.log(this.props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Table
          style={ { width: '100%' } }
          columns={ this.props.columns }
          data={ this.state.data }
          border
        />
        <div className="pagination-con flex flex-direction_row justify-content_flex-center">
          <Pagination
          layout="total, sizes, prev, pager, next, jumper"
          total={ this.state.total }
          pageSizes={ this.state.pageSizes }
          pageSize={ this.state.pageSize }
          currentPage={ this.state.currentPage }
          />
        </div>
      </div>
    )
  }
}
Detailtable.propTypes = {
  // tabName: PropTypes.string,
  columns: PropTypes.array
}