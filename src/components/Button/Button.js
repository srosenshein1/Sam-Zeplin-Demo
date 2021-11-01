import React, { useState } from 'react';
import '../../App.css';
import './Button.css';
import PropTypes from 'prop-types';


export const Button = ({ label, handleClick, className, disabled = false }) => {

  const [enabled, setEnabled] = useState(disabled);

  return (

    <button
      onClick={handleClick}
      className={className}
      disabled={disabled}>
        {label}
    </button>
  );
}
export default Button;

Button.propTypes = {
	label: PropTypes.string,
	handleClick: PropTypes.func,
	className: PropTypes.string,
	disabled: PropTypes.string 
}