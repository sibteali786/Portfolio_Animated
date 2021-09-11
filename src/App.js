import styles from "./Sass/App.module.scss";
import ClockLoader from "react-spinners/ClockLoader";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SibtealiBaqar, Contact, Projects, About } from "./Pages";
import { Button } from "./components";
import { ReactComponent as ReactLogo } from "./Resources/logo.svg";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className={styles.container}>
          <ClockLoader color={"#ee9b00"} loading={loading} size={150} />
        </div>
      ) : (
        <div className={styles.container_1}>
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
                  <ReactLogo
                    style={{
                      marginRight: "0.8rem",
                    }}
                  />
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
