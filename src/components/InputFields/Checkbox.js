import React, { useState } from 'react';
import '../../App.css';
import './InputFields.css';
import PropTypes from 'prop-types';
import MrLink from '../Link/Link.js'


export const Checkbox = ({ ariaLabel, className, label, errorMessage, type='checkbox', id }) => {

  return (
    <div className="pst_checkbox txtSignupAgree">
      <input type={type} id={id}/>
      <label for={id}>
         <span>I accept the website's <MrLink link_dest='/info/terms.aspx' label='terms and conditions' /></span>
      </label>
    </div>
  )
}

export default Checkbox;

Checkbox.propTypes = {
	ariaLabel: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string
}