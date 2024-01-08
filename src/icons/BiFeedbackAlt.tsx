import * as React from "react";
import {IconProps} from "./types";
export const BiFeedbackAlt = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M20 14.494h1.5a.5.5 0 0 1 .322.883l-1.183.964.489 1.49a.5.5 0 0 1-.169.553.5.5 0 0 1-.578.023l-1.377-.897-1.354.906a.5.5 0 0 1-.755-.566l.47-1.508-1.189-.967a.5.5 0 0 1 .323-.881h1.5l.531-1.49a.5.5 0 0 1 .938 0zm-4.5 0H14l-.531-1.49a.5.5 0 0 0-.938 0L12 14.494h-1.5a.499.499 0 0 0-.323.881l1.189.967-.47 1.508a.5.5 0 0 0 .755.566l1.354-.906 1.377.897a.5.5 0 0 0 .747-.576l-.489-1.49 1.183-.964a.5.5 0 0 0-.322-.883Zm-6 0H8l-.531-1.49a.5.5 0 0 0-.938 0L6 14.494H4.5a.499.499 0 0 0-.323.881l1.189.967-.47 1.508a.5.5 0 0 0 .755.566l1.354-.906 1.377.897a.5.5 0 0 0 .747-.576l-.489-1.49 1.183-.964a.5.5 0 0 0-.322-.883ZM24 13v5c0 2.206-1.794 4-4 4h-3.862l-1.837 1.519a1.94 1.94 0 0 1-1.292.484 2 2 0 0 1-1.337-.507l-1.775-1.495H6.001c-2.206 0-4-1.794-4-4v-5c0-2.206 1.794-4 4-4h14c2.206 0 4 1.794 4 4Zm-2 0c0-1.103-.897-2-2-2H6c-1.103 0-2 .897-2 2v5c0 1.103.897 2 2 2h4.262c.235 0 .464.083.645.235l2.074 1.748 2.161-1.754a1 1 0 0 1 .637-.229h4.222c1.103 0 2-.897 2-2v-5ZM2 4c0-1.103.897-2 2-2h14c1.103 0 2 .897 2 2v2a1 1 0 1 0 2 0V4c0-2.206-1.794-4-4-4H4C1.794 0 0 1.794 0 4v4a1 1 0 1 0 2 0zm3 1a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm10 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" />
    </svg>
  );
});
export default BiFeedbackAlt;
