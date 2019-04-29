import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'element-react'
const SelectPicker = ({ value, onChange, options, placeholder }) => (
  <Select
    onChange={ e => onChange(e) }
    value={ value }
    clearable placeholder={ placeholder ? placeholder : '搜索类型' }
  >
    {
      options.map(el =>
        <Select.Option key={ el.value } label={ el.label } value={ el.value } />
      )
    }
  </Select>
)

SelectPicker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  value: PropTypes.number,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

export default SelectPicker
