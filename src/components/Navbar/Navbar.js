import React, { useState } from 'react';
import '../../App.css';
import './Navbar.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button.js';
import TextInput from '../InputFields/TextInput.js';


export const Navbar = ({ className }) => {

  return (

    <nav className={className}>
      <div className="mr-logo">
        <a href="www.myregistry.com">
          <img src="https://www.myregistry.com/images/MRlogo_520.svg" alt="MyRegistry Logo" />
        </a>
      </div>
      <div className="navbar-search">
        <TextInput 
          ariaLabel="Search"
          placeholderText=" "
          className="white search"
          label="FIND A REGISTRY"
          type="text" 
        />
      </div>
      <div className="navbar-buttons">
        <Button 
          className="NoBG"
          label="SIGN UP"
        />
        <Button 
          className="LightGreen"
          label="LOG IN"
        />
      </div>
    </nav>

  )
}

export default Navbar;

Navbar.propTypes = {
	className: PropTypes.string
}