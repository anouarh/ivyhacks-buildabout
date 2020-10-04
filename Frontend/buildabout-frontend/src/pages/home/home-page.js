import React, { Component } from "react";
import "./home-page.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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
            <div className="button-container">
              <a href="/projects">
              <wired-icon-button elevation="2">
                  <ArrowForwardIcon></ArrowForwardIcon>
                </wired-icon-button>
              </a>
            </div>
          </div>

          <div className="activity-card red">
            <h1>Watch Experiments</h1>
            <h4 className="faded">Watch all kinds of science experiments.</h4>
            <div className="button-container">
              <a href="/watching-experiments">
                <wired-icon-button elevation="2">
                  <ArrowForwardIcon></ArrowForwardIcon>
                </wired-icon-button>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="activity-card blue">
            <h1>Celebrity Projects</h1>
            <h4 className="faded">Try to build other people's projects.</h4>
            <div className="button-container">
              <a href="/">
              <wired-icon-button elevation="2">
                  <ArrowForwardIcon></ArrowForwardIcon>
                </wired-icon-button>
              </a>
            </div>
          </div>

          <div className="activity-card green">
            <h1>Play Date</h1>
            <h4 className="faded">Build projects with others.</h4>
            <div className="button-container">
              <a href="/playdate">
              <wired-icon-button elevation="2">
                  <ArrowForwardIcon></ArrowForwardIcon>
                </wired-icon-button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
