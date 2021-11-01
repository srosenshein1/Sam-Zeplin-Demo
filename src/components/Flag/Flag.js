import React, { useState } from 'react';
import '../../App.css';
import './Flag.css';
import PropTypes from 'prop-types';


export const Flag = ({ className }) => {

  return (

    <div className={[className, "flag"].join(' ')}></div>
  );
}
export default Flag;

Flag.propTypes = {
	className: PropTypes.string
}