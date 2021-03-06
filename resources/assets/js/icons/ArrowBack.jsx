import React from "react";

const ArrowBack = props => (
  <svg width={19} height={19} viewBox="0 0 19 19" fill="none" {...props}>
    <path
      d="M9 18L1 9.522M9 1L1 9.478"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path stroke="currentColor" strokeLinecap="round" d="M18.5 9.5h-17" />
  </svg>
);

export default ArrowBack;
