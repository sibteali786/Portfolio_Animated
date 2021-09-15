import React from "react";
import styles from "../../Sass/components/Sibteali.module.scss";
import { ReactComponent as ReactLogo } from "../../Resources/name_text_SVG-01.svg";
export default TextAnimation;

function TextAnimation() {
  return (
    <div className={`${styles.display}`}>
      <ReactLogo className={`text`} style={{ opacity: "0" }} />
    </div>
  );
}
