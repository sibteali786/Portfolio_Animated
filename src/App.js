import "./App.css";
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
import ClockLoader from "react-spinners/ClockLoader";
import { useState, useEffect } from "react";
import SibtealiBaqar from "./components/SibtealiBaqar/SibtealiBaqar";
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
    <div className="App">
      {loading ? (
        <ClockLoader color={"#FFFAFB"} loading={loading} size={150} />
      ) : (
        <div className="App_1" style={{ color: "#FFFAFB" }}>
          <h1 ref={ref}>Hello World</h1>
          <SibtealiBaqar></SibtealiBaqar>
        </div>
      )}
    </div>
  );
}

export default App;
