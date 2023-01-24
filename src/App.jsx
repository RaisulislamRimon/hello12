import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MainSite from "./components/MainSite/MainSite";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Lorem ipsum</h1>
      <button className="btn border-t-cyan-200 bg-lime-400 hover:text-white">
        Generate meet link
      </button>
      <MainSite />
    </div>
  );
}

export default App;
