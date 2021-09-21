import React from "react";
import styles from "../../Sass/components/Sibteali.module.scss";
import Typewriter from "typewriter-effect";
import { ReactComponent as HeroSvg } from "../../Resources/heroN.svg";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
export default TextAnimation;

function TextAnimation() {
  const textRef = useRef(null);
  const DeepRef = gsap.utils.selector(textRef);
  const GsapHandler = () => {
    var tl = gsap.timeline();
    MotionPathPlugin.convertToPath("ellipse");
    tl.set(DeepRef("#Globe"), {
      opacity: 0,
    });
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
    tl.to(
      DeepRef("#Globe"),
      {
        opacity: 1,
        duration: 2,
        ease: "Power3.out",
      },
      "-=1"
    );
    tl.to(DeepRef("#circle1"), {
      opacity: 1,
      duration: 10,
      motionPath: {
        path: DeepRef("#ellipse1")[0],
        align: DeepRef("#ellipse1")[0],
        alignOrigin: [0.5, 0.5],
      },
      ease: "none",
      repeat: -1,
    });
    tl.to(
      DeepRef("#circle2"),
      {
        duration: 10,
        opacity: 1,
        motionPath: {
          path: DeepRef("#ellipse2")[0],
          align: DeepRef("#ellipse2")[0],
          alignOrigin: [0.5, 0.5],
        },
        ease: "none",
        repeat: -1,
      },
      "-=10"
    );
  };
  useEffect(() => {
    GsapHandler();
  }, []);
  return (
    <div className={`${styles.display} ${styles.font}`} ref={textRef}>
      <div
        className={`${styles.text} Text`}
        style={{
          fontWeight: "800",
          opacity: 0,
        }}
      >
        <div>Hi! I'm Syed Sibteali Baqar I'm a</div>
        <div style={{ color: "#fcab10" }}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              cursor: "/",
            }}
            onInit={(typewriter) => {
              typewriter

                .pauseFor(3000)
                .typeString(" Computer Engineer")
                .pauseFor(500)
                .deleteChars(17)
                .typeString(" Web Developer")
                .pauseFor(500)
                .deleteChars(13)
                .typeString(" Open Source Contributor")
                .pauseFor(500)
                .deleteChars(23)
                .typeString(" Python Developer")
                .pauseFor(500)
                .deleteChars(16)
                .typeString(" Speaker")
                .pauseFor(500)
                .deleteChars(7)
                .typeString(" PC Gamer")
                .pauseFor(500)
                .deleteChars(8)
                .typeString(" Singer")
                .deleteChars(6)
                .start();
            }}
          />
        </div>
      </div>
      <div>
        <HeroSvg className={`${styles.heroImg}`} />
      </div>
    </div>
  );
}
