import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Container from "./pages/container/container-page";
import "wired-elements";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="WidePageTemplate">
            <div className="SideBar">
              <a href="/">
                <div className="ButtonLabel-lg">
                  <p className="ProjectsNavButton"> Home </p>
                </div>
              </a>
              <a href="/projects">
                <div className="ButtonLabel-md">Projects</div>
              </a>
              <a href="/parents">
                <div className="ButtonLabel-md">Parents</div>
              </a>
              <a href="/watching-experiments">
                <div className="ButtonLabel-md">Watch</div>
              </a>
              <a href="/playdate">
                <div className="ButtonLabel-md">PlayDate</div>
              </a>
              <a href="/help">
                <div className="ButtonLabel-sm"></div>
              </a>
            </div>
            <div className="Home">
              <Container></Container>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
