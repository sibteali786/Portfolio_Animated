import React from "react";
import styles from "../../Sass/components/Sibteali.module.scss";
import { ReactComponent as ReactLogo } from "../../Resources/name.svg";
export default TextAnimation;

function TextAnimation() {
  return (
    <div className={`${styles.display} ${styles.font}`}>
      <div className={`${styles.text}`}>
        <ReactLogo
          style={{ opacity: "0", overflow: "hidden", width: "100%" }}
        />
      </div>
    </div>
  );
}
