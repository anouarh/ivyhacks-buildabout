import React, { Component } from "react";
import "./container-page.css";
import { Route } from "react-router-dom";
import Projects from "../projects/projects-page";
import Safety from "../safety/safety-page";
import Help from "../help/help-page";
import Parents from "../parents/parents-page";
import Home from "../home/home-page";
import Account from "../account/account-page";

class Container extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <div className="toolbox-image"> </div>
          <h1 className="Title"> Buildabout </h1>
          <h2 className="Subtitle">
            Encouraging independance, resourcefulness, and planning through
            personal projects.
          </h2>
        </div>

        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/account" exact component={Account} />
        <Route path="/safety" exact component={Safety} />
        <Route path="/help" exact component={Help} />
        <Route path="/parents" exact component={Parents} />
      </div>
    );
  }
}

export default Container;
