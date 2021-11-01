import React, { useState } from 'react';
import '../../App.css';
import './CountryCard.css';
import PropTypes from 'prop-types';

import Flag from '../Flag/Flag.js';


export const CountryCard = ({ cardText, className }) => {

  return (

    <div className="countryCard">
    	<Flag 
    		className='Norway'
    	/>
    	<div className="card-text">
    		{cardText}
    	</div>
    </div>
  );
}
export default CountryCard;

CountryCard.propTypes = {
	cardText: PropTypes.string,
	className: PropTypes.string
}