import React from "react";
import styles from "../../Sass/components/Sibteali.module.scss";
import { TextAnimation } from "../../components";
import gsap from "gsap";
function SibtealiBaqar() {
  return (
    <div className={`${styles.container}`}>
      <TextAnimation />
    </div>
  );
}

export default SibtealiBaqar;
