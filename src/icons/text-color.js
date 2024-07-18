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
      <path d="M510.5,482.4L344.4,59.5c-27.5-79.3-149.3-79.3-176.8,0L1.5,482.4c-4.3,11,1.1,23.4,12.1,27.6,11,4.3,23.4-1.1,27.6-12.1l71.5-182.7h285.9l72.2,182.7c4.3,11.1,17,16.3,27.6,12.1,11-4.3,16.4-16.7,12.1-27.6h0ZM129.7,272.6l77.6-197.4c19.7-44.9,77.7-44.9,97.4,0l77.2,197.4h-252.2,0Z" />
      <path d="M476.3,9c15.5,22.1,35.7,47.6,35.7,65.7,0,29.5-23.9,53.3-53.3,53.3s-53.3-23.9-53.3-53.3,20.5-42.8,36.1-65.5c6.7-9.7,20-12.1,29.7-5.3,2,1.4,3.8,3.1,5.2,5.1h0Z" />
    </svg>
  );
});

TextColor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextColor.displayName = 'TextColor';

export default TextColor;