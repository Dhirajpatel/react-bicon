import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Superscript = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m24,1v9c0,.553-.448,1-1,1s-1-.447-1-1V3.386l-.78.809c-.383.397-1.017.409-1.414.025-.397-.384-.409-1.017-.025-1.414l2.413-2.5c.188-.195.448-.306.72-.306.552,0,1.087.447,1.087,1Zm-9.37,5.224c-.427-.347-1.058-.283-1.406.146l-5.724,7.045L1.776,6.369c-.348-.429-.978-.492-1.406-.146-.429.349-.494.979-.146,1.407l5.987,7.369L.224,22.369c-.349.429-.283,1.059.146,1.407.185.15.408.224.63.224.291,0,.579-.126.776-.369l5.724-7.045,5.724,7.045c.197.243.486.369.776.369.222,0,.445-.073.63-.224.429-.349.494-.979.146-1.407l-5.987-7.369,5.987-7.369c.349-.429.283-1.059-.146-1.407Z" />
    </svg>
  );
});

Superscript.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Superscript.displayName = 'Superscript';

export default Superscript;
