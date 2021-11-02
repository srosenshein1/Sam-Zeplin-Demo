import React, { useState } from 'react';
import '../../App.css';
import './LandingPage.css';
import PropTypes from 'prop-types';

import Button from '../Button/Button.js';
import HeaderText from '../HeaderText/HeaderText.js';
import CountryCard from '../CountryCard/CountryCard.js';
import TextInput from '../InputFields/TextInput.js';
import Navbar from '../Navbar/Navbar.js';
import Subnav from '../Navbar/Subnav.js';
import Dropdown from '../InputFields/Dropdown.js';
import Checkbox from '../InputFields/Checkbox.js';


export const LandingPage = ({ className }) => {

  return (

		<div>
	  	<Navbar 
	  		className="visitor-nav"
	  	/>
	  	<Subnav 
	  		className="visitor-subnav"
	  	/>
	  	<div className={[className, "main-container"].join(' ')}>
	      <HeaderText 
	      	label="Create the best Norway Wedding Registry" 
	      	className="pst_title" 
	    	/>
	    	<div className="main-section">
	    		<div className="action-box">
	    		<CountryCard 
	    			cardText="Get exactly what you need to settle into married life! Add gifts from any site or store that ships right to Norway. To get started, all you need is a FREE MyRegistry account. Sign up now!"
	    		/>
	    		<div className="form-fields">
	    			<TextInput 
	    				ariaLabel='First Name'
	    				placeholderText=' '
	    				className='firstName'
	    				label='First Name'
	    			/>
	    			<TextInput 
	    				ariaLabel='Last Name'
	    				placeholderText=' '
	    				className='lastName'
	    				label='Last Name'
	    			/>
	    			<TextInput 
	    				ariaLabel='Email Address'
	    				placeholderText=' '
	    				className='emailAddress'
	    				label='Email'
	    			/>
	    			<TextInput 
	    				ariaLabel='Password'
	    				placeholderText=' '
	    				className='password'
	    				label='Password'
	    				type='password'
	    			/>
	    		</div>
	    		<div className="dropdown-holder">
	    			<Dropdown />
	    		</div>
	    		<div className="confirm-section">
	    			<Checkbox 
	    				id='chkSignupAgree'
	    			/>
	    		</div>
		      <Button 
	      		label="CREATE" 
	      		className="Primary"
	      		disabled=""
	    		/>
	    		</div>
	    	</div>
	    </div>
	  </div>
  );
}
export default LandingPage;

LandingPage.propTypes = {
	className: PropTypes.string
}