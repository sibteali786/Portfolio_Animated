import "./App.css";
import useWebAnimations from "@wellyshen/use-web-animations";
import { useRef, useEffect } from "react";

function App() {
  // const inputEl = useRef(null);
  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateX(0px)" },
      { transform: "translateX(600px)" },
    ],
    timing: {
      duration: 3000,
    },
  });
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  return (
    <div className="App">
      {/* <h1>Hello World </h1>
      <input ref={inputEl} type="text" /> */}
      <div ref={ref}>Hello World</div>
    </div>
  );
}

export default App;
