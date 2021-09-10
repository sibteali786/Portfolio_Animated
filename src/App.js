import styles from "./App.module.css";
import ClockLoader from "react-spinners/ClockLoader";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SibtealiBaqar, Contact, Projects, About } from "./Pages";
import { Button } from "./components";
import { ReactComponent as ReactLogo } from "./logo.svg";

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
        <div className={styles.container}>
          <Router>
            <nav className={styles.navBar}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <h1
                  style={{
                    letterSpacing: "0.3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "3rem",
                    color: "#fffafb",
                  }}
                >
                  <ReactLogo style={{ marginRight: "0.8rem" }} />
                  ibteali Baqar
                </h1>
              </Link>
              <Link to="contact" style={{ textDecoration: "none" }}>
                <Button btnColor="#ee9b00" type="rounded">
                  Contact
                </Button>
              </Link>
              <ul className={styles.hel}>
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
