import React, { useState } from 'react';
import '../../App.css';
import './Navbar.css';
import PropTypes from 'prop-types';
import MrLink from '../Link/Link.js';


export const Subnav = ({ className }) => {

  return (

    <div className={className}>
      <MrLink 
        link_dest='www.myregistry.com'
        label='WEDDING REGISTRY'
      />
      <MrLink 
        link_dest='www.myregistry.com'
        label='BABY REGISTRY'
      />
      <MrLink 
        link_dest='www.myregistry.com'
        label='WISH LIST'
      />
      <MrLink 
        link_dest='www.myregistry.com'
        label='WHY MYREGISTRY?'
      />
      <MrLink 
        link_dest='www.myregistry.com'
        label='GIFT REGISTRY SOLUTION'
      />
      <MrLink 
        link_dest='www.myregistry.com'
        label='LANGUAGE'
      />
    </div>

  )
}

export default Subnav;

Subnav.propTypes = {
	className: PropTypes.string
}