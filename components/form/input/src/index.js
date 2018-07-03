import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import Password from './Password'

const TYPES = {
  DATE: 'date',
  NUMBER: 'number',
  TEXT: 'text',
  PASSWORD: 'password',
  SUI_PASSWORD: 'sui-password'
}

const FormInput = ({type, ...props}) => {
  switch (type) {
    case 'sui-password':
      return <Password {...props} />
    default:
      return <Input {...props} type={type} />
  }
}

FormInput.propTypes = {
  /* native types (text, date, ...), 'sui-password' */
  type: PropTypes.oneOf(Object.values(TYPES)),
  /* Left addon component, text,... */
  leftAddon: PropTypes.any,
  /* Right addon component, text,... */
  rightAddon: PropTypes.any,
  /* Text to be shown in order to show the password on click */
  pwShowLabel: PropTypes.string,
  /* Text to be shown in order to hide the password on click */
  pwHideLabel: PropTypes.string,
  /* onChange callback */
  onChange: PropTypes.func,
  /* sets the name property of an element in the DOM */
  name: PropTypes.string,
  /* The DOM id global attribute. */
  id: PropTypes.string
}

FormInput.displayName = 'FormInput'

export default FormInput
