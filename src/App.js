import "./App.css";
import useWebAnimations, { backInLeft } from "@wellyshen/use-web-animations";
import RiseLoader from "react-spinners/RiseLoader";
import { useState, useEffect } from "react";

function App() {
  const { ref } = useWebAnimations({ ...backInLeft });
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <RiseLoader color={"#BD10E0"} loading={loading} size={20} />
      ) : (
        <div className="App">
          <h1 ref={ref}>Hello World</h1>
        </div>
      )}
    </div>
  );
}

export default App;
