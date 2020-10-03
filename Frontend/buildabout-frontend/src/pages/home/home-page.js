import React, { Component } from "react";
import "./home-page.css";
import { Route } from "react-router-dom";
import Projects from "../projects/projects-page";
import Safety from "../safety/safety-page";
import Help from "../help/help-page";
import Parents from "../parents/parents-page";

class Home extends Component {
  render() {
    return (
      <div>
        <Route path="/projects" exact component={Projects} />
        <Route path="/safety" exact component={Safety} />
        <Route path="/help" exact component={Help} />
        <Route path="/parents" exact component={Parents} />
      </div>
    );
  }
}

export default Home;
