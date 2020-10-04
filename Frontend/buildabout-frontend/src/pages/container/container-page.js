import React, { Component } from "react";
import "./container-page.css";
import { Route } from "react-router-dom";
import Projects from "../projects/projects-page";
import Help from "../help/help-page";
import Parents from "../parents/parents-page";
import Home from "../home/home-page";
import Watching from "../watching/watching-page";
import PlayDate from "../playdate/playdate-page";

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
        <Route path="/watching-experiments" exact component={Watching} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/playdate" exact component={PlayDate} />
        <Route path="/help" exact component={Help} />
        <Route path="/parents" exact component={Parents} />
      </div>
    );
  }
}

export default Container;
