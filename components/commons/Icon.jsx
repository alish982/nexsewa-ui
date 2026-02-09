import React from 'react';
import PropTypes from 'prop-types';

export const Icon = ({ 
  icon, 
  size = 'md',
  className = '' 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };
  
  return (
    <span className={`inline-flex ${sizes[size]} ${className}`}>
      {icon}
    </span>
  );
};

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};
