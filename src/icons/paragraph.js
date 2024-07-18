import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Paragraph = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m23,0h-14.5C3.813,0,0,3.813,0,8.5s3.813,8.5,8.5,8.5h5.5v6c0,.553.448,1,1,1s1-.447,1-1V2h3v21c0,.553.448,1,1,1s1-.447,1-1V2h2c.552,0,1-.447,1-1s-.448-1-1-1Zm-9,15h-5.5c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5h5.5v13Z" />
    </svg>
  );
});

Paragraph.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Paragraph.displayName = 'Paragraph';

export default Paragraph;
