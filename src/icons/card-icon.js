import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CardIcon = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M16,0h-8C5.2,0,3,2.2,3,5v14c0,2.8,2.2,5,5,5h8c2.8,0,5-2.2,5-5V5c0-2.8-2.2-5-5-5ZM19,19c0,1.7-1.3,3-3,3h-8c-1.7,0-3-1.3-3-3V5c0-1.7,1.3-3,3-3h8c1.7,0,3,1.3,3,3v14ZM11.8,13.3l1.2-.3.3-1.2c0-.4.4-.6.8-.6s.7.3.8.6l.3,1.2,1.2.3c.4,0,.6.4.6.8,0,.4-.2.7-.6.8l-1.2.3-.3,1.2c0,.4-.4.6-.8.6s-.7-.3-.8-.6l-.3-1.2-1.2-.3c-.4,0-.6-.4-.6-.8s.3-.7.6-.8h0ZM7,9.5c0-.3.2-.5.4-.6l1.1-.4.4-1.1c0-.2.3-.4.6-.4s.5.2.6.4l.4,1.1,1.1.4c.2,0,.4.3.4.6,0,.3-.1.5-.4.6l-1.1.5-.4,1.1c0,.2-.3.4-.6.4s-.5-.2-.6-.4l-.4-1.1-1.1-.4c-.2,0-.4-.3-.4-.6h0Z" />
    </svg>
  );
});

CardIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CardIcon.displayName = 'CardIcon';

export default CardIcon;
