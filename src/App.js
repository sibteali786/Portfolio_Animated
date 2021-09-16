import styles from "./Sass/App.module.scss";
import ClockLoader from "react-spinners/ClockLoader";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SibtealiBaqar, Contact, Projects, About } from "./Pages";
import { Button } from "./components";
import { ReactComponent as ReactLogo } from "./Resources/logo_2.svg";
import gsap from "gsap";

function App() {
  const [loading, setloading] = useState(false);
  const [offset, setOffset] = useState(0);
  const handleScroll = () => {
    setOffset(window.pageYOffset);
  };
  const Textref = useRef(null);
  const deepRef = gsap.utils.selector(Textref);
  const MouseEnterHandler = () => {
    var tl = gsap.timeline();
    tl.to(deepRef(".Text"), {
      duration: 0.5,
      scale: 0.7,
      ease: "Power3.out",
    });
    tl.to(deepRef(".Text"), {
      duration: 2,
      opacity: 1,
      scale: 1,
      ease: "Power3.out",
    });
    tl.from(
      deepRef(".nav"),
      {
        duration: 1,
        y: -1000,
        ease: "Power3.out",
      },
      "-=1"
    );
    tl.from(
      deepRef("#Ali"),
      {
        duration: 2,
        rotationY: 360,
        ease: "Power3.out",
      },
      "+=0.5"
    );
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setloading(true);
    setTimeout(() => {
      setloading(false);
      console.log("Run");
      MouseEnterHandler();
    }, 1000);

    return () => window.removeEventListener("scroll", handleScroll);
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
            <nav className={`nav`}>
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
                  <ReactLogo style={{ marginRight: "0.5rem" }} />
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
                <Link to="contact">Contact</Link>
              </ul>
            </nav>
            <main>
              <Routes>
                <Route path="/" element={<SibtealiBaqar />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </main>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
