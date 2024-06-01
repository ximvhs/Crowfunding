import React from "react";
import PropTypes from "prop-types";

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border dark:border-darkStroke dark:text-white text-text2 rounded-xl gap-x-3 border-strock"
    >
      <img srcSet="/icon-google.png 2x" alt="Icon Google" />
      <span>{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonGoogle;
