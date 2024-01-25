import React, { SVGProps } from 'react';

interface BiKeyProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiKey: React.FC<BiKeyProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M7.505 24A7.5 7.5 0 0 1 5.469 9.283a7.37 7.37 0 0 1 3.881-.048l7.908-7.906A4.5 4.5 0 0 1 20.464 0 3.54 3.54 0 0 1 24 3.536a4.5 4.5 0 0 1-1.328 3.207L22 7.415A2.01 2.01 0 0 1 20.586 8H19v1a2 2 0 0 1-2 2h-1v1.586A1.99 1.99 0 0 1 15.414 14l-.65.65a7.33 7.33 0 0 1-.047 3.88 7.53 7.53 0 0 1-6.428 5.429 8 8 0 0 1-.784.041m0-13a5.5 5.5 0 1 0 5.289 6.99 5.4 5.4 0 0 0-.1-3.3 1 1 0 0 1 .238-1.035L14 12.586V11a2 2 0 0 1 2-2h1V8a2 2 0 0 1 2-2h1.586l.672-.672A2.52 2.52 0 0 0 22 3.536 1.537 1.537 0 0 0 20.465 2a2.52 2.52 0 0 0-1.793.743l-8.331 8.33a1 1 0 0 1-1.036.237A5.5 5.5 0 0 0 7.5 11ZM5 18a1 1 0 1 0 1-1 1 1 0 0 0-1 1" />
  </svg>
);
export default BiKey;
