import "./App.css";
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
  const { ref, getAnimation } = useWebAnimations({
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
      <h1 ref={ref}>Hello World</h1>
    </div>
  );
}

export default App;
