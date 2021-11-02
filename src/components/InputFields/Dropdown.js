import React, { useState } from 'react';
import '../../App.css';
import './InputFields.css';
import PropTypes from 'prop-types';


export const Dropdown = ({ ariaLabel, placeholderText, className, label, errorMessage }) => {

  return (
    <div class="pst_inputselect3-holder">
        <select class="pst_inputselect3">
            <option>Select Registry Type</option>
            <option>Wedding</option>
            <option>Baby</option>
            <option>Wish List</option>
            <option>Nonprofit/Organization</option>
        </select>
    </div>
  )
}

export default Dropdown;

Dropdown.propTypes = {
	ariaLabel: PropTypes.string,
  placeholderText: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
}