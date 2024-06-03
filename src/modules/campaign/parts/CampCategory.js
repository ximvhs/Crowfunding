import React from "react";
import { Link } from "react-router-dom";
import IconFolder from "../../../components/icon/IconFolder";

const CampCategory = ({ text = "Education", className = "text-xs" }) => {
  return (
    <Link
      to="/"
      className={`flex items-baseline mb-4 font-medium text-sx gap-x-3 text-text3 ${className}`}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
