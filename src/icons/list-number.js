import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ListNumber = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...rest}
    >
      <path d="M6.8,6h16.1c.6,0,1-.5,1-1s-.5-1-1-1H6.8c-.6,0-1,.5-1,1s.5,1,1,1Z" />
      <path d="M23,11H6.8c-.6,0-1,.5-1,1s.5,1,1,1h16.1c.6,0,1-.5,1-1s-.5-1-1-1h0Z" />
      <path d="M23,18H6.8c-.6,0-1,.5-1,1s.5,1,1,1h16.1c.6,0,1-.5,1-1s-.5-1-1-1h0Z" />
      <path d="M2.5,6.9h-1.2v-2.3H.4v-.8c.6,0,1.1-.2,1.2-.9h.9v4h0Z" />
      <path d="M.2,14c0-.5.2-.8.5-1.1.7-.7,1.7-1,1.7-1.6s-.2-.4-.5-.4c-.5,0-.6.4-.6.8H.2c0-1.2.7-1.6,1.7-1.6s1.6.4,1.6,1.3-.5,1-1.1,1.3c-.3.2-.6.3-.8.5h1.8v1H.2Z" />
      <path d="M1.2,19.7c0,.2,0,.3.1.4s.2.2.4.2c.3,0,.5-.2.5-.5,0-.5-.5-.4-.7-.4v-.7c.3,0,.7,0,.7-.4s-.2-.4-.5-.4-.5.1-.5.4H.2c0-.9.8-1.3,1.6-1.3s1.5.4,1.5,1.1-.1.6-.5.8c.4.1.6.4.6.8,0,.9-.7,1.4-1.8,1.4s-1.6-.5-1.6-1.5h1.1Z" />
    </svg>
  );
});

ListNumber.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ListNumber.displayName = 'ListNumber';

export default ListNumber;
