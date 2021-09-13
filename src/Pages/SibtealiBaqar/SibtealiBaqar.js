import React from "react";
import styles from "../../Sass/components/Sibteali.module.scss";
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
import { TextAnimation } from "../../components";

function SibtealiBaqar() {
  const { ref } = useWebAnimations({ ...bounce });

  return (
    <div className={styles.font}>
      <TextAnimation />
    </div>
  );
}

export default SibtealiBaqar;
