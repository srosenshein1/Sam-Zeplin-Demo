import React, { useState } from 'react';
import '../../App.css';
import './HeaderText.css';
import PropTypes from 'prop-types';


export const HeaderText = ({ label, className }) => {

  return (

    <h1 className={className}>
      {label}
    </h1>
  );
}
export default HeaderText;

HeaderText.propTypes = {
	label: PropTypes.string,
	className: PropTypes.string
}