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
              <a href="/projects">
                <div className="ButtonLabel-lg">
                  <p className="ProjectsNavButton"> Projects </p>
                </div>
              </a>
              <a href="/parents">
                <div className="ButtonLabel-md">Parents</div>
              </a>
              <a href="/safety">
                <div className="ButtonLabel-md">Safety</div>
              </a>
              <a href="/account">
                <div className="ButtonLabel-md">Account</div>
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
