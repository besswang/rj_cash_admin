import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'element-react'
const DisableBtn = ({ value, onClick , text }) => (
  <Button className="margin_right10" type={ value === 0 ? 'primary': 'danger' } size="mini" onClick={ onClick }>
  {
    value === 0 ? text[0] : text[1]
  }
  </Button>
)

DisableBtn.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func,
  text: PropTypes.array
}

export default DisableBtn
