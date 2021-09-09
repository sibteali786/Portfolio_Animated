import React from "react";
import styles from "./style.module.css";
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";

export default SibtealiBaqar;

function SibtealiBaqar() {
  const { ref } = useWebAnimations({ ...fadeIn });
  return (
    <div ref={ref} className={styles.font}>
      Sibteali Baqar Page
    </div>
  );
}
