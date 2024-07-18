import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SquareUpRight = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m19,8v6c0,.552-.447,1-1,1s-1-.448-1-1v-5.586l-10.293,10.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414L15.586,7h-5.586c-.553,0-1-.448-1-1s.447-1,1-1h6c1.654,0,3,1.346,3,3Zm5-3v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5Z" />
    </svg>
  );
});

SquareUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SquareUpRight.displayName = 'SquareUpRight';

export default SquareUpRight;
