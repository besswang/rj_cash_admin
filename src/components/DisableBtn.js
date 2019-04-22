import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'element-react'
const DisableBtn = ({ value, onClick }) => (
  <Button className="margin_right10" type={ value === 1 ? 'primary': 'danger' } size="mini" onClick={ onClick }>
  {
    value === 1 ? '启用' : '禁用'
  }
  </Button>
)

DisableBtn.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func
}

export default DisableBtn
