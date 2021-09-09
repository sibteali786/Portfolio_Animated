import styles from "./App.module.css";
import ClockLoader from "react-spinners/ClockLoader";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SibtealiBaqar, Contact, Projects, About } from "./components";
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
          <ClockLoader color={"#FFFAFB"} loading={loading} size={150} />
        </div>
      ) : (
        <div className={styles.container} style={{ color: "#FFFAFB" }}>
          <Router>
            <nav className={(styles.navBar, styles.hel)}>
              <h1 style={{ letterSpacing: "0.5rem " }}>
                <i class="fa fa-code"></i>
                Sibteali Baqar
              </h1>
              <ul>
                <Link to="/">SibtealiBaqar</Link>
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
