import React from "react";

const CampDesc = ({ children, className = "mb-4 text-xs" }) => {
  return (
    <div className={`font-normal text-text3 ${className}`}>{children}</div>
  );
};

export default CampDesc;
