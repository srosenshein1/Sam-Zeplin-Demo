import React, { useState } from 'react';
import '../../App.css';
import './InputFields.css';
import PropTypes from 'prop-types';


export const TextInput = ({ ariaLabel, placeholderText, className, label, errorMessage, type='text' }) => {

  return (
    <div className="pst_inputtext3-holder">
        <input type={type} aria-label={ariaLabel} placeholder={placeholderText} className={[className, "pst_inputtext3"].join(' ')} />
        <div aria-hidden="true" className="pst_inputtext3-label">{label}</div>
        <span class="pst_inputtext3-error">{errorMessage}</span>
    </div>
  )
}

export default TextInput;

TextInput.propTypes = {
	ariaLabel: PropTypes.string,
  placeholderText: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  type: PropTypes.string
}