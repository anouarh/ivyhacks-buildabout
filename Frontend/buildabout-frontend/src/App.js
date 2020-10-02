import React from "react";
import Home from "./pages/home-page/home-page";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <header className="App-header"></header>
      <div className="main">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
