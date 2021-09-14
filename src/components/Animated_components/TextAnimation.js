import React from "react";
import styles from "../../Sass/components/Sibteali.module.scss";
import { useState, useEffect, useRef } from "react";
import useWebAnimations, {
  bounce,
  bounceIn,
} from "@wellyshen/use-web-animations";
import gsap from "gsap";
export default TextAnimation;

function TextAnimation() {
  return (
    <div className={`${styles.font}`}>
      <h1 className={`text`} style={{ opacity: "0" }}>
        Syed Sibteali Baqar
      </h1>
    </div>
  );
}
