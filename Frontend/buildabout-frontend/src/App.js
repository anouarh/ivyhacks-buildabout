import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home/home-page";
import "wired-elements";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <wired-card fill="white">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/help">Help</a>
              </li>
              <li>
                <a href="/safety">Safety</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
            </ul>
            <Home></Home>
          </wired-card>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
