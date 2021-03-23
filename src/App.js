import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";

export default function App() {
  const history = useHistory();

  const handleClick = name => {
    history.push(`/about/${name}`);
  };

  const richDadTitle = "Rich Dad Poor Dad";

  const theRiches = "The Richest Man In Babylon";

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => handleClick(richDadTitle)}>{richDadTitle}</button>
      <button onClick={() => handleClick(theRiches)}>{theRiches}</button>
    </div>
  );
}
