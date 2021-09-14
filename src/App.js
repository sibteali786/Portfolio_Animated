import styles from "./Sass/App.module.scss";
import ClockLoader from "react-spinners/ClockLoader";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SibtealiBaqar, Contact, Projects, About } from "./Pages";
import { Button } from "./components";
import { ReactComponent as ReactLogo } from "./Resources/logo_2.svg";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";

const color = keyframes`
  from {
    fill:none;
    stroke:#fcab10;
  }
  to {
    stroke:none;
    fill:#fffafb;
  }
`;
const StyledLogo = styled(ReactLogo)`
  transition: transform 0.8s;
  &:hover {
    transform: rotate(447deg) scale(0.6);
    #upperPart,
    #lowerPart,
    #middlePart {
      animation: ${color} 1 0.8s linear both;
    }
  }
  display: block;
  margin-right: 0.8rem;
`;

function App() {
  const [loading, setloading] = useState(false);
  const Textref = useRef(null);
  const deepRef = gsap.utils.selector(Textref);
  const MouseEnterHandler = () => {
    var tl = gsap.timeline();
    tl.to(deepRef(".text"), {
      duration: 2,
      opacity: 1,
      scale: 1.2,
      ease: "Power3.out",
    });
  };
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      console.log("Run");
      MouseEnterHandler();
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className={styles.container}>
          <ClockLoader color={"#FCAB10"} loading={loading} size={150} />
        </div>
      ) : (
        <div className={styles.container_1} ref={Textref}>
          <Router>
            <nav className={styles.navBar}>
              <Link to="/" style={{ textDecoration: "none" }}>
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
                  <StyledLogo />
                  <p className={styles.Title}>ibteali Baqar</p>
                </div>
              </Link>
              <Link to="contact" style={{ textDecoration: "none" }}>
                <Button btnColor="#ee9b00" type="rounded">
                  Contact
                </Button>
              </Link>
              <ul
                className={styles.hel}
                style={{ fontSize: "calc(1.2vw + 0.3rem)" }}
              >
                <Link to="projects">Projects</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
              </ul>
            </nav>
            <div>
              <Routes>
                <Route path="/" element={<SibtealiBaqar />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </div>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
