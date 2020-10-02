import React from "react";
import UserHomePage from "./components/user-hompage";
import WidePageTemplate from "./components/widepagetemplate";
import ButtonLabel from "./components/buttonlabels";
import "./App.css";
import toolboxlogo from "./images/cartoontools@2x.png";

function Welcome(props) {
  return (
    <div id="parent">
      <h1> Hello, {props.name} </h1>
      <p> Hope everything is {props.state} </p>
    </div>
  );
}

function WhatMaterials() {
  return (
    <div className="MaterialPrompt">
      <div className="MaterialPromptLogo">
        <img src={toolboxlogo} alt="toolbox logo" />
      </div>
      <div className="MaterialPromptLine"></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <WidePageTemplate>
        <ButtonLabel buttonSize="sm"> </ButtonLabel>
      </WidePageTemplate>
    </div>
  );
}

export default App;
