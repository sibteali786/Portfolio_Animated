import "./App.css";
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateX(-100%)", opacity: 0 },
      { transform: "translateX(0%)", opacity: 1 },
    ],
    animationOptions: {
      duration: 1000,
      iterations: 1,
      easing: "ease-in",
      fill: "forwards",
    },
  });
  return (
    <div className="App">
      <p>Animation Running {playState} </p>
      <h1 ref={ref}>Hello World</h1>
      <button
        onClick={() => {
          getAnimation().play();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          getAnimation().pause();
        }}
      >
        Pause
      </button>
    </div>
  );
}

export default App;
