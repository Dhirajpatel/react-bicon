import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DisplayCode = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M18.121,7.879c1.17,1.17,1.17,3.072,0,4.242l-2.583,2.584c-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.583-2.584c.39-.39,.39-1.024,0-1.414l-2.583-2.584c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.583,2.584Zm-8.245-1.17c.391-.391,.391-1.023,0-1.414s-1.023-.391-1.414,0l-2.583,2.584c-1.17,1.17-1.17,3.072,0,4.242l2.583,2.584c.195,.195,.451,.293,.707,.293s.512-.098,.707-.293c.391-.391,.391-1.023,0-1.414l-2.583-2.584c-.39-.39-.39-1.024,0-1.414l2.583-2.584Zm14.124-.709V14c0,2.757-2.243,5-5,5h-6v2h4c.552,0,1,.447,1,1s-.448,1-1,1H7c-.552,0-1-.447-1-1s.448-1,1-1h4v-2H5c-2.757,0-5-2.243-5-5V6C0,3.243,2.243,1,5,1h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3V14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V6Z" />
    </svg>
  );
});

DisplayCode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DisplayCode.displayName = 'DisplayCode';

export default DisplayCode;
