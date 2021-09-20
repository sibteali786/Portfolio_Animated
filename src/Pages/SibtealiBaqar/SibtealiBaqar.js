import React from "react";
import styles from "../../Sass/components/Sibteali.module.scss";
import { TextAnimation } from "../../components";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
function SibtealiBaqar() {
  const textRef = useRef(null);
  const DeepRef = gsap.utils.selector(textRef);
  const ScreenLoadHandler = () => {
    var tl = gsap.timeline();
    tl.to(DeepRef(".Text"), {
      duration: 0.5,
      scale: 0.7,
      ease: "Power3.out",
    });
    tl.to(DeepRef(".Text"), {
      duration: 2,
      opacity: 1,
      scale: 1,
      ease: "Power3.out",
    });
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
