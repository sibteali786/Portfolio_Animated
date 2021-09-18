import React from "react";
import styles from "../../Sass/components/Sibteali.module.scss";
import Typewriter from "typewriter-effect";
import { ReactComponent as HeroSvg } from "../../Resources/heroNew.svg";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
export default TextAnimation;
const GsapHandler = () => {
  gsap.to("#circle_1",{
    duration:20,
    motionPath:{
      path:"#ellipse_1",
      autoRotate: true
    },
    repeat:-1,
  })
};
function TextAnimation() {
  useEffect(() => {
    GsapHandler();
  }, []);
  return (
    <div className={`${styles.display} ${styles.font}`}>
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
        <svg className={`${styles.heroImg} starSys`} xmlns="http://www.w3.org/2000/svg" width="855.6" height="578.4" viewBox="0 0 855.6 578.4">
  <path id="mainGlobe" d="M763 338c-3 43-22 84-49 119l-3 4-8 9-10 11-9 9-7 7c-29 25-61 46-95 65-66 36-138 64-213 68s-153-18-207-69c-74-69-95-184-65-280 20-64 61-122 116-160s125-55 190-44c53-31 121-32 178-9 31 13 58 32 82 54a344 344 0 0 1 31 34l3 3 11 16 15 23 4 6 3 5a266 266 0 0 1 32 88l2 12a175 175 0 0 1-1 29Z" transform="translate(0 -52)" style={{fill:"#3f3d56"}}/>
  <path d="M568 403 420 279l144 129a3 3 0 1 0 4-5Z" transform="translate(0 -52)" style={{fill:"#f0f0f0",opacity:".30000001192092896",isolation:"isolate"}}/>
  <g id="smallGalax">
    <circle cx="227.2" cy="198.7" r="89" style={{fill:"#f2f2f2"}}/>
    <path d="M307 245a81 81 0 1 1-53-76 81 81 0 0 1 53 76Z" transform="translate(0 -52)" style={{fill:"#fff"}}/>
    <circle cx="211.2" cy="165.7" r="25" style={{fill:"#e4e4e4"}}/>
    <path d="M303 222a25 25 0 0 1-27-41 81 81 0 0 1 27 41Z" transform="translate(0 -52)" style={{fill:"#f2f2f2"}}/>
    <circle cx="252.2" cy="219.7" r="9" style={{fill:"#e4e4e4"}}/>
    <path d="M216 323a8 8 0 0 1-1 2 82 82 0 0 1-17-4 9 9 0 1 1 18 2Zm-53-82a18 18 0 0 1-17 18 83 83 0 0 1 2-36 18 18 0 0 1 15 18Z" transform="translate(0 -52)" style={{fill:"#f2f2f2"}}/>
  </g>
  <g id="stars">
    <circle cx="606.1" cy="156.4" r="3.7" style={{fill:"#6c63ff"}}/>
    <circle cx="571.9" cy="67.8" r="2.2" style={{fill:"#f0f0f0"}}/>
    <circle cx="224.9" cy="491.8" r="2.2" style={{fill:"#f0f0f0"}}/>
    <circle cx="584.2" cy="279.5" r="2.2" style={{fill:"#f0f0f0"}}/>
    <circle cx="305.1" cy="298.4" r="3.7" style={{fill:"#6c63ff"}}/>
    <circle cx="266.9" cy="383.8" r="2.2" style={{fill:"#f0f0f0"}}/>
    <circle cx="486.9" cy="45.8" r="2.2" style={{fill:"#f0f0f0"}}/>
    <circle cx="357.9" cy="506.8" r="2.2" style={{fill:"#f0f0f0"}}/>
    <circle cx="325.9" cy="65.8" r="2.2" style={{fill:"#f0f0f0"}}/>
    <circle cx="381.9" cy="170.8" r="2.2" style={{fill:"#f0f0f0"}}/>
    <circle cx="296.2" cy="428.5" r="2.2" style={{fill:"#f0f0f0"}}/>
    <circle cx="549.2" cy="442.5" r="2.2" style={{fill:"#f0f0f0"}}/>
    <circle cx="437.2" cy="316.5" r="2.2" style={{fill:"#f0f0f0"}}/>
    <circle cx="494.2" cy="170.5" r="2.2" style={{fill:"#f0f0f0"}}/>
    <circle cx="597.8" cy="240.6" r="4.3" style={{fill:"#ff6584"}}/>
    <circle cx="423.8" cy="98.6" r="4.3" style={{fill:"#ff6584"}}/>
    <circle cx="423.8" cy="393.6" r="4.3" style={{fill:"#ff6584"}}/>
  </g>
  <path d="M691 470a8 8 0 0 0-7 6 7 7 0 0 0 0 2v12l9-9 10-11Z" transform="translate(0 -52)" style={{fill:"#6c63ff"}}/>
  <path id="ellipse_1" d="m719 533-43-2c-79-5-183-22-290-49s-207-60-280-93c-35-16-62-31-80-45-20-15-28-28-25-38 5-21 50-25 88-25v3c-52 0-82 8-86 23-4 18 34 47 105 79s171 66 279 93 210 44 289 49 125-2 130-21c4-16-22-38-72-64l1-3c37 19 79 46 74 68-3 10-16 18-40 22-14 2-31 3-50 3Z" transform="translate(0 -52)" style={{fill:"#6c63ff"}}/>
  <g id="smallGalax2">
    <circle cx="681.3" cy="182.3" r="34.4" style={{fill:"#fff"}}/>
    <path d="M682 200a35 35 0 1 0 35 35 35 35 0 0 0-35-35Zm0 68a34 34 0 1 1 34-34 34 34 0 0 1-34 34Z" transform="translate(0 -52)" style={{fill:"#2f2e41"}}/>
    <path d="M651 243a1 1 0 0 1 0-1 34 34 0 0 1 8-28 1 1 0 0 1 1 0 1 1 0 0 1 0 1 32 32 0 0 0-8 27Z" transform="translate(0 -52)" style={{fill:"#2f2e41"}}/>
  </g>
  <path d="M717 318h-58a8 8 0 0 0-8 8v128a48 48 0 0 0 26 43l7-7 9-9 10-11 8-9 3-4c27-35 46-76 49-119a64 64 0 0 0-46-20Z" transform="translate(0 -52)" style={{fill:"#2f2e41"}}/>
  <path d="M719 345a15 15 0 0 0-10-4 14 14 0 0 0-9 3 5 5 0 0 0-1 1l-48 49-34 35a8 8 0 0 0-1 2 6 6 0 0 0-1 3 7 7 0 0 0 2 5l1 1 10 10a7 7 0 0 0 5 1 7 7 0 0 0 5-2l1-1 12-12 69-71a15 15 0 0 0-1-20Z" transform="translate(0 -52)" style={{fill:"#6c63ff"}}/>
  <path id="ellipse_2" d="M240 569c-36 0-69-1-98-3-39-4-70-9-91-16-24-7-36-16-37-27-2-21 40-41 75-54l1 3c-49 18-74 35-73 50 2 20 48 34 125 41 79 6 184 4 294-7s213-29 290-51c74-21 116-44 114-64-1-15-33-28-89-36v-3c41 6 90 17 92 39 1 11-9 22-30 34s-49 22-87 33a2037 2037 0 0 1-486 61Z" transform="translate(0 -52)" style={{fill:"#6c63ff"}}/>
  <circle id="smallGalax3" cx="529.4" cy="54" r="9.4" style={{fill:"#e6e6e6"}}/>
  <circle cx="19.1" cy="381.4" r="17.5" style={{fill:"#e6e6e6"}}/>
   
    <circle id="circle_1" cx="87.4" cy="228.9" r="17.5" style={{fill:"#6c63ff"}}/>
    <circle id="circle_2" cx="838.1" cy="382.4" r="17.5" style={{fill:"#6c63ff"}}/>
  
  <g id="smallPlanets">
    <circle cx="127.1" cy="56.4" r="10.7" style={{fill:"#ff6584"}}/>
    <circle cx="77.1" cy="462.4" r="10.7" style={{fill:"#ff6584"}}/>
    <circle cx="807.1" cy="287.4" r="10.7" style={{fill:"#ff6584"}}/>
  </g>
  <circle cx="645.1" cy="546.4" r="17.5" style={{fill:"#e6e6e6"}}/>
</svg>

      </div>
    </div>
  );
}
