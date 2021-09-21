import React from "react";
import styles from "../../Sass/components/Sibteali.module.scss";
import { TextAnimation } from "../../components";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
function SibtealiBaqar() {
  const textRef = useRef(null);
  const DeepRef = gsap.utils.selector(textRef);

  const ScreenLoadHandler = () => {
    var tl = gsap.timeline();
  };

  useEffect(() => {
    ScreenLoadHandler();
  }, []);
  return (
    <div className={`${styles.container}`} ref={textRef}>
      <TextAnimation />
    </div>
  );
}

export default SibtealiBaqar;
