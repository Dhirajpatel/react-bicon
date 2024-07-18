import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TextColor = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M23.9,22.6L16.1,2.8c-1.3-3.7-7-3.7-8.3,0L0,22.6c-.2.5,0,1.1.6,1.3.5.2,1.1,0,1.3-.6l3.4-8.6h13.4l3.4,8.6c.2.5.8.8,1.3.6.5-.2.8-.8.6-1.3h0ZM6.1,12.8l3.6-9.3c.9-2.1,3.6-2.1,4.6,0l3.6,9.3H6.1h0Z" />
      <path d="M22.3.4c.7,1,1.7,2.2,1.7,3.1,0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1-2,1.7-3.1c.3-.5.9-.6,1.4-.2,0,0,.2.1.2.2h0Z" />
    </svg>
  );
});

TextColor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextColor.displayName = 'TextColor';

export default TextColor;
