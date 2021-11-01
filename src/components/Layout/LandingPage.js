import React, { useState } from 'react';
import '../../App.css';
import './LandingPage.css';
import PropTypes from 'prop-types';

import Button from '../Button/Button.js';
import HeaderText from '../HeaderText/HeaderText.js';
import CountryCard from '../CountryCard/CountryCard.js';


export const LandingPage = ({ className }) => {

  return (

  	<div 
  		className={[className, "main-container"].join(' ')}
  	>
      <HeaderText 
      	label="Create the best Norway Wedding Registry" 
      	className="pst_title" 
    	/>
    	<div className="main-section">
    		<div className="action-box">
    		<CountryCard 
    			cardText="Get exactly what you need to settle into married life! Add gifts from any site or store that ships right to Norway. To get started, all you need is a FREE MyRegistry account. Sign up now!"
    		/>
		      <Button 
        		label="CREATE" 
        		className="Primary"
        		disabled=""
      		/>
    		</div>
    	</div>
    </div>
  );
}
export default LandingPage;

LandingPage.propTypes = {
	className: PropTypes.string
}