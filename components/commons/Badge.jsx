import React from 'react';
import PropTypes from 'prop-types';

export const Badge = ({ 
  variant = 'new', 
  children,
  className = ''
}) => {
  const variants = {
    sale: 'bg-custom text-white',
    new: 'bg-orange-600 text-white'
  };
  
  return (
    <span 
      className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-md z-10 ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  variant: PropTypes.oneOf(['sale', 'new']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
