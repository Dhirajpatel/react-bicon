import React, { SVGProps } from 'react';

interface BiRankProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiRank: React.FC<BiRankProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M20.5 16H17v-2.5c0-1.93-1.57-3.5-3.5-3.5h-3C8.57 10 7 11.57 7 13.5v.5H3.5C1.57 14 0 15.57 0 17.5v3C0 22.43 1.57 24 3.5 24h17c1.93 0 3.5-1.57 3.5-3.5v-1c0-1.93-1.57-3.5-3.5-3.5M9 13.5c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5V22H9zm-7 7v-3c0-.827.673-1.5 1.5-1.5H7v6H3.5c-.827 0-1.5-.673-1.5-1.5m20 0c0 .827-.673 1.5-1.5 1.5H17v-4h3.5c.827 0 1.5.673 1.5 1.5zM9.034 7.089C9.434 5.877 10.611 5 12 5s2.566.878 2.966 2.089c.149.451-.218.911-.709.911H9.742c-.491 0-.858-.46-.709-.911ZM10 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 10 2M.034 11.089C.434 9.877 1.611 9 3 9s2.566.878 2.966 2.089c.149.451-.218.911-.709.911H.742c-.491 0-.858-.46-.709-.911ZM1 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 1 6m17.034 7.089C18.434 11.877 19.611 11 21 11s2.566.878 2.966 2.089c.149.451-.218.911-.709.911h-4.515c-.491 0-.858-.46-.709-.911ZM19 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 19 8" />
  </svg>
);
export default BiRank;
