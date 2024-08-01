import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CardImage = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M21,5v14c0,2.8-2.2,5-5,5h-8c-2.8,0-5-2.2-5-5V5C3,2.2,5.2,0,8,0h8c2.8,0,5,2.2,5,5ZM5,19c0,.8.3,1.5.7,2l4.9-5.2c.9-1,2.5-1,3.4,0l1,1c.2.2.6.2.8,0l3.2-3.4V5c0-1.7-1.3-3-2.8-3H7.8c-1.5,0-2.8,1.3-2.8,3v14ZM19,19v-2.8l-1.9,2c-.9,1-2.5,1-3.4,0l-1-1c-.2-.2-.6-.2-.8,0l-4.5,4.8h8.7c1.5,0,2.9-1.4,2.9-3h0ZM7,9.5c0-.8.7-1.5,1.5-1.5s1.5.7,1.5,1.5-.7,1.5-1.5,1.5-1.5-.7-1.5-1.5Z" />
    </svg>
  );
});

CardImage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CardImage.displayName = 'CardImage';

export default CardImage;
