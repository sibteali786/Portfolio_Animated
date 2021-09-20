import React from "react";
import Button from "../Buttons/Button";
import { ReactComponent as ReactLogo } from "../../Resources/logo_2.svg";
import { Link } from "react-router-dom";
import styles from "../../Sass/App.module.scss";
const Navbar = () => {
  return (
    <nav className={`nav`}>
      <Link to="/" style={{ textDecoration: "none", zIndex: 120 }}>
        <div
          style={{
            letterSpacing: "0.3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "calc(5vw+1rem)",
            color: "#fffafb",
          }}
        >
          <ReactLogo className={`logo`} style={{ marginRight: "0.5rem" }} />
          <p className={styles.Title}>ibteali Baqar</p>
        </div>
      </Link>
      <Link to="contact" style={{ textDecoration: "none" }}>
        <Button btnColor="#ee9b00" type="rounded">
          Contact
        </Button>
      </Link>
      <ul style={{ fontSize: "calc(1.2vw + 0.3rem)" }}>
        <Link to="projects">Projects</Link>
        <Link to="about">About</Link>
      </ul>
      <div className={`${styles.MobileNav} ${styles.toggle}`}>
        <div className={`list`}>
          <Link to="projects">Projects</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
