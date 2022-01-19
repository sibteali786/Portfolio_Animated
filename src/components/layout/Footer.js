import React from "react";
import styles from "../../Sass/components/footer.module.scss";
import { ReactComponent as ReactLogo } from "../../Resources/logo_2.svg";
import { ReactComponent as ReactLogo_2 } from "../../Resources/github.svg";
import { ReactComponent as ReactLogo_3 } from "../../Resources/iconmonstr-facebook-4.svg";
import { ReactComponent as ReactLogo_4 } from "../../Resources/iconmonstr-linkedin-3.svg";
import { ReactComponent as ReactLogo_5 } from "../../Resources/iconmonstr-twitter-1.svg";
function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.knowAbouts}`}>
        <ReactLogo className={`logo`} />
        <div>
          <h6>Company</h6>
          <p>Projects</p>
          <p>About</p>
          <p>Blog</p>
        </div>
        <div>
          <h6>Services</h6>
          <p>Web Design</p>
          <p>MERN Stack Web Development</p>
          <p>Serverless</p>
          <p>ReactJS Development</p>
          <p>Responsive Web Design</p>
          <p>NodeJS Development</p>
        </div>
        <div>
          <h6>Contact</h6>
          <p>
            <a href="">Sibteali786@gmail.com</a>
          </p>
          <p>
            <a href="">ssibteali.ce41ceme@ce.ceme.edu.pk</a>
          </p>
        </div>
      </div>

      <div className={`${styles.bottomLine}`}>
        <h6>Resistech</h6>
        <div>
          <a
            href="https://github.com/sibteali786"
            target="_blank"
            rel="noreferrer"
          >
            <ReactLogo_2 className={`logo`} />
          </a>
          <a
            href="https://www.facebook.com/sibte.ali.923/"
            target="_blank"
            rel="noreferrer"
          >
            <ReactLogo_3 className={`logo`} />
          </a>
          <a
            href="https://www.linkedin.com/in/syed-sibteali-baqar-03167a17a/"
            target="_blank"
            rel="noreferrer"
          >
            <ReactLogo_4 className={`logo`} />
          </a>
          <a
            href="https://twitter.com/SibtealiN"
            target="_blank"
            rel="noreferrer"
          >
            <ReactLogo_5 className={`logo`} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;