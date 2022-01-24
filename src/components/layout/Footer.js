import React, { useState, useRef, useEffect, useMemo } from "react";
import styles from "../../Sass/components/footer.module.scss";
import { ReactComponent as ReactLogo } from "../../Resources/logo_2.svg";
import { ReactComponent as ReactLogo_2 } from "../../Resources/github.svg";
import { ReactComponent as ReactLogo_3 } from "../../Resources/iconmonstr-facebook-4.svg";
import { ReactComponent as ReactLogo_4 } from "../../Resources/iconmonstr-linkedin-3.svg";
import { ReactComponent as ReactLogo_5 } from "../../Resources/iconmonstr-twitter-1.svg";
import { ReactComponent as ReactLogo_6 } from "../../Resources/iconmonstr-stackoverflow-1.svg";
import { ReactComponent as ReactLogo_7 } from "../../Resources/iconmonstr-medium-1.svg";
import { Link } from "react-router-dom";
function Footer() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const targetRef = useRef(null);
  const [isVisible, setisVisible] = useState("0.5");
  const callBackFunction = (entries) => {
    const [entry] = entries;
    var val = isVisible;
    val = parseInt(isVisible);
    const count = "0.1";
    // setisVisible(isVisible + parseInt(count));
    console.log(entry);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
  });

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);
  return (
    <footer
      className={`${styles.footer} ${styles.footerColored}`}
      ref={targetRef}
    >
      <div
        className={
          hovered
            ? `${styles.footerUpper} ${styles.hovered}`
            : ` ${styles.footerUpper}`
        }
      >
        <h2 className={`${styles.bottomTitle}`}>
          Ready to discuss
          <br></br>
          <span>your project?</span>
        </h2>

        <p className={`${styles.linkWrapper}`}>
          <a
            href="https://www.fiverr.com/users/sibtealibaqar12/seller_dashboard"
            target="_blank"
            rel="noreferrer"
            className={`${styles.bottomContact}`}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            Contact Us
          </a>
        </p>
      </div>
      <div className={`${styles.bottomSection}`}>
        <div className={`${styles.knowAbouts}`}>
          <ReactLogo className={`logo`} />
          <div className={`${styles.footerLinks}`}>
            <h6>Company</h6>
            <p>
              <Link to="projects">Projects</Link>
            </p>
            <p>
              <Link to="about">About</Link>
            </p>
            <p>
              <Link to="blog">Blog</Link>
            </p>
            <p>
              <Link to="contacts">Contacts</Link>
            </p>
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
            <a
              href="https://stackoverflow.com/users/10695893/syed-sibteali-baqar"
              target="_blank"
              rel="noreferrer"
            >
              <ReactLogo_6 className={`logo`} />
            </a>
            <a
              href="https://medium.com/@sibteali786"
              target="_blank"
              rel="noreferrer"
            >
              <ReactLogo_7 className={`logo`} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
