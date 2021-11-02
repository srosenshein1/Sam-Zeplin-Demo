import React, { useState } from 'react';
import '../../App.css';
import PropTypes from 'prop-types';


export const MrLink = ({ label, className, link_dest }) => {

  return (

    <a href={link_dest} className='pst_link'>
      {label}
    </a>
  );
}
export default MrLink;

MrLink.propTypes = {
	label: PropTypes.string,
	className: PropTypes.string,
	link_dest: PropTypes.string
}