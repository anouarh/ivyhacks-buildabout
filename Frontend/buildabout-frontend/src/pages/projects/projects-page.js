import React, { Component } from "react";
import "./projects-page.css";
import axios from "axios";
import Item from "../../components/item/item-component";
import ProComponent from "../../components/project-component/project-component";
import AutorenewIcon from "@material-ui/icons/Autorenew";

class Projects extends Component {
  state = {
    materials: [],
    tools: [],
    projects: [],
  };

  getProjectsHandler = () => {
    axios
      .get("http://localhost:8080/projects/getAllProjects")
      .then((response) => {
        this.setState({ projects: response.data });
      });
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/materials/getAllMaterials")
      .then((response) => {
        this.setState({ materials: response.data });
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

    const projects = this.state.projects.map((project) => {
      return (
        <ProComponent
          name={project.name}
          description={project.description}
          rating={project.rating}
          image={project.image}
        />
      );
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
          {projects}
          <wired-button onClick={this.getProjectsHandler} elevation="2">
            <div className="generate-button-d">
              <AutorenewIcon></AutorenewIcon>
              Generate
            </div>
          </wired-button>
        </div>
      </div>
    );
  }
}

export default Projects;
