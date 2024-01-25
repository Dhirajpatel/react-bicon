import React, { SVGProps } from 'react';

interface BiTagsProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiTags: React.FC<BiTagsProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M7.707 9.256a.999.999 0 1 1-1.414 1.414.999.999 0 1 1 1.414-1.414m13.852 6.085-.565.565a4.98 4.98 0 0 1-1.435 3.399l-3.167 3.208A4.97 4.97 0 0 1 12.849 24h-.017c-1.335 0-2.59-.52-3.534-1.464l-7.416-7.353a2.99 2.99 0 0 1-.864-2.453l.765-6.916a1 1 0 0 1 .858-.881l6.889-.942a3.02 3.02 0 0 1 2.528.851l7.475 7.412c.387.387.697.823.931 1.288a3.01 3.01 0 0 0-.342-3.835l-7.591-7.405a1.01 1.01 0 0 0-.851-.292l-6.889.942a1 1 0 0 1-1.127-.855A1 1 0 0 1 4.519.971l6.89-.943a3 3 0 0 1 2.528.852l7.589 7.405c1.946 1.945 1.957 5.107.032 7.057Zm-3.438-1.67-7.475-7.412a1.02 1.02 0 0 0-.847-.287l-6.115.837-.679 6.14a1 1 0 0 0 .287.816l7.416 7.353c.569.57 1.322.881 2.123.881h.01a2.97 2.97 0 0 0 2.126-.893l3.167-3.208a3.006 3.006 0 0 0-.014-4.229Z" />
  </svg>
);
export default BiTags;
