import React from "react";
import styles from "../../Sass/components/Sibteali.module.scss";
import Typewriter from "typewriter-effect";
export default TextAnimation;

function TextAnimation() {
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
        
      </div>
    </div>
  );
}
