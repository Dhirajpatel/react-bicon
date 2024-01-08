import * as React from "react";
import {IconProps} from "./types";
export const BiPlayCircle = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="m16.395 10.122-5.192-2.843a2.13 2.13 0 0 0-2.138.017 2.13 2.13 0 0 0-1.064 1.855v5.699c0 .772.397 1.465 1.064 1.855a2.118 2.118 0 0 0 2.128.023l5.212-2.854c.687-.386 1.096-1.086 1.096-1.873s-.409-1.487-1.105-1.878Zm-.961 2.003-5.212 2.855c-.019.01-.077.042-.147-.001-.074-.043-.074-.107-.074-.128V9.152c0-.021 0-.085.074-.128a.14.14 0 0 1 .074-.021.2.2 0 0 1 .083.026l5.192 2.844c.019.011.076.043.076.13s-.058.119-.066.125ZM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" />
    </svg>
  );
});
export default BiPlayCircle;
