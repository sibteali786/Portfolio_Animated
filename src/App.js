import styles from "./App.module.css";
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
import ClockLoader from "react-spinners/ClockLoader";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SibtealiBaqar, Contact, Projects, About } from "./components";
function App() {
  const { keyframes, animationOptions } = bounce;
  const { ref } = useWebAnimations({
    keyframes,
    animationOptions: {
      ...animationOptions,
      delay: 3000, // Delay 5s
      duration: 1000,
    },
  });
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  return (
    <div className={styles.App}>
      {loading ? (
        <ClockLoader color={"#FFFAFB"} loading={loading} size={150} />
      ) : (
        <div className={styles.App_1} style={{ color: "#FFFAFB" }}>
          <Router>
            <Link to="/">Sibteali Baqar</Link>
            <Link to="projects">Projects</Link>
            <Link to="about">About</Link>
            <Routes>
              <Route path="/" element={<SibtealiBaqar />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
