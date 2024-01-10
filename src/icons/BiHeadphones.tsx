import * as React from "react";
import {IconProps} from "./types";
export const BiHeadphones = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M21 12.424V11a9 9 0 0 0-18 0v1.424A5 5 0 0 0 5 22a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2v-1a7 7 0 0 1 14 0v1a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 5 5 0 0 0 2-9.576M5 20a3 3 0 0 1 0-6Zm14 0v-6a3 3 0 0 1 0 6" />
    </svg>
  );
});
export default BiHeadphones;