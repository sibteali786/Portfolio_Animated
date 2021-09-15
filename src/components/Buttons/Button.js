//Button.js

import React, { useState } from "react";
import styles from "./Button.module.scss";

const Button = ({
  children,
  onClick,
  btnColor = "teal",
  labelColor,
  disabled,
  type,
  style,
  ...props
}) => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };
  const commonStyles = {
    backgroundColor: btnColor,
    color: labelColor || "white",
  };
  const outlineStyles = {
    border: `2px solid ${btnColor}`,
    color: btnColor,
    backgroundColor: "white",
  };
  const outlineHoverStyle = {
    color: labelColor || "white",
    backgroundColor: btnColor,
  };

  const roundedStyle = {
    border: `3px solid ${btnColor}`,
    backgroundColor: "transparent",
    color: labelColor || "white",
    borderRadius: "30px",
  };
  const roundedHoverStyle = {
    border: `3px solid ${btnColor}`,
    backgroundColor: btnColor,
    color: labelColor || "white",
    borderRadius: "30px",
  };
  const disabledStyle = {
    cursor: "default",
    backgroundColor: btnColor,
    color: labelColor || "white",
    opacity: 0.4,
  };
  const blockStyles = {
    width: "95%",
    margin: "0 auto",
  };
  let btnStyle;
  switch (type) {
    case "rounded":
      if (hover) {
        btnStyle = roundedHoverStyle;
      } else {
        btnStyle = roundedStyle;
      }
      break;
    case "block":
      btnStyle = blockStyles;
      break;
    case "outline":
      if (hover) {
        btnStyle = outlineHoverStyle;
      } else {
        btnStyle = outlineStyles;
      }
      break;
    default:
      btnStyle = {
        backgroundColor: btnColor,
        color: labelColor || "white",
      };
      break;
  }
  return (
    <button
      style={
        disabled
          ? { ...commonStyles, ...btnStyle, ...disabledStyle, ...style }
          : { ...commonStyles, ...btnStyle, ...style }
      }
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      {...props}
      type="button"
      onClick={!disabled ? onClick : () => {}}
      className={styles.btn}
    >
      {children || "button"}
    </button>
  );
};

export default Button;
