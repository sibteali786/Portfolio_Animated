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
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className={styles.App}>
          <ClockLoader color={"#FFFAFB"} loading={loading} size={150} />
        </div>
      ) : (
        <div className={styles.App_1} style={{ color: "#FFFAFB" }}>
          <Router>
            <div>
              <Link to="/" className={styles.hel}>
                SibtealiBaqar
              </Link>
              <Link to="projects" className={styles.hel}>
                Projects
              </Link>
              <Link to="about" className={styles.hel}>
                About
              </Link>
              <Link to="contact" className={styles.hel}>
                Contact
              </Link>
            </div>
            <Routes>
              <Route path="/" element={<SibtealiBaqar />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
