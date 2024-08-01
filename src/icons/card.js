import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Card = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M21,5v14c0,2.8-2.2,5-5,5h-8c-2.8,0-5-2.2-5-5V5C3,2.2,5.2,0,8,0h8c2.8,0,5,2.2,5,5ZM19,5c0-1.7-1.3-3-3-3h-8c-1.7,0-3,1.3-3,3v14c0,1.7,1.3,3,3,3h8c1.7,0,3-1.3,3-3V5ZM14.9,12.5h-5.8c-1.1,0-2.1,1.1-2.1,2.5v2c0,1.4.9,2.5,2.1,2.5h5.8c1.1,0,2.1-1.1,2.1-2.5v-2c0-1.4-.9-2.5-2.1-2.5ZM15.3,17c0,.3-.2.5-.4.5h-5.8c-.2,0-.4-.2-.4-.5v-2c0-.3.2-.5.4-.5h5.8c.2,0,.4.2.4.5v2ZM7,9.5c0-.6.4-1,.8-1h8.4c.4,0,.8.4.8,1s-.4,1-.8,1H7.8c-.4,0-.8-.4-.8-1ZM7,5.5c0-.6.4-1,.8-1h2.7c.5,0,.8.4.8,1s-.4,1-.8,1h-2.7c-.5,0-.8-.4-.8-1Z" />
    </svg>
  );
});

Card.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Card.displayName = 'Card';

export default Card;
