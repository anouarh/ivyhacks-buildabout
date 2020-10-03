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
        <div className="title">
          <h1>BuildAbout</h1>
          <h4>
            Encouraging independance, resourcefulness, and planning through
            personal projects.
          </h4>
        </div>
        <div className="main-activities">
          <div className="row">
            <div className="activity-card purple">
              <h1>Generate Projects</h1>
              <h4 className="faded">Use ML to generate projects based on existing materials and tools.</h4>
            </div>
            <div className="activity-card red">
              <h1>Watch Experiments</h1>
              <h4 className="faded">Watch all kinds of science experiments.</h4>
            </div>
          </div>
          <div className="row">
            <div className="activity-card blue">
              <h1>Celebrity Projects</h1>
              <h4 className="faded">Try to build other people's projects.</h4>
            </div>
            <div className="activity-card green">
              <h1>Play Date</h1>
              <h4 className="faded">Build projects with other kids.</h4>
            </div>
          </div>
        </div>
        <Route path="/projects" exact component={Projects} />
        <Route path="/safety" exact component={Safety} />
        <Route path="/help" exact component={Help} />
        <Route path="/parents" exact component={Parents} />
      </div>
    );
  }
}

export default Home;
