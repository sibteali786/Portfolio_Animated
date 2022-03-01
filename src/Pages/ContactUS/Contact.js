import React from "react";
import styles from "../../Sass/components/contact.module.scss";

export default Contact;

function Contact() {
  return (
    <main className={`${styles.main}`}>
      <h1
        className="title text-gradient title-big"
        style={{ fontWeight: "700" }}
      >
        Contact Us
      </h1>
      <div className={`${styles.infoSection}`}>
        <div className={`${styles.leftColumn}`}>
          <p className={`${styles.BlackText}`}>Email us:</p>
          <a
            href="mailto:sibteali786@gmail.com"
            target="_blank"
            className={` underlined-text mail-to-us-button ${styles.BlackText}`}
            rel="noreferrer"
            style={{ color: "transparent" }}
          >
            sibteali786@gmail.com
          </a>
        </div>
        <div className={`${styles.rightColumn}`}>
          Open for suggestion, ideas, discussion and needs. Constructive
          criticism is appreciated.
        </div>
      </div>
    </main>
  );
}
