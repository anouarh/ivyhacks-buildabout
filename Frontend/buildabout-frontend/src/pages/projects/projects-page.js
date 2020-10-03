import React, { Component } from "react";
import "./projects-page.css";

class Projects extends Component {

  state = {
    materials: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/materials/getAllMaterials')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="main">
        <div className="tools">
          <h3>Add Materials</h3>
          <wired-search-input placeholder="Search Materials"></wired-search-input>
        </div>
        <div className="materials">
          <h3>Add Tools</h3>
          <wired-search-input placeholder="Search Tools"></wired-search-input>
        </div>
        <div className="toolbox">
          <h3>Your ToolBox</h3>
          {/* <div className="generate-button">Generate</div> */}
          <wired-button elevation="2" >Generate</wired-button>
        </div>
      </div>
    );
  }
}

export default Projects;
