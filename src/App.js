import styles from "./Sass/App.module.scss";
import ClockLoader from "react-spinners/ClockLoader";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SibtealiBaqar, Contact, Projects, About } from "./Pages";
import { Navbar } from "./components";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

function App() {
  const [loading, setloading] = useState(false);
  const Textref = useRef(null);
  const deepRef = gsap.utils.selector(Textref);
  const ScreenLoadHandler = () => {
    var tl = gsap.timeline();
    tl.to(deepRef("#starSys"), {
      delay: 2,
      duration: 1.2,
      opacity: 1,
      ease: "Power3.out",
    });
    tl.from(
      deepRef(".nav"),
      {
        duration: 1.5,
        y: -1000,
        ease: "Power3.out",
      },
      "-=2"
    );
    tl.from(
      deepRef("#Ali"),
      {
        duration: 2,
        rotationY: 360,
        ease: "Power3.out",
      },
      "-=0.5"
    );
    tl.to(
      deepRef("#lowerPart, #upperPart, #middlePart"),
      {
        duration: 1,
        fill: "#fcab10",
        ease: "Power3.out",
      },
      "-=1"
    );
  };
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      ScreenLoadHandler();
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className={styles.container}>
          <ClockLoader color={"#FCAB10"} loading={loading} size={150} />
        </div>
      ) : (
        <div ref={Textref}>
          <Router>
            <Navbar />
            <Route exact path="/" component={SibtealiBaqar} />
            <div className={styles.container_1}>
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
