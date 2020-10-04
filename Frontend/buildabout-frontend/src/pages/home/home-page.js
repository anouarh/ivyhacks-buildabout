import React, { Component } from "react";
import "./home-page.css";

class Home extends Component {
  render() {
    return (
      <div className="main-activities">
        <div className="row">
          <div className="activity-card purple">
            <h1>Generate Projects</h1>
            <h4 className="faded">
              Use ML to generate projects based on existing materials and tools.
            </h4>
            <a href="/projects">
              <wired-button elevation="2">Go To Projects</wired-button>
            </a>
          </div>

          <div className="activity-card red">
            <h1>Watch Experiments</h1>
            <h4 className="faded">Watch all kinds of science experiments.</h4>
            <a href="/watching-experiments">
              <wired-button elevation="2">Watch Videos</wired-button>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="activity-card blue">
            <h1>Celebrity Projects</h1>
            <h4 className="faded">Try to build other people's projects.</h4>
            <a href="/">
              <wired-button elevation="2">Bill Nye and more</wired-button>
            </a>
          </div>

          <div className="activity-card green">
            <h1>Play Date</h1>
            <h4 className="faded">Build projects with others.</h4>
            <a href="/">
              <wired-button elevation="2">Start a play date</wired-button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
