import React from "react";
import styles from "../../Sass/components/footer.module.scss";
import { ReactComponent as ReactLogo } from "../../Resources/logo_2.svg";
function Footer() {
  return (
    <div className={`${styles.footer}`}>
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
  );
}

export default Footer;
