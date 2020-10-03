import React, { Component } from "react";
import "./projects-page.css";
import axios from "axios";
import Item from "../../components/item/item-component";

class Projects extends Component {
  state = {
    materials: [],
    tools: [],
    projects: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/materials/getAllMaterials")
      .then((response) => {
        this.setState({ materials: response.data });
        console.log(response.data);
      });

    axios.get("http://localhost:8080/tools/getAllTools").then((response) => {
      this.setState({ tools: response.data });
    });
  }

  render() {
    const materials = this.state.materials.map((material) => {
      return <Item name={material.name} description={material.description} />;
    });

    const tools = this.state.tools.map((tool) => {
      return <Item name={tool.name} description={tool.description} />;
    });

    return (
      <div className="main">
        <div className="tools">
          <h3>Add Materials</h3>
          <wired-search-input placeholder="Search Materials"></wired-search-input>
          {materials}
        </div>
        <div className="materials">
          <h3>Add Tools</h3>
          <wired-search-input placeholder="Search Tools"></wired-search-input>
          {tools}
        </div>
        <div className="toolbox">
          <h3>Your ToolBox</h3>
          {/* <div className="generate-button">Generate</div> */}
          <wired-button elevation="2">Generate</wired-button>
        </div>
      </div>
    );
  }
}

export default Projects;
