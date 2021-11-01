import React, { useState } from 'react';
import '../../App.css';
import './LandingPage.css';
import PropTypes from 'prop-types';

import Button from '../Button/Button.js';
import HeaderText from '../HeaderText/HeaderText.js';


export const LandingPage = ({ className }) => {

  return (

  	<div 
  		className={[className, "main-container"].join(' ')}
  	>
      <HeaderText 
      	label="Create the best Norway Wedding Registry" 
      	className="pst_title" 
    	/>

      <Button 
        label="CREATE" 
        className="Primary"
        disabled=""
      />
    </div>
  );
}
export default LandingPage;

LandingPage.propTypes = {
	className: PropTypes.string
}