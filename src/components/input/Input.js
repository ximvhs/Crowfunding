import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import ErrorComponent from "../common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";

const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    placeholder = "",
    error = "",
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium bg-transparent dark:text-white dark:placeholder:text-text2 border rounded-xl  placeholder:text-text4 ${
          error.length > 0
            ? "border-error text-error"
            : "border-strock text-text1 dark:border-darkStroke"
        } ${children ? "pr-16" : ""}`}
        placeholder={error.length <= 0 ? placeholder : ""}
        {...rest}
        {...field}
      />
      {error.length > 0 ? (
        <span className="absolute text-sm font-medium pointer-events-none error-input text-error top-2/4 -translate-y-2/4 left-6">
          {error}
        </span>
      ) : (
        ""
      )}
      {children && (
        <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
          {children}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
};

export default withErrorBoundary(Input, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
