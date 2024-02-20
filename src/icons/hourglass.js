import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Hourglass = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m17 24h-9.995a4.02 4.02 0 0 1 -3.045-1.4 3.945 3.945 0 0 1 -.916-3.158 12.517 12.517 0 0 1 4.401-7.442 12.517 12.517 0 0 1 -4.4-7.444 3.945 3.945 0 0 1 .915-3.156 4.02 4.02 0 0 1 3.045-1.4h9.995a4.017 4.017 0 0 1 3.044 1.4 3.943 3.943 0 0 1 .918 3.155 12.556 12.556 0 0 1 -4.411 7.445 12.557 12.557 0 0 1 4.406 7.448 3.944 3.944 0 0 1 -.918 3.156 4.017 4.017 0 0 1 -3.039 1.396zm0-22h-9.995a2.014 2.014 0 0 0 -1.528.7 1.917 1.917 0 0 0 -.455 1.556c.375 2.5 1.922 4.84 4.6 6.957a1 1 0 0 1 0 1.568c-2.678 2.119-4.222 4.461-4.6 6.96a1.917 1.917 0 0 0 .455 1.559 2.014 2.014 0 0 0 1.528.7h9.995a2.014 2.014 0 0 0 1.528-.7 1.917 1.917 0 0 0 .456-1.554c-.373-2.487-1.92-4.829-4.6-6.962a1 1 0 0 1 0-1.564c2.681-2.133 4.228-4.475 4.6-6.963a1.916 1.916 0 0 0 -.461-1.557 2.014 2.014 0 0 0 -1.523-.7z" />
    </svg>
  );
});

Hourglass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Hourglass.displayName = 'Hourglass';

export default Hourglass;
