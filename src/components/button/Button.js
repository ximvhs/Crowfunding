import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin "></div>
  ) : (
    children
  );
  let defaultClassName =
    "flex items-center justify-center p-4 text-base min-h-[56px] font-semibold rounded-xl";

  switch (rest.kind) {
    case "primary":
      defaultClassName = defaultClassName + " bg-primary text-white";
      break;
    case "secondary":
      defaultClassName = defaultClassName + " bg-secondary text-white";
      break;
    case "ghost":
      defaultClassName =
        defaultClassName + " bg-secondary bg-opacity-10 text-secondary";
      break;

    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={`${defaultClassName} ${className}`}>
        {child}
      </Link>
    );
  return (
    <button
      className={` ${
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      }  ${defaultClassName} ${className}`}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
