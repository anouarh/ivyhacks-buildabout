import React, { Component } from "react";
import "./item-component.css";
import "wired-elements";
import AddIcon from "@material-ui/icons/Add";

class Item extends Component {
  state = {
    borderCol: "",
  };

  boxClick = (e) => {
    this.setState({
      col: "green",
    });
  };

  render() {
    return (
      <div className="item" style={{ color: this.state.col }}>
        <wired-card>
          <div className="item-header">
            <h1>{this.props.name}</h1>
            <div className="space"></div>
            <wired-icon-button onClick={this.boxClick}>
              <AddIcon></AddIcon>
            </wired-icon-button>
          </div>
          <p>{this.props.description}</p>
        </wired-card>
      </div>
    );
  }
}

export default Item;
